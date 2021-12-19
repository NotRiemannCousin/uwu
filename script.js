function nameInitialArray(anime, char){
  anime.map(function(element){

    if(element.name[0] == char[0]){
    }
  });
}

function readArray(array, compar, atribute){
  var string = [];
  for(let t in Object.keys(array[0])){
    if(Object.keys(array[0])[t] == atribute){
      array.map(element=>{
        if(Object.values(element)[t] == compar){
          string.push(element.name);
        }
      });
      break;
    }
  }
  return string.join("<hr>");
}

function letters(array){
  array.map(element => {
  var index = document.getElementById(element.name[0]);
    if(!index){
      let b = document.createElement('BUTTON');
      
      b.setAttribute('data-names', element.name);
      b.setAttribute('id', element.name[0]);
      b.innerHTML = element.name[0];
      b.classList.add('letters-class');

      document.getElementById('letras').appendChild(b);
    }else{
    index.setAttribute('data-names', index.getAttribute('data-names') + '<hr>' + element.name);
    }
  });
}

var list;
fetch('https://raw.githubusercontent.com/MarceloH1122/uwu/main/list.json')
  .then(response => {
  return response.json().then(list => {
    
    letters(list);
    
    document.getElementById('todosanimes').innerHTML = list.map(x => {
      return x.name + ' \n';}).join("<hr>");
    
    document.getElementById('osanimes').innerHTML = readArray(list, 'anime', 'type');
    document.getElementById('movies').innerHTML = readArray(list, 'movie', 'type');


  document.getElementById('letras').hidden = true;
  document.getElementById('todosanimes').hidden = true;           
  document.getElementById('osanimes').hidden = true;
  document.getElementById('movies').hidden = true;
  });});

function showHide(obj){
  document.getElementById('letras').hidden = true;
  document.getElementById('todosanimes').hidden = true;
  document.getElementById('osanimes').hidden = true;
  document.getElementById('movies').hidden = true;

  document.getElementById(obj).hidden = false;
}

function dark (){ //Botão cor tema
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='dark.css'/><button onclick='light()'>Light</button>");
}
function light (){
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='light.css'/><button onclick='dark()'>Dark</button>");
}
