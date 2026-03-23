const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

// console.log(todo , progress, done)

// drag highlight

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener("drag", (e)=>{ // dragging element
        // console.log("dragging ", e);
    })
});

// this effect is also used to add and remove highlights in elements in a website
progress.addEventListener("dragenter", (e)=>{
    // console.log("dragenter");
    progress.classList.add("hover-over");
    
})

progress.addEventListener("dragleave", (e)=>{
    progress.classList.remove("hover-over");

})