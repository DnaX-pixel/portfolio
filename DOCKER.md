# Docker Guide

This project includes Docker support for both development and production environments.

## Why Docker?

- **Consistent Environment**: Same environment across all machines
- **Easy Deployment**: Deploy anywhere Docker runs
- **Isolation**: No conflicts with local Node.js versions
- **Reproducibility**: Same setup every time
- **Portfolio Showcase**: Demonstrates containerization skills (mentioned in your FreelanceForGood project)

## Quick Start

### Development with Docker

```bash
# Using docker-compose (recommended)
npm run docker:dev
# or
docker-compose -f docker-compose.dev.yml up --build

# Using Docker directly
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio-dev
```

The development container includes:
- Hot reloading
- Volume mounting for live code changes
- Development dependencies

### Production Build

```bash
# Using docker-compose
npm run docker:prod
# or
docker-compose up --build

# Using Docker directly
npm run docker:build
npm run docker:run
# or
docker build -t portfolio:latest .
docker run -p 3000:3000 portfolio:latest
```

## Docker Files Explained

### `Dockerfile`
Multi-stage production build:
1. **deps**: Installs dependencies
2. **builder**: Builds the Next.js application
3. **runner**: Minimal production image with only necessary files

### `Dockerfile.dev`
Single-stage development build with hot reloading support.

### `docker-compose.yml`
Production configuration with:
- Health checks
- Environment variable support
- Port mapping
- Restart policies

### `docker-compose.dev.yml`
Development configuration with:
- Volume mounting for live code changes
- Development environment variables
- Hot reloading support

## Environment Variables

### Development
Create a `.env.local` file or set in `docker-compose.dev.yml`:
```yaml
environment:
  - NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Production
Set environment variables when running:
```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id \
  -e NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id \
  -e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key \
  portfolio:latest
```

Or use a `.env` file with docker-compose:
```bash
docker-compose --env-file .env.production up
```

## Deployment Options

### Self-Hosted VPS
```bash
# On your server
docker pull your-registry/portfolio:latest
docker run -d \
  -p 3000:3000 \
  --name portfolio \
  --restart unless-stopped \
  your-registry/portfolio:latest
```

### Cloud Platforms
- **AWS ECS/Fargate**: Push to ECR, deploy via ECS
- **Google Cloud Run**: `gcloud run deploy`
- **Azure Container Instances**: Deploy via Azure CLI
- **DigitalOcean App Platform**: Connect GitHub, auto-deploy
- **Railway**: Connect repo, auto-deploys on push
- **Fly.io**: `flyctl deploy`

### Docker Hub / Container Registry
```bash
# Tag and push
docker tag portfolio:latest yourusername/portfolio:latest
docker push yourusername/portfolio:latest

# Pull and run anywhere
docker pull yourusername/portfolio:latest
docker run -p 3000:3000 yourusername/portfolio:latest
```

## Troubleshooting

### Build fails
- Ensure Docker is running
- Check Node.js version in Dockerfile (20-alpine, required for Next.js 15)
- Clear Docker cache: `docker builder prune`

### Port already in use
```bash
# Change port in docker-compose.yml or use different port
docker run -p 3001:3000 portfolio:latest
```

### Hot reload not working (dev)
- Ensure volumes are mounted correctly
- Check file permissions
- Restart container

### Environment variables not working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side
- Check docker-compose environment section
- Verify `.env` file format

## Best Practices

1. **Use multi-stage builds** (already implemented) for smaller images
2. **Don't commit `.env` files** - use `.env.example`
3. **Use `.dockerignore`** to exclude unnecessary files
4. **Tag images** with versions for production
5. **Use health checks** for production deployments
6. **Set resource limits** in production:
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
```

## Image Size Optimization

The production image uses:
- Alpine Linux (small base image)
- Multi-stage builds (only production files)
- Standalone Next.js output (minimal dependencies)

Expected size: ~150-200MB

