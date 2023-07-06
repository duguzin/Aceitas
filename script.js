function accepted() {
        alert("Meu amor. Eu te amo meu amor! lanchinho mais tarde? 😋🥰");
      };
 
      function fugirDoMouse() {
        var nao = document.getElementById("button-1"); 
        var body = document.body;
        var maxX = body.clientWidth - nao.offsetWidth;
        var maxY = body.clientHeight - nao.offsetHeight;
        var newX = Math.floor(Math.random() * maxX); 
        var newY = Math.floor(Math.random() * maxY); 
        
        nao.style.left = newX + "px"; 
        nao.style.top = newY + "px";
      };