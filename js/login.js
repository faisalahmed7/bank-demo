document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const getEmail = userEmail.value;


    const userPassword = document.getElementById('user-password');
    const getPassword = userPassword.value;

    if (getEmail == 'user@bank.com' && getPassword == 'secret') {
        window.location.href = 'banking.html';

    }
})
