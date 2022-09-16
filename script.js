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
          string.push('<p>' + element.name + '</p>');
        }
      });
      break;
    }
  }
  return string.join("<hr>");
}

function letters(array) {
  array.map(element => {
    var btn = document.getElementById(element.name[0]);
    if (!btn) {
      btn = document.createElement('button');

      btn.setAttribute('data-names', element.name);
      btn.setAttribute('id', element.name[0]);
      btn.setAttribute('amount', 1);
      btn.innerHTML = element.name[0] + ' (1)';
      btn.classList.add('btn-letters');
      btn.onclick = function () {
        document.getElementById('letters-result').innerHTML = btn.getAttribute('data-names');
      };
    } else {
      btn.setAttribute('amount', parseInt(btn.getAttribute('amount')) + 1);
      btn.innerHTML = element.name[0] + ' (' + btn.getAttribute('amount') + ')';
      btn.setAttribute('data-names', btn.getAttribute('data-names') + '<hr>' + element.name);
    }
  });
}

var list;
fetch('https://raw.githubusercontent.com/MarceloH1122/uwu/main/list.json')
  .then(response => {
    return response.json().then(list => {

      letters(list);

      document.getElementById('todosanimes').innerHTML = list.map(x => {
        return x.name;
      }).join("<hr>");

      document.getElementById('osanimes').innerHTML = readArray(list, 0, 'is-movie');
      document.getElementById('movies').innerHTML = readArray(list, 1, 'is-movie');
    });
  });





  
function changeTheme() {
  var theme_changer = document.getElementById('theme');

  if (theme_changer.textContent != "")
    theme_changer.textContent = "";
  else
    theme_changer.textContent = " \
      :root { \
        ---accent-color: #666; \
        ---accent-color-2: #fff; \
        ---background-color: #252525; \
        ---text-color: #f3f3f3; \
        ---theme-name: 'light'; \
      }";
      document.getElementById('btn-theme').focus = false;
}
