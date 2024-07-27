function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('recover-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('recover-form').style.display = 'none';
}

function showRecoverForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('recover-form').style.display = 'block';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert(`Iniciar sesión con correo: ${email}`);
    // Aquí iría la lógica de autenticación
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    alert(`Registrarse con correo: ${email}`);
    // Aquí iría la lógica de registro
}

function recoverPassword() {
    const email = document.getElementById('recover-email').value;
    alert(`Recuperar contraseña para el correo: ${email}`);
    // Aquí iría la lógica de recuperación de contraseña
}

function logout() {
    alert('Cerrar sesión');
    // Aquí iría la lógica de cierre de sesión
}

function searchProducts() {
    const searchQuery = document.getElementById('search').value;
    alert(`Buscar productos con: ${searchQuery}`);
    // Aquí iría la lógica de búsqueda de productos
}
