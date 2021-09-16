function themeButton(){
if(document.getElementById('corT').innerHTML == 'Dark'){
    document.getElementById('link').href = './dark.css';
    document.getElementById('corT').innerHTML = 'Light';
  }else{
    document.getElementById('link').href = './light.css';
    document.getElementById('corT').innerHTML = 'Dark';
  }
}
