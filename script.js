var theme = document.getElementsByTagName('link');
var themebutton = document.getElementById('corT');

function ThemeButton(){
///if(theme.href == './light.css'){
  theme.href = './dark.css';
  themebutton.innerHTML = 'Light';
///  }
}
