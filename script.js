
function themeButton(){
if(document.getElementById('corT').innerHTML == 'Dark'){
    document.getElementByTagName('link').href = './dark.css';
    document.getElementById('corT').innerHTML = 'Light';
  }else{
    document.getElementByTagName('link').href = './light.css';
    document.getElementById('corT').innerHTML = 'Dark';
  }
}
