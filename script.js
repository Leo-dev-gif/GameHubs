// Seleziona l'elemento display
const display = document.getElementById("display");

// Aggiunge il valore premuto al display
function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Cancella tutto il display
function clearDisplay() {
    display.innerText = "0";
}

// Cancella l'ultimo carattere
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

// Calcola il risultato
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Errore";
    }
}
