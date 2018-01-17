(function(){
  'use strict';
/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

function initialize(){
    initEvents();
}

function initEvents(){
  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false);
  });
  Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', handleClickOperation, false);
  });
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);
}

function handleClickNumber() {
    removeZeroFromVisorifItDontHaveAnyNumber();
    AddValueOnVisor(this);
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  AddValueOnVisor(this);
}

function handleClickCE() {
  $visor.value = 0;
}

function AddValueOnVisor(item){
  $visor.value += item.value;
}

function removeZeroFromVisorifItDontHaveAnyNumber(){
      if($visor.value === '0')
        $visor.value = '';
}

function isLastItemAnOperation(number) {
  var operations = getOperations();
  var lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operator === lastItem;
  });
}

function getOperations(){
  return Array.prototype.map.call($buttonsOperations,function(operation){
          return operation.value;
  })
}

function removeLastItemIfItIsAnOperator(number) {
  if(isLastItemAnOperation(number))
    return number.slice(0, -1);
  return number;
}

function handleClickEqual() {
  var allValues = createArrayOfAllValues();
  $visor.value = allValues.reduce(function(accumulated, actual) {
    return variablesFromOperation(accumulated,actual);
  });
}

function createArrayOfAllValues(){
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  return $visor.value.match(createRegexOfOperations());
}

function createRegexOfOperations(){
  return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');

}

function variablesFromOperation(accumulated,actual){
  var firstValue = accumulated.slice(0, -1);
  var operator = accumulated.split('').pop();
  var lastValue = removeLastItemIfItIsAnOperator(actual);
  var lastOperator = getLastOperator(actual);
  return resultOfOperation(operator,firstValue,lastValue) + lastOperator;
}

function getLastOperator(actual){
  return isLastItemAnOperation(actual) ? actual.split('').pop() : '';
}

function resultOfOperation(operator,firstValue,lastValue)
{
  switch(operator) {
    case '+':
      return  Number(firstValue) + Number(lastValue);
    case '-':
      return  Number(firstValue) - Number(lastValue);
    case 'x':
      return  Number(firstValue) * Number(lastValue);
    case '÷':
      return  Number(firstValue) / Number(lastValue);
  }
}
initialize();
})();
