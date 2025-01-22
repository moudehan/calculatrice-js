// Fonction pour ajouter une valeur à l'écran
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Fonction pour effacer l'écran
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Fonction pour supprimer le dernier caractère
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Fonction pour calculer le résultat
function calculate() {
    const display = document.getElementById('display');
    try {
        // Utiliser eval pour calculer l'expression (attention à la sécurité !)
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erreur';
    }
}