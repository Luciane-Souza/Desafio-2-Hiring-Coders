const formulario = document.getElementById('formulario');
const formularioProduto = document.getElementById('formulario-produto');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let dados = {
        nome,
        email,
        cpf,
        endereco,
        bairro,
        cidade
    }
    let converterJson = JSON.stringify(dados);

    localStorage.setItem('cadastro', converterJson);

    let contemFormulario = document.getElementById('contem-formulario');

    let carregando = `<img class="spinner" src="img/spinner.svg" alt="carregando">`;

    let mensagem = `<h2 class="spinner">Cliente cadastrado!</h2>`;
    
    contemFormulario.innerHTML = carregando;

    setTimeout(()=>{
        contemFormulario.innerHTML = mensagem;
    }, 1000)
})


formularioProduto.addEventListener('submit', (e)=>{
    e.preventDefault();
    let codigoProduto = document.getElementById('codigo-produto').value;
    let produto  = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let preco = document.getElementById('preco').value;
    let dados = {
        codigoProduto,
        produto,
        quantidade,
        preco
    }
    let converterJson = JSON.stringify(dados);

    localStorage.setItem('cadastro-produto', converterJson);

    let contemFormulario = document.getElementById('contem-formulario-produtos');

    let carregando = `<img class="spinner" src="img/spinner.svg" alt="carregando">`;

    let mensagem = `<h2 class="spinner">Produto cadastrado!</h2>`;
    
    contemFormulario.innerHTML = carregando;

    setTimeout(()=>{
        contemFormulario.innerHTML = mensagem;
    }, 1000)
})