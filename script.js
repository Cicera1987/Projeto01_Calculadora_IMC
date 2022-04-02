function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
$(document).ready(function(){
    $("#search").click(function(){
      var cep = $ ('#cep'). val();
      var url = 'https://viacep.com.br/ws/' + cep + '/json/';
      $.get(url, function(data){
          $('#result1').html(
              'Localidade:' + data.localidade + '<br>' +
              'Código IBGE:' + data.ibge
          )
        });
    });
  });
  


function calcImc() {
  
  var name = document.getElementById('name').value;
  var gender = document.getElementById('gender').value;
  var weight = parseFloat (document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  var imc = weight / (height*height);

  var term;

  if(gender=='m'){
      term = 'Sr.'
  }else if(gender== 'f'){
      term = 'Sra.'
  }

  var divResult = document.getElementById('result');

  if(imc < 18.5){
      divResult.innerHTML = `${term} ${name} você está abaixo do peso.`;
      divResult.className = 'alert alert-waning';   
  }else if (imc >= 18.5 && imc < 25){
      divResult.innerHTML = `${term} ${name} você está no peso ideal. Parabéns!!!`;
      divResult.className = 'alert alert-success';    
  }else if (imc >= 18.5 && imc < 30){
      divResult.innerHTML = `${term} ${name} você está um pouco acima do peso.`;
      divResult.className = 'alert alert-warning';    
  }else if (imc >=30){
      divResult.innerHTML = `${term} ${name} você está obeso. Cuidado!!!`;
      divResult.className = 'alert alert-danger';  
  }
}
