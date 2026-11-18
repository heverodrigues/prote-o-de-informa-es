
function criptografar() {
    let senha = document.getElementById("senha").value;

    if (!/^\d+$/.test(senha)) {
        document.getElementById("resultado").innerText =
            "Digite apenas números!";
        return;
    }

    let resultado = "";

    for (let numero of senha) {
        resultado += (Number(numero) + 1) % 10;
    }

    document.getElementById("resultado").innerText =
        "Senha transformada: " + resultado;
}

function responder(opcao) {
    let mensagem = "";

    if (opcao === 1) {
        mensagem = "Correto! A criptografia ajuda a proteger informações.";
    } else if (opcao === 3) {
        mensagem = "Correto! A biblioteca hashlib gera hashes.";
    } else {
        mensagem = "Resposta incorreta. Tente novamente!";
    }

    document.getElementById("resposta").innerText = mensagem;
}
