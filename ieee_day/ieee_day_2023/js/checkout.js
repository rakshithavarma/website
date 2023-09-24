// Retrieve cart data from localStorage
const cartData = JSON.parse(localStorage.getItem("cartData"));

// Display selected items in the checkout page
const checkoutItemsElement = document.getElementById("checkout-items");
const totalAmountElement = document.getElementById("total-amount");

if (cartData && cartData.items) {
    cartData.items.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        checkoutItemsElement.appendChild(row);
    });
}

if (cartData && cartData.total) {
    totalAmountElement.textContent = cartData.total.toFixed(2);
}