(function () {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(selectedNodes) {
    this.element = document.querySelectorAll(selectedNodes);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function (value) {
      value.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function (value) {
      value.removeEventListener(event, callback, false);
    });
  }
  DOM.prototype.forEach = function (callback) {
    Array.prototype.forEach.call(this.element, callback);
  }

  DOM.prototype.map = function (callback) {
    Array.prototype.map.call(this.element, callback);
  }

  DOM.prototype.filter = function (callback) {
    Array.prototype.filter.call(this.element, callback);
  }

  DOM.prototype.reduce = function (callback) {
    Array.prototype.reduce.call(this.element, callback);
  }

  DOM.prototype.reduceRight = function (callback) {
    Array.prototype.reduceRight.call(this.element, callback);
  }

  DOM.prototype.every = function (callback) {
    Array.prototype.every.call(this.element, callback);
  }

  DOM.prototype.some = function (callback) {
    Array.prototype.some.call(this.element, callback);
  }

  DOM.prototype.get = function get() {
    return this.element;
  }


  var ajax = new XMLHttpRequest;
  var $formCEP = new DOM('[data-js="formCEP"]');
  var $inputMessage = document.querySelector('[data-js="textAreaForMessage"]');
  var $inputsToFill = new DOM('[data-js="inputToFill"]');
  var $inputCEP = document.querySelector('[data-js="inputCEP"]');
  $formCEP.on('submit', handleSubmitCEP);

  function handleSubmitCEP(event) {
    event.preventDefault();
    var cepSubmetido = cepOnlyNumbers($inputCEP.value);
    openRequest(cepSubmetido);
  }

  function cepOnlyNumbers(cep){
    var regex = /\d+/g;
    return cep.match(regex).join('');
  }


  function openRequest(cepSubmetido){
    var url = 'https://viacep.com.br/ws/'+ cepSubmetido +'/json/';
    ajax.open('GET',url);
    ajax.send();
    $inputMessage.value = getMessage('loading');
    ajax.addEventListener('readystatechange',handleReadyStateChange,false)
  }

  function handleReadyStateChange(){
    if(isRequestOk()){
      $inputMessage.value = getMessage('ok');
      fillingInputs();
     }
  }

  function isCEPValid(){
    var result
    try {
        console.log('oi');
        result = JSON.parse(ajax.responseText);
    } catch (error) {

         result =  null;
    }
     return result;
  }

  function fillingInputs(){
        var responseText = isCEPValid();
        console.log(responseText);
        if(!responseText){
          $inputMessage.value = getMessage('error');
          responseText = clearData();
        }
        $inputsToFill.get()[0].value = responseText.logradouro;
        $inputsToFill.get()[1].value = responseText.bairro;
        $inputsToFill.get()[2].value = responseText.uf;
        $inputsToFill.get()[3].value = responseText.localidade;
        $inputsToFill.get()[4].value = responseText.cep;
  }

  function clearData(){
     return {
       logradouro : '',
       bairro : '',
       uf : '',
       localidade : '',
       cep : ''
     }
  }

  function isRequestOk(){
    return ajax.status === 200 && ajax.readyState === 4;
  }


  function getMessage(type){
    return {
        loading : 'Buscando informações para o CEP ' + cepOnlyNumbers($inputCEP.value)  + '...',
        ok : 'Endereço referente ao CEP '+ cepOnlyNumbers($inputCEP.value)  + ' :',
        error : 'Não encontramos o endereço para o CEP ' + cepOnlyNumbers($inputCEP.value) + '.'

    }[type];


  }




})();
