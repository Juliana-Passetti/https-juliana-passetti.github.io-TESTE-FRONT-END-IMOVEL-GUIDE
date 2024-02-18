/*----CPF------*/

var cpfInput = document.getElementById('cpf');


cpfInput.addEventListener('input', function (event) {

    var cpf = event.target.value.replace(/\D/g, '');


    if (cpf.length > 3 && cpf.length < 7) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    } else if (cpf.length > 6 && cpf.length < 10) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
    } else if (cpf.length > 9 && cpf.length < 12) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
    }

    event.target.value = cpf;
});



/*----TELEFONE------*/


var telefoneInput = document.getElementById('telefone');


telefoneInput.addEventListener('input', function (event) {

    var telefone = event.target.value.replace(/\D/g, '');


    if (telefone.length <= 10) {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }


    event.target.value = telefone;
});









/*----LIMPAR FORMULÁRIOS------*/

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.container__mensagem'); // seleciona o formulário
    const alerta = document.getElementById('alerta'); // seleciona o elemento de alerta, se necessário

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Simula o envio da mensagem (exemplo: após 1 segundo)
        setTimeout(function () {
            alert('Mensagem enviada com sucesso!');
            formulario.reset(); // Reseta os campos do formulário após o alerta
        }, 1000);
    });
});



/*----REGRA DE 3------*/


var botao = document.getElementById('meuBotao');


botao.addEventListener('click', function () {

    alert('Mensagem enviada com sucesso!');
});

function calcular() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var valor3 = parseFloat(document.getElementById('valor3').value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert('Por favor, digite valores válidos para os campos.');
        return;
    }

    var resultado = (valor3 * valor2) / valor1;

    document.getElementById('resultado').value = resultado.toFixed(2);

}

/*-----IMAGEM MODAL-----*/

// Seleciona o botão e o modal
var btnAbrirModal = document.getElementById('btnAbrirModal');
var modal = document.getElementById('modal');
var imagemModal = document.getElementById('imagemModal');

// Adiciona um manipulador de eventos ao botão para abrir o modal
btnAbrirModal.addEventListener('click', function () {
    // Define a imagem que será exibida no modal
    imagemModal.src = '/img/casa.png';
    // Exibe o modal
    modal.style.display = 'block';
});

// Função para fechar o modal
function fecharModal() {
    modal.style.display = 'none';
}

/*-----IMAGEM DOWNLOAD-----*/

document.getElementById('botaoDownload').addEventListener('click', function () {
    var imagem = document.getElementById('imagemParaDownload');

    // Cria um canvas temporário
    var canvas = document.createElement('canvas');
    var contexto = canvas.getContext('2d');

    // Define o tamanho do canvas para ser o mesmo da imagem
    canvas.width = imagem.width;
    canvas.height = imagem.height;

    // Desenha a imagem no canvas
    contexto.drawImage(imagem, 0, 0);

    // Converte o conteúdo do canvas para uma URL de dados
    var url = canvas.toDataURL();

    // Cria um link temporário para download da imagem
    var link = document.createElement('a');
    link.href = url;
    link.download = 'imagem_download.png'; // Define o nome do arquivo
    link.click();
});