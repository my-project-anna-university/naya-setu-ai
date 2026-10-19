# Contributing to NyayaSetu

Thank you for your interest in contributing to **NyayaSetu — AI Connecting Citizens with Legal Rights & Government Services**! This project is dedicated to democratizing legal knowledge, making government welfare schemes accessible, and bridging the gap between Indian citizens and justice delivery mechanisms.

---

## Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Branching and Workflow](#branching-and-workflow)
4. [Coding Standards](#coding-standards)
   - [Backend (Node.js & Express)](#backend-nodejs--express)
   - [Frontend (React & Tailwind CSS)](#frontend-react--tailwind-css)
   - [Database & Modeling (MongoDB & Mongoose)](#database--modeling-mongodb--mongoose)
5. [Commit Guidelines](#commit-guidelines)
6. [Submitting Pull Requests](#submitting-pull-requests)
7. [Reporting Issues](#reporting-issues)
8. [License](#license)

---

## Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free experience for everyone. When participating:
- Be respectful, constructive, and empathetic towards others.
- Ensure all legal content, acts, and statutory references are accurate and verified against official Indian Government repositories (e.g., [indiacode.nic.in](https://www.indiacode.nic.in), [myscheme.gov.in](https://www.myscheme.gov.in)).
- Do not provide unauthorized or misleading legal advice; maintain clear disclaimers that the platform serves informational and educational purposes.

---

## Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: Community Server v6.0+ (running locally or MongoDB Atlas URI)
- **Git**: Installed and configured

### Setting Up Development Environment

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/your-username/nyayasetu.git
   cd nyayasetu
   ```

2. **Install Dependencies**
   Install root, backend, and frontend dependencies in one command:
   ```bash
   npm run install:all
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `server` directory (or use `.env.example` at root as a reference):
   ```bash
   cp .env.example server/.env
   ```
   Update `server/.env` with your local MongoDB URI, JWT secret, and optional Google Gemini API key.

4. **Seed Database with Initial Legal Data**
   ```bash
   npm run seed
   ```

5. **Start Development Servers**
   ```bash
   npm run dev
   ```
   - Frontend runs at: `http://localhost:5173`
   - Backend API runs at: `http://localhost:5000`

---

## Branching and Workflow

We follow standard GitHub flow:
- `main`: Production-ready, stable code.
- Feature branches: Created off `main` using descriptive names:
  - `feature/rights-explorer-filter`
  - `feature/schemes-eligibility-calculator`
  - `bugfix/document-generator-pdf`
  - `docs/update-architecture`

### Step-by-Step Workflow
1. Update your local `main`:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create your branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make atomic, well-tested changes.
4. Push your branch and open a Pull Request against `main`.

---

## Coding Standards

### Backend (Node.js & Express)
- **Module System**: Use modern ES Modules (`import`/`export`) consistently.
- **Architecture**: Follow MVC / Controller-Service-Repository pattern. Keep controllers lean and business logic inside dedicated services or helper utilities.
- **Async/Await**: Always use `async/await` paired with centralized error handling middleware or `express-async-handler`. Avoid unhandled promise rejections.
- **RESTful Endpoints**:
  - `GET /api/v1/rights` - List rights
  - `GET /api/v1/rights/:id` - Single right detail
  - `POST /api/v1/schemes/check-eligibility` - Process eligibility check
  - `POST /api/v1/documents/draft` - Generate drafted legal document
- **Status Codes**: Return appropriate HTTP response codes (200, 201, 400, 401, 403, 404, 422, 500).
- **Security**: Sanitize inputs, enforce rate limiting, use `helmet`, and hash passwords using `bcryptjs` (min 10 salt rounds).

### Frontend (React & Tailwind CSS)
- **Component Architecture**: Create modular, reusable functional components with React Hooks.
- **Styling**: Use utility-first Tailwind CSS. Keep colors consistent with the NyayaSetu palette:
  - Primary: Deep Saffron / Indian Navy (`indigo-800` / `blue-900`)
  - Accent: Ashoka Amber / Emerald Green
  - Neutral: Cool grays and crisp slate
- **Accessibility (a11y)**: Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<section>`), ARIA labels for icon-only buttons, and test color contrast ratios.
- **Icons**: Prefer [lucide-react](https://lucide.dev) for clean, consistent iconography.
- **Form Handling & Validation**: Validate input both client-side (for user experience) and server-side (for integrity).

### Database & Modeling (MongoDB & Mongoose)
- **Validation**: Define clear schemas with type checks, required fields, and enum restrictions.
- **Indexes**: Add compound and text indexes on frequently queried fields like `category`, `keywords`, `state`, and `beneficiaryType`.
- **Timestamps**: Enable `{ timestamps: true }` on all Mongoose schemas.
- **No Mock/Placeholder Text**: Ensure legal content represents realistic Indian statutes (e.g., Bharatiya Nyaya Sanhita 2023, Constitution of India, Consumer Protection Act 2019, Information Technology Act 2000).

---

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

Format: `<type>(<scope>): <subject>`

- `feat`: A new user-facing feature (e.g., `feat(chatbot): add support for regional language queries`)
- `fix`: A bug fix (e.g., `fix(auth): correct token expiry response handling`)
- `docs`: Documentation updates (e.g., `docs(readme): add ecourts integration guide`)
- `style`: Formatting changes that do not affect code logic (e.g., `style(client): adjust card padding and shadows`)
- `refactor`: Code refactoring without behavioral changes (e.g., `refactor(schemes): extract eligibility calculation helper`)
- `test`: Adding or updating test suites (e.g., `test(rights): add unit test for constitutional rights filter`)
- `chore`: Build tasks, dependency updates, or tool configurations (e.g., `chore: update concurrently dev script`)

---

## Submitting Pull Requests

1. **Verify Code Quality**:
   - Ensure linting passes without errors.
   - Test endpoints using Postman or unit tests.
   - Verify frontend responsiveness across mobile, tablet, and desktop viewports.
2. **PR Description**: Include a clear description of:
   - What problem this PR solves or what feature it implements.
   - Relevant issue numbers (e.g., `Closes #12`).
   - Screenshots or recordings for UI changes.
3. **Review Process**: Address reviewer comments promptly and push fixes to your branch.

---

## Reporting Issues

Found a bug or have a suggestion?
- Check existing issues before opening a new one.
- Use our issue templates if available:
  - **Bug Reports**: Include environment details, steps to reproduce, expected vs actual behavior, and relevant console/terminal logs.
  - **Feature Requests**: Outline the citizen use-case, the legal relevance, and proposed workflow.

---

## License

By contributing to NyayaSetu, you agree that your contributions will be licensed under the project's [MIT License](file:///C:/Users/DELL/My-project/nyayasetu/LICENSE).
