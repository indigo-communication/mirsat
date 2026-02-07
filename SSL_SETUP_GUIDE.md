# 🔐 Universal SSL Setup for All Projects

**Status:** ✅ ACTIVE  
**Certificate Location:** `C:\ssl\`  
**Valid Until:** May 3, 2028  
**Works For:** ALL localhost projects (ports 8080-9000)

---

## Quick Start

### Method 1: Universal Launcher (Easiest)
```powershell
cd "C:\Users\Alaa\Documents\githup\Selenium"
.\start_ssl_server.ps1 PROJECT_NAME PORT
```

**Examples:**
```powershell
.\start_ssl_server.ps1 matrixbs 8080
.\start_ssl_server.ps1 yellowecoenergy 8081
.\start_ssl_server.ps1 "limen groupe" 8082
.\start_ssl_server.ps1 mirsat 8083
```

### Method 2: From Project Folder
```powershell
cd "C:\Users\Alaa\Documents\githup\Selenium\matrixbs"
.\start.ps1    # If start.ps1 exists in project
```

### Method 3: Manual Command
```powershell
cd "your_project_folder"
http-server -S -C "C:\ssl\localhost+2.pem" -K "C:\ssl\localhost+2-key.pem" -p 8080
```

Then open: `https://127.0.0.1:8080`

---

## Available Projects

Run any of these with SSL:

- **matrixbs** - Matrix Business Software (port 8080)
- **yellowecoenergy** - Yellow Eco Energy (port 8081)
- **limen groupe** - Limen Groupe (port 8082)
- **mirsat** - Mirsat (port 8083)
- **publicmatterslebanon** - Public Matters Lebanon (port 8084)
- **oakuralb** - Oakura LB (port 8085)
- **cuisine-matters** - Cuisine Matters (port 8086)
- **samersaad** - Samer Saad (port 8087)
- **indigo-lb** - Indigo LB (port 8088)
- **itbng** - ITB Nigeria (port 8089)
- **spgnigeria** - SPG Nigeria (port 8090)

---

## SSL Certificate Details

### Files Created
```
C:\ssl\
├── mkcert.exe           # Certificate generator tool
├── localhost+2.pem      # SSL certificate (public)
├── localhost+2-key.pem  # Private key
```

### Certificate Coverage
- `localhost`
- `127.0.0.1`
- `::1` (IPv6 loopback)

### Trusted By
- Chrome
- Edge
- Firefox
- All Windows apps

---

## Why SSL for Localhost?

### Problem Before SSL
❌ HTTPS redirect scripts causing infinite loops  
❌ ERR_SSL_PROTOCOL_ERROR on navigation  
❌ Browser security forcing HTTPS even when disabled  
❌ Wasting hours debugging SSL issues  

### Solution with SSL
✅ Native HTTPS support - no security warnings  
✅ No HTTPS redirect conflicts  
✅ Works with production code (no modifications needed)  
✅ ONE certificate for ALL projects  
✅ Zero configuration per project  

---

## Troubleshooting

### Server Won't Start
```powershell
# Kill existing node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

### Port Already in Use
```powershell
# Use different port
.\start_ssl_server.ps1 matrixbs 8090
```

### Certificate Expired (After May 3, 2028)
```powershell
cd C:\ssl
.\mkcert.exe localhost 127.0.0.1 ::1
# New certificates generated!
```

### Certificate Not Trusted
```powershell
C:\ssl\mkcert.exe -install
# Reinstalls CA in system trust store
```

---

## Best Practices

1. **Use different ports for each project** when running multiple simultaneously
2. **Stop servers when done** to free up resources: `Get-Process node | Stop-Process`
3. **Keep SSL files in C:\ssl** - central location for all projects
4. **Don't commit SSL files** to git (already in .gitignore)

---

## Commands Reference

### Start Server
```powershell
# Universal launcher
.\start_ssl_server.ps1 PROJECT_NAME PORT

# Manual with http-server
http-server -S -C "C:\ssl\localhost+2.pem" -K "C:\ssl\localhost+2-key.pem" -p 8080
```

### Stop Server
```powershell
Get-Process node | Stop-Process
```

### Check Running Servers
```powershell
Get-Process node | Select-Object Id, ProcessName, StartTime
```

### Regenerate Certificates (if needed)
```powershell
cd C:\ssl
.\mkcert.exe localhost 127.0.0.1 ::1
```

---

## File Locations

- **SSL Certificates:** `C:\ssl\`
- **Universal Launcher:** `C:\Users\Alaa\Documents\githup\Selenium\start_ssl_server.ps1`
- **Project Launchers:** Each project's `start.ps1` file
- **All Projects:** `C:\Users\Alaa\Documents\githup\Selenium\`

---

## Next Steps

1. ✅ SSL certificates created
2. ✅ Universal launcher script created
3. ✅ Tested with matrixbs project
4. 📝 Add `start.ps1` to other projects as needed
5. 🚀 Use SSL for all local development

---

**Created:** February 3, 2026  
**Last Updated:** February 3, 2026  
**Maintained By:** Alaa
