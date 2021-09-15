
function themeButton(){
if(document.getElementByTagName('link').href == './light.css'){
  document.getElementByTagName('link').href = './dark.css';
  document.getElementById('corT').innerHTML = 'Light';
  }
}
