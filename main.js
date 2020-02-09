
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
 };
 
 const studentCards = () => {
      let domString= "";
      for (let i = 0; i < student.length; i++) {
          domString += '<div class="col-md-6 col-lg-4">';
          domString +=   `<div id=${student[i].House} class="card text-white bg-form m-5" background-color: #eee;">`;
          domString +=     `<div class="border border-white rounded">`
          domString +=       `<div class="card-body">`;
          domString +=       `<h1 class="card-title">${student[i].Name}</h1>`;
          domString +=       `<h3 class="card-text">${student[i].House}</h3>`;
          domString +=     '</div>';
          domString +=     '<div>'
          domString +=      '<button id="expel" type="button" class="btn btn-outline-light">Expel<button>';
          domString +=     '</div>'
          domString +=     '</div>';
          domString +=   `</div>`
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
    document.getElementById('formReset').value='';
}

let expel = () => {
    expelBtn(student.splice({Name: name, House: houseFilter(name), Id: Id}));
    studentCards();
}

const expelBtn = (e) => {
    document.getElementById("expel").addEventListener('click', expel)
}

const init = () => {
    submitName();
}

init();


