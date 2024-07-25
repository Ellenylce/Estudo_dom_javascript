
        // ------ EXERCICIO DA LAMPADA ------"
        
        function alterar_lampada() {
            // pega o elemento com o id "lampada" e põe na constante "lampada"
            const lampada = document.getElementById('lampada');
            // Pego o caminho da imagem atual (src = url('imgs/lampada_desligada.png')) põe na contante "imgAtual"
            const imgAtual = lampada.src;
            // Pego o elemento body e ponho na constante "body"
            const body = document.body;
      
            //Verifica se a string armazenada em imgAtual (o caminho da imagem atual) contém a string "lampada_desligada". Se a lâmpada estiver com a imagem desligada, essa condição será verdadeira. 
            // lampada.src = 'imgs/lampada_ligada.png';: Altera o atributo src da lâmpada para o caminho da imagem da lâmpada ligada. Isso fará com que a imagem na página seja atualizada. E body.style.backgroundColor = 'white': altera a cor de fundo do body.
            // Se a condição for falsa (a lâmpada está ligada), o código dentro do else será executado.
            // lampada.src = 'imgs/lampada_desligada.png';
            // Altera o atributo src da lâmpada para o caminho da imagem da lâmpada desligada. E muda a cor de fundo do body para black

            if (imgAtual.includes('lampada_desligada.png')) {
              lampada.src = 'imgs/lampada_ligada.png';
              body.style.backgroundColor = 'white';
            } else {
              lampada.src = 'imgs/lampada_desligada.png';
              body.style.backgroundColor = 'black';
            }
          }

    // -----EXERCICIO DO INPUT ---

    //  ------ EXERCICIO DA VISUALIZAR SENHA -------
    // Crie um campo de um formulário para senha que seja possível o usuário clicar em um botão e verificar a senha, depois use o mesmo botão para ocultar a senha novamente.
function status_senha(){
    // Pego o elemento id senha (input da senha) e ponho na constante senha
    const senha = document.getElementById ('senha');
    const status_icone = document.getElementById ('icone_senha_n_visivel');
    const iconeAtual = status_icone.src ;

    if(senha.type === "password"){
        senha.type = "text";
        status_icone.src = "imgs/ senha_visivel.png";
    }else{
        senha.type = "password";
        status_icone.src = "imgs/senha_n_visivel.png";
    }
}

// function toggleSenha() {
//     const senha = document.getElementById('senha');
//     const toggleSenha = document.getElementById('toggleSenha');
//     if (senha.type === "password") {
//         senha.type = "text";
//         toggleSenha.classList.remove('fa-eye');
//         toggleSenha.classList.add('fa-eye-slash');
//     } else {
//         senha.type = "password";
//         toggleSenha.classList.remove('fa-eye-slash');
//         toggleSenha.classList.add('fa-eye');
//     }
// }