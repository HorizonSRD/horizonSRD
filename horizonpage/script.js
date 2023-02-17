const addCarregar = () =>  {
    const button = document.querySelector('button');
    button.innerHTML = '<img src="img/loadingg.png" class="carregar" alt="animação carregar">';
}

addCarregar();


const lidarSubimit = (event) => {
    event.preventDefault();
    alert('Enviando formulário...');
}

document.querySelector('form').addEventListener('submit', lidarSubimit);