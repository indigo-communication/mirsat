# -*- coding: utf-8 -*-
import re

def fix_images(filename):
    print(f"Fixing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove =s parameters from image URLs
    content = re.sub(r'(images/img_\d+\.jpg)=s\d+', r'\1', content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {filename}")

fix_images('index.html')
fix_images('about-us.html')

print("\n✅ All image URLs fixed!")
