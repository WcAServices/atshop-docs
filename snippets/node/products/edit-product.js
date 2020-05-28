const shopId = 'your-shop-ID';

const product = {
    _id: 'the-product-you-want-to-edit', // ID of the product you want to update with the following settings.
    shopId: shopId, // Your Shop ID
    name: 'My Product',
    description: '', // Supports markdown.
    purchaseNotes: '', // Also supports markdown.
    value: 100, // Product value in cents. (100 = $1)
    icon: '', // Icon from https://materialdesignicons.com/ We're running a lightweight version so some icons may not work.
    minQuantity: 1, // Minimum order quantity.
    maxQuantity: 0, // Maximum order quantity. Leave at 0 for allowing unlimited order sizes.
    image_url: '', // URI to product image.
    style: 'box', // Product card style. Can be one of 'box', 'dynamic' and 'card'
    requireShipping: 'no', // Whether we should require that customers enter shipping information before completing the payment process. Can be one of 'ask', 'require' and 'no'
    paymentMethods: [], // List of payment methods supported for this product. Leave blank to allow all gateways.
    maxDisplayedStock: 0, // Max number of stock to display to customers for this product. Leave 0 for a full representation of your current stock.
    preventDuplicates: true, // Whether ATShop should prevent you from adding more than one of the same stock entry to this product.
    priority: 10, // The display priority of this product on your shop page. Lower numbers means this product will show up as the first product in the list of products for your shop. A high number will make the product appear last in the list of products.
    category: '', // A category ID to associate this product with. From the categories tab in your admin dashboard.
    displayDescription: true, // Whether we should display the product description directly on the product card instead of requiring users to click 'purchase' before seeing the description.
    useOrderIdAsItemName: false, // Whether we should avoid sending product names directly to payment gateways when customers are checking out.
    hidden: false, // Whether we should hide this product from your shop landing page.
    notForSale: false, // Whether you want to temporarily disallow sales for this product.
}

DDPClient.call('admin.product.edit', [product], (err, resp) => {
    if (err) {
        return console.error(err);
    }

    console.log('Updated product successfully!');
})