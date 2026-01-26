# Portfolio Website - Muhammad Daniel Rosley

A modern, tech-focused portfolio website showcasing network engineering expertise and full-stack development skills.

## Features

- **Modern Design**: Dark theme with network-inspired visual elements
- **Responsive**: Fully responsive design for all devices
- **Animated**: Smooth scroll animations and interactive elements
- **Tech Stack**: Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion

## Sections

1. **Hero**: Animated introduction with network diagram background
2. **About**: Highlights unique combination of network engineering and development
3. **Experience**: Timeline of work experience at TM and Reisa Makmur
4. **Projects**: Featured projects (FreelanceForGood, IoT Smart Charity Rack)
5. **Skills**: Categorized technical skills with icons
6. **Certifications**: Industry-recognized credentials
7. **Education**: Academic achievements and highlights
8. **Contact**: Contact form with EmailJS integration

## Getting Started

### Prerequisites

- Node.js 20.9+ and npm/yarn
- OR Docker and Docker Compose (for containerized development)

### Installation

#### Option 1: Local Development (Without Docker)

**Prerequisites:** Node.js 20.9+ must be installed. Download from [nodejs.org](https://nodejs.org/)

1. Install dependencies:

**Windows PowerShell:**
```powershell
npm install
```

**Linux/Mac/Git Bash:**
```bash
npm install
# or
yarn install
```

2. Set up environment variables (for EmailJS):
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Option 2: Docker Development

1. Build and run with Docker Compose (development):
```bash
docker-compose -f docker-compose.dev.yml up --build
```

Or using Dockerfile.dev directly:
```bash
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio-dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Option 3: Docker Production Build

1. Build the production image:
```bash
docker build -t portfolio:latest .
```

2. Run the container:
```bash
docker run -p 3000:3000 portfolio:latest
```

Or use Docker Compose:
```bash
docker-compose up --build
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables if using EmailJS
4. Deploy!

The site will be automatically deployed on every push to the main branch.

### Docker Deployment

You can deploy the Docker container to any platform that supports Docker:

1. **Build the image:**
```bash
docker build -t portfolio:latest .
```

2. **Deploy to platforms like:**
   - AWS ECS/Fargate
   - Google Cloud Run
   - Azure Container Instances
   - DigitalOcean App Platform
   - Railway
   - Fly.io
   - Self-hosted VPS

3. **Example for VPS:**
```bash
# On your server
docker pull your-registry/portfolio:latest
docker run -d -p 3000:3000 --name portfolio --restart unless-stopped your-registry/portfolio:latest
```

## Customization

### Update Personal Information

Edit `data/portfolio.ts` to update:
- Personal info (name, email, phone, etc.)
- Work experience
- Projects
- Skills
- Certifications
- Education

### Styling

- Colors: Edit `tailwind.config.ts` for theme colors
- Global styles: Modify `app/globals.css`
- Component styles: Each component uses Tailwind classes

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Hook Form**: Form handling
- **EmailJS**: Email service integration
- **Docker**: Containerization for consistent development and deployment

## License

This project is open source and available under the MIT License.

