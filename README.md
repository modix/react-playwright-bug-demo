# React Playwright Issue Demonstration

This project demonstrates an issue where Playwright fails to locate React components that do not return an HTML element. Although the content of such components (e.g., `TextComponent`) is visible in the browser, Playwright tests cannot find them using React selectors.

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd react-playwright-example
```

3. Install the dependencies:
```bash
npm install
```

4. Install Playwright browsers:
```bash
npx playwright install
```

## Usage

### Start the React App

To start the React app, use the following command:
```bash
npm start
```

The app should be running at ```http://localhost:3000```.

### Run the Playwright Test

To run the Playwright test, use the following command:
```bash
npm test
```
