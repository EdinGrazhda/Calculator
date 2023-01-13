const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    
  }
  function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
 //--------------------------------------------------------------------------------//

 let display = document.getElementById('display');

 let buttons = Array.from(document.getElementsByClassName('button'));
 
 buttons.map( button => {
     button.addEventListener('click', (e) => {
         switch(e.target.innerText){
             case 'C':
                 display.innerText = '';
                 break;
             case '=':
                 try{
                     display.innerText = eval(display.innerText);
                 } catch {
                     display.innerText = "Error"
                 }
                 break;
             case '←':
                 if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                 }
                 break;
             default:
                 display.innerText += e.target.innerText;
         }
     });
 });;






