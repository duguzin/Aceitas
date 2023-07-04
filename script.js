// Função para enviar o SMS usando o Twilio
function sendSMS(message) {

    const accountSid = 'AC657e3b8bdb5103956c8ed1baae6aaa7f';
    const authToken = '02dc54f6cb58461bfce31a87251236de';
    const fromNumber = '12176849701';
    const toNumber = '5511977922484';
  
    // Envio do SMS usando a API fetch
    fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`)
      },
      body: new URLSearchParams({
        From: fromNumber,
        To: toNumber,
        Body: message
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('SMS enviado com sucesso!');
        } else {
          console.error('Erro ao enviar SMS:', response.statusText);
        }
      })
      .catch(error => console.error('Erro ao enviar SMS:', error));
  }
  
  // Função executada quando o botão "Sim" é clicado
  function accepted() {
    sendSMS('O usuário pressionou o botão "Sim".');
    alert("Meu amor, eu te amo! Lanchinho mais tarde? 😋🥰");
  }
  
  // Função executada quando o botão "Não" é clicado
  function denied() {
    sendSMS('O usuário pressionou o botão "Não".');
    const button1 = document.getElementById("button-1");
    button1.remove();
  
    const button2 = document.getElementById("button-2");
    button2.style.fontSize = "80px";
  }
  