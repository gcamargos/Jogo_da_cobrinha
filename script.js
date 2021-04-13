let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') /*renderiza o desenho de dentro do canvas*/
let box = 32; /*32 pixels cada quadrado */
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box

}

function criarBG() { /**funcao que desenha e define o canva */
  context.fillStyle = "Lightgreen"; /*cor do context, trabalha co m oestilo do canvas = context*/
  context.fillRect(0, 0, 16 * box, 16 * box); /*trabalha com 4 parametros x,y,altura,largura*/
}

function criarCobrinha() { /*ela sera um array de coordenadas */
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}


criarBG();
criarCobrinha();