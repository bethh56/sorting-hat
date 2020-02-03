
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
 };
 
 const studentCards = () => {
      let domString= "";
      for (let i = 0; i < student.length; i++) {
          domString += '<div class="card text-black bg-form m-5" style="max-width: 18rem; background-color: #eee;">';
          domString +=   '<div class="card-body">';
          domString +=       `<h1 class="card-title">${student[i].Name}</h1>`;
          domString +=       `<h3 class="card-text">${student[i].House}</h3>`;
          domString +=   '</div>';
          domString +=   '<button id="expel" class="btn btn-danger">Expel<button>';
          domString += '</div>';
      }
     printToDom('studentSort', domString); 
 };
 
let name = "";
let Id = 0;

const student = [];
const getName = (e) => name = e.target.value;

const houseFilter = (studentName) => {
    switch (name.toLowerCase().charAt(0)) {
        case "a":
        case "b":
        case "c": 
        case "d":
        case "e":
        case "f":    
            return "Ravenclaw";
            break;
        case "g":   
        case "h":
        case "i":
        case "j": 
        case "k":
        case "l":
            return "Slytherin";
            break;
        case "m":  
        case "n":
        case "o":
        case "p":  
        case "q":
        case "r":
            return "Hufflepuff";
            break;
        default:
            return "Gryffindor";
            break;       
    }
}

const submitted = (e) =>  {
    student.push({Name: name, House: houseFilter(name), Id: Id++});
    studentCards();
    expelBtn();
}

const submitName = () => {
    document.getElementById("name").addEventListener('input', getName);
    document.getElementById("submitBtn").addEventListener('click', submitted);
}

let expel = (e) => {
    
    console.log(student.splice({Name: name, House: houseFilter(name), Id: Id}));
}

const expelBtn = () => {
    document.getElementById("expel").addEventListener('click', expel)
}

const init = () => {
    // jumbotronEvents();
    submitName();
}

init();

//const toggleFunction = () => {
     //const jumboTron = document.getElementById("jumbotronBtnToggle");
       //if (jumboTron.style.display === "none") {
         //document.getElementById("jumbotronBtnToggle").style = "block";
       //} else {
        // jumboTron.style.display = "none";
       //}
//}

//const jumbotronEvents = () => {
    //document.getElementById("jumbotronBtnToggle").addEventListener('click', jumbotronEvents)
//}