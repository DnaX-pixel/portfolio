# Upgrade Notes - Next.js 15 & React 19

## What Changed

The project has been upgraded to:
- **Next.js 15.1.4** (from 14.2.5)
- **React 19.0.0** (from 18.3.1)
- **Node.js 20+** (required for Next.js 15)

## Breaking Changes to Be Aware Of

### React 19 Changes
- React 19 introduces new features and some API changes
- Most existing code should work without changes
- If you encounter issues, you can temporarily downgrade to React 18

### Next.js 15 Changes
- Requires Node.js 20.9 or later
- Improved performance and new features
- Better TypeScript support

## Installation

After pulling the latest changes:

### Windows PowerShell:
```powershell
# Remove old node_modules and lock file
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Install fresh dependencies
npm install
```

### Linux/Mac/Git Bash:
```bash
# Remove old node_modules and lock file
rm -rf node_modules package-lock.json

# Install fresh dependencies
npm install
```

### If Node.js is not installed:
1. Download and install Node.js 20.9+ from [nodejs.org](https://nodejs.org/)
2. Restart your terminal/PowerShell
3. Verify installation: `node --version` and `npm --version`
4. Then run `npm install`

## Docker Updates

Docker images now use Node.js 20:
- `Dockerfile` updated to `node:20-alpine`
- `Dockerfile.dev` updated to `node:20-alpine`

Rebuild your Docker images:
```bash
docker-compose build --no-cache
```

## Compatibility

All existing code should work with Next.js 15 and React 19. The upgrade maintains backward compatibility for:
- All components
- Framer Motion animations
- React Hook Form
- EmailJS integration

## If You Encounter Issues

1. **TypeScript errors**: Run `npm install` to ensure types are updated
2. **Build errors**: Clear `.next` folder: `rm -rf .next`
3. **React 19 issues**: You can temporarily use React 18:
   ```json
   "react": "^18.3.1",
   "react-dom": "^18.3.1"
   ```

## Benefits of the Upgrade

- **Better Performance**: Next.js 15 includes performance improvements
- **Latest Features**: Access to newest React and Next.js features
- **Security**: Latest security patches and updates
- **Future-Proof**: Staying current with the ecosystem

