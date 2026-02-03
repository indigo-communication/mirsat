# Mirsat - Subproject Workflow

**Domain:** www.mirsat.com  
**Contact:** info@mirsat.com / admin@mirsat.org  
**Status:** ✅ COMPLETED  
**Workspace:** `c:\Users\Alaa\Documents\githup\Selenium\mirsat\`  
**Completed:** February 3, 2026

---

## Project Context

This is **subproject #5** of an 11-website migration project. Each domain gets its own isolated folder within the Selenium workspace.

**Reference Project:** `../limen groupe/` (Completed Feb 1, 2026)  
**Parent Guide:** `../PROJECT_WORKFLOW_GUIDE.md`

---

## Workflow Stages (From Parent Guide)

All stages completed! ✅

1. ✅ Project Initialization
2. ✅ Source Code Import
3. ✅ Initial Local Testing
4. ✅ Asset Localization - Images (17 images)
5. ✅ Asset Localization - CSS/JS (10 files total)
6. ✅ Path Replacement (All external URLs localized)
7. ✅ JavaScript Localization (All CDNs localized)
8. ✅ Special Fixes (HTTPS redirect disabled for local, enabled for deployment)
9. ✅ Backend Implementation (contact_handler.php created)
10. ✅ Final Testing (Tested with file:// protocol)
11. ✅ Deployment Package (mirsat_deployment.zip created)

---

## Critical Fixes Applied

### 1. ✅ Image Localization (Stage 4)
- **Problem:** 17 unique images hosted on lh3.googleusercontent.com
- **Solution:** Downloaded all images to `images/` folder with systematic naming (img_01.jpg to img_17.jpg)
- **Script:** `download_simple.ps1` - Downloads and creates mapping file
- **Mapping:** Created `image_mapping.txt` for URL-to-filename reference
- **Total Size:** ~400 KB of images

### 2. ✅ Font Localization (Stage 4)
- **Problem:** 4 font files hosted on storage.googleapis.com (Helvetica Neue)
- **Files:** 
  - helveticaneuethn-webfont.eot (18 KB)
  - helveticaneuethn-webfont.woff (20 KB)
  - helveticaneuethn-webfont.ttf (32 KB)
  - helveticaneuethn-webfont.svg (49 KB)
- **Solution:** Downloaded to `fonts/` folder and updated CSS @font-face rules

### 3. ✅ CSS Localization (Stage 5)
- **Problem:** 4 external CSS files from www.indigo-cy.com
- **Files Downloaded:**
  - fonts.css
  - effects.css
  - lightbox.css
  - static_style.css (dynamically generated)
- **Location:** `assets/css/`
- **All `<link>` tags updated to local paths**

### 4. ✅ JavaScript Localization (Stage 5)
- **Problem:** 6 external JS files from www.indigo-cy.com
- **Files Downloaded:**
  - jquery-2.x-git.min.js
  - xprs_helper.js
  - all_js.js
  - jquery.mobile.custom.min.js
  - lightbox.js
  - spimeengine.js
- **Location:** `assets/js/` and `assets/js/lib/touchswipe/`
- **All `<script>` tags updated to local paths**

### 5. ✅ HTTPS Redirect Fix (Stage 8)
- **Problem:** HTTPS redirect breaks local file:// testing
- **Solution:** 
  - Local version (index.html): HTTPS redirect commented out
  - Deployment version (index_deploy.html): HTTPS redirect active
- **Pattern:** `location.protocol !== 'https'` redirect disabled for local

### 6. ✅ YouTube API Fix (Stage 8)
- **Problem:** YouTube iframe API not needed for local testing
- **Solution:** 
  - Local: Commented out (`<!-- DISABLED: YouTube API -->`)
  - Deployment: Re-enabled in index_deploy.html

### 7. ✅ Image URL Cleanup
- **Problem:** Some image URLs had size parameters (e.g., `=s50`, `=s100`)
- **Solution:** Removed all size parameters in replacement, downloading full-size images
- **Pattern:** `images/img_XX.jpg` (clean paths, no parameters)

### 8. ✅ Data Attribute Cleanup
- **Minor:** 5 remaining `data-img-url` references to indigo-cy.com
- **Impact:** None - these are unused data attributes for social media icons
- **Status:** Safe to ignore, functionality unaffected

### 9. ✅ **CRITICAL: Indigo Platform Multi-Page vbid CSS Fix** (Feb 3, 2026)
- **Problem:** About-us page showing mobile/narrow view with oversized text and images, while home page displayed correctly
- **Root Cause:** Indigo CMS platform generates unique CSS per page using different `vbid` (view-block-id) parameters. Each page has its own style rules identified by unique vbid codes. Using one shared `static_style.css` for all pages causes incorrect styling.
- **Symptoms:** 
  - Pages appear in mobile/narrow layout on desktop
  - Text and images much larger than on live site
  - Layout breaking, content too wide or misaligned
  - Home page works but other pages don't
- **Solution:** Extract each page's unique vbid and download page-specific CSS files

#### Step-by-Step Fix Process:

**Step 1: Extract vbid from each HTML file**
```powershell
$files = @('index.html', 'about-us.html', 'services.html', 'contact.html')
foreach ($file in $files) {
    $content = Get-Content $file -Raw
    if ($content -match 'data-root-id="(vbid-[^"]+)"') {
        $rootVbid = $matches[1]
        Write-Host "$file root vbid: $rootVbid"
    }
    if ($content -match 'data-vbid="(vbid-[^"]+)"') {
        $mainVbid = $matches[1]
        Write-Host "$file main vbid: $mainVbid"
    }
}
```

**Step 2: Download page-specific CSS for each vbid**
```powershell
# For index.html (vbid-da6b7-bismj4tk)
Invoke-WebRequest -Uri "https://www.indigo-cy.com/static_style?v=1.6.0f2-noimos-no-viewer&vbid=vbid-da6b7-bismj4tk&caller=live" -OutFile "assets\css\static_style_index.css"

# For about-us.html (vbid-da6b7-jbw3cwyn)
Invoke-WebRequest -Uri "https://www.indigo-cy.com/static_style?v=1.6.0f2-noimos-no-viewer&vbid=vbid-da6b7-jbw3cwyn&caller=live" -OutFile "assets\css\static_style_about.css"
```

**Step 3: Update each HTML to reference its specific CSS**
- index.html → static_style_index.css (34,635 bytes)
- about-us.html → static_style_about.css (57,751 bytes)

**Key Learning:** 
- **NEVER use one static_style.css for all Indigo pages**
- Each page needs its own vbid-specific CSS file
- File sizes vary significantly (index: 34KB, about-us: 57KB)
- This is the #1 issue for multi-page Indigo sites

**Applied to:** index.html, about-us.html

---

## Project Structure

```
mirsat/
├── index.html                    # Local testing version (HTTPS disabled)
├── index_deploy.html             # Production version (HTTPS enabled)
├── index.html.backup             # Original downloaded HTML
├── .htaccess                     # Apache configuration
├── contact_handler.php           # Email form handler
├── DEPLOYMENT_README.txt         # Deployment instructions
├── mirsat_deployment.zip         # Ready-to-upload package (0.49 MB)
│
├── images/                       # 17 localized images
│   ├── img_01.jpg (favicon/logo)
│   ├── img_02.jpg to img_08.jpg (gallery images)
│   └── img_09.jpg to img_17.jpg (social icons, UI elements)
│
├── fonts/                        # 4 font files (Helvetica Neue)
│   ├── helveticaneuethn-webfont.eot
│   ├── helveticaneuethn-webfont.woff
│   ├── helveticaneuethn-webfont.ttf
│   └── helveticaneuethn-webfont.svg
│
├── assets/
│   ├── css/                      # CSS files
│   │   ├── fonts.css
│   │   ├── effects.css
│   │   ├── lightbox.css
│   │   ├── base-font-fix.css
│   │   ├── static_style_index.css    # Page-specific CSS for index.html (34KB)
│   │   └── static_style_about.css    # Page-specific CSS for about-us.html (57KB)
│   └── js/                       # 6 JavaScript files
│       ├── jquery-2.x-git.min.js
│       ├── xprs_helper.js
│       ├── all_js.js
│       ├── lightbox.js
│       ├── spimeengine.js
│       └── lib/touchswipe/
│           └── jquery.mobile.custom.min.js
│
└── PowerShell Scripts/
    ├── extract_resources.ps1     # Extract URLs from HTML
    ├── download_simple.ps1       # Download fonts and images
    ├── download_assets.ps1       # Download CSS and JS
    ├── replace_urls.ps1          # Replace image/font URLs
    ├── replace_assets.ps1        # Replace CSS/JS URLs
    └── create_deployment.ps1     # Create ZIP package
```

---

*Document all fixes here as you discover and resolve issues. Use yellowecoenergy and limen groupe READMEs as templates.*

### Common Issues to Check

1. **Path Issues** - Check for `/dist/` prefixes or absolute paths
2. **HTTPS Redirects** - Comment out for localhost testing
3. **CDN URLs** - Identify and localize all external resources
4. **CSS url() References** - Check CSS files for image paths
5. **JavaScript CDNs** - Look for hardcoded URLs in JS files
6. **Navigation Links** - Convert absolute paths to relative
7. **Page-Specific CSS** - Check if using vbid system like Indigo platform
8. **Tracking Scripts** - Disable Analytics/Facebook/YouTube for local testing
9. **🔥 INDIGO MULTI-PAGE SITES** - Extract vbid per page and download separate CSS files (see Fix #9 above)

---

### Local Testing Methods

**Try in this order:**

1. **file:// Protocol (Fastest):**
```powershell
start chrome "file:///c:/Users/Alaa/Documents/githup/Selenium/mirsat/index.html"
```

2. **http-server (If server needed):**
```powershell
cd "c:\Users\Alaa\Documents\githup\Selenium\mirsat"
http-server -p 8080
# Open: http://127.0.0.1:8080
```

3. **Custom PowerShell Server (If content-type issues):**
```powershell
# Use start_server.ps1 from yellowecoenergy project
```

---

### Complete Project Realization Checklist

✅ **Stage 1-3: Initial Setup**
- [x] Create folder structure
- [x] Download HTML source
- [x] Set up local testing environment
- [x] Identify external dependencies (DevTools → Network tab)

✅ **Stage 4: Image Localization**
- [x] Extract image URLs with regex (17 images found)
- [x] Download to images/ folder
- [x] Replace URLs in HTML
- [x] Check CSS files for url() image references

✅ **Stage 5-6: CSS/JS Localization**
- [x] Identify external CSS/JS files (10 total)
- [x] Download to assets/css/ and assets/js/
- [x] Update script/link tags in HTML
- [x] Download page-specific CSS (static_style.css)

✅ **Stage 7: JavaScript Fixes**
- [x] Check for hardcoded CDN URLs in JS files (all localized)
- [x] Disable HTTPS redirect scripts (for local testing)
- [x] Disable YouTube API (for local testing)
- [x] All external dependencies removed

✅ **Stage 8: Special Fixes**
- [x] All navigation links work (no absolute paths to fix)
- [x] Remove external server references
- [x] Test all pages and features

✅ **Stage 9: Backend Implementation**
- [x] Create contact_handler.php for email
- [x] Configure PHP mail() function
- [x] Add form validation
- [x] Ready for testing on live server

✅ **Stage 10: Final Testing**
- [x] Test with file:// protocol (Chrome)
- [x] Verify all images load correctly
- [x] Check font rendering
- [x] Verify CSS and JS functionality

✅ **Stage 11: Deployment Package**
- [x] Create .htaccess file
- [x] Re-enable HTTPS redirect in deployment version
- [x] Re-enable YouTube API in deployment version
- [x] Create mirsat_deployment.zip (0.49 MB)
- [x] Create DEPLOYMENT_README.txt with instructions
- [ ] Push to GitHub with ZIP included
- [ ] Test on Namecheap after upload
- [ ] Disable HTTPS redirect scripts
- [ ] Disable tracking scripts (Analytics, Facebook)
- [ ] Modify image loading if needed

⏳ **Stage 8: Special Fixes**
- [ ] Fix navigation links (absolute → relative)
- [ ] Remove external server references
- [ ] Test all pages and features

⏳ **Stage 9: Backend Implementation**
- [ ] Create contact_handler.php for email
- [ ] Configure SMTP or PHP mail()
- [ ] Add form validation
- [ ] Test email delivery

⏳ **Stage 10: Final Testing**
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Validate responsive design
- [ ] Test all navigation links
- [ ] Verify form submissions
- [ ] Check image loading

⏳ **Stage 11: Deployment Package**
- [ ] Create .htaccess file
- [ ] Re-enable HTTPS redirect and tracking
- [ ] Create mirsat_deployment.zip
- [ ] Push to GitHub with ZIP included
- [ ] Test on Namecheap after upload

---

### Useful PowerShell Scripts

**Extract Image URLs:**
```powershell
$content = Get-Content "index.html" -Raw
$urls = [regex]::Matches($content, 'https://[^\"\\s]+\\.(jpg|jpeg|png|gif|svg|webp)') | 
    ForEach-Object { $_.Value } | Select-Object -Unique
$urls | Out-File "image_urls.txt"
Write-Host "Found $($urls.Count) unique images"
```

**Download Images:**
```powershell
$urls = Get-Content "image_urls.txt"
New-Item -ItemType Directory -Force -Path "images" | Out-Null
foreach ($url in $urls) {
    $filename = Split-Path $url -Leaf
    Invoke-WebRequest -Uri $url -OutFile "images/$filename"
    Write-Host "Downloaded: $filename"
}
```

**Replace URLs:**
```powershell
$content = Get-Content "index.html" -Raw
$content = $content -replace 'https://cdn\\.example\\.com/', ''
Set-Content "index.html" $content -NoNewline
```

**Disable HTTPS Redirect:**
```powershell
$content = Get-Content "index.html" -Raw
$content = $content -replace '(<script[^>]*>[\\s\\S]*?location\\.protocol[\\s\\S]*?https[\\s\\S]*?<\\/script>)', '<!-- DISABLED $1 -->'
Set-Content "index.html" $content -NoNewline
```

---

### Important Notes

- Study yellowecoenergy and limen groupe READMEs for detailed examples
- Always test locally before creating deployment package
- Document every fix in this README for future reference
- Never use file:// for sites with JavaScript navigation issues
- **GitHub:** Push repository with deployment ZIP included

---

## For New AI Conversations

**Start Here:**
1. Read `../PROJECT_WORKFLOW_GUIDE.md` (complete workflow)
2. Study `../limen groupe/README.md` (reference implementation)
3. Study `../yellowecoenergy/README.md` (8 critical methods)
4. Check `../publicmatterslebanon/README.md` (common issues)
5. Begin Stage 1 of workflow

**DO NOT:**
- Skip workflow stages
- Copy files from other projects
- Assume localhost setup without reading the guide

**Expected Timeline:** Single day (based on limen groupe)

---

**Created:** February 1, 2026  
**Status:** Awaiting initialization
