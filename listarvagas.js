

document.addEventListener('DOMContentLoaded', () => {
    const listaDisponiveis = document.getElementById('listaDisponiveis');

    
    fetch('vagasdisponiveis.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
           
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

           
            const vagas = tempDiv.querySelectorAll('.vaga');

            
            vagas.forEach(vaga => {
                const vagaElement = document.createElement('div');
                vagaElement.innerText = vaga.innerText; 
                listaDisponiveis.appendChild(vagaElement); 
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
