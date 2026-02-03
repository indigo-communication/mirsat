# Replace external CSS/JS URLs with local paths
$html = Get-Content "index.html" -Raw

Write-Host "Replacing external asset URLs with local paths..." -ForegroundColor Cyan

# Replace CSS files
$html = $html -replace '//www\.indigo-cy\.com/css/fonts\.css\?v=1\.6\.0f2-noimos-no-viewer', 'assets/css/fonts.css'
$html = $html -replace '//www\.indigo-cy\.com/css/effects\.css\?v=1\.6\.0f2-noimos-no-viewer', 'assets/css/effects.css'
$html = $html -replace '//www\.indigo-cy\.com/css/lightbox\.css\?v=1\.6\.0f2-noimos-no-viewer', 'assets/css/lightbox.css'
$html = $html -replace '//www\.indigo-cy\.com/static_style\?v=1\.6\.0f2-noimos-no-viewer&vbid=vbid-da6b7-bismj4tk&caller=live', 'assets/css/static_style.css'

# Replace JS files
$html = $html -replace '//www\.indigo-cy\.com/js/lib/jquery-2\.x-git\.min\.js', 'assets/js/jquery-2.x-git.min.js'
$html = $html -replace '//www\.indigo-cy\.com/js/xprs_helper\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/xprs_helper.js'
$html = $html -replace '//www\.indigo-cy\.com/all_js\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/all_js.js'
$html = $html -replace '//www\.indigo-cy\.com/js/lib/touchswipe/jquery\.mobile\.custom\.min\.js', 'assets/js/lib/touchswipe/jquery.mobile.custom.min.js'
$html = $html -replace '//www\.indigo-cy\.com/js/lightbox\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/lightbox.js'
$html = $html -replace '//www\.indigo-cy\.com/js/spimeengine\.js\?v=1\.6\.0f2-noimos-no-viewer', 'assets/js/spimeengine.js'

# Replace data-static-server attribute
$html = $html -replace 'data-static-server="//www\.indigo-cy\.com"', 'data-static-server=""'

# Fix image references that still have =s parameters
$html = $html -replace '(images/img_\d+\.jpg)=s\d+', '$1'

# Save
Set-Content "index.html" $html -NoNewline -Encoding UTF8

Write-Host "Done! All external assets localized." -ForegroundColor Green

# Verify
Write-Host "`n=== VERIFICATION ===" -ForegroundColor Cyan
$remaining = ([regex]::Matches($html, '//www\.indigo-cy\.com')).Count
Write-Host "Remaining indigo-cy.com references: $remaining"
