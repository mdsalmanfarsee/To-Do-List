let value = 0;
function showcart() {
    console.log(`cart items are: ${value}`);
}

function updatecart(amount) {
    value += amount;
    console.log(`cart items are: ${value}`);
}
function resetval() {
    value = 0;
    console.log(`cart items are: ${value}`);
}