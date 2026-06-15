# Contributing to Tencent Meeting Video Downloader

Thank you for your interest in contributing! This guide explains how to get involved.

## How to Contribute

### Reporting Bugs

If you find a bug, please [open an issue](https://github.com/ChanMeng666/tencent-meeting-video-downloader/issues/new) with:

- Steps to reproduce the problem
- Expected vs. actual behavior (screenshots or logs help)
- Your environment (OS, and relevant runtime/version)

### Suggesting Features

Have an idea? [Open a feature request](https://github.com/ChanMeng666/tencent-meeting-video-downloader/issues/new) describing the problem you want to solve and your proposed solution.

### Submitting Changes

1. **Fork** the repository and **clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/tencent-meeting-video-downloader.git
   cd tencent-meeting-video-downloader
   ```
2. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and verify them locally (see Development Setup below).
4. **Commit** with a clear message following [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: short description of your change"
   ```
5. **Push** and open a Pull Request against the `main` branch.

## Development Setup

```bash
# Install dependencies
npm install

# Production build
npm run build
```

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). For questions or
support, see [SUPPORT.md](SUPPORT.md). For security issues, see [SECURITY.md](SECURITY.md).
