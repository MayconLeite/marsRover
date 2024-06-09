# Desafio mars rover

## Problema
Um grupo de robôs exploradores será pousado pela NASA em um planalto em Marte. Este planalto, que é curiosamente retangular, deve ser navegado pelos robôs para que suas câmeras possam obter uma visão completa do terreno circundante e enviar de volta à Terra.

A posição e localização de um robô são representadas por uma combinação de coordenadas x e y e uma letra representando um dos quatro pontos cardeais. O planalto é dividido em uma grade para simplificar a navegação. Uma posição de exemplo pode ser 0, 0, N, o que significa que o robô está no canto inferior esquerdo e voltado para o norte.

Para controlar um robô, a NASA envia uma simples sequência de letras. As letras possíveis são 'L', 'R' e 'M'. 'L' e 'R' fazem o robô girar 90 graus para a esquerda ou para a direita, respectivamente, sem se mover de sua posição atual. 'M' significa mover-se um ponto da grade para frente, mantendo a mesma orientação.

Assuma que o quadrado diretamente ao norte de (x, y) é (x, y+1).

Entrada
A primeira linha da entrada são as coordenadas do canto superior direito do planalto, assumindo-se que as coordenadas do canto inferior esquerdo são 0,0.
O restante da entrada são informações referentes aos robôs que foram implantados. Cada robô tem duas linhas de entrada. A primeira linha fornece a posição do robô, e a segunda linha é uma série de instruções dizendo ao robô como explorar o planalto.
A posição é composta por dois inteiros e uma letra separados por espaços, correspondendo às coordenadas x e y e a orientação do robô.
Cada robô será finalizado sequencialmente, o que significa que o segundo robô não começará a se mover até que o primeiro tenha terminado de se mover.

Saída
A saída para cada robô deve ser suas coordenadas finais e orientação.

Entrada de Teste
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

Saída Esperada
1 3 N
5 1 E

## Resolução

### Resolvi utilizar o design patterns state. 
### [referência](https://refactoring.guru/design-patterns/state)

## Utilizando o projeto

### Instalar as dependências
$ yarn install

### Para verificar a saída:
$ yarn start

<h1 align="center">
<img src="https://ik.imagekit.io/fg2sso3fmlf/output_YGclcIZMO.png?updatedAt=1717959110383">
<h1>

### Testes unitários
$ yarn test

<h1 align="center">
<img src="https://ik.imagekit.io/fg2sso3fmlf/unit-tests_ZPfLoHkAO.png?updatedAt=1717959241004">
<h1>

