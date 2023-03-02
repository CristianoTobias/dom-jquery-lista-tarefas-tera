// Lista de Tarefas


// PARTE 1

// Criar uma variável chamada inputNovaTarefa e atribuir o elemento input com o id inputNovaTarefa.

// Mostrar este elemento no console. Para garantir que está selecionando o elemento correto.

let $inputNovaTarefa = $("#inputNovaTarefa");
console.log($inputNovaTarefa)

// PARTE 2

// Criar um array vazio chamado tarefas.

// Criar uma função chamada addNovaTarefa que vai adicionar o valor de inputNovaTarefa.value ao Array tarefas.

// Fazer com que a função addTarefa limpe o inputNovaTarefa deixando o input limpo novamente.

let $tarefas = [];


const addNovaTarefa = () => {
  let $arr = [];
  $tarefas.push($inputNovaTarefa.val());
  $inputNovaTarefa.val(""); // input limpo
  mostrarTarefas();
  $arr.push($("ol").children());
  concluirTarefa($arr);
};

// PARTE 3

// Criar uma função chamada mostrarTarefas e fazer com que ela seja chamada dentro da função addTarefa.

// A função mostrarTarefas deve varrer o array tarefas usando um loop for. E para cada item do Array é necessário criar um novo elemento do tipo li e atribuir o titulo de cada tarefa à propriedade innerText deste elemento li para depois adicionar o elemento li à ulTarefas usando o método append().

// Ao adicionar mais de uma tarefa é possível perceber que é necessário, antes de tudo, zerar o elemento ulTarefas  dentro da função mostrarTarefas.

const mostrarTarefas = () => {
  let $ol = $("#olTarefas");
  let $todosBtnDelete = []
  $ol.html("");
  $tarefas.forEach((item) => {
    let $img = $(`<img/>`)
    $($img).addClass('btnDelete')
    $($img).attr('src', 'imagens/lixeira-icone.png')
    let $li = $(`<li>`);
    $($li).html(item);
    // $($li).css({cursor: "pointer"})
    $($img).appendTo($li);
    $($li).appendTo($ol);
  });
  $todosBtnDelete.push($('.btnDelete'))
  for (let item of $todosBtnDelete[0]) {
    $(item).click(deletarTarefa)
  }
  
};

// Parte 4

// Criar uma função chamada concluirTarefa.

// Dentro desta função crie uma estrutura de decisão que verifica se este elemento li possui a classe concluída na sua class list usando: this.classList.contains('concluida'). Se a classe concluida estiver lá. Remova e adicione a classe aberta.

// Verifique também se o elemento li possui a classe aberta e, caso possua, remova a classe aberta e adicione a classe concluida.

// Caso nenhuma das condições seja verdadeira. Ou seja, se nenhuma das classes existir, você pode adicionar a classe concluída.

// Altere seu CSS:

// .aberta{
//   text-decoration: none;
// }

// .concluida{
//     text-decoration: line-through;
// }

// Para que a função possa funcionar, é necessário que cada um dos elementos li, tenha um eventListener do tipo dblclick .

// Para adicionar o eventListener dentro da função mostrarTarefas, selecione todos os elementos do tipo li e adiciones a um array chamado todosLi. Para isso, você pode usar o método getElementsByTagName.

// Criar um loop for que percorra o array todosLi e adicione o eventListener do tipo dblclick e chame a função concluirTarefa.

const concluirTarefa = (arr) => {
  for (let item of arr[0]) {
    $(item).dblclick(function () {
      $(this).toggleClass("concluida");
      $(this).toggleClass("aberta");
    });
  }
};

// Parte 5

// Editar a função mostrarTarefas para que cada elemento li, tenha dentro de si um ícone de uma lixeira com a classe btnDelete, que pode ser encontrado em images/lixeira-icone.png. 

// Você pode usar a propriedade innerHTML para adicionar o html <img class="btnDelete” src="imagens/lixeira-icone.png”>

// Criar uma variável chamada todosBtnDelete e adicionar o array com todos os elementos que tenham a classe btnDelete.

// Criar um loop for dentro da função mostrarTarefas que percorra todosBtnDelete e adicione um eventListener do tipo click que chame a função deletarTarefa.

// Criar a função deletarTarefa . Como cada btnDelete tem seu próprio event listener, usando a palavra this você poderá identificar qual botão foi clicado e então armazenar o texto do li, que será o elemento pai do elemento this em uma variável. Exemplo:


// function deletarTarefa (){
//     var tarefaDeletada = this.parentNode.innerText;
// }

// Com a variável tarefaDeletada definida, busque este texto no Array tarefas e use o método splice() para tirar a tarefa do Array.

// Depois disso, basta chamar a função mostrarTarefas para que ela mostre as tarefas com o array atualizado.
function deletarTarefa(){
  let $arr = [];
    
   let index = $tarefas.indexOf($(this).parent().text())
   
   $tarefas.splice(index, 1)
   console.log($($tarefas))
   mostrarTarefas()
   $arr.push($("ol").children());
   concluirTarefa($arr);
}