# Electro Pi QA Automation Assessment
 
## Framework Selection
 
I chose **Playwright with TypeScript** for the following reasons:
 
- Excellent support for modern web applications with dynamic UI components.
- Built-in auto-waiting reduces flaky tests.
- Fast execution with parallel testing.
- Cross-browser support (Chrome, Firefox, WebKit).
- Built-in API testing capabilities.
- Easy CI/CD integration.
 
## Framework Design
 
The framework follows the **Page Object Model (POM)** design pattern to improve maintainability and reusability.
 
### Project Structure
 
```text
pages/
├── LoginPage.ts
└── InventoryPage.ts
