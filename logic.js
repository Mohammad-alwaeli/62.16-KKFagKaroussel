var ifSubjects = ["funktioner", "animationer","eksempel emne1"] //nr 2
var mathSubjects = ["differentialligninger", "vektorer i rummet", "eksempel emne1"] //nr 2
var samfSubjects = ["Dansk polotik", "International politik","Økonomi","Sociologi","Metode","Sociale medier","Styreformer","Kina","Familietyper","Finanskrisen"]//nr: 3 fysik, biotek, 
var engSubjects = ["Retorik","New Zealand", "Africa","Post-modernisme","Dystopi", "Victorian age","Shakespeare","Nordamerika's historie","Racisme","Horror" ]
var ifSubjects = ["funktioner", "animationer","IT-sikkerhed", "Hackere", "Sociale Medier", "Robot teknologi", "Talsystemer", "Kodesprog", "Computeren", "Kryptering", "Cloud/Database/Datalagring", "Programering"] //nr 2
var mathSubjects = ["differentialligninger", "vektorer i rummet", "Matrix", "Statestik", "Sandsynlighedsregning", "Vector funktioner", "Intergralrening", "Trigonomitriske funktioner", "Differentialregning", "Matematiske modeller", "Matematik i historien(græsk, egypten)", "Historiens matematikere"] //nr 2
//nr: 3 fysik, biotek, 
var fysSubjects = ["Relativitetsteori","harmoniske svinginer","varme energi","aerodynamik","exoplaneter","Atomkraft","Mekanik","banekurver","Bølger","GPS-systemer","Ellære","Radioaktivitet","Mørkt stof","Kvantemekanik","Tyngdekraft","Intertimomenter","Vedvarende energi","Raketfysik"]
var btSubjects = ["Cloning", "Nanoteknologi","Genmodifikation","Kræftceller","Livstilssygdomme","Epidemier","radioaktivitet","Kønssygdomme","Nikotin"]
//nr: 4 samf, engelsk 

//Add new subject list
var discs = ["af","bf"];
var subs = ["a", "b"];
$("#answer").val("ans");

//nr 3 og 4
var allSubjects = {
    //Add discipline
    "Informatik": ifSubjects,
    "Matematik": mathSubjects,
    "Samfundsfag":samfSubjects,
    "Engelsk": engSubjects,
    "Fysik": fysSubjects,
    "Bioteknologi": btSubjects,
}



/**nr 5
 * Generate a random discipline by choosing in allSubject
 * @return {string[]} discs A list of two discipline, the first is always
 * informatik, the second is random. 
 */
function randomDisciplines() {
    //Math.random()
    Math.random("Informatik")

    return ["Informatik", "Matematik"];

var subject = 0;
    Math.random();
        return ["Informatik", "Matematik"];
}
//text(allSubjects.random)

// vi har læst meget på internettet, så vi er kommet hertil
/* 
n = random.randint(0,5)
if (n<1){
    subject = allSubjects.mathSubjects
else if (n<2){
    subject =
}
} */




/** nr 6
 * Returns a list of two random subjects from the two giv en disciplines
 * @param {string[]} discs the two disciplines
 * @return {string[]} two random subjects
 */

/*
function randomSubjects(discs) {
    var subjectNum = 0; 
        while(subjectNum < allSubjects.length){
        
        }
            return ["Første subject er" + discs[0] + "andet subject er" discs];
} 
*/ 
//det må i selv finde ud af :))

/** nr 7
 * Make string that informs user of disciplines and subjects
 * @param {string[]} discs The two disciplines
 * @param {string[]} subs The two subjects
 * @return {string} En streng som fortæller fag of emner
 */
function makePrompt(discs, subs) {

    return "første fag er:" + discs[0]+ "emnet er: " + subs[0]
    
}

function loadPrompt() {
    discs = randomDisciplines();
    subs = randomDisciplines(discs);
    displayString = makePrompt(discs, subs);
    $("#prompt").html(displayString);
}

function submitPressed() {
    /*var description = $("#answer").val();
     var resp = {
        "emne1": subs[0],
        "emne2": subs[1],
        "fag1": discs[0],
        "fag2": discs[1],
        "beskrivelse": description, 
    };
    fetch("https://matquiz.dk/srpAi", {
        method: "POST",
        body: JSON.stringify(resp),
    }) */
    loadPrompt();
}

loadPrompt();