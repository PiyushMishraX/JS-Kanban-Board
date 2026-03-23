let tasksData = {}

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

// console.log(todo , progress, done)

// drag highlight

const tasks = document.querySelectorAll('.task');

// har task mai suru mai event listenre laga diya // new elements mai nahi hoga use creation time mai add karenge 
tasks.forEach(task => {
    task.addEventListener("drag", (e)=>{ // dragging element
        // console.log("dragging ", e);
        dragElement = task; // find the element bring dragged
        // dragElement is a global variable that stores the currently dragged task element during drag-and-drop operations. It's set in the drag event and used in the drop event to move the task to the new column via column.appendChild(dragElement). This tracks which item is being dragged across the board. // it helps to rememebr which elemetn is being dropped and dragged so a particular operation happens to that specific element only
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

function addDragEventsOnColumn(column){
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

        // console.log("Dropped", dragElement, column); // kisko drag kiya , kispe drop kiya

        column.appendChild(dragElement);
        column.classList.remove("hover-over");


        // count logic
        [todo, progress, done].forEach(col=>{
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");
            // the count is selected from that column which is being called through drop event listner of column being changed
            count.innerText = tasks.length; 
        })



    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);


/* MODAL  */

/* modal related logic  */


const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click",() =>{
    modal.classList.toggle("active"); // if their is active class then remove else adds active class
} )

modalBg.addEventListener("click", ()=>{
    modal.classList.remove("active"); // hide modal when we click bg // outside input box
})

addTaskButton.addEventListener("click", ()=>{

    // alert("button working")

    const taskTItle = document.querySelector("#task-title-input").value
    const taskDesc = document.querySelector("#task-desc-input").value

    // const template = `<div draggable="true" class="task">
    //                 <h2>${taskTItle}</h2>
    //                 <p>${taskDesc}</p>
    //                 <button>Delete</button>
    //             </div>`

    const div = document.createElement("div");

    div.classList.add("task")
    div.setAttribute("draggable","true")
    
    div.innerHTML = `
        <h2>${taskTItle}</h2>
        <p>${taskDesc}</p>
        <button>Delete</button>
    `;

    todo.appendChild(div);// new task drag ebent listenre mai nahi hai

    const columns = [todo, progress, done];
    columns.forEach(col=>{
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");
            // the count is selected from that column which is being called through drop event listner of column being changed

            // task data will have three properties todo pregres and done // col ki id todo, progress, done
            tasksData[col.id] =Array.from(tasks).map(t=>{ 
                return { // return map function
                    title: t.querySelector("h2").innerText, 
                    desc: t.querySelector("p").innerText,
                }
            })
            // console.log(tasksData)

            localStorage.setItem("tasks", JSON.stringify(tasksData));

            count.innerText = tasks.length; 
    })

    div.addEventListener("drag",(e)=>{
        dragElement = div;
    })


    modal.classList.remove("active"); 

})





/* modal related logic  */