# Deployment Guide

## Prerequisites

1. GitHub account
2. Vercel account (free tier available)
3. EmailJS account (optional, for contact form)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub

2. Click "Add New Project"

3. Import your GitHub repository

4. Vercel will auto-detect Next.js settings

5. Add Environment Variables (if using EmailJS):
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

6. Click "Deploy"

7. Your site will be live at `your-project.vercel.app`

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings

2. Navigate to "Domains"

3. Add your custom domain

4. Follow DNS configuration instructions

## EmailJS Setup (Optional)

1. Sign up at [emailjs.com](https://www.emailjs.com/)

2. Create an email service (Gmail, Outlook, etc.)

3. Create an email template

4. Get your Service ID, Template ID, and Public Key

5. Add them as environment variables in Vercel

## Troubleshooting

### Build Errors
- Ensure all dependencies are in `package.json`
- Check Node.js version (should be 18+)
- Review build logs in Vercel dashboard

### Contact Form Not Working
- Verify EmailJS environment variables are set
- Check EmailJS service is active
- Review browser console for errors

### Styling Issues
- Clear browser cache
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS

## Continuous Deployment

Vercel automatically deploys on every push to the main branch. For preview deployments:
- Push to any branch for automatic preview URL
- Create pull request for preview deployment

