# PowerShell script to download HIGH-RESOLUTION images from original googleusercontent.com URLs

# Define the original URLs and corresponding local file paths from image_mapping.txt  
$imageMapping = @{
    "https://lh3.googleusercontent.com/Q9IFoPlU-1JtlzTHa8Sp-ZjOpNud7nubKjD4-fV2YhqUc0mHgP48IpQ3fJUSqX0eQNPYVSypXYUGY7DcX9Ib6iU2zd7BzmHy" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_01.jpg"
    "https://lh3.googleusercontent.com/Noh7kIm5kfqbPDsQ7iI6rTN4euBfQ7VMAlvb1SR-86_5iQtOVXQ3_UURL-N-97M-RWfKGNH6zjcbX9dCQW8" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_02.jpg"
    "https://lh3.googleusercontent.com/2M3h4CZBMs93o0xtkzkIWJqLF3D042oh1uQZyF0VYQlmGWdEDh9Y6hC7cBZ712umyXcTAHz_nrGGA--_" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_03.jpg"
    "https://lh3.googleusercontent.com/ZMARmveTg1geksYKXZKdh71KW09XrhDLg8N-XrfXCGsDBEHnuKwhmYpHd55Y2-NwuwLX8qsyx26JNyJWtr1jEcxD" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_04.jpg"
    "https://lh3.googleusercontent.com/aJevdoQrdgivZyD0PzVkxaZPtisa51YPboE6MyKkdKvk6lR2xFOpnVlKDne740yVBdNvQew3dEu16QXKf3HPxH73fa0E2Fgo" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_05.jpg"
    "https://lh3.googleusercontent.com/XZcampxTloPqVjcKP1_7591o7Q-WHtAdYkl0fPOdASqEsh5bA8_JaK9N_kT2-vG6vTqRiHNFSRvNCcoHEGW6UKX7MLmdPao" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_06.jpg"
    "https://lh3.googleusercontent.com/Q1DoyMgYTHQbUiVllk2UCOCj-TVSXQ7SnizDaadU_ELZw16Hn1VZyuk7fK4mh_7AlLCQWxFiiDOCFHzJm1-Lr9i681Q1p0o" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_07.jpg"
    "https://lh3.googleusercontent.com/u18PEZAv4r1rkrrY5uN-MDOP0h8ZZlUk2mHkADH26Ge8HLmDNAIaAFSzEsDOq9fgM5bbmcOmu6WMTnWQ02yXSw0z4zhIDQ" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_08.jpg"
    "https://lh3.googleusercontent.com/jAThWmiScxB5lJEI2iet2f3Ri1GEl8FieiKKXV3KemGrX2k3AMz5_jYloQXZnxURsn6l8pRgns-sFMwuYw" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_09.jpg"
    "https://lh3.googleusercontent.com/6f8-V4mWAz0LpB0FPrVajtq92ft8AqfbBJpklWGhLJKOb-7UaojWEJROCRpbo0SdUKaj20l_7FwRmMO3" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_10.jpg"
    "https://lh3.googleusercontent.com/ZTu4e2-Uo-8ccGdvmQ3MbKr7hVT16sKqNXo9W06qXLt6m0zilcATAHSexkMT7VNMl2RNlzKsOUSmTRSIfw" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_11.jpg"
    "https://lh3.googleusercontent.com/aX28YQSCR7DtierwbDdC4bBxPvyuTewKAqOBedmdlegC5TkgtT3Fy9C-bL99HFnVDNKQ1VZJ1OmVZtpK" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_12.jpg"
    "https://lh3.googleusercontent.com/3ebzqbkwxurSjY3YV26gpF26NRVEwCCqZl-7b6IfWwgFCci6D-r7QZOp9MgaYq62YwFO8HGFyQhV4Ych" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_13.jpg"
    "https://lh3.googleusercontent.com/EWqW7DEI4kOTRMLjK2-ObFHp-EYBt5apFYZ1LVFAhLtTLjigCRfx5hCCTKbIjIm68VQ00p9twloHJ9w8" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_14.jpg"
    "https://lh3.googleusercontent.com/TgRyMQvJ3_h9RmOnu7AlhIE7NLOOBsRoBounARrs8fQv8HCRPaFtpBneSqJOSZpI6l7He_bAZKN179JBig" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_15.jpg"
    "https://lh3.googleusercontent.com/43-pXHjwrpmVO8Oean-6BD0uzARvcqUQrpdi7Yw2bxaXwEoP21UdN5kW6Ks9pdOxf7ropMUrh0djgYPwYPU" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_16.jpg"
    "https://lh3.googleusercontent.com/9rwgVnDglPdPFugSu98fhDmxzjXC9KovZ_7BuHkXPIv6jvg9S96flGnhL_e4y8mIpPpZQstfqEV-WitY" = "c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\img_17.jpg"
}

Write-Host "ðŸ”„ Downloading HIGH-RESOLUTION images from original googleusercontent.com URLs..."
Write-Host "ðŸ“ Target folder: c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\"
Write-Host ""

$successCount = 0
$failCount = 0

# Loop through each image mapping and download the HIGH-RESOLUTION image
foreach ($url in $imageMapping.Keys) {
    $localPath = $imageMapping[$url]
    $fileName = Split-Path $localPath -Leaf
    
    Write-Host "â¬‡ï¸  Downloading: $fileName" -ForegroundColor Cyan
    Write-Host "   Source: $url" -ForegroundColor Gray
    
    try {
        # Add =s1600 parameter for highest resolution available  
        $highResUrl = $url + "=s1600"
        Invoke-WebRequest -Uri $highResUrl -OutFile $localPath -ErrorAction Stop
        
        # Get file size
        $fileSize = (Get-Item $localPath).Length
        $fileSizeKB = [math]::Round($fileSize / 1024, 1)
        
        Write-Host "   âœ… Success: $fileSizeKB KB" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "   âŒ Failed: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
    Write-Host ""
}

Write-Host "ðŸ“Š Download Summary:" -ForegroundColor Yellow
Write-Host "   âœ… Successful: $successCount images" -ForegroundColor Green
Write-Host "   âŒ Failed: $failCount images" -ForegroundColor Red
Write-Host ""

if ($successCount -gt 0) {
    Write-Host "ðŸŽ‰ HIGH-RESOLUTION images downloaded successfully!" -ForegroundColor Green
    Write-Host "ðŸ“ Location: c:\Users\Alaa\Documents\githup\Selenium\mirsat\images\" -ForegroundColor Cyan
}

