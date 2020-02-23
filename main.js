//PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
 };
 
 // STUDENT SORTING CARDS
 const studentCards = () => {
      let domString= "";
      for (let i = 0; i < student.length; i++) {
          domString += '<div class="col-md-6 col-lg-4">';
          domString +=   `<div id=${student[i].House} class="card text-white bg-form m-5" background-color: #eee;">`;
          domString +=     `<div class="border border-white rounded">`;
          domString +=       `<div class="card-body">`;
          domString +=       `<h1 class="card-title">${student[i].Name}</h1>`;
          domString +=       `<h3 class="card-text">${student[i].House}</h3>`;
          domString +=     '</div>';
          domString +=     '<div>';
          domString +=      `<button id=${student[i].Id} type="button" class="btn btn-dark btn-outline-light m-3 w-50 float-right expelWhenClicked">Expel</button>`;
          domString +=     '</div>';
          domString +=     '</div>';
          domString +=   `</div>`;
          domString += '</div>';
          
          
      }
     printToDom('studentSort', domString);
     expelEvents();
     
 };
 
let name = "";
let Id = 0;

const student = [];

// HOUSE FILTER
const houseFilter = (studentName) => {
    switch (name.toLowerCase().charAt(0)) {
        case "a":
        case "h":
        case "c": 
        case "d":
        case "n":
        case "f":    
            return "Ravenclaw";
            break;
        case "g":   
        case "b":
        case "i":
        case "j": 
        case "r":
        case "l":
            return "Slytherin";
            break;
        case "m":  
        case "e":
        case "o":
        case "p":  
        case "q":
        case "k":
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
}

const getName = (e) => name = e.target.value;

const submitName = () => {
    document.getElementById("name").addEventListener('input', getName);
    document.getElementById("submitBtn").addEventListener('click', submitted);
}



// EXPEL BUTTON
const expelEvents = () => {
    const expelling = document.getElementsByClassName("expelWhenClicked");
    for(let i = 0; i < expelling.length; i++){
        expelling[i].addEventListener('click', expel)
    }
}

const expel = (e) => {
    console.log("it working");
     // const expelBtn = student.splice({Name: name, House: houseFilter(name), Id: Id});
    // studentCards();
}


// PAGE LOAD INIT
const init = () => {
    submitName();
}

init();


