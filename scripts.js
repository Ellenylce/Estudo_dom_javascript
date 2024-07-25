
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
    

    if(senha.type === "password"){
        senha.type = "text";
        status_icone.src = "imgs/senha_visivel.png";
    }else{
        senha.type = "password";
        status_icone.src = "imgs/senha_n_visivel.png";
    }
}

// EXERCICIO CONFIRMAR SENHA

// Visibilidade em password e text
function status_confirmar_senha(){
  // Pego o elemento id confirmar_senha (input do confirmar_senha) e ponho na constante confirmar_senha
  const confirmar_senha = document.getElementById ('confirmar_senha');
  const status_icone_confirmar_senhar = document.getElementById ('icone_confirmar_senha_n_visivel');
  

  if(confirmar_senha.type === "password"){
      confirmar_senha.type = "text";
      status_icone_confirmar_senhar.src = "imgs/senha_visivel.png";
  }else{
      confirmar_senha.type = "password";
      status_icone_confirmar_senhar.src = "imgs/senha_n_visivel.png";
  }
}

// verificar senha
 function verificar_senhas(){
  
  const senha = document.getElementById('senha').value;
  const confirmar_senha = document.getElementById('confirmar_senha').value;
  const mensagem_erro = document.getElementById('mensagem_erro');

  if(senha !== confirmar_senha){
    mensagem_erro.textContent = 'As senhas não coincidem';
    // confirmar_senha.classList.add ('error');
    confirmar_senha.focus();
  }else{
    mensagem_erro.textContent = '';
    confirmar_senha.classList.remove('error');
    
    }
  }
 
  // Crie uma mini calculadora em que o usuário coloca 2 valores e escolhe uma operação e obtém o resultado. Use o lançamento de exceções quando aplicável.


  





















  

//   function calcular(operacao) {
//     const valor1 = parseFloat(document.getElementById('valor1').value);
//     const valor2 = parseFloat(document.getElementById('valor2').value);
//     const resultado = document.getElementById('resultado');

//     try {
//         if (isNaN(valor1) || isNaN(valor2)) {
//             throw new Error('Por favor, insira dois valores numéricos.');
//         }

//         let resultadoFinal;

//         switch (operacao) {
//             case 'add':
//                 resultadoFinal = valor1 + valor2;
//                 break;
//             case 'sub':
//                 resultadoFinal = valor1 - valor2;
//                 break;
//             case 'mul':
//                 resultadoFinal = valor1 * valor2;
//                 break;
//             case 'div':
//                 if (valor2 === 0) {
//                     throw new Error('Divisão por zero não é permitida.');
//                 }
//                 resultadoFinal = valor1 / valor2;
//                 break;
//             default:
//                 throw new Error('Operação inválida.');
//         }

//         resultado.textContent = `Resultado: ${resultadoFinal}`;
//         resultado.style.color = 'green';

//     } catch (error) {
//         resultado.textContent = `Erro: ${error.message}`;
//         resultado.style.color = 'red';
//     }
// }















// }

// function validarSenha() {
  // // const senha = document.getElementById('senha').value;
  // const confirmarSenha = document.getElementById('confirmar_senha').value;   


  // const mensagemErro = document.getElementById('mensagem_erro');

  // if (senha !== confirmarSenha) {
  //   mensagemErro.textContent = 'As senhas não coincidem.';
  //   confirmarSenha.classList.add('error');
  //   confirmarSenha.focus();
  // } else {
  //   mensagemErro.textContent = ''; // Limpa a mensagem de erro
  //   confirmarSenha.classList.remove('error');
  // }





// // function status_senha(inputId, iconId) {
//   const senha = document.getElementById(inputId);
//   const status_icone = document.getElementById(iconId);

//   if (senha.type === "password") {
//       senha.type = "text";
//       status_icone.src = "imgs/senha_visivel.png";
//   } else {
//       senha.type = "password";
//       status_icone.src = "imgs/senha_n_visivel.png";
//   }


// function verificarSenhas() {
//   const senha = document.getElementById('senha').value;
//   const confirmarSenha = document.getElementById('confirmar-senha').value;
//   const mensagem = document.getElementById('mensagem');
//   const confirmarSenhaInput = document.getElementById('confirmar-senha');

//   if (senha && confirmarSenha) {
//       if (senha === confirmarSenha) {
//           mensagem.textContent = 'As senhas coincidem.';
//           mensagem.style.color = 'green';
//           confirmarSenhaInput.classList.remove('error');
//       } else {
//           mensagem.textContent = 'As senhas não coincidem.';
//           mensagem.style.color = 'red';
//           confirmarSenhaInput.classList.add('error');
//           confirmarSenhaInput.focus(); // Focar no campo de confirmação de senha
//       }
//   } else {
//       mensagem.textContent = 'Por favor, preencha ambos os campos de senha.';
//       mensagem.style.color = 'red';
//       confirmarSenhaInput.classList.add('error');
//       confirmarSenhaInput.focus(); // Focar no campo de confirmação de senha
//   }
// }

// function focarNoCampoSenha() {
//   const senha = document.getElementById('senha');
//   senha.focus();
// }