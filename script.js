function nameInitialArray(anime, char) {
  anime.map(function (element) {

    if (element.name[0] == char[0]) {
    }
  });
}

function readArray(array, compar, atribute) {
  var string = [];
  for (let t in Object.keys(array[0])) {
    if (Object.keys(array[0])[t] == atribute) {
      array.map(element => {
        if (Object.values(element)[t] == compar) {
          string.push(element.name);
        }
      });
      break;
    }
  }
  return string.join("<hr>");
}

function letters(array) {

  console.log("iniciando o botão 'por letras'");

  array.map(element => {
    var btn = document.getElementById(element.name[0]);
    if (!btn) {
      let btn = document.createElement('BUTTON');

      btn.setAttribute('data-names', element.name);
      btn.setAttribute('id', element.name[0]);
      btn.setAttribute('amount', 1);
      btn.innerHTML = element.name[0] + ' (1)';
      btn.classList.add('letter-class');
      btn.onclick = function () {
        document.getElementById('letters-result').innerHTML = btn.getAttribute('data-names');
      };

      if (document.getElementById('letters').appendChild(btn)) {
        console.log("botão " + element.name[0] + " adicionado");
      }
    } else {
      btn.setAttribute('amount', parseInt(btn.getAttribute('amount')) + 1);
      btn.innerHTML = element.name[0] + ' (' + btn.getAttribute('amount') + ')';
      btn.setAttribute('data-names', btn.getAttribute('data-names') + '<hr>' + element.name);
    }
  });
}

var list;
console.log("iniciando fetch");
fetch('https://raw.githubusercontent.com/MarceloH1122/uwu/main/list.json')
  .then(response => {
    return response.json().then(list => {

      letters(list);

      console.log("iniciando o botão 'todos'");
      document.getElementById('todosanimes').innerHTML = list.map(x => {
        return x.name + ' \n';
      }).join("<hr>");

      document.getElementById('osanimes').innerHTML = readArray(list, 'anime', 'type');
      document.getElementById('movies').innerHTML = readArray(list, 'movie', 'type');


      document.getElementById('by-letters').hidden = true;
      document.getElementById('todosanimes').hidden = true;
      document.getElementById('osanimes').hidden = true;
      document.getElementById('movies').hidden = true;
    });
  });

function showHide(id) {
  document.getElementById('by-letters').hidden = true;
  document.getElementById('todosanimes').hidden = true;
  document.getElementById('osanimes').hidden = true;
  document.getElementById('movies').hidden = true;

  document.getElementById(id).hidden = false;
}

function changeTheme() {
  if (document.getElementById('theme').textContent != "")
    document.getElementById('theme').textContent = "";
  else
    document.getElementById('theme').textContent = " \
      :root { \
        ---accent-color: #666; \
        ---accent-color-2: #fff; \
        ---background-color: #252525; \
        ---text-color: #f3f3f3; \
        ---theme-name: 'light'; \
      }";
      document.getElementById('btn-theme').focus = false;
}