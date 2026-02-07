# Mirsat Organisation - Deployment Package
Domain: www.mirsat.org
Email: admin@mirsat.org
Date: 2026-02-07

## Files Included
- index.html (production-ready with HTTPS redirect)
- .htaccess (Apache configuration)
- contact_handler.php (email handler)
- images/ (17 images)
- fonts/ (4 font files)
- assets/css/ (4 CSS files)
- assets/js/ (6 JavaScript files)

## Deployment Instructions

### 1. Upload to Namecheap
- Extract this ZIP
- Upload all files to public_html/ directory
- Maintain folder structure (images/, fonts/, assets/)

### 2. Rename index file
- Rename index_deploy.html to index.html (or delete old index.html first)

### 3. Configure .htaccess
- Uncomment HTTPS redirect lines (lines 8-10)
- Choose www or non-www (lines 13-20)

### 4. Test Contact Form
- If using contact_handler.php, test email delivery
- Check PHP mail() function is enabled on server
- Update email address in contact_handler.php if needed

### 5. Verify
- Check https://www.mirsat.org loads correctly
- Verify all images display
- Test navigation
- Check responsive design on mobile

## Notes
- Original index.html has HTTPS redirect disabled for local testing
- index_deploy.html has all production features enabled
- All external resources are localized
- Social media links are configured

## Support
Contact: admin@mirsat.org
