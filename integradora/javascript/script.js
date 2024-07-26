document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const logoutLink = document.getElementById('logout-link');
    const recoverLink = document.getElementById('recover-link');

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const recoverModal = document.getElementById('recover-modal');

    const closeButtons = document.querySelectorAll('.close');

    loginLink.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    registerLink.addEventListener('click', () => {
        registerModal.style.display = 'block';
    });

    recoverLink.addEventListener('click', () => {
        recoverModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            recoverModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target == registerModal) {
            registerModal.style.display = 'none';
        } else if (event.target == recoverModal) {
            recoverModal.style.display = 'none';
        }
    });

    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Aquí iría el código para iniciar sesión
        loginModal.style.display = 'none';
        logoutLink.style.display = 'block';
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
    });

    document.getElementById('register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Aquí iría el código para registrar al usuario
        registerModal.style.display = 'none';
    });

    document.getElementById('recover-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Aquí iría el código para recuperar la contraseña
        recoverModal.style.display = 'none';
    });

    logoutLink.addEventListener('click', () => {
        // Aquí iría el código para cerrar sesión
        logoutLink.style.display = 'none';
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
    });
});
