const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

// console.log(todo , progress, done)

// drag highlight

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener("drag", (e)=>{ // dragging element
        // console.log("dragging ", e);
        dragElement = task; // find the element bring dragged
    })
});

// this effect is also used to add and remove highlights in elements in a website
// progress.addEventListener("dragenter", (e)=>{
//     // console.log("dragenter");
//     progress.classList.add("hover-over"); 
// })
// progress.addEventListener("dragleave", (e)=>{
//     progress.classList.remove("hover-over");
// })


// todo.addEventListener("dragenter", (e)=>{
//     // console.log("dragenter");
//     todo.classList.add("hover-over"); 
// })
// todo.addEventListener("dragleave", (e)=>{
//     todo.classList.remove("hover-over");
// })


// done.addEventListener("dragenter", (e)=>{
//     // console.log("dragenter");
//     done.classList.add("hover-over");
// })
// done.addEventListener("dragleave", (e)=>{
//     done.classList.remove("hover-over");
// })

// e.preventDefault();
// revents the browser’s default behavior for specific events (like dragging, context menus, or scrolling) associated with that div


//  Above code is veryh repetitive

function addDragEventsOnColuumn(column){
    column.addEventListener("dragenter", (e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    })

    // if elemetn is hovering above - dragover
    column.addEventListener("dragover", (e) =>{
        // e.preventDefault();
         e.preventDefault(); // This makes the column a valid drop target // plus icon shows in brave browser only
        // e.dataTransfer.dropEffect = "copy"; // This shows the plus sign cursor



        
    })
    column.addEventListener("drop", (e)=>{ // drag element if dropped on an element
        e.preventDefault();
        // console.log("Dropped", e);

        console.log("Dropped", dragElement, column); // kisko drag kiya , kispe drop kiya



    })
}

addDragEventsOnColuumn(todo);
addDragEventsOnColuumn(progress);
addDragEventsOnColuumn(done);