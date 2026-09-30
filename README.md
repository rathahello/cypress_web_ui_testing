# Cypress Web UI Testing Framework 🚀

An End-to-End (E2E) automated web UI testing framework built with **Cypress**, **JavaScript**, and the **Page Object Model (POM)** pattern. It features data-driven testing using CSV fixtures, Mochawesome HTML reporting, and an automated GitHub Actions CI/CD pipeline with Telegram status notifications.

---

## ✨ Features

- **Page Object Model (POM)**: Modular, maintainable, and reusable page object structure.
- **Data-Driven Testing**: Externalized test datasets using CSV and JSON fixtures via `neat-csv`.
- **Cross-Browser Support**: Run tests seamlessly on Chrome, Firefox, Edge, and Electron.
- **Rich Reporting**: Automated HTML and JSON report generation using Mochawesome.
- **CI/CD Integration**: Fully configured GitHub Actions workflow supporting manual dispatch with parameter inputs.
- **Real-Time Notifications**: Instant Telegram notifications alerting the team on pipeline pass/fail status.

---

## 🛠 Tech Stack

- **Testing Framework:** [Cypress](https://www.cypress.io/) (^15.x)
- **Language:** JavaScript (Node.js)
- **Data Parsing:** `neat-csv`
- **Reporter:** `mochawesome`, `mochawesome-merge`, `mochawesome-report-generator`
- **CI/CD:** GitHub Actions
- **Alerting:** Telegram Bot API

---

## 📂 Project Structure

```text
cypress_web_ui_testing/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                     # GitHub Actions CI/CD workflow
├── cypress/
│   ├── e2e/                              # Test suites (Spec files)
│   │   ├── authentication/               # Login & authentication test cases
│   │   │   ├── tc_01_login_to_orangehrm.cy.js
│   │   │   └── tc_02_login.cy.js
│   │   ├── tax_invoice/                  # Invoice creation & submission test cases
│   │   │   ├── tc_01_create_invoice.cy.js
│   │   │   └── tc_02_submit_invoice.cy.js
│   │   └── user_management_hrm/          # User management test cases
│   │       └── tc_01_add_user.cy.js
│   ├── fixtures/                         # Test data files
│   │   ├── csv/                          # CSV test data files
│   │   │   ├── invoice_test_data.csv
│   │   │   ├── user_login_test_data.csv
│   │   │   └── user_management_test_data.csv
│   │   └── example.json
│   ├── reports/                          # Generated Mochawesome reports
│   └── support/
│       ├── commands.js                   # Custom Cypress commands
│       ├── e2e.js                        # Global Cypress configuration & hooks
│       └── pageObjects/                  # Page Object classes (POM)
│           ├── auth.js
│           ├── data.js
│           ├── intercept.js
│           ├── invoice.js
│           ├── random.js
│           └── user_management.js
├── cypress.config.js                     # Cypress main configuration file
├── package.json                          # Project scripts and dependencies
└── README.md                             # Project documentation
```

---

## ⚙️ Prerequisites

Make sure you have the following installed on your machine:
- **[Node.js](https://nodejs.org/)** (v18.x or v20.x recommended)
- **npm** (comes with Node.js)
- **Git**

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rathahello/cypress_web_ui_testing.git
   cd cypress_web_ui_testing
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```
   > **Note:** Run `npm install` instead of installing Cypress alone so that all supporting libraries (`mochawesome`, `neat-csv`, etc.) are properly set up.

---

## 🚀 Running Tests

### Interactive Mode (GUI)
Launch the Cypress Test Runner for interactive execution, live reloading, and time-travel debugging:

```bash
npm run cy:open
# or
npx cypress open
```

### Headless Mode (CLI)
Run all tests headlessly in terminal:

```bash
npm run cy:run
# or
npx cypress run
```

### Running Specific Test Suites or Specs

- **Run a specific test spec in GUI mode:**
  ```bash
  npx cypress open --spec "cypress/e2e/authentication/tc_01_login_to_orangehrm.cy.js"
  ```

- **Run a specific test spec in headless mode:**
  ```bash
  npx cypress run --spec "cypress/e2e/authentication/tc_01_login_to_orangehrm.cy.js"
  ```

- **Run all tests under a specific folder:**
  ```bash
  npx cypress run --spec "cypress/e2e/tax_invoice/**/*.cy.js"
  ```

### Cross-Browser Execution
Run your tests against different browsers using the npm scripts or CLI flags:

```bash
# Chrome
npm run cy:run:chrome
# or: npx cypress run --browser chrome

# Firefox
npm run cy:run:firefox
# or: npx cypress run --browser firefox

# Microsoft Edge
npm run cy:run:edge
# or: npx cypress run --browser edge

# Electron (Default)
npm run cy:run:electron
# or: npx cypress run --browser electron
```
---

## 📊 Test Reports

This project uses **Mochawesome** to generate clean, readable HTML and JSON test execution reports.

- Reports are automatically saved to: `cypress/reports/`
- Configuration is managed in `cypress.config.js`:
  ```javascript
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  }
  ```
- To view reports locally, open `cypress/reports/mochawesome.html` in any web browser.

---

## 🔄 CI/CD Pipeline

The project includes an automated GitHub Actions pipeline in `.github/workflows/ci-cd.yml`.

### Triggers:
- **Push / Pull Request** to `main` or `master` branches.
- **Manual Dispatch (`workflow_dispatch`)** with custom parameters:
  - `test_environment`: Target environment (`development`, `staging`, `production`).
  - `browser`: Browser selection (`electron`, `chrome`, `firefox`, `edge`).
  - `spec_path`: Select a specific spec file or run all tests (`cypress/e2e/**/*.cy.js`).

### Pipeline Steps:
1. Checks out repository code.
2. Sets up Node.js with npm caching.
3. Installs dependencies via `npm ci`.
4. Executes Cypress test suite with specified browser and target spec.
5. Uploads test report artifacts (`cypress-reports`) retained for 5 days.
6. Publishes an HTML preview summary directly to GitHub Actions.
7. Sends an instant status message to Telegram.

### Telegram Notification Setup:
To enable Telegram notifications, configure these GitHub Repository Secrets:
- `TELEGRAM_BOT_TOKEN`: The API token from BotFather.
- `TELEGRAM_CHAT_ID`: The target Telegram Chat/Channel ID.

---
