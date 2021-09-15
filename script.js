
Function ThemeButton(){
var theme = getElementsByTagName('link');

var themebutton = getElementById('corT');

///if(theme.href == './light.css'){
  theme.href = './dark.css';
  themebutton.innerHTML = 'Light';
///  }
}
