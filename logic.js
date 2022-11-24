loadPrompt(allSubjects);

function loadPrompt(allSubjects) {
    disciplinePair = randomDisciplines(allSubjects);
    subjectPair = randomSubjects(disciplinePair, allSubjects);
    displayString = makePrompt(disciplinePair, subjectPair);
    document.getElementById("prompt").innerHTML = displayString;
    document.getElementById("fag1").value = disciplinePair[0];
    document.getElementById("fag2").value = disciplinePair[1];
    document.getElementById("emne1").value = subjectPair[0];
    document.getElementById("emne2").value = subjectPair[1];        
}

/**
 * //Kombinerer Informatik med et andet tilfældig valgt emne
 * @param {*} allSubjects 
 * @returns 
 */
function randomDisciplines(allSubjects) {
    return ["Informatik", pickRandom(Object.keys(allSubjects))];
}

/**
 * 
 * @param {*} anArray 
 * @returns 
 */
function pickRandom(anArray){
    var randomIndex = Math.floor(Math.random() * anArray.length);
    return anArray[randomIndex];
}

/**
 * // Sørger for at de to valgte fag ikke er de samme.
 * @param {*} disciplinePair 
 * @param {*} allSubjects 
 * @returns 
 */
function randomSubjects(disciplinePair, allSubjects) {
    var subjects1 =  allSubjects[disciplinePair[0]];
    var subjects2 =  allSubjects[disciplinePair[1]];
    return [pickRandom(subjects1), pickRandom(subjects2)];
} 


/**
 * //Giver vores funktion output sprog til som gør det mere læseligt
 * @param {*} disciplinePair 
 * @param {*} subjectPair 
 * @returns 
 */
function makePrompt(disciplinePair, subjectPair) {
    return "Det første fag er " + disciplinePair[0] + ", emnet er " + subjectPair[0] 
        + ". Det andet fag er " + disciplinePair[1] + ", emnet er " + subjectPair[1];
}

