
document.addEventListener('DOMContentLoaded', function () {
    const orderItemsList = document.getElementById('order-items');
    const totalCostElement = document.getElementById('total-cost');

    const orderData = JSON.parse(localStorage.getItem('lastOrder'));
    let total = 0;

    if (orderData && orderData.items) {
        orderData.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('order-item');
            listItem.textContent = `${item.name} - Ilość: ${item.quantity} x ${item.price} = ${item.subtotal.toFixed(2)} zł`;
            orderItemsList.appendChild(listItem);
            total += item.subtotal;
        });
        totalCostElement.textContent = `Łączny koszt: ${total.toFixed(2)} zł`;
        localStorage.removeItem('lastOrder');
    } else {
        const message = document.createElement('p');
        message.textContent = 'Brak danych zamówienia.';
        orderItemsList.appendChild(message);
    }
});
