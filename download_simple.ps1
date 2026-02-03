# Simple download script for Mirsat resources
$ErrorActionPreference = "Stop"

# Download fonts
Write-Host "Downloading fonts..." -ForegroundColor Cyan
$fontUrls = @(
    "https://storage.googleapis.com/xprs_resources/fonts/helveticaneuethn-webfont.eot",
    "https://storage.googleapis.com/xprs_resources/fonts/helveticaneuethn-webfont.woff",
    "https://storage.googleapis.com/xprs_resources/fonts/helveticaneuethn-webfont.ttf",
    "https://storage.googleapis.com/xprs_resources/fonts/helveticaneuethn-webfont.svg"
)

foreach ($url in $fontUrls) {
    $filename = Split-Path $url -Leaf
    $filename = $filename.Split('#')[0]  # Remove anchor
    $filename = $filename.Split('?')[0]  # Remove params
    Write-Host "  Downloading: $filename"
    try {
        Invoke-WebRequest -Uri $url -OutFile "fonts\$filename"
    } catch {
        Write-Host "  FAILED: $filename" -ForegroundColor Red
    }
}

# Download images
Write-Host "`nDownloading images..." -ForegroundColor Cyan
$imageUrls = @(
    "https://lh3.googleusercontent.com/Q9IFoPlU-1JtlzTHa8Sp-ZjOpNud7nubKjD4-fV2YhqUc0mHgP48IpQ3fJUSqX0eQNPYVSypXYUGY7DcX9Ib6iU2zd7BzmHy",
    "https://lh3.googleusercontent.com/Noh7kIm5kfqbPDsQ7iI6rTN4euBfQ7VMAlvb1SR-86_5iQtOVXQ3_UURL-N-97M-RWfKGNH6zjcbX9dCQW8",
    "https://lh3.googleusercontent.com/2M3h4CZBMs93o0xtkzkIWJqLF3D042oh1uQZyF0VYQlmGWdEDh9Y6hC7cBZ712umyXcTAHz_nrGGA--_",
    "https://lh3.googleusercontent.com/ZMARmveTg1geksYKXZKdh71KW09XrhDLg8N-XrfXCGsDBEHnuKwhmYpHd55Y2-NwuwLX8qsyx26JNyJWtr1jEcxD",
    "https://lh3.googleusercontent.com/aJevdoQrdgivZyD0PzVkxaZPtisa51YPboE6MyKkdKvk6lR2xFOpnVlKDne740yVBdNvQew3dEu16QXKf3HPxH73fa0E2Fgo",
    "https://lh3.googleusercontent.com/XZcampxTloPqVjcKP1_7591o7Q-WHtAdYkl0fPOdASqEsh5bA8_JaK9N_kT2-vG6vTqRiHNFSRvNCcoHEGW6UKX7MLmdPao",
    "https://lh3.googleusercontent.com/Q1DoyMgYTHQbUiVllk2UCOCj-TVSXQ7SnizDaadU_ELZw16Hn1VZyuk7fK4mh_7AlLCQWxFiiDOCFHzJm1-Lr9i681Q1p0o",
    "https://lh3.googleusercontent.com/u18PEZAv4r1rkrrY5uN-MDOP0h8ZZlUk2mHkADH26Ge8HLmDNAIaAFSzEsDOq9fgM5bbmcOmu6WMTnWQ02yXSw0z4zhIDQ",
    "https://lh3.googleusercontent.com/jAThWmiScxB5lJEI2iet2f3Ri1GEl8FieiKKXV3KemGrX2k3AMz5_jYloQXZnxURsn6l8pRgns-sFMwuYw",
    "https://lh3.googleusercontent.com/6f8-V4mWAz0LpB0FPrVajtq92ft8AqfbBJpklWGhLJKOb-7UaojWEJROCRpbo0SdUKaj20l_7FwRmMO3",
    "https://lh3.googleusercontent.com/ZTu4e2-Uo-8ccGdvmQ3MbKr7hVT16sKqNXo9W06qXLt6m0zilcATAHSexkMT7VNMl2RNlzKsOUSmTRSIfw",
    "https://lh3.googleusercontent.com/aX28YQSCR7DtierwbDdC4bBxPvyuTewKAqOBedmdlegC5TkgtT3Fy9C-bL99HFnVDNKQ1VZJ1OmVZtpK",
    "https://lh3.googleusercontent.com/3ebzqbkwxurSjY3YV26gpF26NRVEwCCqZl-7b6IfWwgFCci6D-r7QZOp9MgaYq62YwFO8HGFyQhV4Ych",
    "https://lh3.googleusercontent.com/EWqW7DEI4kOTRMLjK2-ObFHp-EYBt5apFYZ1LVFAhLtTLjigCRfx5hCCTKbIjIm68VQ00p9twloHJ9w8",
    "https://lh3.googleusercontent.com/TgRyMQvJ3_h9RmOnu7AlhIE7NLOOBsRoBounARrs8fQv8HCRPaFtpBneSqJOSZpI6l7He_bAZKN179JBig",
    "https://lh3.googleusercontent.com/43-pXHjwrpmVO8Oean-6BD0uzARvcqUQrpdi7Yw2bxaXwEoP21UdN5kW6Ks9pdOxf7ropMUrh0djgYPwYPU",
    "https://lh3.googleusercontent.com/9rwgVnDglPdPFugSu98fhDmxzjXC9KovZ_7BuHkXPIv6jvg9S96flGnhL_e4y8mIpPpZQstfqEV-WitY"
)

$i = 1
foreach ($url in $imageUrls) {
    $filename = "img_$($i.ToString('00')).jpg"
    Write-Host "  Downloading: $filename"
    try {
        Invoke-WebRequest -Uri $url -OutFile "images\$filename"
        "$url|$filename" | Out-File "image_mapping.txt" -Append -Encoding UTF8
        $i++
    } catch {
        Write-Host "  FAILED: $filename" -ForegroundColor Red
    }
}

Write-Host "`nDone! Downloaded $($i-1) images" -ForegroundColor Green
