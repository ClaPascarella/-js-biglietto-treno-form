

const buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {

  const inputEta = document.getElementById("fascia-eta");
  const eta = inputEta.value;
  console.log(eta);

  const inputNome = document.getElementById("nome-utente");
  const nomeUtente = inputNome.value;
  console.log(nomeUtente);


  const inputKm = document.getElementById("km");
  const percorrenza = parseInt(inputKm.value);
  console.log(percorrenza);

  const prezzoAlKilometro = 0.21;
  const prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
  console.log(prezzoBigliettoSenzaSconto);

  let offerta = "Tariffa Standard"

  
  if (eta == "minorenne") {
   ((prezzoBigliettoSenzaSconto / 100) * 80);
   offerta = "Sconto Minorenne";
  } else if (eta == "over65") {
   ((prezzoBigliettoSenzaSconto / 100) * 60);
   offerta = "Sconto Maggiorenne";
  } else {
   (prezzoBigliettoSenzaSconto);
  }

  let carrozza = Math.floor(Math.random() * 9) +1;
  let cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;


  document.getElementById('nome-passegero').innerHTML = nomeUtente;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('costo-biglietto').innerHTML = prezzoBigliettoSenzaSconto.toFixed(2);
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = cp;

  let bigliettoDiv = document.getElementById('biglietto');
  bigliettoDiv.classList.remove('hidden');
  bigliettoDiv.classList.add('show');

 }

);


let buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener( 'click',
  function() {
    document.getElementById('nome-passegero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';


    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';
    
    var bigliettoDiv = document.getElementById('biglietto')
    bigliettoDiv.classList.remove('show');
    bigliettoDiv.classList.add('hidden');
  }
);