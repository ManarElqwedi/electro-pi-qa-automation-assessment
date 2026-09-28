import { Page } from '@playwright/test';
 
export class InventoryPage {
constructor(private page: Page) {}
 
async navigateToInventory() {
await this.page.click('text=Inventory');
}
 
async addProduct(productName: string, price: string) {
await this.page.fill('#productName', productName);
await this.page.fill('#price', price);
await this.page.click('button:has-text("Save")');
}
}