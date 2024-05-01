document.addEventListener('DOMContentLoaded', function () {
    const switchToRegisterFromLogin = document.getElementById('switchToRegisterFromLogin');
    const switchToLoginFromRegister = document.getElementById('switchToLoginFromRegister');

    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

    // Функция для переключения с входа на регистрацию
    switchToRegisterFromLogin.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.hide();  // Закрываем окно входа
        registerModal.show();  // Открываем окно регистрации
    });

    // Функция для переключения с регистрации на вход
    switchToLoginFromRegister.addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.hide();  // Закрываем окно регистрации
        loginModal.show();  // Открываем окно входа
    });

    // Код для корректного закрытия модальных окон при переключении
    $('#loginModal').on('hidden.bs.modal', function () {
        registerModal.hide();
    });

    $('#registerModal').on('hidden.bs.modal', function () {
        loginModal.hide();
    });
});