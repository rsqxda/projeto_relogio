// passar o tempo a cada segundo
function atualizarTempo() {


    // 4) SELECIONANDO A TAG DISPLAY
    let display = document.querySelector('.display');

    // 1)
    let relogio = new Date();

    // 2) 
    let horario = adicionarZeroNoHorario(relogio.getHours()) + ':' + adicionarZeroNoHorario(relogio.getMinutes()) + ':' + adicionarZeroNoHorario(relogio.getSeconds());

    // 5) CONTEUDO DA DIV DISPLAY, VAI RECEBER O HORARIO
    display.textContent = horario;


}






function adicionarZeroNoHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero
    }

    return numero
}





atualizarTempo();
// 6) atualizar a cada segundo, FUNÇAO SÓ RECEBE EM MILESSEGUNDOS
setInterval(atualizarTempo, 1000);

// 3)
console.log(horario);