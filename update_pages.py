import json
import os
import re
import shutil
from datetime import datetime

# Load listings.json
with open('listings.json', 'r', encoding='utf-8') as f:
    listings = json.load(f)

# Load templates
with open('listing.html', 'r', encoding='utf-8') as f:
    listing_template = f.read()
with open('listings.html', 'r', encoding='utf-8') as f:
    listings_template = f.read()
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Track current listing numbers
current_listing_nos = {listing['listingNo'] for listing in listings}

# Clean up old listings
for html_file in os.listdir('.'):
    if html_file.startswith('listing-') and html_file.endswith('.html'):
        listing_no = html_file.replace('listing-', '').replace('.html', '')
        if listing_no not in current_listing_nos:
            os.remove(html_file)
            folder_path = os.path.join('listings', listing_no)
            if os.path.exists(folder_path):
                shutil.rmtree(folder_path)

# Format price function
def format_price(price):
    cleaned_price = str(price).replace('$', '').replace(',', '').strip()
    try:
        return f"${int(cleaned_price):,}"
    except ValueError:
        return price

# Generate individual listing pages
for listing in listings:
    listing_page = listing_template
    listing_page = listing_page.replace('{address}', listing['address'])
    listing_page = listing_page.replace('{city}', listing['city'])
    listing_page = listing_page.replace('{postalCode}', listing['postalCode'])
    listing_page = listing_page.replace('{listingNo}', listing['listingNo'])
    listing_page = listing_page.replace('{beds}', listing['beds'])
    listing_page = listing_page.replace('{baths}', listing['baths'])
    listing_page = listing_page.replace('{garages}', listing['garages'])
    listing_page = listing_page.replace('{sqft}', listing['sqft'])
    listing_page = listing_page.replace('{about}', listing['about'])
    listing_page = listing_page.replace('{community}', listing['community'])
    listing_page = listing_page.replace('{area}', listing['area'])
    listing_page = listing_page.replace('{crossStreet}', listing['crossStreet'])
    listing_page = listing_page.replace('{cityArea}', listing['cityArea'])
    listing_page = listing_page.replace('{thumbnail}', listing['thumbnail'])
    listing_page = listing_page.replace('{thumbnailJson}', json.dumps(listing['thumbnail']))
    listing_page = listing_page.replace('{photosJson}', json.dumps(listing['photos']))
    listing_page = listing_page.replace('{price}', format_price(listing['price']))
    listing_page = listing_page.replace('{today}', datetime.now().strftime('%Y-%m-%d'))  # Add this line for date picker

    with open(f'listing-{listing["listingNo"]}.html', 'w', encoding='utf-8') as f:
        f.write(listing_page)

# Generate listings.html
listings_page = listings_template.replace('{listingsJson}', json.dumps(listings))
with open('listings.html', 'w', encoding='utf-8') as f:
    f.write(listings_page)

# Update index.html
index_updated = index_content
def generate_featured_listing(listing):
    data_w_id = "d528d3b3-1793-c3a7-bfba-918591986887" if listing['listingNo'] == listings[0]['listingNo'] else "24abb0d3-2135-600a-53be-95eaf847645b"
    transform = "-webkit-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" if listing['listingNo'] == listings[0]['listingNo'] else "-webkit-transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
    return f'''
        <a href="/listing-{listing['listingNo']}.html" class="w-inline-block">
            <div data-w-id="{data_w_id}" style="{transform}" class="listingmain">
                <h1 class="listingcity">{listing['city']}</h1>
                <h1 class="listingpropertytype">{listing['propertyType']}</h1>
                <img src="{listing['thumbnail']}" loading="lazy" alt="" class="listingimg" />
                <div class="listingbottomblock">
                    <div class="div-block-74">
                        <div class="listingpropertyaddress">{listing['address']}</div>
                        <div class="listingpropertyprice">{format_price(listing['price'])}</div>
                    </div>
                    <div class="div-block-75">
                        <img src="/images/bed.png" loading="lazy" alt="" class="image-48" />
                        <h1 class="listingpropertybeds">{listing['beds']}</h1>
                        <img src="/images/bath.png" loading="lazy" alt="" class="image-49" />
                        <h1 class="listingpropertybaths">{listing['baths']}</h1>
                        <img src="/images/garage.png" loading="lazy" alt="" class="image-50" />
                        <h1 class="listingpropertygarages">{listing['garages']}</h1>
                    </div>
                </div>
            </div>
        </a>
    '''

featured_listings = ''.join(generate_featured_listing(listing) for listing in listings if listing['featured'])
if not featured_listings:
    featured_listings = '<!-- No featured listings available -->'

index_updated = re.sub(
    r'<div class="flgrid1">[\s\S]*?(?=<div class="flviewmoreblock">)',
    f'<div class="flgrid1">\n{featured_listings.strip()}\n',
    index_updated
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_updated)

print('Listing pages, listings.html, and index.html updated successfully!')