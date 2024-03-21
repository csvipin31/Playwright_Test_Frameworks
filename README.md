# Playwright_Test_Frameworks 💻  Bolierplate Test Automation Framework

- [![author] (Vipin Singh)]
- [![Email](https://img.shields.io/badge/Email-rajatvermaa95%40gmail.com-green)](mailto:cs.vipin31@gmail.com )
- [![GitHub Profile](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/csvipin31)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/vipin-singh-7418b4166)

# 💻 Test Automation Framework | Web UI 

[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 
[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents
<!-- # - [Video Tutorial](#video-tutorial) -->
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)

## 📖 Introduction
This repository contains a Test Automation Framework built using Playwright and Javascript for automated testing of Web UI.

<!-- ## 🎥 Video Tutorial

<a href="https://www.youtube.com/watch?v=g0nG6aPbpl4&list=PLrBBHmoBFxBUu9G7haETpa0B03H9GnfKX"> <img src="https://img.youtube.com/vi/g0nG6aPbpl4/0.jpg" alt="Test Automation Framework | WEB | Cypress + JS" width="200"> </a>

Click on the image above to watch the tutorials. -->

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v20.11.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v10.2.4 or higher recommended)

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/csvipin31/Playwright_Test_Frameworks.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Playwright_Test_Frameworks
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Running Tests

  ```bash
  npx playwright test
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- playwright-tests.yml
|-- tests
|     |-- pages
|          |-- loginPage.js
|          |-- loginPageActions.js
|     |-- scenarios
|          |-- LoginTests.pw.js
|          |-- LoginTestsForDifferentUsers.pw.js
|     |-- utils
|          |-- browserConfig.js
|          |-- fixture.js
|-- .env
|-- .gitignore
|-- .gitattributes
|-- package.json
|-- playwright.config.js
```


- `tests/pages`: Contains page models (loginPage.js) for selectors and loginPageActions.js for page interactions.
- `tests/scenarios`: Includes tests (LoginTests.pw.js, LoginTestsForDifferentUsers.pw.js) for login functionality.
- `tests/utils:` Provides utilities (browserConfig.js, fixture.js) for browser setup and common test setup procedures.
- `.env`: Stores environment variables for configuration.
- `package.json`: Manages dependencies and project metadata.
- `playwright.config.js`: Central Playwright test configuration file.

## ⚙️ Configuration

- Modify `playwright.config.js` for playwright configuration settings such as
  - `baseURL`
  - `testDir`
  - `reporter`

## 🔄 Continuous Integration

This project is configured for CI using Github Actions. Check the configurations in `.github/workflows/*.yml`.

- `.github/workflows/playwright-tests.yml`:Sets up GitHub Actions for Playwright test automation.This workflow executes tests in pre-defined environment variables.

## 📊 Reporting

Playwright Default HTML report (Logs are attached) will be stored in the `playwright-report` directory.

Feel free to reach out if you have any questions, or suggestions, or just want to chat!

Thanks for visiting my GitHub profile! 😊

<p align="left"> <img src="https://komarev.com/ghpvc/?username=csvipin31&label=Profile%20views&color=0e75b6&style=flat" alt="csvipin31" /> </p>
