'use strict';

const blackholesize = 152

function blackHoles() {
    let howmanyfeet = document.getElementById('howmanyfeet').value
    let howmanyinches = document.getElementById('howmanyinches').value

    let feet = Number(howmanyfeet)
    let inches = Number(howmanyinches)

    let total = (feet * 12) + (inches)
    let answer = blackholesize / total

    document.getElementById('output').innerHTML = answer.toFixed(2) + ' &sdot; 10<sup>13</sup>'
    alert( output.innerHTML );
    howmanyfeet, howmanyinches = null;
}