# Gatsby Multi-Blog Templates 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gatsby](https://img.shields.io/badge/Gatsby-2.24+-663399?logo=gatsby)](https://www.gatsbyjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A comprehensive collection of **9 professionally designed, production-ready Gatsby blog templates** built with TypeScript, React, and Styled Components. Perfect for bloggers, content creators, agencies, photographers, and anyone looking to launch a modern, SEO-optimized blog quickly.

## ✨ Features

- **9 Unique Templates**: Choose from diverse, beautifully crafted blog designs
- **TypeScript**: Fully typed for improved developer experience and code quality
- **Styled Components**: Modern CSS-in-JS with styled-system theming
- **Monorepo Architecture**: Powered by Lerna and Yarn Workspaces
- **SEO Optimized**: Built-in SEO best practices and meta tag management
- **PWA Ready**: Progressive Web App support for offline functionality
- **Fast Performance**: Optimized images, lazy loading, and code splitting
- **Markdown Support**: Write blog posts in Markdown with frontmatter
- **Comment System**: Integrated Disqus comments
- **Newsletter**: Mailchimp integration for email subscriptions
- **Social Integration**: Instagram feed support
- **Analytics**: Google Analytics tracking
- **RSS Feed**: Automatic RSS feed generation
- **Responsive Design**: Mobile-first, fully responsive layouts
- **Dark Mode**: Some templates include dark mode support

## 🎨 Available Templates

| Template | Description | Demo |
|----------|-------------|------|
| **Agency Blog** | Professional agency-style blog with modern aesthetics | - |
| **Agency Blog Modern** | Contemporary agency blog with enhanced features | - |
| **Beauty Blog** | Elegant design perfect for beauty and lifestyle content | - |
| **Personal Blog** | Classic personal blog layout | - |
| **Personal Blog Minimal** | Minimalist personal blog with clean design | - |
| **Personal Blog Lite** | Lightweight personal blog template | - |
| **Image Blog** | Image-focused blog for photographers and visual creators | - |
| **Photography Blog Minimal** | Minimalist photography portfolio blog | - |
| **Romantic Blog** | Unique Tinder-like swipeable blog interface | - |

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v14.0.0 or higher
- **Yarn**: v1.22.0 or higher (recommended) or npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/barisariburnu/gatsby-multi-blog-templates.git
   cd gatsby-multi-blog-templates
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Configure environment variables**:
   
   Each template has its own `.env.development` file in its package directory. Copy and configure it:
   
   ```bash
   # Navigate to your chosen template (e.g., agency-blog-modern)
   cd packages/agency-blog-modern
   
   # Edit .env.development with your settings
   # See "Environment Configuration" section below
   ```

4. **Run a template**:
   
   ```bash
   # From the root directory
   yarn dev:agency-modern     # Agency Blog Modern
   yarn dev:agency            # Agency Blog
   yarn dev:personal          # Personal Blog
   yarn dev:personal-minimal  # Personal Blog Minimal
   yarn dev:personal-lite     # Personal Blog Lite
   yarn dev:image             # Image Blog
   yarn dev:photography       # Photography Blog Minimal
   yarn dev:beauty            # Beauty Blog
   yarn dev:romantic          # Romantic Blog
   ```

5. **Open your browser**:
   ```
   http://localhost:8000
   ```

## ⚙️ Environment Configuration

Each template requires configuration in its `.env.development` file:

```bash
# Disqus Comments (optional)
GATSBY_DISQUS_NAME="your_disqus_shortname"

# Mailchimp Newsletter (optional)
MAILCHIMP_ENDPOINT="your_mailchimp_endpoint"

# Google Analytics (optional)
GOOGLE_ANALYTICS_TRACKING_ID="UA-XXXXXXXXX-X"

# Instagram Integration (optional)
INSTAGRAM_USER_NAME="your_instagram_username"
INSTAGRAM_USER_NAME_ID="your_instagram_user_id"
INSTAGRAM_ID="your_instagram_id"
INSTAGRAM_ACCESS_TOKEN="your_instagram_access_token"

# Site Configuration
SITE_URL="https://yourdomain.com"
PATH_PREFIX=""

# Contact Form (optional - for templates with contact form)
GETFORM_KEY="your_getform_key"
```

### Getting API Keys

- **Disqus**: [Create account](https://disqus.com/) → Register site → Get shortname
- **Mailchimp**: [API Keys Guide](https://mailchimp.com/help/about-api-keys/)
- **Google Analytics**: [Setup Guide](https://analytics.google.com/)
- **Instagram**: [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- **Getform**: [Getform.io](https://getform.io/) for contact forms

## 📝 Writing Blog Posts

Blog posts are written in Markdown with YAML frontmatter.

1. **Create a new folder** in `packages/[template-name]/content/blog/`:
   ```bash
   mkdir packages/agency-blog-modern/content/blog/my-awesome-post
   ```

2. **Create `index.md`** in that folder:
   ```markdown
   ---
   title: "My Awesome Blog Post"
   date: "2025-11-25T12:00:00.000Z"
   cover: "./cover-image.png"
   tags: ["gatsby", "react", "tutorial"]
   slug: "my-awesome-post"
   ---

   This is the content of my blog post. You can use **Markdown** formatting!

   ## Heading 2

   - List item 1
   - List item 2

   ![Image description](./image-in-same-folder.jpg)
   ```

3. **Add images** to the same folder (they'll be optimized automatically)

4. **Run the development server** to see your post

## 🏗️ Project Structure

```
gatsby-multi-blog-templates/
├── packages/                    # All blog templates
│   ├── agency-blog/
│   │   ├── content/            # Blog posts and assets
│   │   │   ├── blog/           # Blog post folders
│   │   │   └── assets/         # Images, icons, etc.
│   │   ├── src/
│   │   │   ├── components/     # React components
│   │   │   ├── containers/     # Page sections
│   │   │   ├── pages/          # Page routes
│   │   │   ├── templates/      # Page templates
│   │   │   └── theme/          # Theming and styles
│   │   ├── gatsby-config.js    # Gatsby configuration
│   │   ├── gatsby-node.js      # Gatsby Node APIs
│   │   ├── .env.development    # Environment variables
│   │   └── package.json
│   ├── agency-blog-modern/     # Same structure
│   ├── beauty-blog/
│   ├── image-blog/
│   ├── personal-blog/
│   ├── personal-blog-lite/
│   ├── personal-blog-minimal/
│   ├── photography-blog-minimal/
│   └── romantic-blog/
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── lerna.json                  # Lerna configuration
└── package.json                # Root package.json
```

## 🛠️ Available Commands

### Root Level Commands

```bash
# Install dependencies
yarn install

# Clean all packages
yarn clean

# Clean Gatsby cache for all packages
yarn clean:gatsby

# Development (run specific template)
yarn dev:agency-modern
yarn dev:agency
yarn dev:personal
yarn dev:personal-minimal
yarn dev:personal-lite
yarn dev:image
yarn dev:photography
yarn dev:beauty
yarn dev:romantic

# Build for production
yarn build:agency-modern
yarn build:agency
yarn build:personal
# ... (same pattern for other templates)

# Serve production build
yarn serve:agency-modern
yarn serve:agency
yarn serve:personal
# ... (same pattern for other templates)
```

### Per-Template Commands

Navigate to a specific template directory and run:

```bash
cd packages/agency-blog-modern

# Development server
yarn develop

# Production build
yarn build

# Serve production build
yarn serve

# Clean Gatsby cache
yarn clean

# Type checking
yarn type-check

# Linting (if configured)
yarn lint
```

## 🎨 Customization

### Theme Customization

Each template has a `src/theme` directory with:

- **`colors.tsx`**: Define your color palette
- **`customVariant.tsx`**: Create custom style variants
- **`index.tsx`**: Configure style props and system

### Site Metadata

Update `gatsby-config.js` in your chosen template:

```javascript
module.exports = {
  siteMetadata: {
    title: `Your Blog Title`,
    author: `Your Name`,
    about: `About your blog`,
    description: `Blog description`,
    siteUrl: process.env.SITE_URL,
  },
  // ... plugins
}
```

### Styling

This project uses:
- **Styled Components**: For component styling
- **Styled System**: For consistent theming
- **Custom Fonts**: Google Fonts (Poppins, Fira Sans, Montserrat, Merriweather)

## 📦 Deployment

This is a standard Gatsby project and can be deployed to any Gatsby-compatible hosting provider:

- **Netlify**: [Deploy to Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)
- **Vercel**: [Deploy to Vercel](https://vercel.com/guides/deploying-gatsby-with-vercel)
- **GitHub Pages**: [Deploy to GitHub Pages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
- **AWS Amplify**: [Deploy to AWS](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-gatsby.html)
- **Gatsby Cloud**: [Deploy to Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/)

### Build Command

```bash
# Select your template and build
yarn build:agency-modern
```

The built files will be in `packages/[template-name]/public/`.

## 🔧 Technology Stack

- **Framework**: [Gatsby](https://www.gatsbyjs.com/) v2.24+
- **Language**: [TypeScript](https://www.typescriptlang.org/) v4.0+
- **UI**: [React](https://reactjs.org/) v16.13+
- **Styling**: [Styled Components](https://styled-components.com/) v5.2+
- **Theming**: [Styled System](https://styled-system.com/) v5.1+
- **Monorepo**: [Lerna](https://lerna.js.org/) v3.22+
- **Package Manager**: [Yarn Workspaces](https://yarnpkg.com/features/workspaces)
- **GraphQL**: Built-in Gatsby GraphQL
- **Code Quality**: Prettier, Husky, lint-staged

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Gatsby](https://www.gatsbyjs.com/)
- Inspired by modern web design trends
- Thanks to all contributors and users

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/barisariburnu/gatsby-multi-blog-templates/issues)
- **Discussions**: [GitHub Discussions](https://github.com/barisariburnu/gatsby-multi-blog-templates/discussions)
- **Email**: barisariburnu@gmail.com

## 📊 Project Status

This project is actively maintained. New templates and features are added regularly.

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 📚 Additional Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Styled Components Documentation](https://styled-components.com/docs)
- [Styled System Documentation](https://styled-system.com/)

---

Made with ❤️ by [Barış Arıburnu](https://github.com/barisariburnu)
