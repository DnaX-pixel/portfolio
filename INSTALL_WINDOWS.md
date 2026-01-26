# Windows Installation Guide

## Step 1: Install Node.js

1. Download Node.js 20.9+ (LTS version recommended) from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the setup wizard
3. Make sure to check "Add to PATH" during installation
4. Restart your PowerShell/Command Prompt after installation

## Step 2: Verify Installation

Open PowerShell and run:
```powershell
node --version
npm --version
```

You should see version numbers (Node.js 20.9+ and npm 10+).

## Step 3: Install Project Dependencies

Navigate to your project directory:
```powershell
cd C:\Users\Lenovo\Desktop\Portfolio
```

Install dependencies:
```powershell
npm install
```

## Step 4: Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Common Windows PowerShell Commands

### Remove node_modules and package-lock.json:
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
```

### Clean install:
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
```

### Update dependencies:
```powershell
npm update
```

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Restart PowerShell after installing Node.js
- Check PATH: `$env:PATH` should include Node.js directory
- **Temporary fix for current session:**
  ```powershell
  $env:PATH += ";C:\Program Files\nodejs"
  ```
- **Permanent fix:** Add `C:\Program Files\nodejs` to System Environment Variables PATH

### "npm.ps1 cannot be loaded - execution policy"
- PowerShell is blocking npm scripts
- **Quick fix:** Use full path to npm.cmd:
  ```powershell
  & "C:\Program Files\nodejs\npm.cmd" install
  ```
- **Permanent fix:** Run PowerShell as Administrator and execute:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

### "Permission denied" errors
- Run PowerShell as Administrator
- Or use: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Port 3000 already in use
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

## Alternative: Use Docker (No Node.js Required)

If you prefer not to install Node.js locally, use Docker:

```powershell
# Make sure Docker Desktop is installed and running
docker-compose -f docker-compose.dev.yml up --build
```

This will run the development server in a container without needing Node.js installed locally.

