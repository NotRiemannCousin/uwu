var theme = document.getElementsByTagName('link');
var themebutton = document.getElementById('corT');

Function ThemeButton(){
///if(theme.href == './light.css'){
  theme.href = './dark.css';
  themebutton.innerHTML = 'Light';
///  }
}
