# JruExpress

> A lightweight Express.js backend scaffolding CLI for quickly creating a clean and practical backend structure.

## Introduction

Starting a new Express.js backend project often involves the same repetitive steps: creating folders, setting up `package.json`, installing dependencies, writing boilerplate server code, and configuring scripts. While these tasks are simple individually, they add up every time you begin a new project.

JruExpress solves this by generating a complete, ready-to-run Express.js backend project with a single command. It provides a sensible default folder structure, installs the necessary dependencies, and configures your scripts so you can start building immediately.

JruExpress is designed to be a starting point, not a rigid framework. The generated project is plain JavaScript with no hidden magic, making it easy to understand, modify, and extend to fit your own preferences.

## Current Status

JruExpress is currently in its early stage. The core scaffolding functionality is working and available for use. This is just the beginning. JruExpress is being developed with the goal of becoming a more useful and flexible backend scaffolding tool, with more features, improvements, templates, and developer conveniences planned for the future.

## Features

### Current

- Express project scaffolding via a single CLI command
- Standard backend folder structure (`controllers`, `services`, `models`, `routes`, `middleware`, `config`, `utils`)
- Automatic npm initialization
- Automatic Express installation
- Automatic Nodemon installation (as a dev dependency)
- Development script (`npm run dev`) using Nodemon with file watching
- Production/start script (`npm start`) using Node
- Basic Express server boilerplate with JSON parsing and a health-check route
- `.gitignore` preconfigured for `node_modules` and `.env`
- Project README included in the generated structure

### Future Ideas

- Multiple project templates (e.g., REST API, GraphQL, microservice)
- TypeScript support
- Database connection templates (MongoDB, PostgreSQL, MySQL)
- Authentication boilerplate
- Docker and Docker Compose support
- Environment configuration templates
- Interactive CLI prompts for selecting options
- Custom project configuration files
- Testing setup and boilerplate
- Improved error handling templates

## Installation / Usage

The primary way to use JruExpress is through `npx`:

```bash
npx jru-express <project-name>
```

Replace `<project-name>` with whatever you want your project directory to be called. For example:

```bash
npx jru-express backend
```

This will create a `backend/` directory in your current location with a fully scaffolded Express.js project.

You can name the project anything you like:

```bash
npx jru-express my-api
npx jru-express ecommerce-server
npx jru-express auth-service
```

### What happens after running the command

1. A new directory is created with the name you provided.
2. The backend folder structure is generated inside it.
3. npm is initialized automatically.
4. Express is installed as a production dependency.
5. Nodemon is installed as a development dependency.
6. `npm start` and `npm run dev` scripts are configured in `package.json`.
7. A basic Express server is ready to run.

## Generated Structure

After running the command, your project will contain the following structure:

```text
<project-name>/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
│
├── server.js
├── package.json
├── .gitignore
└── README.md
```

### Directory purposes

| Directory | Purpose |
|---|---|
| `src/config/` | Configuration files such as database connections, API keys, and environment-specific settings. |
| `src/controllers/` | Request handlers that receive incoming requests and return responses. |
| `src/middleware/` | Custom middleware functions for authentication, validation, error handling, logging, etc. |
| `src/models/` | Data models and schema definitions for your database or data layer. |
| `src/routes/` | Route definitions that map HTTP endpoints to controller functions. |
| `src/services/` | Business logic and reusable service functions separated from controllers. |
| `src/utils/` | Utility functions, helpers, and shared small modules. |

### File purposes

| File | Purpose |
|---|---|
| `src/app.js` | Creates and configures the Express application. Exports the `app` instance. |
| `server.js` | Entry point that imports the app and starts the HTTP server. |
| `package.json` | Project metadata, dependencies, and scripts. |
| `.gitignore` | Prevents `node_modules/` and `.env` from being committed to version control. |
| `README.md` | Basic instructions for the generated project. |

## Running the Generated Project

After scaffolding, navigate into your project and start the development server:

```bash
cd backend
npm run dev
```

The server will start on port 3000 by default. You will see output indicating the server is running. Nodemon will automatically restart the server whenever you change a file.

To run the project without file watching (production-style):

```bash
npm start
```

### Development vs Production

| Command | Tool | File watching | Use case |
|---|---|---|---|
| `npm run dev` | Nodemon | Yes | Active development with automatic restarts |
| `npm start` | Node | No | Running the server in production or preview |

The server listens on port 3000 by default. You can change this by setting the `PORT` environment variable.

## Example

A complete workflow from creation to running:

```bash
npx jru-express ecommerce-api
cd ecommerce-api
npm run dev
```

Expected output:

```text
Server running on port https://localhost:3000
```

You can then open `http://localhost:3000` in your browser or use a tool like `curl` to verify:

```bash
curl http://localhost:3000
```

This will return:

```json
{
  "message": "JruExpress API is running"
}
```

## Development

If you want to work on JruExpress itself (the CLI generator), you can clone the repository and set it up locally:

```bash
git clone <repository-url>
cd jru-express
npm install
```

To test your changes locally, link the package:

```bash
npm link
```

This makes the `jru-express` command available globally using your local copy. You can then run it from any directory:

```bash
jru-express test-project
```

When you are done testing, you can unlink:

```bash
npm uninstall -g jru-express
```

## Project Philosophy

JruExpress is built around a few straightforward principles:

- **Simple scaffolding.** Generate a working project with one command. No complex configuration required.
- **Minimal configuration.** The generated project uses sensible defaults. You are free to change anything.
- **Familiar architecture.** The folder structure follows conventions that most Express developers already know.
- **Easy customization.** Since everything is plain JavaScript with no hidden layers, you can modify any part of the generated project without fighting the tool.
- **No unnecessary abstraction.** JruExpress generates code you can read, understand, and own.

## Roadmap

The following are potential improvements planned or being considered for future versions of JruExpress:

- More project templates (REST API, GraphQL, microservice architectures)
- TypeScript template support
- Database connection templates (MongoDB, PostgreSQL, MySQL)
- Authentication boilerplate with JWT or session-based options
- Docker and Docker Compose configuration templates
- Environment configuration with `.env` examples
- Interactive CLI prompts for selecting project options
- Custom project configuration through a config file
- Testing setup with boilerplate test files
- Improved error handling middleware templates
- Logging configuration templates
- API documentation setup (e.g., Swagger/OpenAPI)

These are future directions and not all of them will necessarily be implemented. They represent areas where JruExpress could grow.

## Contributing

Contributions, suggestions, bug reports, and improvements are welcome. Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines before submitting changes.

## License

This project is licensed under the MIT License. See the [package.json](package.json) for details.

## Closing

JruExpress is at the beginning of its development. It aims to make starting an Express.js project a little faster and a little cleaner. The project will continue to evolve based on feedback and real-world use. If you find it useful, contributions and suggestions are always appreciated.

---

Made with ❤️ by Jraturu
