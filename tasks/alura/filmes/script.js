document.addEventListener("DOMContentLoaded", () => {
    const estrelas = document.querySelectorAll(".estrelas span");
    let avaliacao = 0;

    function resetEstrelas() {
        estrelas.forEach(estrela => {
            estrela.classList.remove('selected');
            estrela.style.color = "#ccc";
        });
    }

    estrelas.forEach((estrela, index) => {
        estrela.addEventListener("click", () => {
            avaliacao = index + 1;

            resetEstrelas();

            for (let i = 0; i <= index; i++) {
                estrelas[i].classList.add('selected');
                estrelas[i].style.color = "#FFD700";
            }
        });
    });

    const btnEnviar = document.getElementById("enviarComentario");
    btnEnviar.addEventListener("click", () => {
        const nome = document.getElementById("nomeUsuario").value;
        const comentario = document.getElementById("comentario").value;
        const listaComentarios = document.getElementById("comentarios-lista");

        if (nome && comentario) {
            const novoComentario = document.createElement("div");
            novoComentario.classList.add("comentario");

            novoComentario.innerHTML = `
                <p><strong>${nome}:</strong> ${comentario} - ⭐${avaliacao}</p>
            `;

            listaComentarios.appendChild(novoComentario);
            document.getElementById("comentario").value = "";
            document.getElementById("nomeUsuario").value = "";
            resetEstrelas();
            avaliacao = 0;
        } else {
            alert("Por favor, preencha seu nome e comentário.");
        }
    });

    // Ajuste para tornar as estrelas menores em telas pequenas
    const ajustarTamanhoEstrelas = () => {
        const larguraTela = window.innerWidth;
        const fontSize = larguraTela < 600 ? '1.5rem' : '2rem'; // Menor em telas menores
        estrelas.forEach(estrela => {
            estrela.style.fontSize = fontSize;
        });
    };

    window.addEventListener("resize", ajustarTamanhoEstrelas); // Adapta ao redimensionar
    ajustarTamanhoEstrelas(); // Chama ao carregar a página
});
