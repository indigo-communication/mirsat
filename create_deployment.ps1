# Create deployment version and ZIP package
Write-Host "=== CREATING DEPLOYMENT PACKAGE ===" -ForegroundColor Cyan

# Create deployment version with HTTPS redirect enabled
Write-Host "`n1. Creating deployment version (with HTTPS redirect)..." -ForegroundColor Yellow
$html = Get-Content "index.html" -Raw

# Re-enable HTTPS redirect for production
$html = $html -replace '<!-- DISABLED FOR LOCAL TESTING: (<script[^>]*>[\s\S]*?location\.protocol[\s\S]*?https[\s\S]*?</script>) -->', '$1'

# Re-enable YouTube API
$html = $html -replace '<!-- DISABLED: YouTube API -->', '<script src="https://www.youtube.com/iframe_api"></script>'

# Save deployment version
Set-Content "index_deploy.html" $html -NoNewline -Encoding UTF8
Write-Host "   Created: index_deploy.html" -ForegroundColor Green

# Create README for deployment
$deployReadme = @"
# Mirsat Organisation - Deployment Package
Domain: www.mirsat.com
Email: admin@mirsat.org
Date: $(Get-Date -Format "yyyy-MM-dd")

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
- Check https://www.mirsat.com loads correctly
- Verify all images display
- Test navigation
- Check responsive design on mobile

## Notes
- Original index.html has HTTPS redirect disabled for local testing
- index_deploy.html has all production features enabled
- All external resources are localized
- Social media links are configured

## Support
Contact: info@mirsat.org
"@

Set-Content "DEPLOYMENT_README.txt" $deployReadme -Encoding UTF8
Write-Host "   Created: DEPLOYMENT_README.txt" -ForegroundColor Green

# Create ZIP package
Write-Host "`n2. Creating ZIP package..." -ForegroundColor Yellow

$zipName = "mirsat_deployment.zip"
$filesToZip = @(
    "index_deploy.html",
    ".htaccess",
    "contact_handler.php",
    "DEPLOYMENT_README.txt",
    "images",
    "fonts",
    "assets"
)

# Remove old ZIP if exists
if (Test-Path $zipName) {
    Remove-Item $zipName -Force
}

# Create ZIP
Compress-Archive -Path $filesToZip -DestinationPath $zipName -CompressionLevel Optimal

$zipSize = [math]::Round((Get-Item $zipName).Length / 1MB, 2)
Write-Host "   Created: $zipName ($zipSize MB)" -ForegroundColor Green

Write-Host "`n=== DEPLOYMENT PACKAGE READY ===" -ForegroundColor Green
Write-Host "File: $zipName" -ForegroundColor Cyan
Write-Host "Next: Upload to Namecheap and follow DEPLOYMENT_README.txt" -ForegroundColor Yellow
