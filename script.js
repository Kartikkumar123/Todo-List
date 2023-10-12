let inputBox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // saveData();

    }
})
// function saveData(){
//     localStorage.setItem("data",listcontainer.innerHTML);
// }
// function showTask(){
//     listcontainer.innerHTML = localStorage.setItem("data");
// }
// showTask();