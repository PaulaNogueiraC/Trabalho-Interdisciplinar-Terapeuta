document.addEventListener('DOMContentLoaded', () => {
    // Função para alternar a exibição de elementos
    function toggle(el) {
        var display = document.getElementById(el);
        if (display.style.display === "none") {
            display.style.display = 'grid';
            ajustarTamanhoBlocoRosa(); // Chamada para ajustar o tamanho do bloco rosa quando exibido
        } else {
            display.style.display = 'none';
        }
    }

    // Função para mostrar o pop-up de sucesso
    function showSuccessPopup() {
        alert("Consulta desmarcada!");
    }

    // Função para mostrar mensagem de "Sem Consultas"
    function mostrarMensagemSemConsulta() {
        if (!document.querySelector('.Sem_Consultas')) {
            const message = document.createElement('p');
            message.textContent = 'Nenhuma consulta agendada!';
            message.classList.add('Sem_Consultas');
            const container = document.getElementById('agenda');
            container.appendChild(message);
        }
    }

    // Função para desmarcar consulta
    function desmarcarConsulta(botao) {
        // Encontra o elemento pai da consulta
        var consulta = botao.closest('.consulta');
        // Mostra o pop-up de sucesso
        showSuccessPopup();
        // Remove a consulta do DOM
        consulta.remove();

        // Verifica se ainda existem consultas restantes
        if (document.querySelectorAll('.consulta').length === 0) {
            mostrarMensagemSemConsulta();
        }

        // Ajusta o tamanho do bloco rosa
        ajustarTamanhoBlocoRosa();
    }

// Função para ajustar o tamanho do bloco rosa com efeito de transição

// Função para ajustar o tamanho do bloco rosa com efeito de transição
function ajustarTamanhoBlocoRosa() {
    // Encontra o bloco rosa
    var blocoRosa = document.getElementById('agenda');
    // Encontra as consultas
    var consultas = document.querySelectorAll('.consulta');
    // Verifica se há consultas
    if (consultas.length > 0) {
        // Define a altura do bloco rosa grande
        blocoRosa.style.height = '600px';
    } else {
        // Define a altura do bloco rosa pequeno
        blocoRosa.style.height = '150px';
    }
}



    // Seleciona todos os botões de "Desmarcar Consulta"
    var botoesDesmarcarConsulta = document.querySelectorAll('.button-container button');

    // Adiciona um event listener para cada botão de desmarcar consulta
    botoesDesmarcarConsulta.forEach(function(botao) {
        botao.addEventListener('click', function() {
            desmarcarConsulta(botao);
        });
    });

    // Adiciona event listener ao item do menu lateral para alternar a agenda
    var agendaMenu = document.querySelector('.item-menu.ativo');
    agendaMenu.addEventListener('click', function() {
        toggle('agenda');
    });

    // Ajusta o tamanho do bloco rosa quando a página é carregada
    ajustarTamanhoBlocoRosa();
});

fetch('http://localhost:3000/agenda')
.then(res => res.json() )
 .then(data => {
  console.log(data);
   document.getElementById('nome').src = data.nome;
   document.getElementById('especialidade').src = data.especialidade;
   document.getElementById('image').src = data.image;
})