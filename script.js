const form = document.querySelector("form");
const todo = document.getElementById("ul");
const input = document.getElementById("input");

const to = JSON.parse(localStorage.getItem('notes'))

if(to){
    to.forEach(todo => {
        addTodo(todo)
    })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

    addTodo()
})




function addTodo(tod){
    let todoText = input.value;

    if(tod){
        todoText = tod.text;

    }

    if (todoText) {
      const img = document.createElement("img");
      img.src = "/imgs/close.png";
      img.id = "img";
      const li = document.createElement("li");
    
      li.innerText = todoText;

  
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
        uptadeLS();
      });

  
      img.addEventListener("click", (e) => {
        e.preventDefault();
  
        li.remove();
        uptadeLS();
      });
  
      li.appendChild(img);
  
      todo.appendChild(li);
  
      input.value = "";

      uptadeLS();
    }
}



function uptadeLS() {
    const notesEL = document.querySelectorAll('li');

    const notes = []

    notesEL.forEach(notessEL =>{
        notes.push({
            text: notessEL.innerText,
            completed: notessEL.classList.contains('.completed')
        })

    })

    localStorage.setItem('notes', JSON.stringify(notes))
        
}