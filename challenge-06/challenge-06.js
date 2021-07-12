/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulista';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['São Paulo', 'Palmeiras', 'Santos', 'Corintinhas', 'Guarani'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position){
	if (position > 0 && position < 6){
		console.log('O time que está em ' + position + 'º lugar é o ' + teams[position-1] + '.');
	}else{
		console.log('Não temos a informação do time que está nessa posição.');
	}
}
	

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(2); // 'O time que está em 2º lugar é o Palmeiras.'
showTeamPosition(6); // 'Não temos a informação do time que está nessa posição.'
showTeamPosition(01); // 'O time que está em 1º lugar é o São Paulo.'
showTeamPosition(5); // 'O time que está em 5º lugar é o Guarani.'


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 0;
while ( counter++ < 31){
	if (counter > 19 && counter < 31){
		console.log(counter);
	};
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color){
	var msg = 'O hexadecimal para a cor ' + color + ' é ';
	switch (color){
		case 'red':
			console.log(msg + '#FF0000.');
			break;
		case 'black':
			console.log(msg + '#000000.');
			break;
		case 'white':
			console.log(msg + '#FFFFFF.');
			break;
		case 'blue':
			console.log(msg + '#0000FF.');
			break;
		case 'yellow':
			console.log(msg + '#FFFF00.');
			break;	
		default:
			console.log('Não temos o equivalente hexadecimal para ' + color + '.');
	}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red'); // 'O hexadecimal para a cor red é #FF0000.'
convertToHex('purple'); // 'Não temos o equivalente hexadecimal para purple.'
convertToHex('black'); // 'O hexadecimal para a cor black é #000000.'
convertToHex('blue'); // 'O hexadecimal para a cor blue é #0000FF.'
convertToHex('yellow'); // 'O hexadecimal para a cor yellow é #FFFF00.'
convertToHex('white'); // 'O hexadecimal para a cor yellow é #FFFFFF.'
convertToHex('green'); // 'Não temos o equivalente hexadecimal para green.'
convertToHex('gray'); // 'Não temos o equivalente hexadecimal para gray.'
