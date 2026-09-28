import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
 
test('Store Admin can add a product successfully', async ({ page }) => {
const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
 
// Log in as Store Admin
await loginPage.login('storeadmin', 'Password123');
 
// Navigate to Inventory module
await inventoryPage.navigateToInventory();
 
// Fill Product Name and Price, then Save
await inventoryPage.addProduct('Wireless Mouse', '25.99');
 
// Verify success toast message
await expect(page.locator('.toast-success'))
.toContainText('Product saved successfully');
});