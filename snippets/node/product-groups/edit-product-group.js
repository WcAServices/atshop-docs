const shopId = 'your-shop-ID';
const productGroupId = 'ID-of-the-group-you-want-to-edit';

const productGroup = {
    _id: productGroupId, // The product group you want to edit.
    shopId: shopId, // Your Shop ID
    name: 'My Product Group', // Add a name for your product group.
    description: '', // Markdown supported.
    style: 'card', // Product card style. Can be 'dynamic', 'box', or 'card'.
    image_url: '', // URI to product group image.
    icon: '', // Icon from https://materialdesignicons.com/ We're running a lightweight version so some icons may not work.
    priority: 15, // Display priority for this group. Lower numbers will result in the product showing up earlier in the list of product. Higher numbers will show up later.
    maxDisplayedStock: 0, // Max number of stock to display to your customers for any attached products. Set to '0' to display an accurate representation of available stock.
    category: '', // ID of the category this product group should show up in.
    displayDescription: true, // Whether you want to display the description for this group directly on its card or just in the purchase modal.
    productIds: ['lqHmT5CuB7Zhigzfz'], // Array of product IDs to attach to this product group.
}

DDPClient.call('shop.product.groups.save', [productGroup], (err, resp) => {
    if (err) {
        return console.error(err);
    }

    console.log('Successfully created product group!');
})