# Contributing to Gatsby Multi-Blog Templates

First off, thank you for considering contributing to Gatsby Multi-Blog Templates! It's people like you that make this project such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to barisariburnu@gmail.com.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** if possible.
* **Include your environment details**: Node.js version, Yarn version, OS, etc.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most users.

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

* **Beginner issues** - issues which should only require a few lines of code, and a test or two.
* **Help wanted issues** - issues which should be a bit more involved than beginner issues.

### Pull Requests

The process described here has several goals:

- Maintain the project's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible solution
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. **Fork the repository** and create your branch from `main`.
2. **Make your changes** in your forked repository.
3. **Test your changes** thoroughly. Ensure all templates still work correctly.
4. **Follow the coding standards** used throughout the project (TypeScript, Prettier, ESLint).
5. **Update documentation** if needed (README, DOCUMENTATION.md, etc.).
6. **Write clear commit messages** following [Conventional Commits](https://www.conventionalcommits.org/).
7. **Submit a pull request** with a clear title and description.

#### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat(agency-blog): add dark mode support
fix(personal-blog): resolve Instagram feed loading issue
docs(readme): update installation instructions
```

## Development Setup

1. **Clone your fork** of the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/gatsby-multi-blog-templates.git
   cd gatsby-multi-blog-templates
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Configure environment variables**:
   - Copy `.env.development` in each package you want to work with
   - Fill in your API keys and configuration

4. **Run a template** (e.g., agency-blog-modern):
   ```bash
   yarn dev:agency-modern
   ```

5. **Make your changes** and test thoroughly

6. **Run linting** (if configured):
   ```bash
   yarn lint
   ```

7. **Commit your changes** following the commit message guidelines

8. **Push to your fork** and submit a pull request

## Project Structure

```
gatsby-multi-blog-templates/
├── packages/
│   ├── agency-blog-modern/
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── lerna.json
└── package.json
```

Each package in `packages/` is a separate Gatsby blog template with its own:
- `content/` - Blog posts and assets
- `src/` - React/TypeScript source code
- `gatsby-config.js` - Gatsby configuration
- `gatsby-node.js` - Gatsby Node APIs
- `.env.development` - Environment variables

## Coding Standards

- **TypeScript**: Use TypeScript for all new code
- **Styled Components**: Use styled-components with styled-system for styling
- **Prettier**: Code is automatically formatted with Prettier on commit
- **React Best Practices**: Follow React hooks and functional component patterns
- **Accessibility**: Ensure all UI components are accessible

## Testing

Currently, the project doesn't have automated tests. If you'd like to contribute to adding tests, that would be greatly appreciated! We would welcome:

- Unit tests for React components
- Integration tests for Gatsby pages
- End-to-end tests with Cypress or Playwright

## Documentation

- Update the README.md if you change behavior or add features
- Update DOCUMENTATION.md for detailed technical changes
- Update CHANGELOG.md following Keep a Changelog format
- Add JSDoc comments to complex functions
- Update TypeScript types as needed

## Questions?

Feel free to:
- Open an issue with your question
- Reach out to the maintainers at barisariburnu@gmail.com
- Check existing issues and discussions

## Recognition

Contributors will be recognized in the project's README.md and release notes.

Thank you for contributing! 🎉
