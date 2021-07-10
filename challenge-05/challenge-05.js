/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 'terra', null, cabelo = {cor: 'loiro', tipo: 'liso'}, '51'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(ar){
	return ar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arr[1]);
// ou 
console.log(retornarArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarIndiceArray(ar, i){
	var msg = i >= ar.length ? 'Indice inexistente no array' : ar[i];
	return msg;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrDDif = [72, 'terra', null, cachorro = {raca: 'Akita', idade: 2, agressivo: true}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornarIndiceArray(arrDDif, 0)); // 72
console.log(retornarIndiceArray(arrDDif, 1)); // "terra"
console.log(retornarIndiceArray(arrDDif, 2)); // null
console.log(retornarIndiceArray(arrDDif, 3)); // {raca: "Akita", idade: 2, agressivo: true}
console.log(retornarIndiceArray(arrDDif, 4)); // true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
	var livros = { 
		lvr01: {quantidadePaginas: 100 , autor: 'Mariazinha' , editora: 'Mae'},
		lvr02: {quantidadePaginas: 75, autor: 'Japa' , editora: 'Filha'},
		lvr03: {quantidadePaginas: 45, autor: 'Buda' , editora: 'Filho'}
	}
	
	if (!nomeLivro){
		return livros;	
	}
			
	if (nomeLivro !== undefined && nomeLivro !== null){
		for (var lvr in livros){
			if (lvr === nomeLivro){
				return livros[nomeLivro];
			}
		}
	}
	
	return 'Livro inexiste!!!';
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro lvr01 tem " + book('lvr01').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Lvr01 é " + book('lvr01').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Lvr02 foi publicado pela editora " + book('lvr01').editora + ".");
