# Process about-us.html with same fixes as index.html
Write-Host "=== PROCESSING ABOUT-US.HTML ===" -ForegroundColor Cyan

# Create backup
Copy-Item "about-us.html" "about-us.html.backup"
Write-Host "✓ Created backup" -ForegroundColor Green

$html = Get-Content "about-us.html" -Raw

# 1. Replace font URLs
Write-Host "`nReplacing font URLs..." -ForegroundColor Yellow
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.eot'\)", "url('fonts/helveticaneuethn-webfont.eot')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.eot\?iefix'\)", "url('fonts/helveticaneuethn-webfont.eot?iefix')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.woff'\)", "url('fonts/helveticaneuethn-webfont.woff')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.ttf'\)", "url('fonts/helveticaneuethn-webfont.ttf')"
$html = $html -replace "url\('https://storage\.googleapis\.com/xprs_resources/fonts/helveticaneuethn-webfont\.svg#webfontJR0GaG5Z'\)", "url('fonts/helveticaneuethn-webfont.svg#webfontJR0GaG5Z')"

# 2. Replace image URLs using existing mapping
Write-Host "Replacing image URLs..." -ForegroundColor Yellow
if (Test-Path "image_mapping.txt") {
    $mappings = Get-Content "image_mapping.txt"
    foreach ($mapping in $mappings) {
        $parts = $mapping -split '\|'
        $url = [regex]::Escape($parts[0])
        $file = $parts[1]
        $html = $html -replace $url, "images/$file"
        $html = $html -replace "$url=s\d+", "images/$file"
    }
}

# 3. Replace CSS/JS URLs
Write-Host "Replacing CSS/JS URLs..." -ForegroundColor Yellow
$html = $html -replace '//www\.indigo-cy\.com/css/fonts\.css\?v=1\.6\.0f2-noimos-no-viewer', 'assets/css/fonts.css'
$html = $html -replace '//www\.indigo-cy\.com/css/effects\.css\?v=1\.6\.0f2-noimos-no-viewer', 'assets/css/effects.css'
$html = $html -replace '//www\.indigo-cy\.com/css/lightbox\.css\?v=1\.6\.0f2-noimos-no-viewer', 'assets/css/lightbox.css'
$html = $html -replace '//www\.indigo-cy\.com/static_style\?[^"]+', 'assets/css/static_style.css'
$html = $html -replace '//www\.indigo-cy\.com/js/lib/jquery-2\.x-git\.min\.js', 'assets/js/jquery-2.x-git.min.js'
$html = $html -replace '//www\.indigo-cy\.com/js/xprs_helper\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/xprs_helper.js'
$html = $html -replace '//www\.indigo-cy\.com/all_js\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/all_js.js'
$html = $html -replace '//www\.indigo-cy\.com/js/lib/touchswipe/jquery\.mobile\.custom\.min\.js', 'assets/js/lib/touchswipe/jquery.mobile.custom.min.js'
$html = $html -replace '//www\.indigo-cy\.com/js/lightbox\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/lightbox.js'
$html = $html -replace '//www\.indigo-cy\.com/js/spimeengine\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/spimeengine.js?v=3'

# 4. Disable HTTPS redirect
Write-Host "Disabling HTTPS redirect..." -ForegroundColor Yellow
$html = $html -replace '(<script[^>]*>[\s\S]*?location\.protocol[\s\S]*?https[\s\S]*?</script>)', '<!-- DISABLED FOR LOCAL TESTING: $1 -->'

# 5. Disable YouTube API
$html = $html -replace '<script src="https://www\.youtube\.com/iframe_api"></script>', '<!-- DISABLED: YouTube API -->'

# 6. Fix data-static-server
$html = $html -replace 'data-static-server="//www\.indigo-cy\.com"', 'data-static-server=""'

# 7. Fix navigation links
$html = $html -replace 'href="/"', 'href="index.html"'
$html = $html -replace 'href="/about-us"', 'href="about-us.html"'

# 8. Add Arabic support
$html = $html -replace '<html xmlns="http://www\.w3\.org/1999/xhtml">', '<html xmlns="http://www.w3.org/1999/xhtml" lang="ar">'

# Save
Set-Content "about-us.html" $html -NoNewline -Encoding UTF8

Write-Host "`n=== DONE ===" -ForegroundColor Green
Write-Host "about-us.html has been processed!" -ForegroundColor Cyan
