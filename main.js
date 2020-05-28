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
          domString += `<div id=${student[i].House} class="card text-white bg-form m-5" background-color: #eee;">`;
          domString += `<div class="border border-white rounded">`;
          domString += `<div class="card-body">`;
          domString += `<h1 class="card-title">${student[i].Name}</h1>`;
          domString += `<h3 class="card-text">${student[i].House}</h3>`;
          domString += '</div>';
          domString += '<div>';
          domString += `<button id=${student[i].Id} type="button" class="btn btn-dark btn-outline-light m-3 w-50 float-right expelWhenClicked">Expel</button>`;
          domString += '</div>';
          domString += '</div>';
          domString += `</div>`;
          domString += '</div>';
          
          
      }
     printToDom('studentSort', domString);
     expelEvents();
     
 };
 
let name = "";
let Id = 0;


// EMPTY STUDENT ARRAY
const student = [];

const houseChoices = [ "Ravenclaw", "Slytherin", "Hufflepuff", "Gryffindor" ];


const submitted = (e) =>  {
    const sortStudent = {
        Name: name, 
        House: houseChoices[Math.floor(Math.random() * houseChoices.length)], 
        Id: Id++
    };
    student.push(sortStudent)
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
    // console.log("it working");
    const studentId = e.target.closest(".card").id;
    const studentPosition = student.findIndex((p) => p.id === studentId);
    student.splice(studentPosition, 1);
    studentCards();
}



// PAGE LOAD INIT
const init = () => {
    submitName();
}

init();


