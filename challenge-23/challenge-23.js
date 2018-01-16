(function(){
  'use strict'
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  
  var $input = document.querySelector('input');
  var $buttons  = document.querySelectorAll('[data-js="button-number"]');
  var $operator = document.querySelectorAll('[data-js="button-operator"]');
  var $buttonCE = document.querySelector('[data-js="CE"]');
  var $buttonequal = document.querySelector('[data-js="="]');

 Array.prototype.forEach.call($buttons,  function(item){
    item.addEventListener('click',concat,false)
 })
 Array.prototype.forEach.call($operator, function(item){
      item.addEventListener('click',insertOperations,false)
 })
 $buttonCE.addEventListener('click',toClear,false);
 $buttonequal.addEventListener('click',resultOfOperation,false);
 
 function concat(){
  $input.value === '0' ? $input.value = this.value : $input.value += this.value;
}

function insertOperations(){
  $input.value = removeLastItemIfItIsAnOperation($input.value);
  $input.value += this.value;

}

function isLastItemAnOperation(number){
  var regex = /\D$/;
  return regex.test(number);
}

function removeLastItemIfItIsAnOperation(number){
  if(isLastItemAnOperation(number))
   return number.slice(0,-1);
  
 return number;
}

function toClear(){
  $input.value = 0;
}

function resultOfOperation(){
   var regex  = /\d+[+÷x-]?/g
   var arr = $input.value.match(regex);
  $input.value  = arr.reduce(function(accumulated,currentValue){
          var firstValue = accumulated.slice(0,-1);
          var operator = accumulated.split('').pop();
          var lastValue = removeLastItemIfItIsAnOperation(currentValue);
          var lastOperator = isLastItemAnOperation(currentValue) ? currentValue.split('').pop() : '';
          switch(operator){
             case '+' : return Number(firstValue) + Number(lastValue) + lastOperator;
             case '-' : return Number(firstValue) - Number(lastValue) + lastOperator;
             case 'x' : return Number(firstValue) * Number(lastValue) + lastOperator;
             case '÷' : return Number(firstValue) / Number(lastValue) + lastOperator;
          }
   })
 
}

})();
