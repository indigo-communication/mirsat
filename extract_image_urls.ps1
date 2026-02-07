# PowerShell script to extract image URLs from the provided webpage

# Define the URL of the webpage
$webpageUrl = "https://www.mirsat.org/"

# Fetch the webpage content
$response = Invoke-WebRequest -Uri $webpageUrl -UseBasicParsing

# Extract image URLs using regex
$imageUrls = [regex]::Matches($response.Content, 'https?://[^"\s]+\.(jpg|jpeg|png|gif|svg|webp)') |
    ForEach-Object { $_.Value } | Select-Object -Unique

# Save the extracted URLs to a file
$imageUrls | Out-File -FilePath "image_urls.txt"

Write-Host "Extracted $($imageUrls.Count) image URLs and saved to image_urls.txt"