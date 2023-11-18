
function pegarDadosContato() {
    let nomeUsuario = document.getElementById("nomeContato").value;
    let emailUsuario = document.getElementById("emailContato").value;
    let mensagemUsuario = document.getElementById("mensagemContato").value;

    let dadosContato = { nome: nomeUsuario, email: emailUsuario, mensagem: mensagemUsuario };

    inserirMensagem(dadosContato);

    document.getElementById('contatoEsc').reset();
}
