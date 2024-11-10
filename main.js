document.addEventListener("DOMContentLoaded", () => {
    const tarefaInput = document.getElementById("tarefa");
    const adicionarButton = document.getElementById("adicionar");
    const lista = document.getElementById("lista");
    const reacaoDiv = document.querySelector(".reacao");

    // Função para alterar a imagem da reação
    function mudarReacao(imagem) {
        reacaoDiv.innerHTML = ''; // Limpa as imagens anteriores
        const img = document.createElement('img');
        img.src = imagem;
        img.alt = 'Reação';
        reacaoDiv.appendChild(img);
    }

    adicionarButton.addEventListener("click", () => {
        const tarefaTexto = tarefaInput.value.trim();

        if (tarefaTexto !== "") {
            const tarefaItem = document.createElement("li");
            
            // Criando o contêiner do texto da tarefa
            const textoContainer = document.createElement("span");
            textoContainer.textContent = tarefaTexto;

            // Criando o contêiner dos botões
            const botoesContainer = document.createElement("div");
            botoesContainer.classList.add("botoes-container");

            const editarButton = document.createElement("button");
            editarButton.textContent = "Editar";
            editarButton.addEventListener("click", () => {
                const novoTexto = prompt("Edite sua tarefa:", tarefaTexto);
                if (novoTexto) {
                    textoContainer.textContent = novoTexto;
                }
                mudarReacao('2.png');
            });

            const concluirButton = document.createElement("button");
            concluirButton.textContent = "Concluir";
            concluirButton.addEventListener("click", () => {
                tarefaItem.classList.toggle("concluida");
                mudarReacao('1.png');
            });

            const excluirButton = document.createElement("button");
            excluirButton.textContent = "Excluir";
            excluirButton.addEventListener("click", () => {
                lista.removeChild(tarefaItem);
                mudarReacao('3.png');
            });

            botoesContainer.appendChild(editarButton);
            botoesContainer.appendChild(concluirButton);
            botoesContainer.appendChild(excluirButton);  // Adicionando o botão de excluir

            // Adicionando texto e botões ao item da lista
            tarefaItem.appendChild(textoContainer);
            tarefaItem.appendChild(botoesContainer);
            lista.appendChild(tarefaItem);

            tarefaInput.value = "";
        }
    });
});
