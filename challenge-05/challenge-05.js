/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [1,'Lucao',{},null,undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array){
       return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnValues(array,num){
    return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [1,'Morais',null,true,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnValues(array,0);
returnValues(array,1);
returnValues(array,2);
returnValues(array,3);
returnValues(array,4);

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
    var obj = {
        AsCronicasdeArian: {
            quantidadePaginas: 170,
            autor: 'Marco Abreu',
            editora : 'IntoxiAnime'
        },
        DomQuixotedeLaMancha : {
            quantidadePaginas: 224,
            autor: 'Miguel de Cervantes',
            editora : 'REVAN'
            
        },
        TheWitcherUltimoDesejo : {
            quantidadePaginas: 318,
            autor: 'Andrzej Sapkowski',
            editora : 'WMF Martins Fontes'
            
        }
    };
    if(nomeLivro === 'As Cronicas de Arian')
    {
        return obj.AsCronicasdeArian;
    }
    if(nomeLivro === 'Dom Quixote de La Mancha'){
        return obj.DomQuixotedeLaMancha;
    }
    if(nomeLivro === 'The Witcher - O Ultimo Desejo'){
        return obj.TheWitcherUltimoDesejo;
    }
    if(nomeLivro === undefined){
        return obj;
    }
  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro As Cronicas de Arian tem "+book('As Cronicas de Arian').quantidadePaginas+ " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro As Cronicas de Arian é '+ book('As Cronicas de Arian').autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro As Cronicas de Arian foi publicado pela editora '+ book('As Cronicas de Arian').editora +'.');