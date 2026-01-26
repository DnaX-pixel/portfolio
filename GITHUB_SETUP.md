# Panduan Setup GitHub untuk Portfolio

Panduan ringkas untuk push portfolio website ke GitHub.

## 📋 Prerequisites

- GitHub account
- Git installed di komputer anda

---

## 🚀 Langkah-langkah

### 1. Buat Repository di GitHub

1. Pergi ke [GitHub.com](https://github.com)
2. Click "New repository"
3. Nama: `portfolio` (atau nama lain)
4. Description: "Personal portfolio website"
5. **JANGAN** check "Initialize with README" (kita dah ada code)
6. Click "Create repository"

### 2. Initialize Git di Local (jika belum)

```bash
# Di dalam folder Portfolio
git init
```

### 3. Tambah Remote Repository

```bash
# Ganti YOUR_USERNAME dengan username GitHub anda
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**Atau jika guna SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git
```

### 4. Check Status

```bash
git status
```

### 5. Tambah Files

```bash
# Tambah semua files
git add .

# Atau tambah specific files
git add package.json
git add app/
git add public/
# etc...
```

### 6. Commit

```bash
git commit -m "Initial commit: Portfolio website with Next.js"
```

### 7. Push ke GitHub

```bash
# Set default branch ke main
git branch -M main

# Push ke GitHub
git push -u origin main
```

---

## 🔄 Update Code di Masa Depan

Setiap kali buat perubahan:

```bash
# 1. Check apa yang berubah
git status

# 2. Tambah files yang berubah
git add .

# 3. Commit dengan message yang jelas
git commit -m "Update: Add new project or fix bug"

# 4. Push ke GitHub
git push
```

---

## 🔐 Setup SSH Key (Optional - untuk security)

Jika tak nak masukkan password setiap kali:

### Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### Add SSH Key ke GitHub

1. Copy public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

2. Pergi ke GitHub → Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste key dan save

### Test Connection

```bash
ssh -T git@github.com
```

---

## 📝 .gitignore

Pastikan `.gitignore` sudah include:
- `node_modules/`
- `.env.local`
- `.next/`
- Files sensitive lain

---

## ✅ Checklist

- [ ] Repository created di GitHub
- [ ] Git initialized di local
- [ ] Remote added
- [ ] Files committed
- [ ] Pushed ke GitHub
- [ ] Code visible di GitHub

---

## 🆘 Troubleshooting

### Error: "remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Add baru
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

### Error: "failed to push"

```bash
# Pull dulu kalau ada changes di remote
git pull origin main --allow-unrelated-histories

# Lepas tu push
git push -u origin main
```

### Lupa password/token

1. GitHub dah tak guna password untuk HTTPS
2. Guna Personal Access Token:
   - Settings → Developer settings → Personal access tokens
   - Generate new token
   - Guna token sebagai password

---

## 💡 Tips

1. **Commit message yang jelas** - senang track changes
2. **Commit frequently** - jangan tunggu sampai banyak changes
3. **Guna branches** untuk features baru:
   ```bash
   git checkout -b feature/new-section
   # ... buat changes
   git push origin feature/new-section
   ```
4. **Guna .gitignore** - jangan commit sensitive files

