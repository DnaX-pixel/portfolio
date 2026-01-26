# Panduan Deploy Portfolio ke VPS

Panduan lengkap untuk push portfolio ke GitHub dan deploy ke VPS tanpa mengganggu FreelanceForGood yang sedia ada.

## 📋 Prerequisites

- GitHub account
- Akses SSH ke VPS
- Node.js 20+ dan npm di VPS (atau Docker)
- Nginx (untuk reverse proxy)

---

## 🚀 Langkah 1: Push ke GitHub

### 1.1 Initialize Git (jika belum)

```bash
git init
```

### 1.2 Tambah Remote Repository

```bash
# Ganti YOUR_USERNAME dengan username GitHub anda
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

### 1.3 Buat .env.example (untuk reference)

```bash
# Copy .env.local jika ada, atau buat baru
# NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 1.4 Commit dan Push

```bash
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git push -u origin main
```

---

## 🖥️ Langkah 2: Setup di VPS

### 2.1 SSH ke VPS

```bash
ssh user@your-vps-ip
```

### 2.2 Clone Repository

```bash
# Pilih lokasi yang sesuai (contoh: /var/www atau /home/user)
cd /var/www
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2.3 Setup Environment Variables

```bash
# Buat .env.local file
nano .env.local
```

Masukkan:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2.4 Install Dependencies dan Build

**Option A: Tanpa Docker (Direct Node.js)**

```bash
# Install dependencies
npm install

# Build production
npm run build

# Run dengan PM2 (recommended untuk production)
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

**Option B: Dengan Docker (Recommended)**

```bash
# Build dan run dengan Docker Compose
docker-compose up -d --build
```

**⚠️ PENTING:** Jika FreelanceForGood sudah guna port 3000, tukar port untuk portfolio:

Edit `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Tukar 3000 ke 3001
```

Atau edit `package.json` untuk custom port:
```json
"start": "next start -p 3001"
```

---

## 🌐 Langkah 3: Setup Nginx Reverse Proxy

### 3.1 Buat Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Masukkan konfigurasi (contoh dengan subdomain):

```nginx
server {
    listen 80;
    server_name portfolio.yourdomain.com;  # Ganti dengan domain/subdomain anda

    location / {
        proxy_pass http://localhost:3001;  # Port yang portfolio guna
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Atau jika guna port yang sama dengan path:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # FreelanceForGood (existing)
    location /freelanceforgood {
        proxy_pass http://localhost:3000;
        # ... proxy settings
    }

    # Portfolio (new)
    location / {
        proxy_pass http://localhost:3001;
        # ... proxy settings
    }
}
```

### 3.2 Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

### 3.3 Setup SSL dengan Let's Encrypt (Optional tapi recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d portfolio.yourdomain.com
```

---

## 🔄 Langkah 4: Auto-Deploy dengan GitHub Actions (Optional)

Buat `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/portfolio
            git pull origin main
            npm install
            npm run build
            pm2 restart portfolio
```

Setup secrets di GitHub: Settings → Secrets → Actions

---

## 📁 Struktur Direktori VPS (Recommended)

```
/var/www/
├── freelanceforgood/     # Project existing
│   └── (files FreelanceForGood)
└── portfolio/            # Portfolio baru
    └── (files portfolio)
```

---

## 🔧 Troubleshooting

### Portfolio tak boleh akses

1. Check port conflict:
```bash
sudo netstat -tulpn | grep :3001
```

2. Check PM2 status:
```bash
pm2 list
pm2 logs portfolio
```

3. Check Nginx logs:
```bash
sudo tail -f /var/log/nginx/error.log
```

### Update Portfolio

```bash
cd /var/www/portfolio
git pull origin main
npm install
npm run build
pm2 restart portfolio
# atau
docker-compose restart
```

---

## 📝 Checklist

- [ ] Portfolio pushed ke GitHub
- [ ] Repository cloned di VPS
- [ ] Environment variables setup
- [ ] Dependencies installed
- [ ] Build successful
- [ ] Application running (port 3001 atau lain)
- [ ] Nginx configured
- [ ] Domain/subdomain pointing ke VPS
- [ ] SSL certificate installed (optional)
- [ ] Test akses portfolio dari browser

---

## 💡 Tips

1. **Guna PM2** untuk process management - auto restart kalau crash
2. **Setup firewall** - hanya buka port yang perlu (80, 443, 22)
3. **Backup regularly** - backup database dan files
4. **Monitor logs** - check PM2 logs atau Docker logs regularly
5. **Guna subdomain** - lebih mudah manage (portfolio.domain.com vs domain.com/portfolio)

---

## 🆘 Support

Jika ada masalah, check:
- PM2 logs: `pm2 logs portfolio`
- Docker logs: `docker-compose logs portfolio`
- Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Application logs: Check console output

