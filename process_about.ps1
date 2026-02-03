# Replace all external URLs with local paths in about-us.html
$html = Get-Content "about-us.html" -Raw

# Backup original
Copy-Item "about-us.html" "about-us.html.backup"
Write-Host "Created backup: about-us.html.backup" -ForegroundColor Green

# Replace font URLs
Write-Host "`nReplacing font URLs..." -ForegroundColor Cyan
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.eot'\)", "url('fonts/helveticaneuethn-webfont.eot')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.eot\?iefix'\)", "url('fonts/helveticaneuethn-webfont.eot?iefix')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.woff'\)", "url('fonts/helveticaneuethn-webfont.woff')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.ttf'\)", "url('fonts/helveticaneuethn-webfont.ttf')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.svg#webfontJR0GaG5Z'\)", "url('fonts/helveticaneuethn-webfont.svg#webfontJR0GaG5Z')"

# Replace image URLs using mapping
Write-Host "Replacing image URLs..." -ForegroundColor Cyan
$mappings = Get-Content "image_mapping.txt"
foreach ($mapping in $mappings) {
    $parts = $mapping -split '\|'
    $url = [regex]::Escape($parts[0])
    $file = $parts[1]
    
    # Replace various patterns where URLs appear
    $html = $html -replace $url, "images/$file"
    # Also replace with size parameters
    $html = $html -replace "$url=s\d+", "images/$file"
}

# Disable HTTPS redirect
Write-Host "Disabling HTTPS redirect..." -ForegroundColor Cyan
$html = $html -replace '(<script[^>]*>[\s\S]*?location\.protocol[\s\S]*?https[\s\S]*?</script>)', '<!-- DISABLED FOR LOCAL TESTING: $1 -->'

# Disable YouTube API (optional for local testing)
Write-Host "Disabling YouTube API..." -ForegroundColor Cyan
$html = $html -replace '<script src="https://www\.youtube\.com/iframe_api"></script>', '<!-- DISABLED: YouTube API -->'

# Save updated HTML
Set-Content "about-us.html" $html -NoNewline -Encoding UTF8
Write-Host "`nHTML updated successfully!" -ForegroundColor Green
Write-Host "Original saved as: about-us.html.backup" -ForegroundColor Yellow
