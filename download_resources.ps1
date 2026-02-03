# Download all fonts and images
Write-Host "=== DOWNLOADING FONTS ===" -ForegroundColor Cyan
$fonts = Get-Content "fonts_urls.txt"
$fontCount = 0
foreach ($url in $fonts) {
    $filename = Split-Path $url -Leaf
    $filename = $filename -replace '\?.*', ''  # Remove query params
    try {
        Invoke-WebRequest -Uri $url -OutFile "fonts/$filename" -ErrorAction Stop
        Write-Host "✓ $filename" -ForegroundColor Green
        $fontCount++
    } catch {
        Write-Host "✗ Failed: $filename" -ForegroundColor Red
    }
}

Write-Host "`n=== DOWNLOADING IMAGES ===" -ForegroundColor Cyan
$images = Get-Content "image_urls.txt"
$imageCount = 0
foreach ($url in $images) {
    # Create a unique filename based on URL hash
    $hash = [System.BitConverter]::ToString([System.Security.Cryptography.MD5]::Create().ComputeHash([System.Text.Encoding]::UTF8.GetBytes($url))).Replace("-","").Substring(0,16)
    
    # Detect file type
    $ext = ".jpg"
    if ($url -match "\.png") { $ext = ".png" }
    elseif ($url -match "\.svg") { $ext = ".svg" }
    elseif ($url -match "\.gif") { $ext = ".gif" }
    elseif ($url -match "\.webp") { $ext = ".webp" }
    
    $filename = "img_$hash$ext"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile "images/$filename" -ErrorAction Stop
        Write-Host "✓ $filename <- $($url.Substring(0, [Math]::Min(60, $url.Length)))..." -ForegroundColor Green
        $imageCount++
        
        # Save mapping for replacement
        "$url|$filename" | Out-File "image_mapping.txt" -Append -Encoding UTF8
    } catch {
        Write-Host "✗ Failed: $filename" -ForegroundColor Red
    }
}

Write-Host "`n=== SUMMARY ===" -ForegroundColor Yellow
Write-Host "Fonts downloaded: $fontCount/$($fonts.Count)" -ForegroundColor Green
Write-Host "Images downloaded: $imageCount/$($images.Count)" -ForegroundColor Green
Write-Host "`nMapping saved to image_mapping.txt" -ForegroundColor Cyan
