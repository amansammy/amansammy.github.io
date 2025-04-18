from flask import Flask, request, jsonify, send_from_directory
import os
import json
import subprocess

app = Flask(__name__)

@app.route('/')
def serve_html():
    return send_from_directory('.', 'manage-listings.html')

@app.route('/listings.json')
def serve_json():
    return send_from_directory('.', 'listings.json')

@app.route('/add-listing', methods=['POST'])
def add_listing():
    listing = request.form.get('listing')
    if not listing:
        return jsonify({'error': 'No listing data'}), 400
    
    listing = json.loads(listing)
    listing_no = listing['listingNo']
    
    # Use listingType from the JSON, default to "For Sale" if missing
    listing['listingType'] = listing.get('listingType', 'For Sale')
    if listing['listingType'] not in ['For Sale', 'For Lease']:
        listing['listingType'] = 'For Sale'  # Ensure valid value
    
    folder_path = os.path.join('listings', listing_no)
    os.makedirs(folder_path, exist_ok=True)
    
    thumbnail_file = request.files['thumbnail']
    thumbnail_ext = os.path.splitext(thumbnail_file.filename)[1]
    thumbnail_path = os.path.join(folder_path, f'thumbnail{thumbnail_ext}')
    thumbnail_file.save(thumbnail_path)
    listing['thumbnail'] = f'listings/{listing_no}/thumbnail{thumbnail_ext}'
    
    photo_files = request.files.getlist('photos')
    listing['photos'] = []
    for photo_file in photo_files:
        if photo_file.filename:
            photo_path = os.path.join(folder_path, photo_file.filename)
            photo_file.save(photo_path)
            listing['photos'].append(f'listings/{listing_no}/{photo_file.filename}')
    
    # Update listings.json with the new listing
    listings = []
    if os.path.exists('listings.json'):
        with open('listings.json', 'r', encoding='utf-8') as f:
            listings = json.load(f)
    listings.append(listing)
    with open('listings.json', 'w', encoding='utf-8') as f:
        json.dump(listings, f, indent=2)
    
    return jsonify(listing)

@app.route('/listing-<listingNo>')
def serve_listing(listingNo):
    return send_from_directory('.', f'listing-{listingNo}.html')

@app.route('/listings')
def serve_listings():
    return send_from_directory('.', 'listings.html')

@app.route('/for-lease')
def serve_for_lease():
    return send_from_directory('.', 'for-lease.html')

@app.route('/remove-listing', methods=['POST'])
def remove_listing():
    listing_no = request.json.get('listingNo')
    if not listing_no:
        return jsonify({'error': 'No listing number provided'}), 400
    
    folder_path = os.path.join('listings', listing_no)
    if os.path.exists(folder_path):
        for file in os.listdir(folder_path):
            os.remove(os.path.join(folder_path, file))
        os.rmdir(folder_path)
    
    html_path = f'listing-{listing_no}.html'
    if os.path.exists(html_path):
        os.remove(html_path)
    
    # Remove from listings.json
    if os.path.exists('listings.json'):
        with open('listings.json', 'r', encoding='utf-8') as f:
            listings = json.load(f)
        listings = [l for l in listings if l['listingNo'] != listing_no]
        with open('listings.json', 'w', encoding='utf-8') as f:
            json.dump(listings, f, indent=2)
    
    return jsonify({'message': 'Listing removed'})

@app.route('/save-listings', methods=['POST'])
def save_listings():
    try:
        # Save listings.json
        listings = request.get_json()
        with open('listings.json', 'w', encoding='utf-8') as f:
            json.dump(listings, f, indent=2)

        # Run update_pages.py
        result = subprocess.run(['python', 'update_pages.py'], capture_output=True, text=True)
        if result.returncode != 0:
            raise Exception(f"update_pages.py failed: {result.stderr}")

        # Git commit and push
        subprocess.run(['git', 'add', '.'], check=True)
        subprocess.run(['git', 'commit', '-m', 'Update listings and generated pages'], check=True)
        subprocess.run(['git', 'push', 'origin', 'main'], check=True)

        return jsonify({'message': 'listings.json saved, pages updated, and changes pushed to Git main!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)