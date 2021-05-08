# Lista de Tarefas  :spiral_notepad: 

## Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , também utilizar o LocalStoreage para armazenar dados, para que assim os mesmo possam ser renderizado na tela novamente depois que o browser for fechado.



<img src= "./images/imagem-projeto.png" > 



## Esse projeto foi submetido a testes de 14 requisitos, atingindo 100% dos que foi proposto:



### 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>



**O que será verificado:**



- Será verificado se sua página possui uma tag `header` com o conteúdo `Minha Lista de Tarefas`



### 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"



**O que será verificado:**



- Será verificado que existe na sua página um elemento com o id `funcionamento` com o conteúdo `Clique duas vezes em um item para marcá-lo como completo`



### 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista



**O que será verificado:**



- Será verificada a existência de um elemento do tipo `input` com o id `texto-tarefa`.



### 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"



**O que será verificado:**



- Será verificada a existência de um elemento `ol` com o id `lista-tarefas`.



### 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo



**O que será verificado:**



- Será verificada a existência de um elemento do tipo `button` com o id `criar-tarefa`



- No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.



- A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.



### 6 - Ordene os itens da lista de tarefas por ordem de criação



**O que será verificado:**



- Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.



\### 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)



**O que será verificado:**



\- Será verificado que, ao se carregar a página, os itens da lista **não tem** o estilo CSS `background-color: rgb(128, 128, 128)`



\- Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)`



\### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo



**O que será verificado:**



\- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: rgb(128, 128, 128)` no elemento.



\### 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item



​    Pontos importantes sobre este requisito:



​    \* Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".



​    \* Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.



**O que será verificado:**



\- Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid rgb(0, 0, 0)`.



\- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`



\- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo



\### 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista



**O que será verificado:**



\- Será verificado que existe um elemento `button` com o id `apaga-tudo`



\- Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia



\### 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista



**O que será verificado:**



\- Será verificado que existe um elemento `button` com o id `remover-finalizados`



\- Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista



\## BÔNUS



\### 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava



**O que será verificado:**



\- Será verificado que existe um elemento `button` com o id `salvar-tarefas`



\- Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.



\### 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas



​    Pontos importantes sobre este requisito bônus:



​    \* Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.



​    \* Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?



**O que será verificado:**



\- Será verificada a existência de dois elementos `button`, um com o id `mover-cima` e o outro com o id `mover-baixo`



\- Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas



\- Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento



\- Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista



\- Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido



\- _Caso especial!_ Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada



\### 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado



**O que será verificado:**



\- Será verificada a presença de um elemento `button` com um id `remover-selecionado`



\- Será verificado que, no clicar no botão, somente o elemento selecionado é removido