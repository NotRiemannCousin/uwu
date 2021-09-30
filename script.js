const list;
fetch("list.json")
      .then((response) => {
           return response.json();
      }).then(js => {
           list = js;
           document.getElementById('todosanimes').innerHTML = js[0].name;
      });
function Dark (){ //Botão cor tema
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='dark.css'/><button onclick='Light()'>Light</button>")
}
function Light (){
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='light.css'/><button onclick='Dark()'>Dark</button>")
}
