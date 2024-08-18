document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для формы регистрации
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password === confirmPassword) {
                alert(`Registration successful! Welcome, ${username}!`);
                window.location.href = 'login.html'; // Перенаправление на страницу входа
            } else {
                alert('Passwords do not match!');
            }
        });
    }

    // Обработчик для формы входа
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Простая проверка данных
            if (email === "user@example.com" && password === "password") {
                alert('Login successful!');
                window.location.href = 'index.html'; // Перенаправление на главную страницу
            } else {
                alert('Invalid email or password!');
            }
        });
    }
});
