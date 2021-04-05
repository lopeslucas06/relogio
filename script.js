function relogio() {  
    //Pegar os elementos HTML  
    let hora = document.getElementById('hr');
    let minuto = document.getElementById('mn');
    let segundo = document.getElementById('sc');

    //Variáveis pegando Hora, Minuto e Segundo atual da máquina do usuário
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // Adicionar 0 antes do número caso seja menor que 10  
    if (h < 10){
        h = '0' + h;
    }
    if (m < 10){
        m = '0' + m;
    }
    if (s < 10){
        s = '0' + s;
    }
    //Adicionando as variáveis no HTML
    hora.innerHTML = h;
    minuto.innerHTML = m;
    segundo.innerHTML = s;    
}

//Intervalo em que a função relógio será executada
setInterval(relogio, 1000);

