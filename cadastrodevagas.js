let vagasCadastradas = [];
const vagasTotal = 10; 

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const vaga = document.getElementById('vaga').value;
    const descricao = document.getElementById('descricao').value;

    
    vagasCadastradas.push({ vaga, descricao });
    atualizarListaDeVagas();

    document.getElementById('formCadastro').reset();
});

function atualizarListaDeVagas() {
    const listaVagas = document.getElementById('listaVagas');
    listaVagas.innerHTML = ''; 

    vagasCadastradas.forEach((vaga) => {
        const li = document.createElement('li');
        li.textContent = `Vaga ${vaga.vaga} - Descrição: ${vaga.descricao}`;
        listaVagas.appendChild(li);
    });
}


document.getElementById('listar-vagas-btn').addEventListener('click', function() {
    const listaDisponiveis = document.getElementById('lista-cadastrada');
    listaDisponiveis.innerHTML = ''; 

    const vagasOcupadas = vagasCadastradas.map(vaga => Number(vaga.vaga));

    for (let i = 1; i <= vagasTotal; i++) {
        if (!vagasOcupadas.includes(i)) {
            const vagaElement = document.createElement('div');
            vagaElement.textContent = `Vaga ${i} disponível`;
            listaDisponiveis.appendChild(vagaElement);
        }
    }
});
