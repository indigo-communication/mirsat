# Extract all resource URLs from index.html
$content = Get-Content "index.html" -Raw

# Extract Google Storage fonts
$fonts = [regex]::Matches($content, "url\('(https://storage\.googleapis\.com/[^']+)'\)") | 
    ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique

# Extract lh3.googleusercontent.com images
$images = [regex]::Matches($content, '(https://lh3\.googleusercontent\.com/[^"\\s)]+)') | 
    ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique

# Clean up image URLs - remove size parameters for downloading full size
$cleanImages = $images | ForEach-Object {
    $_ -replace '=s\d+$', ''
} | Select-Object -Unique

Write-Host "`n=== FONTS FOUND ===" -ForegroundColor Cyan
$fonts | ForEach-Object { Write-Host $_ }
Write-Host "`nTotal fonts: $($fonts.Count)" -ForegroundColor Green

Write-Host "`n=== IMAGES FOUND ===" -ForegroundColor Cyan
$cleanImages | ForEach-Object { Write-Host $_ }
Write-Host "`nTotal unique images: $($cleanImages.Count)" -ForegroundColor Green

# Save to files
$fonts | Out-File "fonts_urls.txt" -Encoding UTF8
$cleanImages | Out-File "image_urls.txt" -Encoding UTF8

Write-Host "`nSaved to fonts_urls.txt and image_urls.txt" -ForegroundColor Yellow
