
var taskInput = document.getElementById('taskInput');
var taskholder = document.getElementById("task-holder");

function submitTask() {

    var val = taskInput.value; 
    console.log("Button Clicked");

    if (val !=="") {

    var taskDiv = document.createElement('div');
    taskDiv.className = "task";
    var pEle = document.createElement("p");
    pEle.innerHTML = val;
    taskholder.append(taskDiv);
    taskDiv.append(pEle);
    var delButton = document.createElement("button");
    taskDiv.append(delButton);
    delButton.append("Delete");
    delButton.addEventListener("click", delTask);
    taskInput.value = "";
    console.log(`${val} task is added`);

    } else {

        alert("Fill in a task");
    }
}

function delTask () {
    if (confirm("Are you sure?")) {
        this.parentNode.remove();
        console.log("Task deleted");
    } else {
    }
    
}

// function editTask () {
//     if(confirm("Edit this task?")) {
    
//     }
// }