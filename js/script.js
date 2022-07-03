let searchElement = document.querySelector('.search_element');
let input = document.querySelector('.inpSearch');
let btndel = document.querySelector('.btnDel');
let btnSearch = document.querySelector('.btnSearch');
let btnSearchAdvanced = document.querySelector('.btnSearchAdvanced');

input.addEventListener('input', updateValue);
function updateValue(e) {
    let message = e.target.value
    if(message ){
        btndel.classList.add('show');
    }else{
        btndel.classList.remove('show');
    }
}

btndel.onclick = function() {
    input.value = "";
    if(input.value == ""){
        btndel.classList.remove('show');
    }
}

var elem = document.querySelector(".inpSearch");

elem.onfocus = function() { 
  this.focused = true;
  searchElement.classList.add('SearchElementStyle');
  input.classList.add('changeOfStyle');
  btnSearch.classList.add('changeOfStyle');
  btndel.classList.add('changeOfStyle');
  btnSearchAdvanced.classList.add('changeOfStyle');
}

elem.onblur = function() {
  this.focused = false;
  searchElement.classList.remove('SearchElementStyle');
  input.classList.remove('changeOfStyle');
  btnSearch.classList.remove('changeOfStyle');
  btndel.classList.remove('changeOfStyle');
  btnSearchAdvanced.classList.remove('changeOfStyle');
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.222531&lon=39.718705&appid=c28ea220a3e95d5a2b6bade5744ec44e&lang=ru')
  .then(function(resp){return resp.json()})
  .then(function(data){
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp-273)+'&#176';
    document.querySelector('.Weather_condition').textContent = data.weather[0]['description'];
  })
  .catch(function(){

  })

