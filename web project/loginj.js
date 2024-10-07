function loginWithGoogle() {
    alert("Login with Google button clicked!");
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`Email: ${email}, Password: ${password}`);
    alert("Login button clicked!");
}
