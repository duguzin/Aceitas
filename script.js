function accepted() {
  $('#myModal').modal('show');
  var button1 =     document.getElementById("button-1");
  button1.remove();
}

let isMobile = false; // Variável para verificar se é um dispositivo móvel
let clickCount = 0; // Variável para contar o número de cliques

function fugirDoMouse() {
  if (isMobile) {
    return; // Não faz nada se for um dispositivo móvel
  }

  var nao = document.getElementById("button-1"); 
  var body = document.body;
  var maxX = body.clientWidth - nao.offsetWidth;
  var maxY = body.clientHeight - nao.offsetHeight;
  var newX = Math.floor(Math.random() * maxX); 
  var newY = Math.floor(Math.random() * maxY); 

  nao.style.left = newX + "px"; 
  nao.style.top = newY + "px";
}

function moverAleatoriamente() {
  var nao = document.getElementById("button-1");
  var body = document.body;
  var maxX = body.clientWidth - nao.offsetWidth;
  var maxY = body.clientHeight - nao.offsetHeight;
  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);

  nao.style.left = newX + "px";
  nao.style.top = newY + "px";
  
  clickCount++; // Incrementa o contador de cliques
  
  if (clickCount === 10) {
    alert("Você não desiste mesmo, né?");
  }
}

function iniciarMoverAleatoriamente() {
  var nao = document.getElementById("button-1");
  nao.removeEventListener("click", iniciarMoverAleatoriamente); // Remove o manipulador de evento de clique
  setInterval(moverAleatoriamente, 1000); // Executa a função moverAleatoriamente a cada segundo
}

// Verifica se é um dispositivo móvel
if ("ontouchstart" in document.documentElement) {
  isMobile = true;
}

// Adiciona o manipulador de evento ao botão "Não" dependendo do tipo de dispositivo
if (isMobile) {
  var button1 = document.getElementById("button-1");
  button1.addEventListener("touchstart", iniciarMoverAleatoriamente);
} else {
  var button1 = document.getElementById("button-1");
  button1.addEventListener("click", function() {
    fugirDoMouse();
    
    clickCount++; // Incrementa o contador de cliques
    
    if (clickCount === 10) {
      alert("Você não desiste mesmo, né?");
    }
  });
}
