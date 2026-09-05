# Contributing to JruExpress

Thank you for your interest in contributing to JruExpress. Contributions are welcome and appreciated. JruExpress is an evolving project, and there are many ways to help it improve.

## What You Can Contribute

- Bug fixes
- New features
- CLI improvements
- Template improvements
- Documentation
- Tests
- Developer experience improvements

## Before You Start

Please take a moment to review the following before contributing:

1. **Read the [README.md](README.md).** Understand what JruExpress does and how it works.
2. **Check existing issues and pull requests.** Search the issue tracker to see if your idea or bug has already been reported or is being worked on.
3. **Avoid duplicate issues.** If a similar issue already exists, add a comment to it rather than creating a new one.
4. **Open an issue first for large changes.** If you are planning a significant new feature, architectural change, or major improvement, open an issue first to discuss it with the maintainers. This helps avoid wasted effort and ensures the change aligns with the project's direction.

Small documentation fixes, obvious bug fixes, or minor improvements generally do not require an issue.

## How to Contribute

### 1. Fork the Repository

Go to the JruExpress repository on GitHub and click the **Fork** button to create your own copy of the repository.

### 2. Clone Your Fork

Clone your fork to your local machine:

```bash
git clone <your-fork-url>
cd jru-express
npm install
```

### 3. Create a Separate Branch

**This is important.** Never work directly on the `main` branch. Every change must be developed in its own branch. This keeps `main` stable and makes it easier to manage pull requests.

Create a descriptive branch based on the type of change you are making:

```bash
git checkout -b feature/add-typescript-template
```

For bug fixes:

```bash
git checkout -b fix/preserve-empty-directories
```

For documentation:

```bash
git checkout -b docs/improve-readme
```

### 4. Branch Naming Convention

Use the following prefixes to name your branches clearly:

| Prefix | Purpose | Example |
|---|---|---|
| `feature/` | New functionality | `feature/add-docker-template` |
| `fix/` | Bug fixes | `fix/missing-gitkeep` |
| `docs/` | Documentation changes | `docs/update-contributing` |
| `refactor/` | Code restructuring without behavior change | `refactor/simplify-cli-parsing` |
| `test/` | Adding or updating tests | `test/add-generator-tests` |
| `chore/` | Maintenance, CI, config, etc. | `chore/update-dependencies` |

Choose descriptive names that explain the purpose of the branch at a glance.

### 5. Make Your Changes

When making changes, keep the following in mind:

- **Keep changes focused.** Each branch and pull request should address a single concern. Do not mix unrelated changes.
- **Follow existing code style.** Match the formatting, naming conventions, and patterns already present in the codebase.
- **Keep the CLI simple.** JruExpress is intentionally lightweight. Avoid introducing unnecessary complexity or heavy dependencies.
- **Update documentation.** If your change affects how the tool is used, update the README or other relevant documentation.
- **Add or update tests.** If applicable, include tests for your changes.

### 6. Test Your Changes

Before submitting a pull request, test your changes thoroughly.

Link the package locally:

```bash
npm install
npm link
```

Then test the generator from a different directory:

```bash
cd /tmp
jru-express test-project
cd test-project
npm install
npm run dev
```

Verify the following:

- Project directories are created correctly.
- All template files are generated.
- `package.json` contains the correct scripts.
- Express is installed and works.
- Nodemon is installed and works.
- `npm run dev` starts the server without errors.
- `npm start` starts the server without errors.
- Existing functionality is not broken.

When you are done testing, unlink the global package:

```bash
npm uninstall -g jru-express
```

### 7. Commit Guidelines

Write clear, meaningful commit messages. Each commit message should describe what was changed and why.

Use this format:

```
<type>: <short description>
```

Examples:

```
feat: add TypeScript template
fix: preserve empty template directories
docs: improve installation instructions
refactor: simplify template generation
test: add generator integration tests
chore: update commander dependency
```

Avoid meaningless commit messages such as:

- `update`
- `changes`
- `stuff`
- `final final`
- `wip`

### 8. Keep Commits Focused

Each commit should represent a single logical change. Do not bundle unrelated modifications into the same commit. If you are fixing a bug and also refactoring nearby code, create separate commits for each.

### 9. Push Your Branch

When your changes are ready:

```bash
git push origin <your-branch-name>
```

### 10. Create a Pull Request

Go to the JruExpress repository on GitHub and create a new Pull Request from your branch into the `main` branch.

Your pull request should include:

- A clear title that describes the change.
- A description explaining **what** changed and **why**.
- What testing you performed.
- Screenshots or terminal output if applicable.

### 11. Pull Request Checklist

Before submitting, confirm the following:

- [ ] I created a separate branch for my changes.
- [ ] I tested my changes locally.
- [ ] I did not modify unrelated files.
- [ ] I updated documentation where necessary.
- [ ] I used clear, descriptive commit messages.
- [ ] I verified the generated project works correctly.
- [ ] I have described my changes clearly in the pull request.

### 12. Code Review

After submitting a pull request, a maintainer will review it. You may be asked to make changes or improvements. Please address review feedback by pushing additional commits to the same branch. Do not close the pull request and open a new one.

Once the pull request is approved, it will be merged into `main`.

## Versioning and Publishing

**Do not manually publish the npm package.** Package releases and npm publishing are managed by the project maintainer through the repository's release workflow.

If the project uses automated publishing through GitHub Actions, your changes will be included in a future release after the pull request is merged. Submit your work through a Pull Request and the maintainer will handle the release process.

## Reporting Bugs

If you find a bug, please open an issue with the following information:

- **Description.** A clear explanation of the problem.
- **Steps to reproduce.** Exact commands or actions that trigger the bug.
- **Expected behavior.** What you expected to happen.
- **Actual behavior.** What actually happened.
- **Node.js version.** Run `node --version` to find this.
- **npm version.** Run `npm --version` to find this.
- **Operating system.** (e.g., Windows 11, macOS, Ubuntu 22.04)
- **JruExpress version.** Check your installed version.
- **Terminal output.** Paste any relevant error messages or output.

The more detail you provide, the easier it is to identify and fix the issue.

## Feature Requests

If you have an idea for a new feature or improvement, open an issue with:

- **Description.** What you would like to see added.
- **Use case.** Why this would be useful.
- **Possible implementation.** If you have ideas on how it could work, share them.

Not all feature requests will be implemented, but thoughtful suggestions are always reviewed and considered.

## Code of Conduct

Contributors are expected to communicate respectfully and constructively. Be kind in discussions, reviews, and issue comments. Disagreements are natural, but personal attacks, harassment, or dismissive behavior are not acceptable.

## Final Note

JruExpress is still at the beginning of its development. Every contribution, no matter how small, helps the project grow and improve. Whether it is a typo fix in the documentation, a bug report, or a new feature, it is valued.

Thank you for taking the time to contribute.
