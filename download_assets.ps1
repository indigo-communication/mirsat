# Download external CSS and JS from www.indigo-cy.com
$baseUrl = "https://www.indigo-cy.com"

# Create subdirectories
New-Item -ItemType Directory -Force -Path "assets\css","assets\js\lib\touchswipe" | Out-Null

# CSS files to download
$cssFiles = @(
    @{ url = "$baseUrl/css/fonts.css?v=1.6.0f2-noimos-no-viewer"; path = "assets\css\fonts.css" },
    @{ url = "$baseUrl/css/effects.css?v=1.6.0f2-noimos-no-viewer"; path = "assets\css\effects.css" },
    @{ url = "$baseUrl/css/lightbox.css?v=1.6.0f2-noimos-no-viewer"; path = "assets\css\lightbox.css" }
)

# JS files to download
$jsFiles = @(
    @{ url = "$baseUrl/js/lib/jquery-2.x-git.min.js"; path = "assets\js\jquery-2.x-git.min.js" },
    @{ url = "$baseUrl/js/xprs_helper.js?v=1.6.0f2-noimos-no-viewer"; path = "assets\js\xprs_helper.js" },
    @{ url = "$baseUrl/all_js.js?v=1.6.0f2-noimos-no-viewer"; path = "assets\js\all_js.js" },
    @{ url = "$baseUrl/js/lib/touchswipe/jquery.mobile.custom.min.js"; path = "assets\js\lib\touchswipe\jquery.mobile.custom.min.js" },
    @{ url = "$baseUrl/js/lightbox.js?v=1.6.0f2-noimos-no-viewer"; path = "assets\js\lightbox.js" },
    @{ url = "$baseUrl/js/spimeengine.js?v=1.6.0f2-noimos-no-viewer"; path = "assets\js\spimeengine.js" }
)

Write-Host "=== DOWNLOADING CSS FILES ===" -ForegroundColor Cyan
foreach ($file in $cssFiles) {
    Write-Host "  Downloading: $($file.path)"
    try {
        Invoke-WebRequest -Uri $file.url -OutFile $file.path -ErrorAction Stop
    } catch {
        Write-Host "  FAILED: $($file.path)" -ForegroundColor Red
    }
}

Write-Host "`n=== DOWNLOADING JS FILES ===" -ForegroundColor Cyan
foreach ($file in $jsFiles) {
    Write-Host "  Downloading: $($file.path)"
    try {
        Invoke-WebRequest -Uri $file.url -OutFile $file.path -ErrorAction Stop
    } catch {
        Write-Host "  FAILED: $($file.path)" -ForegroundColor Red
    }
}

# Download static_style (this is dynamic CSS)
Write-Host "`n=== DOWNLOADING STATIC STYLE ===" -ForegroundColor Cyan
$staticStyleUrl = "$baseUrl/static_style?v=1.6.0f2-noimos-no-viewer&vbid=vbid-da6b7-bismj4tk&caller=live"
Write-Host "  Downloading: assets\css\static_style.css"
try {
    Invoke-WebRequest -Uri $staticStyleUrl -OutFile "assets\css\static_style.css" -ErrorAction Stop
} catch {
    Write-Host "  FAILED: static_style.css" -ForegroundColor Red
}

Write-Host "`nDone!" -ForegroundColor Green
