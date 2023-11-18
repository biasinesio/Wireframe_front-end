function fazerLogin() {
    let emailUsuario = document.getElementById("email-login").value;
    let senhaUsuario = document.getElementById("password").value;

    let dadosLogin = {email: emailUsuario, senha: senhaUsuario};

    if (validarUsuario(dadosLogin)) {
        window.location.href = "Adm.Html";
    } else {
        alert("Usuário ou senha inválidos");
    }

    document.getElementById('loginEsc').reset();
}
