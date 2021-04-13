let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') /*renderiza o desenho de dentro do canvas*/ 
let box = 32; /*32 pixels cada quadrado */

function criarBG() { /**funcao que desenha e define o canva */
  context.fillStyle = "Lightgreen"; /*cor do context, trabalha co m oestilo do canvas = context*/ 
  context.fillRect(0, 0, 16 * box, 16 * box); /*trabalha com 4 parametros x,y,altura,largura*/
}
criarBG();