function responderHistoria(respuesta) {
  const resultado = document.getElementById("resultado-historia");

  if (respuesta === 1936) {
    resultado.textContent = "✅ Correcto";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Incorrecto";
    resultado.style.color = "red";
  }
}

function responderMates(respuesta) {
  const resultado = document.getElementById("resultado-mates");

  if (respuesta === 20) {
    resultado.textContent = "✅ Correcto. ¡Muy bien!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Incorrecto. Inténtalo otra vez.";
    resultado.style.color = "red";
  }
}
function responderFilo(respuesta) {
  const resultado = document.getElementById("resultado-filo");

  if (respuesta === "Socrates") {
    resultado.textContent = "✅ Correcto. Es Sócrates.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Incorrecto. La respuesta correcta es Sócrates.";
    resultado.style.color = "red";
  }
}

function responderLengua(respuesta) {
  const resultado = document.getElementById("resultado-lengua");

  if (respuesta === "adverbio") {
    resultado.textContent = "✅ Correcto. Es un adverbio de modo.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Incorrecto. “Rápidamente” es un adverbio.";
    resultado.style.color = "red";
  }
}
