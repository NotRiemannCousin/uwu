var theme = document.getElementsByTagName('link');
var themebutton = document.getElementById('corT');

function themeButton(){
///if(theme.href == './light.css'){
  theme.href = './dark.css';
  themebutton.innerHTML = 'Light';
///  }
}
