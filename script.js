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
          string.push(element.name + ' \n');
        }
      });
   break;
    }
 }
 return string;
}

var list;

fetch('https://raw.githubusercontent.com/MarceloH1122/uwu/main/list.json')
  .then(response => {
  return response.json().then(js => {
    list = js;
    document.getElementById('todosanimes').innerHTML = list.map(x => {return x.name + ' \n';}                                                             );
    document.getElementById('osanimes').innerHTML = readArray(list, 'anime', 'type');
    document.getElementById('movies').innerHTML = readArray(list, 'movie', 'type');

  document.getElementById('botoes').hidden = true;
  document.getElementById('todosanimes').hidden = true;           
  document.getElementById('osanimes').hidden = true;
  document.getElementById('movies').hidden = true;
  });});

function showHide(obj){
  document.getElementById('botoes').hidden = true;
  document.getElementById('todosanimes').hidden = true;
  document.getElementById('osanimes').hidden = true;
  document.getElementById('movies').hidden = true;

  document.getElementById(obj).hidden = false;
}

function Dark (){ //Botão cor tema
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='dark.css'/><button onclick='Light()'>Light</button>");
}
function Light (){
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='light.css'/><button onclick='Dark()'>Dark</button>");
}
