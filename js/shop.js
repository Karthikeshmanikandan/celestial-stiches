let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    totalElement.textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}