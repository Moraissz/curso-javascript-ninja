(function(){
  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */
  function DOM(selectedNodes){
    this.element = document.querySelectorAll(selectedNodes);
  }
  DOM.prototype.forEach = function (callback){
        Array.prototype.forEach.call(this.element,callback);
  }

  DOM.prototype.map = function(callback){
      Array.prototype.map.call(this.element,callback);
  }

  DOM.prototype.filter = function (callback){
    Array.prototype.filter.call(this.element,callback);
  }

  DOM.prototype.reduce = function (callback){
    Array.prototype.reduce.call(this.element,callback);
  }

  DOM.prototype.reduceRight = function (callback){
    Array.prototype.reduceRight.call(this.element,callback);
  }

  DOM.prototype.every = function (callback){
    Array.prototype.every.call(this.element,callback);
  }

  DOM.prototype.some = function (callback){
    Array.prototype.some.call(this.element,callback);
  }

  DOM.isArray = function(element){
    return Object.prototype.toString.call(element) === '[object Array]' ;
  }

  DOM.isObject = function(element){
    return Object.prototype.toString.call(element) === '[object Object]';
  }

  DOM.isFunction = function(element){
    return Object.prototype.toString.call(element) === '[object Function]';
  }

  DOM.isString = function(element){
    return Object.prototype.toString.call(element) === '[object String]';
  }

  DOM.isNumber = function(element){
    return Object.prototype.toString.call(element) === '[object Number]';
  }

  DOM.isBoolean = function(element){
    return Object.prototype.toString.call(element) === '[object Boolean]';
  }

  DOM.isNull = function(element){
    return (Object.prototype.toString.call(element) === '[object Null]' || Object.prototype.toString.call(element) === '[object Undefined]');
  }

  var $a = new DOM('[data-js="link"]');
  console.log(DOM.isNull(1));

})();
