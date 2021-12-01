let answer = false
let answers = getSaved();

if(!answers){
    answers = [];
}
const startButton = document.querySelector(`.start-button`);
if(startButton){
startButton.addEventListener(`click`, ()=>{
    alert(`Welcome to the escape room.
In the rooms you will find questions hidden in objects, once you answer them all correctly you may leave the room. 
Good luck!`)
})}

const door = document.querySelector(".door");
if(door){
door.addEventListener("click", ()=>{
    alert(`Door is locked, solve the puzzels to get out.`)
})
}
// Bedroom
const paper = document.querySelector(".paper");
if(paper){
    paper.addEventListener("click", ()=>{

        const answer1 = prompt("What does `const` stand for?");
        if(answer1 == `constant`){
            alert("Correct!")
            answer = true;
            answers[0] = answer;
            save();
            exit()
        }else{
            alert(`Try again`)
            answer = false;
            answers[0] = answer;
            save();
        }
   })
}
// Study
const note1 = document.querySelector(".note1");
const note2 = document.querySelector(".note2");
const note3 = document.querySelector(".note3");
const math = document.querySelector(".math");
if(note1){
note1.addEventListener("click", ()=>{
    const answer2 = prompt("How do you make an arrow function?");
    if(answer2 == `()=>{}`){
        alert("Correct!")
        answer = true;
        answers[1] = answer;
        exit()
    }else{
        alert(`Try again`)
        answer = false;
        answers[1] = answer;
    }
})
}
if(note2){
note2.addEventListener("click", ()=>{
    const answer3 = prompt("What does DOM mean?");
    if(answer3 == `Document Object Model`){
        alert("Correct!")
        answer = true;
        answers[2] = answer;
        save();
        exit()
    }else{
        alert(`Try again`)
        answer = false;
        answers[2] = answer;
        save();
    }
    console.log(answers)
})
}
if(note3){
note3.addEventListener("click", ()=>{
    const answer4 = prompt("How do you write `Hello World` in C#");
    if(answer4 == `Console.WriteLine("Hello World");`){
        alert("Correct!")
        answer = true;
        answers[3] = answer;
        save();
        exit()
    }else{
        alert(`Try again`)
        answer = false;
        answers[3] = answer;
        save();
    }
})
}
if(math){
math.addEventListener("click", ()=>{
    const answer5 = prompt("What does `UL` stand for?");
    if(answer5 == `Unordered List`){
        alert("Correct!")
        answer = true;
        answers[4] = answer;
        save();
        exit()
    }else{
        alert(`Try again`)
        answer = false;
        answers[4] = answer;
        save();
    }
})
}
// Livingroom
const painting = document.querySelector(".flower");
const flower = document.querySelector(".yellow");
if(painting){
painting.addEventListener("click", ()=>{
    const answer6 = prompt("What kind of elements do we call the Main, Nav, Header and Footer ?");
    if(answer6 == `Semantic elements`){
        alert("Correct!")
        answer = true;
        answers[5] = answer;
        save();
        exit()
    }else{
        alert(`Try again`)
        answer = false;
        answers[5] = answer;
        save();
    }
})
}
if(flower){
flower.addEventListener("click", ()=>{
    const answer7 = prompt("What does h1 stand for?");
    if(answer7 == `heading 1`){
        alert("Correct!")
        answer = true;
        answers[6] = answer;
        save();
        exit()
    }else{
        alert(`Try again`)
        answer = false;
        answers[6] = answer;
        save();
    }
})
}

// save answers in the localstorage
function save(){
    const a = JSON.stringify(answers);
    localStorage.setItem("answers", a);
}

// get the answers refill the array
function getSaved(){
    return JSON.parse(localStorage.getItem("answers"));
}


// exit the room
function exit(){
    if(answers.length == 7){
    if (answers.includes(false) || answers.includes(null)){
        console.log(`You haven't solved all puzzles`)
    }else{
        location.href = '../../templates/html/exit.html';
    }
}
}

//open door
const openDoor = document.querySelector(".open-door");
if(openDoor){
    openDoor.addEventListener("click", ()=>{

       alert(`Good job you escaped`)
       let reply = prompt(`Would you like to play agian? type: yes or no`)
       if(reply == `yes`){
        localStorage.removeItem(`answers`)
        location.href = '../../templates/html/frontdoor.html';
       }else{
           alert(`Thank you for playing`)
       }
        console.log(answers)
   })
}