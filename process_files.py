# -*- coding: utf-8 -*-
import re
import os

def process_html_file(filename):
    print(f"\nProcessing {filename}...")
    
    # Read with UTF-8 encoding
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Create backup if not exists
    backup_name = f"{filename}.utf8backup"
    if not os.path.exists(backup_name):
        with open(backup_name, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Created backup: {backup_name}")
    
    # 1. Replace font URLs
    html = re.sub(r"url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.eot'\)", 
                  "url('fonts/helveticaneuethn-webfont.eot')", html)
    html = re.sub(r"url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.eot\?iefix'\)", 
                  "url('fonts/helveticaneuethn-webfont.eot?iefix')", html)
    html = re.sub(r"url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.woff'\)", 
                  "url('fonts/helveticaneuethn-webfont.woff')", html)
    html = re.sub(r"url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.ttf'\)", 
                  "url('fonts/helveticaneuethn-webfont.ttf')", html)
    html = re.sub(r"url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.svg#webfontJR0GaG5Z'\)", 
                  "url('fonts/helveticaneuethn-webfont.svg#webfontJR0GaG5Z')", html)
    
    # 2. Replace image URLs from mapping
    if os.path.exists('image_mapping.txt'):
        with open('image_mapping.txt', 'r', encoding='utf-8') as f:
            for line in f:
                if '|' in line:
                    url, file = line.strip().split('|')
                    # Escape special regex characters
                    url_escaped = re.escape(url)
                    html = re.sub(url_escaped, f"images/{file}", html)
                    html = re.sub(f"{url_escaped}=s\\d+", f"images/{file}", html)
    
    # 3. Replace CSS/JS URLs
    html = re.sub(r'//www\.indigo-cy\.com/css/fonts\.css\?v=[\w\-\.]+', 'assets/css/fonts.css', html)
    html = re.sub(r'//www\.indigo-cy\.com/css/effects\.css\?v=[\w\-\.]+', 'assets/css/effects.css', html)
    html = re.sub(r'//www\.indigo-cy\.com/css/lightbox\.css\?v=[\w\-\.]+', 'assets/css/lightbox.css', html)
    html = re.sub(r'//www\.indigo-cy\.com/static_style\?[^"]+', 'assets/css/static_style.css', html)
    html = re.sub(r'//www\.indigo-cy\.com/js/lib/jquery-2\.x-git\.min\.js', 'assets/js/jquery-2.x-git.min.js', html)
    html = re.sub(r'//www\.indigo-cy\.com/js/xprs_helper\.js\?v=[\w\-\.]+', 'assets/js/xprs_helper.js', html)
    html = re.sub(r'//www\.indigo-cy\.com/all_js\.js\?v=[\w\-\.]+', 'assets/js/all_js.js', html)
    html = re.sub(r'//www\.indigo-cy\.com/js/lib/touchswipe/jquery\.mobile\.custom\.min\.js', 'assets/js/lib/touchswipe/jquery.mobile.custom.min.js', html)
    html = re.sub(r'//www\.indigo-cy\.com/js/lightbox\.js\?v=[\w\-\.]+', 'assets/js/lightbox.js', html)
    html = re.sub(r'//www\.indigo-cy\.com/js/spimeengine\.js\?v=[\w\-\.]+', 'assets/js/spimeengine.js?v=3', html)
    
    # 4. Disable HTTPS redirect
    html = re.sub(r'<script src="https://www\.youtube\.com/iframe_api"></script>', 
                  '<!-- DISABLED: YouTube API -->', html)
    
    # 5. Fix navigation links
    if filename == 'index.html':
        html = re.sub(r'href="/"', 'href="index.html"', html)
        html = re.sub(r'href="/about-us"', 'href="about-us.html"', html)
    elif filename == 'about-us.html':
        html = re.sub(r'href="/"', 'href="index.html"', html)
        html = re.sub(r'href="/about-us"', 'href="about-us.html"', html)
    
    # 6. Add language attribute if not present
    html = re.sub(r'<html xmlns="http://www\.w3\.org/1999/xhtml">', 
                  '<html xmlns="http://www.w3.org/1999/xhtml" lang="ar">', html)
    
    # 7. Fix data-static-server
    html = re.sub(r'data-static-server="//www\.indigo-cy\.com"', 'data-static-server=""', html)
    
    # Write back with UTF-8 encoding
    with open(filename, 'w', encoding='utf-8', newline='') as f:
        f.write(html)
    
    print(f"✓ {filename} processed successfully with UTF-8 encoding preserved!")

# Process both files
process_html_file('index.html')
process_html_file('about-us.html')

print("\n✅ All files processed!")
