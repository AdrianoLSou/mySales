document.addEventListener('DOMContentLoaded', function () {
    let btnToEnter = document.getElementById('btn-toEnter');
    btnToEnter.addEventListener('click', function () {
        /* Validar dados do login. Estando corretos, redirecionar para a página inicial*/
        let validUsers = {
            'user1': "password1",
            'user2': "password2",
        };
        document.getElementById('login-form').onsubmit = function (event) {
            event.preventDefault();// Impede o envio padrão do formulário

            let user = document.querySelector('#login-form input[type="text"]').value;
            let password = document.querySelector('#login-form input[type="password"]').value;

            if (validUsers[user] && validUsers[user] === password) {
                window.location.href = 'hrml/catalogo.html';
            } else {
                alert('Nome de usuário ou senha incorretos!');
            }
        };
        window.location.href = 'hrml/catalogo.html';
    })
})
