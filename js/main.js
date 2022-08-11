// alert('hello');

function addTask() {

    const newLi = document.createElement("li");
    const newInput = document.createElement("input");
    const newLabel = document.createElement("label");
    const ul = $(".list-group")[0];


    let taskInput = document.getElementById("task").value;
    ul.appendChild(newLi).classList.add("list-group-item");

    let itemsLi = document.querySelectorAll("li");
    let addInput = itemsLi[itemsLi.length - 1].appendChild(newInput);
    let addLabel = itemsLi[itemsLi.length - 1].appendChild(newLabel);

    addInput.classList.add("form-check-input");
    addInput.classList.add("me-2");
    addLabel.classList.add("form-check-label");
    let itemsInput = document.querySelectorAll("input");
    itemsInput[itemsInput.length - 1].setAttribute("type", "checkbox");

    let itemsLabel = document.querySelectorAll("label");
    itemsLabel[itemsLabel.length - 1].innerHTML = taskInput;

};


function getTasks() {
    let apiURL = 'http://localhost:3000/tasks';
    /* jQuery AJAX Dokumentacija */

    $.get(apiURL, function (data) {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
            console.log(data[i]);
            addTask(data[i].name);
        }
    })
}



// let taskInput = document.getElementById("task").value;
// items[items.length - 1].innerHTML = taskInput;