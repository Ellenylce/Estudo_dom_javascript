
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

// document.getElementById('senha'): Seleciona o elemento HTML com o ID senha.
// .value: Obtém o valor inserido pelo usuário no campo de senha e armazena na constante senha.
// mesma coisa com os demais
//sem o value: Aqui, apenas o elemento é obtido sem acessar o seu valor imediatamente. 
// para manipular o elemento posteriormente (por exemplo, adicionar classes CSS).
function verificar_senhas() {
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar_senha'); //sem o value
  const mensagemErro = document.getElementById('mensagem_erro');
  // document.getElementById('mensagem_erro'): Seleciona o elemento HTML com o ID mensagem_erro, onde a mensagem de erro será exibida se as senhas não coincidirem.


  // senha !== confirmarSenha.value: Compara o valor da senha com o valor do campo de confirmação de senha. Se os valores não forem iguais, o código dentro do bloco if será executado: "as senhas não coincidem".
  // mensagemErro.textContent = 'As senhas não coincidem';: Define o conteúdo de texto do elemento mensagem_erro para a mensagem de erro "As senhas não coincidem".
  // confirmarSenha.classList.add('error');: Adiciona a classe CSS error ao elemento de confirmação de senha. Esta classe pode ser usada para estilizar o campo de entrada (por exemplo, adicionando uma borda vermelha).
  // confirmarSenha.focus();: Coloca o foco no campo de confirmação de senha, destacando-o para o usuário.
  if (senha !== confirmarSenha.value) {
    mensagemErro.textContent = 'As senhas não coincidem';
    confirmarSenha.classList.add('error');
    confirmarSenha.focus();
  } else {
    mensagemErro.textContent = '';
    confirmarSenha.classList.remove('error');
  }
  // mensagemErro.textContent = '';: Limpa o conteúdo de texto do elemento mensagem_erro, removendo qualquer mensagem de erro exibida anteriormente.
// confirmarSenha.classList.remove('error');: Remove a classe CSS error do elemento de confirmação de senha, caso ela tenha sido adicionada anteriormente.
}



// ----CALCULADORA -----

  // Crie uma mini calculadora em que o usuário coloca 2 valores e escolhe uma operação e obtém o resultado. Use o lançamento de exceções quando aplicável.
  function calcular_soma() {
    // Obtém os valores dos campos de entrada
    // document.getElementById('valor1'): Seleciona o elemento com o ID valor1 e retorna uma referência a esse elemento.
    // value: Obtém o valor do campo de entrada, que é uma string.
    // parseFloat: Converte a string para um número de ponto flutuante.
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const resultado = document.getElementById('resultado');

    // Verifica se os valores são números válidos
    // isNaN(valor1) || isNaN(valor2):Verifica se algum dos valores não é um número válido.
    // innerHTML:Define o conteúdo HTML do elemento resultado.
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.innerHTML = 'Por favor, insira valores numéricos válidos.';
        resultado.style.color = 'red';
        return;
    }

    // Calcula a soma e exibe o resultado
    const soma = valor1 + valor2;
    resultado.innerHTML = `Resultado: ${soma}`;
    resultado.style.color = 'green';
}

function calcular_sub() {
  // Obtém os valores dos campos de entrada
  // document.getElementById('valor1'): Seleciona o elemento com o ID valor1 e retorna uma referência a esse elemento.
  // value: Obtém o valor do campo de entrada, que é uma string.
  // parseFloat: Converte a string para um número de ponto flutuante.
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const resultado = document.getElementById('resultado');

  // Verifica se os valores são números válidos
  // isNaN(valor1) || isNaN(valor2):Verifica se algum dos valores não é um número válido.
  // innerHTML:Define o conteúdo HTML do elemento resultado.
  if (isNaN(valor1) || isNaN(valor2)) {
      resultado.innerHTML = 'Por favor, insira valores numéricos válidos.';
      resultado.style.color = 'red';
      return;
  }

  // Calcula a subtração e exibe o resultado
  const sub = valor1 - valor2;
  resultado.innerHTML = `Resultado: ${sub}`;
  resultado.style.color = 'green';
}



function calcular_mult() {
  // Obtém os valores dos campos de entrada
  // document.getElementById('valor1'): Seleciona o elemento com o ID valor1 e retorna uma referência a esse elemento.
  // value: Obtém o valor do campo de entrada, que é uma string.
  // parseFloat: Converte a string para um número de ponto flutuante.
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const resultado = document.getElementById('resultado');

  // Verifica se os valores são números válidos
  // isNaN(valor1) || isNaN(valor2):Verifica se algum dos valores não é um número válido.
  // innerHTML:Define o conteúdo HTML do elemento resultado.
  if (isNaN(valor1) || isNaN(valor2)) {
      resultado.innerHTML = 'Por favor, insira valores numéricos válidos.';
      resultado.style.color = 'red';
      return;
  }

  // Calcula a multiplicação e exibe o resultado
  const mult = valor1 * valor2;
  resultado.innerHTML = `Resultado: ${mult}`;
  resultado.style.color = 'green';
}


function calcular_div() {
  // Obtém os valores dos campos de entrada
  // document.getElementById('valor1'): Seleciona o elemento com o ID valor1 e retorna uma referência a esse elemento.
  // value: Obtém o valor do campo de entrada, que é uma string.
  // parseFloat: Converte a string para um número de ponto flutuante.
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const resultado = document.getElementById('resultado');

  try {
    // Verifica se os valores são números válidos
    // isNaN(valor1) || isNaN(valor2): Verifica se algum dos valores não é um número válido.
    // innerHTML: Define o conteúdo HTML do elemento resultado.
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.innerHTML = 'Por favor, insira valores numéricos válidos.';
        resultado.style.color = 'red';
        return;
    }

    // Verifica se o divisor é zero
    // valor2 === 0: Verifica se o segundo valor é zero.
    if (valor2 === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }

    // Calcula a divisão e exibe o resultado
    // div: Calcula o quociente entre valor1 e valor2.
    // innerHTML: Define o conteúdo HTML do elemento resultado.
    const div = valor1 / valor2;
    resultado.innerHTML = `Resultado: ${div}`;
    resultado.style.color = 'green';

  } catch (error) {
    // Exibe mensagens de erro
    // error.message: Obtém a mensagem de erro lançada pelo throw.
    resultado.innerHTML = error.message;
    resultado.style.color = 'red';
  }
}

// ----- BOAS VINDAS ----
function mostrar_boas_vindas() {
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`; //Atualiza o conteúdo de mensagem: A propriedade textContent do elemento mensagem é alterada para o valor da string entre as aspas.
}












  







