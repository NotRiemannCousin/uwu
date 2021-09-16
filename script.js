document.getElementsByTagName('link').href = './dark.css';

function themeButton(){
if(document.getElementById('corT').innerHTML == 'Dark'){
    document.getElementsByTagName('link').href = './dark.css';
    document.getElementById('corT').innerHTML = 'Light';
  }else{
    document.getElementsByTagName('link').href = './light.css';
    document.getElementById('corT').innerHTML = 'Dark';
  }
}
