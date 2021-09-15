var theme = getElementsByTagName('link');
var themebutton = getElementById('cor');

Function ThemeButton (){
if(theme.href == './light.css'){
  theme.href = './dark.css'
  themebutton.innerHTML = 'Light'
  }
}
