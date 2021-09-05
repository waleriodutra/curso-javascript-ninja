//(
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );
var person = {
    name: 'oinotna',
    lastname: 'artud',
    age: 47
};

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person)) ;

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'Sapiens', pages: 400});
books.push({name: '1984', pages: 300});
books.push({name: 'Ceu', pages: 150});

console.log( '\nLista de livros:' );
console.log( books );


/*
Mostre no console todos os livros.
*/
// ?

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var removeLast = books.pop();
console.log(removeLast);

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log( books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
// for (var i = 0; i < books.length; i++){
//     books[i] = JSON.stringify(books[i]);
// }
books = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
// for (var i = 0; i < books.length; i++){
//     books[i] = JSON.parse(books[i]);
// }
books = JSON.parse(books);
console.log(books);
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log('\n');
for (var i = 0; i < books.length; i++){
    for (book in books[i]){
        console.log(book + ': ' + books[i][book]);
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
var myName = ['a', 'n', 't', 'o', 'n', 'i', 'o', ' ', 'd', 'u', 't', 'r', 'a' ];


/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));


console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());
//)();

