# Quick Start Guide

Get your Gatsby blog up and running in 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- **Node.js** v14.0.0 or higher ([Download](https://nodejs.org/))
- **Yarn** v1.22.0 or higher ([Install](https://yarnpkg.com/getting-started/install))
- **Git** (optional, for cloning)

## Step 1: Get the Project

**Option A: Clone from GitHub (Recommended)**
```bash
git clone https://github.com/barisariburnu/gatsby-multi-blog-templates.git
cd gatsby-multi-blog-templates
```

**Option B: Download ZIP**
1. Download the project ZIP file
2. Extract it to your preferred location
3. Open terminal in that directory

## Step 2: Install Dependencies

```bash
yarn install
```

This will install all necessary packages for all templates. It may take a few minutes.

## Step 3: Choose a Template

Pick available templates:
- `agency-blog-modern` - Modern agency blog

## Step 4: Configure Environment

Navigate to your chosen template and set up environment variables:

```bash
cd packages/agency-blog-modern
```

Copy the example environment file:
```bash
# Windows (PowerShell)
Copy-Item .env.example .env.development

# macOS/Linux
cp .env.example .env.development
```

Edit `.env.development` with your preferred text editor and configure:

```bash
# Minimal configuration for local development
SITE_URL="http://localhost:8000"
SITE_TITLE="My Awesome Blog"
SITE_AUTHOR="Your Name"
SITE_DESCRIPTION="A blog about awesome things"
SITE_SHORT_NAME="MyBlog"

# Optional: Add later when you're ready
GATSBY_DISQUS_NAME=""
MAILCHIMP_ENDPOINT=""
GOOGLE_ANALYTICS_TRACKING_ID=""
```

## Step 5: Run Development Server

Go back to the root directory and start your chosen template:

```bash
cd ../..  # Back to root

# Run the Modern Agency template
yarn dev:agency-blog-modern
```

## Step 6: Open in Browser

Once the server starts, open your browser to:
```
http://localhost:8000
```

🎉 **Congratulations!** Your blog is running!

---

## Next Steps

### 1. Write Your First Blog Post

Navigate to your template's content folder:
```bash
cd packages/agency-blog-modern/content/blog
```

Create a new folder for your post:
```bash
mkdir my-first-post
cd my-first-post
```

Create `index.md`:
```markdown
---
title: "My First Blog Post"
date: "2025-11-25"
cover: "./cover.jpg"
tags: ["introduction", "hello-world"]
slug: "my-first-post"
---

# Hello World!

This is my first blog post. I'm excited to share my thoughts with the world!

## What's Next?

- Learn about Markdown
- Add images to my posts
- Customize my blog theme
```

### 2. Add Images

Place images in the same folder as your blog post:
```
my-first-post/
  ├── index.md
  ├── cover.jpg
  └── image1.png
```

Reference them in your markdown:
```markdown
![My image](./image1.png)
```

### 3. Customize Your Blog

**Change Colors:**
Edit `src/theme/colors.tsx` in your template

**Modify Logo:**
Replace images in `content/assets/`

**Update Site Info:**
Edit environment variables in `.env.development`

### 4. Add Integrations (Optional)

#### Google Analytics
1. Get tracking ID from [Google Analytics](https://analytics.google.com/)
2. Add to `.env.development`:
   ```bash
   GOOGLE_ANALYTICS_TRACKING_ID="UA-XXXXXXXXX-X"
   ```

#### Disqus Comments
1. Create account at [Disqus](https://disqus.com/)
2. Register your site
3. Add to `.env.development`:
   ```bash
   GATSBY_DISQUS_NAME="your-site-shortname"
   ```

#### Mailchimp Newsletter
1. Get endpoint from [Mailchimp](https://mailchimp.com/)
2. Add to `.env.development`:
   ```bash
   MAILCHIMP_ENDPOINT="your-mailchimp-endpoint"
   ```

---

## Common Issues & Solutions

### Issue: Port 8000 is already in use
**Solution:** Kill the process or use a different port:
```bash
yarn workspace @blog/modern-agency develop -- -p 8001
```

### Issue: "Cannot find module" errors
**Solution:** Make sure you ran `yarn install` in the root directory:
```bash
cd /path/to/project/root
yarn install
```

### Issue: Changes not showing up
**Solution:** Gatsby caches aggressively. Clean and restart:
```bash
yarn clean:gatsby
yarn dev:agency-modern
```

### Issue: "Module build failed" or TypeScript errors
**Solution:** Delete node_modules and reinstall:
```bash
yarn clean
yarn install
yarn dev:agency-modern
```

---

## Build for Production

When you're ready to deploy:

```bash
# Build your chosen template
yarn build:agency-modern

# Test the production build locally
yarn serve:agency-modern
```

The built files will be in `packages/agency-blog-modern/public/`

---

## Deploy Your Blog

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Build command: `yarn build:agency-modern`
4. Publish directory: `packages/agency-blog-modern/public`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `yarn add -D gh-pages`
2. Add deploy script to package.json
3. Run: `yarn deploy`

See [Deployment Guide](https://www.gatsbyjs.com/docs/deploying-and-hosting/) for more options.

---

## Getting Help

- **Documentation:** See [README.md](README.md) for detailed docs
- **Issues:** [GitHub Issues](https://github.com/barisariburnu/gatsby-multi-blog-templates/issues)
- **Contributing:** See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Email:** barisariburnu@gmail.com

---

## Useful Commands

```bash
# Development
yarn dev:agency-modern        # Start development server
yarn clean:gatsby             # Clean Gatsby cache (all templates)
yarn workspace @blog/modern-agency clean  # Clean single template

# Production
yarn build:agency-modern      # Build for production
yarn serve:agency-modern      # Serve production build locally

# Maintenance
yarn clean                    # Remove all node_modules
yarn install                  # Reinstall dependencies
```

---

**Happy Blogging! 🚀**

For more detailed information, check out:
- [README.md](README.md) - Full documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [DOCUMENTATION.md](DOCUMENTATION.md) - Technical details
- [CHANGELOG.md](CHANGELOG.md) - Version history
