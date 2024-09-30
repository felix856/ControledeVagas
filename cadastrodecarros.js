let carrosCadastrados = [];

document.getElementById('formCarro').addEventListener('submit', function(event) {
    event.preventDefault();

    const placa = document.getElementById('placa').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const cor = document.getElementById('cor').value.trim();
    const vaga = document.getElementById('vaga').value.trim();

    
    if (!placa || !nome || !modelo || !cor || !vaga) {
        alert('Por favor, preencha todos os campos.');
        return; 
    }

    
    carrosCadastrados.push({ placa, nome, modelo, cor, vaga });
    atualizarListaDeCarros();

   
    document.getElementById('formCarro').reset();
});

function atualizarListaDeCarros() {
    const listaCarros = document.getElementById('listaCarros');
    listaCarros.innerHTML = '';

    const fragment = document.createDocumentFragment(); 
    carrosCadastrados.forEach(carro => {
        const li = document.createElement('li');
        li.textContent = `Placa: ${carro.placa}, Proprietário: ${carro.nome}, Modelo: ${carro.modelo}, Cor: ${carro.cor}, Vaga: ${carro.vaga}`;
        fragment.appendChild(li); 
    });

    listaCarros.appendChild(fragment); 
}
