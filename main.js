const student = [
    {
    id: 'student',
    name: 'Beth',
    house: 'Ravenclaw'
    }
]

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const studentCards = () => {
    let domString= "";
    for (let i = 0; i < student.length; i++) {
        domString += `<div class="card text-white bg-form mb-3" style="max-width: 18rem;">`;
        domString +=   `<div class="card-body">`;
        domString +=     `<h1 class="card-title">${student[i].name}</h1>`;
        domString +=     `<h3 class="card-text">${student[i].house}</h3>`;
        domString +=     `<button class="btn btn-danger">Expel<button>`;
        domString +=   `</div>`;
        domString += `</div>`;
    }
   printToDom("studentSort", domString); 
};


const toggleFunction = () => {
    const toggle = document.getElementById("jumbotronBtnToggle");
    if (toggle.style.display === "none") {
        toggle.style = "block";
    } else {
        toggle.style.display = "none";
    }
}


const jumbotronEvents = () => {
    document.getElementById("jumbotronBtnToggle").addEventListener('click', jumbotronEvents)
}

const init = () => {
    jumbotronEvents();
    studentCards();
}

init();