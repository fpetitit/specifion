// Exemple de fonction à tester
function add(a, b) {
    return a + b;
}

// Fonction de test
function testAdd() {
    var expected = 5; // Valeur attendue
    var result = add(2, 3); // Appel de la fonction à tester

    // Vérification du résultat
    if (result === expected) {
        return "Test Add: PASSED";
    } else {
        return "Test Add: FAILED. Expected " + expected + ", but got " + result;
    }
}

// Exécution des tests
function runTests() {
    var testResults = document.getElementById('testResults');
    testResults.innerHTML = ""; // Effacer les résultats précédents

    // Exécution du test et affichage du résultat
    var testResult = testAdd();
    var testResultElement = document.createElement('div');
    testResultElement.textContent = testResult;
    testResults.appendChild(testResultElement);
}

// Exécution des tests lorsque la page est chargée
window.onload = function() {
    runTests();
};
