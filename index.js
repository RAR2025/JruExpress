#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { Command } = require("commander");

const program = new Command();

program
    .name("jru-express")
    .description("Generate a basic Express.js backend")
    .argument("<project-name>", "Name of the project")
    .action((projectName) => {

        const projectPath = path.join(process.cwd(), projectName);
        const templatePath = path.join(__dirname, "templates");

        // Check if project already exists
        if (fs.existsSync(projectPath)) {
            console.error(`Project "${projectName}" already exists.`);
            process.exit(1);
        }

        console.log("\nCreating JruExpress project...\n");

        // Create project directory
        fs.mkdirSync(projectPath, { recursive: true });

        // Copy template structure
        fs.cpSync(templatePath, projectPath, {
            recursive: true
        });

        console.log("✔ Folder structure created");

        // Move into project directory
        process.chdir(projectPath);

        // Initialize npm
        console.log("✔ Initializing npm...");
        execSync("npm init -y", { stdio: "inherit" });

        // Install Express
        console.log("\n✔ Installing Express...");
        execSync("npm install express", { stdio: "inherit" });

        // Install Nodemon
        console.log("\n✔ Installing Nodemon...");
        execSync("npm install --save-dev nodemon", {
            stdio: "inherit"
        });

        // Update package.json scripts
        const packageJsonPath = path.join(projectPath, "package.json");

        const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf8")
        );

        packageJson.scripts = {
            start: "node server.js",
            dev: "nodemon server.js"
        };

        fs.writeFileSync(
            packageJsonPath,
            JSON.stringify(packageJson, null, 2)
        );

        console.log("\n✔ Scripts configured");

        console.log(`
╔══════════════════════════════════════╗
║        JruExpress Project Ready      ║
╚══════════════════════════════════════╝

Project: ${projectName}

Run:

  cd ${projectName}

Development:
  npm run dev

Production:
  npm start

`);
    });

program.parse();