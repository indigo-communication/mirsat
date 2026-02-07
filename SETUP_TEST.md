# Quick Setup Guide for samersaad.me Migration

## ⚠️ Prerequisites Required

Python is not currently installed on your system. Follow these steps:

### 1. Install Python

**Option A: Download from Official Site (Recommended)**
1. Visit: https://www.python.org/downloads/
2. Download Python 3.11 or 3.12 (latest stable)
3. **IMPORTANT**: Check "Add Python to PATH" during installation
4. Install for all users

**Option B: Microsoft Store**
```powershell
# Open Microsoft Store and search for "Python 3.12"
# Click Install
```

### 2. Verify Installation

```powershell
python --version
# Should show: Python 3.x.x
```

### 3. Install Dependencies

```powershell
cd "c:\Users\Alaa\Documents\githup\Selenium"
python -m pip install -r requirements.txt
```

## 🧪 Test Configuration

Site: **samersaad.me**
- Already configured in sites_config.json
- WordPress site (wp-login.php detected)
- Ready to test once Python is installed

## 📝 Next Steps After Python Install

### Option 1: Test Without Authentication (Public Pages Only)

If samersaad.me allows public access, you can test basic scraping:

```powershell
# Edit .env file - leave USERNAME/PASSWORD empty for public access test
python run_migration.py --site samersaad --max-pages 3
```

### Option 2: Test With Authentication (Full Access)

If you have WordPress admin credentials:

1. Edit `.env` file:
```ini
USERNAME=your_wp_username
PASSWORD=your_wp_password
```

2. Run test migration:
```powershell
# Test with just 3 pages
python run_migration.py --site samersaad --max-pages 3 --verbose

# Full migration
python run_migration.py --site samersaad
```

## 🔍 Test Commands

```powershell
# List configured sites
python run_migration.py --list-sites

# Small test (3 pages, verbose output)
python run_migration.py --site samersaad --max-pages 3 --verbose

# Full migration with checksum verification
python run_migration.py --site samersaad --checksum-mode

# Prepare deployment package
python run_migration.py --site samersaad --mode prepare
```

## 📂 Expected Output

After test runs successfully, you'll find:

```
Selenium/
├── scraped_content/samersaad/
│   ├── pages/              # HTML files
│   ├── assets/             # Images, CSS, JS
│   └── data/               # Tables, navigation
├── deployment_package/samersaad/
│   └── public_html/        # Ready to upload!
└── logs/                   # Detailed logs
```

## 🐛 Common Issues

### Issue: "Authentication failed"
- Verify WordPress credentials in .env
- Check if site uses custom login URL
- Try accessing wp-admin manually in browser first

### Issue: "No URLs discovered"
- Site might require authentication even for homepage
- Check if site is accessible (not blocked by firewall)
- Verify target_url in sites_config.json

### Issue: "ChromeDriver not found"
- First run will auto-download ChromeDriver
- Requires internet connection
- May take 1-2 minutes on first launch

## 📞 Quick Test Status

✅ Configuration files created
✅ Site definition ready (samersaad.me)
✅ WordPress-specific selectors configured
⏳ **Waiting for Python installation**

Once Python is installed, run:
```powershell
python run_migration.py --site samersaad --max-pages 3 --verbose
```

This will:
1. Auto-download ChromeDriver
2. Test authentication (if credentials provided)
3. Scrape 3 pages as proof-of-concept
4. Generate validation report
5. Prepare deployment package

Good luck! 🚀
