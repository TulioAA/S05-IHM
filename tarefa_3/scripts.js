function openMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
  }
  
  function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";    
  }
  
  function temaLim() {
      document.documentElement.style.setProperty('--cor-click', '#2900F9');
      document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#18FA14');
      document.documentElement.style.setProperty('--cor-back2', '#3E7A3D');
      document.documentElement.style.setProperty('--md-sys-color-primary', '#FA6B00');
  }
  
  function temaInatel() {
      document.documentElement.style.setProperty('--cor-click', '#126ae2');
      document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
      document.documentElement.style.setProperty('--cor-back2', '#6a937a');
      document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
    
  }