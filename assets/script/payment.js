document.addEventListener('DOMContentLoaded', function() {
    // Получите все элементы с классом "payment-item"
    const paymentItems = document.querySelectorAll('.payment-item');

    // Функция для добавления класса при нажатии на элемент
    function toggleBackground(event) {
        const element = event.currentTarget;

        // Переключить класс "active" для изменения стилей
        element.classList.toggle('active');
    }

    // Добавьте обработчик событий для каждого элемента
    paymentItems.forEach(function(item) {
        item.addEventListener('click', toggleBackground);
    });
});