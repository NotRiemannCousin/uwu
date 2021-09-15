var theme = getElementsByTagName('link');

Function ThemeButton (){
if(theme.href == './light.css'){
  theme.href = './dark.css'
  theme.innerHTML = 'Dark'
  }
}
