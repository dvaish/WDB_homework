'use strict';

const blackholesize = 152

function blackHoles() {
    let feet = Number(document.getElementById('howmanyfeet').value)
    let inches = Number(document.getElementById('howmanyinches').value)
    let output = document.getElementById('output')
    
    let total = (feet * 12) + (inches)
    let answer = blackholesize / total

    output.innerHTML = answer.toFixed(2)
    alert( output.innerHTML );
    feet, inches = null;
}