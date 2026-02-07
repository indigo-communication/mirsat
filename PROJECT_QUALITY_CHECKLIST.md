# PROJECT QUALITY CHECKLIST - High-Resolution Images & Production Deployment

**Use this prompt for any website project to ensure professional-grade quality and proper deployment setup.**

---

## 🎯 PROMPT FOR NEXT PROJECT:

```
I have a website project that needs quality improvements and deployment preparation. Please implement these critical fixes systematically:

1. **HIGH-RESOLUTION IMAGE UPGRADE** ⭐ PRIORITY 1
   - Check current image file sizes and quality
   - Locate the original image_mapping.txt or extract original URLs  
   - Download HIGH-RESOLUTION versions using =s1600 parameter for Google images
   - Replace all low-resolution images with professional-quality versions
   - Verify significant file size increases (thumbnails → high-res)
   - Command pattern: `Invoke-WebRequest -Uri "URL=s1600" -OutFile "path"`

2. **EMAIL BACKEND VERIFICATION** ⭐ PRIORITY 2
   - Check the ORIGINAL live website for correct contact email
   - Verify contact_handler.php uses the correct email address
   - Look for: admin@domain.org, info@domain.org, contact@domain.org
   - Update PHP backend if email is incorrect
   - Double-check email in all documentation files

3. **DOMAIN VERIFICATION** ⭐ PRIORITY 3  
   - Confirm the correct domain from the original website
   - Check README.md, .htaccess, contact_handler.php, DEPLOYMENT_README.txt
   - Common mistakes: .com vs .org, www vs non-www preferences
   - Update ALL references to use correct domain consistently

4. **PRODUCTION .HTACCESS SETUP** ⭐ PRIORITY 4
   - Enable HTTPS redirect (uncomment production lines)
   - Configure WWW handling (force www OR remove www - check original site)
   - Enable compression and caching for performance
   - Add security headers (XSS, clickjacking protection)
   - Protect sensitive files (.htaccess, .sql, etc.)

5. **DEPLOYMENT PACKAGE CREATION**
   - Create index_deploy.html with HTTPS redirect enabled
   - Update DEPLOYMENT_README.txt with correct domain/email
   - Create production-ready ZIP package
   - Include: index_deploy.html, .htaccess, contact_handler.php, all assets

6. **QUALITY VERIFICATION**
   - Test locally with high-resolution images
   - Verify all images load correctly (check server logs)
   - Confirm file sizes show significant improvement
   - Test deployment package contents
   - Validate .htaccess syntax and redirects
```

---

## 📋 SYSTEMATIC WORKFLOW:

### **Step 1: Quality Assessment (2 mins)**
```bash
# Check current image quality
Get-ChildItem "images\*.jpg" | ForEach-Object { 
    "$($_.Name): $([math]::Round($_.Length/1024, 1)) KB" 
}

# Look for original URLs
Get-Content "image_mapping.txt" -ErrorAction SilentlyContinue
```

### **Step 2: Original Website Investigation (3 mins)**
```bash
# Check live website for:
# 1. Contact email (footer, contact page, mailto links)
# 2. Domain format (www vs non-www)
# 3. HTTPS usage
# 4. Professional image quality baseline
```

### **Step 3: High-Resolution Image Download (5 mins)**
```powershell
# Download high-res images with =s1600 parameter
$urls = @(
    "https://lh3.googleusercontent.com/[ID1]",
    "https://lh3.googleusercontent.com/[ID2]"
    # ... add all URLs
)

$i = 1
foreach ($url in $urls) {
    $highResUrl = $url + "=s1600"
    Invoke-WebRequest -Uri $highResUrl -OutFile "images\img_$('{0:D2}' -f $i).jpg"
    $i++
}
```

### **Step 4: Backend Verification (2 mins)**
```php
// Verify in contact_handler.php:
$to_email = "admin@CORRECT-DOMAIN.org"; // ← CHECK THIS!

// Update if needed:
// - admin@domain.org  
// - info@domain.org
// - contact@domain.org
```

### **Step 5: Domain Correction (3 mins)**
```bash
# Files to check and update:
# 1. README.md - Domain field
# 2. .htaccess - Comments and redirects  
# 3. contact_handler.php - Email domain
# 4. DEPLOYMENT_README.txt - Instructions
# 5. Any absolute URLs in HTML
```

### **Step 6: Production .htaccess (2 mins)**
```apache
# Enable these for production:
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Choose ONE (check original site):
# Remove www: 
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1%{REQUEST_URI} [L,R=301]
```

### **Step 7: Deployment Package (3 mins)**
```powershell
# Create production version
Copy-Item "index.html" "index_deploy.html"

# Enable HTTPS redirect in index_deploy.html
# Update DEPLOYMENT_README.txt with correct domain
# Create final ZIP package
Compress-Archive -Path @("index_deploy.html", ".htaccess", "contact_handler.php", "DEPLOYMENT_README.txt", "images", "fonts", "assets") -DestinationPath "PROJECT_deployment.zip"
```

---

## ⚡ EFFICIENCY TIPS:

### **Quick Quality Check:**
```bash
# Before: Check current image sizes
# After: Verify dramatic improvement in KB sizes
# Target: Main gallery images should be 100+ KB (professional quality)
```

### **Common Issues to Fix:**
- ❌ Low-res thumbnails (1-5 KB images)
- ❌ Wrong email domain (.com vs .org)  
- ❌ HTTPS redirect commented out
- ❌ www handling not configured
- ❌ Missing security headers

### **Success Indicators:**
- ✅ Gallery images: 100+ KB (sharp, professional quality)
- ✅ Contact email matches original website
- ✅ Domain consistent across all files
- ✅ .htaccess production-ready
- ✅ Deployment ZIP < 2 MB with all assets

---

## 🎯 FINAL VERIFICATION COMMAND:

```powershell
# Run this to confirm everything is ready:
Write-Host "=== PROJECT QUALITY VERIFICATION ===" -ForegroundColor Green
Write-Host "📸 Image Quality:" -ForegroundColor Cyan
Get-ChildItem "images\*.jpg" | ForEach-Object { 
    $kb = [math]::Round($_.Length/1024, 1)
    $quality = if($kb -gt 50){"✅ HIGH-RES"}else{"❌ LOW-RES"}
    Write-Host "  $($_.Name): $kb KB $quality"
}

Write-Host "`n📧 Email Backend:" -ForegroundColor Cyan  
Select-String -Path "contact_handler.php" -Pattern '\$to_email\s*=\s*"([^"]+)"'

Write-Host "`n🌐 Domain References:" -ForegroundColor Cyan
Select-String -Path ".htaccess", "README.md" -Pattern "\.org|\.com" | Select-Object -First 3

Write-Host "`n✅ READY FOR DEPLOYMENT!" -ForegroundColor Green
```

---

**💡 Copy this entire prompt and use it for your next project to ensure consistent professional quality across all website migrations!**