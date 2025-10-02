# Deploying to thekingsnetwork.com

## Quick Deploy to Netlify (Recommended)

### Option 1: Deploy via Netlify CLI (Fastest)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy your site**:
   ```bash
   netlify deploy --prod
   ```
   - When prompted for the publish directory, enter: `dist`
   - Follow the prompts to create a new site or link to an existing one

4. **Connect your custom domain** (thekingsnetwork.com):
   - Go to your Netlify dashboard
   - Click on your site
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter `thekingsnetwork.com`
   - Follow the DNS configuration instructions

### Option 2: Deploy via Git (Continuous Deployment)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository
   - Build settings are already configured in `netlify.toml`
   - Click "Deploy site"

3. **Add custom domain**:
   - Once deployed, go to "Domain settings"
   - Click "Add custom domain"
   - Enter `thekingsnetwork.com`

### DNS Configuration

Point your domain to Netlify by updating your DNS records at your domain registrar:

**For APEX domain (thekingsnetwork.com):**
- Type: A Record
- Name: @ (or leave blank)
- Value: 75.2.60.5

**For WWW subdomain:**
- Type: CNAME
- Name: www
- Value: [your-site-name].netlify.app

Netlify will automatically handle SSL certificates via Let's Encrypt.

## Environment Variables

Your Supabase environment variables are already configured in the `.env` file.

**IMPORTANT**: In Netlify dashboard, add these as environment variables:
1. Go to Site settings → Environment variables
2. Add:
   - `VITE_SUPABASE_URL`: Your Supabase URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

## Post-Deployment Checklist

- [ ] Site is live at thekingsnetwork.com
- [ ] SSL certificate is active (https works)
- [ ] Application form submits to Supabase
- [ ] Ebook form submits to Supabase
- [ ] Admin dashboard works at thekingsnetwork.com/admin (you'll need to create a route for this)
- [ ] All images load correctly
- [ ] Navigation and scroll behavior work smoothly

## Accessing the Admin Dashboard

The AdminDashboard component has been created but needs to be set up as a separate route. You have two options:

1. **Create a simple router** to add /admin route
2. **Deploy as a separate page** and password-protect it via Netlify

For now, you can test it locally by temporarily adding it to App.tsx.

## Need Help?

If you encounter any issues during deployment, common solutions:

- **Build fails**: Run `npm run build` locally first to check for errors
- **Environment variables not working**: Make sure they're prefixed with `VITE_` and added to Netlify
- **DNS not updating**: DNS changes can take 24-48 hours to propagate
- **Images not loading**: Check browser console for CORS or 404 errors

---

Your site is ready to deploy! 🚀
