import json
import re

# Load listings.json
with open('listings.json', 'r', encoding='utf-8') as f:
    listings = json.load(f)

# Function to format price with $ and commas
def format_price(price):
    # Remove any existing $ or commas to standardize
    cleaned_price = str(price).replace('$', '').replace(',', '').strip()
    # Convert to integer and format with commas
    try:
        formatted = f"${int(cleaned_price):,}"
        return formatted
    except ValueError:
        return price  # Return as-is if it’s not a valid number

# Function to generate a single featured listing snippet with hover effect
def generate_featured_listing(listing):
    # Using unique data-w-id for each listing to mimic Webflow's behavior
    data_w_id = "d528d3b3-1793-c3a7-bfba-918591986887" if listing['listingNo'] == listings[0]['listingNo'] else "24abb0d3-2135-600a-53be-95eaf847645b"
    transform = "-webkit-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" if listing['listingNo'] == listings[0]['listingNo'] else "-webkit-transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
    
    return f'''
        <a href="/listing-{listing['listingNo']}" class="w-inline-block">
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
                        <img src="images/bed.png" loading="lazy" alt="" class="image-48" />
                        <h1 class="listingpropertybeds">{listing['beds']}</h1>
                        <img src="images/bath.png" loading="lazy" alt="" class="image-49" />
                        <h1 class="listingpropertybaths">{listing['baths']}</h1>
                        <img src="images/garage.png" loading="lazy" alt="" class="image-50" />
                        <h1 class="listingpropertygarages">{listing['garages']}</h1>
                    </div>
                </div>
            </div>
        </a>
    '''

# Generate featured listings (only those marked as featured)
featured_listings = ''.join(generate_featured_listing(listing) for listing in listings if listing['featured'])

# If no featured listings, set to empty string with a comment
if not featured_listings:
    featured_listings = '<!-- No featured listings available -->'

# Update index.html by replacing the entire contents of <div class="flgrid1">
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Replace from <div class="flgrid1"> to just before <div class="flviewmoreblock">
index_updated = re.sub(
    r'<div class="flgrid1">[\s\S]*?(?=<div class="flviewmoreblock">)',
    f'<div class="flgrid1">\n{featured_listings.strip()}\n',
    index_content
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_updated)

print('index.html updated successfully!')