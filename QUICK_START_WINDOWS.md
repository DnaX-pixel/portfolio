# Quick Start Guide for Windows

## If npm is not recognized:

### Option 1: Use Full Path (Quick Fix)
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### Option 2: Add to PATH for Current Session
```powershell
$env:PATH += ";C:\Program Files\nodejs"
npm install
npm run dev
```

### Option 3: Fix PATH Permanently
1. Press `Win + X` and select "System"
2. Click "Advanced system settings"
3. Click "Environment Variables"
4. Under "System variables", find "Path" and click "Edit"
5. Click "New" and add: `C:\Program Files\nodejs`
6. Click "OK" on all windows
7. Restart PowerShell

## If you get "execution policy" error:

### Quick Fix: Use npm.cmd instead
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
```

### Permanent Fix: Change Execution Policy
Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## After Installation:

```powershell
# Development server
npm run dev
# or with full path
& "C:\Program Files\nodejs\npm.cmd" run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

