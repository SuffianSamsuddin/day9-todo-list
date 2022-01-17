
var taskInput = document.getElementById('taskInput')
var taskholder = document.getElementById("task-holder");

function submitTask() {
    console.log("Button Clicked");


    var val = taskInput.value;
    console.log(val); 


    if(val !=="") {

    var taskDiv = document.createElement('div');
    taskDiv.className = "task";
    taskDiv.addEventListener("click", delTask);

    var pEle = document.createElement("p");
    pEle.innerHTML = val;

    taskDiv.append(pEle);

    }
    

    taskInput.value = "";
    } else {1
        alert("Hmm, fill in a task please");
    }
}


function delTask () {
    if (confirm("Are you sure?")) {
        this.remove();
    } else {
        //
    }
    
}