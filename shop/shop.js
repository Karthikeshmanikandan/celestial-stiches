// Initialize Email.js
(function() {
    emailjs.init("mWAGFGRIx1ZjGVwuP"); // Replace with your Email.js Public Key
})();

let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    let total = 0;
    cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    document.getElementById("total").textContent = `Total: ₹${total}`;
}

// Handle Order Placement
document.getElementById("place-order").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;
    }

    const orderDetails = cart.map(item => `${item.name} - ₹${item.price}`).join("\n");
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    // Email parameters
    const emailParams = {
        to_email: "manikandangs006@gmail.com",
        subject: "New Order from Celestial Threads",
        message: `A new order has been placed:\n\n${orderDetails}\n\nTotal Amount: ₹${totalAmount}`,
    };

    // Send Email using Email.js
    emailjs.send("service_g9ni7kw", "template_ncm0fu7", emailParams)
        .then(() => {
            alert("Order placed successfully! A confirmation email has been sent.");
            cart = []; // Clear cart after order
            updateCart();
        })
        .catch((error) => {
            console.error("Email failed:", error);
            alert("Error placing order. Please try again.");
        });
});
