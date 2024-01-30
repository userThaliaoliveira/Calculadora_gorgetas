function calculateTip(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    let bill = document.getElementById('bill').value; // Obtém o valor do campo de entrada 'bill'
    let serviceQual = document.getElementById('serviceQual').value; // Obtém o valor do campo de seleção 'serviceQual'
    let numOfPeople = document.getElementById('people').value; // Obtém o valor do campo de entrada 'people'

    if(bill == '' || serviceQual == 0) { // Verifica se o valor da conta ou a qualidade do serviço não foram preenchidos
        alert("Por favor, preencha os valores."); // Exibe um alerta para o usuário preencher os valores
        return; // Retorna para interromper a execução da função
    }

    if(numOfPeople == '' || numOfPeople <= 1) { // Verifica se o número de pessoas não foi preenchido ou é menor ou igual a 1
        numOfPeople = 1; // Define o número de pessoas como 1
        document.getElementById('each').style.display = "none"; // Oculta o texto 'cada'
    } else {
        document.getElementById('each').style.display = "block"; // Exibe o texto 'cada'
    }
    
    let total = (bill * serviceQual) / numOfPeople; // Calcula o valor total da gorjeta
    total = total.toFixed(2); // Formata o total para ter duas casas decimais
    document.getElementById('tip').innerHTML = total; // Define o valor total da gorjeta no elemento com o id 'tip'
    document.getElementById("totalTip").style.display = "block"; // Exibe o elemento com o id 'totalTip'
}

document.getElementById("totalTip").style.display = "none"; // Oculta o elemento com o id 'totalTip' inicialmente
document.getElementById("each").style.display = "none"; // Oculta o elemento com o id 'each' inicialmente

document.getElementById('tipsForm').addEventListener('submit', calculateTip); // Adiciona um ouvinte de evento para o envio do formulário que chama a função 'calculateTip'
