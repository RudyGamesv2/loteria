// get id
addBtn = document.getElementById("addBtn");
announcement = document.getElementById("alert");
element = document.getElementById("element");
list = document.getElementById("list");
elementList = document.querySelector("li");
winnerBtn = document.getElementById("winnerBtn");
winner = document.getElementById("winner");
los = document.getElementById('los');

// Variables
let peopleList = []
let peopleListWhoWin = []
let id = -1;
let time = 5;
test = 0;

// confetti
const confettiAudio = new Audio('audio/hornParty.mp3');


const start = () => {
    setTimeout(function() {
        confetti.start()
        confettiAudio.play();
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};



// program
addBtn.onclick = function (){
    const newElement = element.value.trim();

    if(newElement != ""){

        element.value = "";
        document.getElementById("clear").style = "display: none"
        element.textContent = "";
        id++

        list.innerHTML += `<li id="${id}"> ${newElement} </li>`
        peopleList.push(newElement)

        // console.log(peopleList)

        announcement.textContent = "";
    }

    else{
        announcement.textContent = "Uzupełnij dane";
    }
}


// ============ delate elements in peopleList[] ============

const buttonPressed = e => { 
    elementsToDelateId = e.target.id;
    peopleList[elementsToDelateId] = "Pusto";
    elementsToDelateId = -1;
}

list.addEventListener("click", buttonPressed);
// =============================== end =============================== 


// ============ delate elements in list (<li></li>) ============

list.onclick = function(e){
    
    const elementsToDelate = e.target;
    this.removeChild(elementsToDelate);

}

// =============================== end =============================== 


winnerBtn.onclick = function (){
    
    peopleListWhoWin.splice(0, peopleListWhoWin.length)
    for(let name of peopleList){
        if(name != "Pusto"){
            peopleListWhoWin.push(name);
        }
        
    }
    if(peopleListWhoWin.length!=0){
        if(test == 0){
            document.getElementById("alert-winner").textContent = ""
            console.log(peopleListWhoWin)

            winnerPeople = peopleListWhoWin[Math.floor((Math.random() * peopleListWhoWin.length))];
            winner.textContent = winnerPeople

            winner.classList.remove("off");
            winner.classList.add("on");
        
            start();
        
            stop();
            test = 1;
        }

        else{
            document.getElementById("alert-winner").textContent = ""
            console.log(peopleListWhoWin)
    
            winner.classList.toggle("on");
            winner.classList.add("off");
        
            setTimeout(draw, 500);
        
            function draw (){
                winnerPeople = peopleListWhoWin[Math.floor((Math.random() * peopleListWhoWin.length))];
                winner.textContent = winnerPeople
            }
        
            setTimeout(toggleClass, 500);
        
            function toggleClass (){
                winner.classList.remove("off");
                winner.classList.add("on");
            }
            
            start();
            
            stop();
        }

        
    }

    else{
        document.getElementById("alert-winner").textContent = "Nie podano osób!"
    }
    

}


var input = document.getElementById("element");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addBtn").click();
  }
});







// const buttons = document.getElementsByTagName("li");
// const result = document.getElementById("result");

// const buttonPressed = e => { 
//     result.innerHTML = `ID of ${e.target.innerHTML} is <strong>${e.target.id}</strong>`;
//   }
  

// list.addEventListener("click", buttonPressed);