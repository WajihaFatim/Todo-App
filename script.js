const inputBox = document.querySelector('.inputField input')
const inputButton = document.querySelector('.inputField button')
const todolist = document.querySelector('.todolist')
const del = document.querySelector('span')

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        inputButton.classList.add("active")
    }
    else {
        inputButton.classList.remove("active")
    }
}

inputButton.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo")

    if (getLocalStorage == null) {
        list = []
    }
    else {
        list = JSON.parse(getLocalStorage);
    }
    list.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(list))
   showList();
}

function showList() {
    let getLocalStorage = localStorage.getItem("New Todo");

    if (getLocalStorage == null) {
        list = []
    }
    else {
        list = JSON.parse(getLocalStorage);
    }
    let newLitag = '';
    list.forEach((element,index) => {
        newLitag +=`  <li>${element}<span onclick="deltask(${index})"><i class="fas fa-trash"></i></span></li>`
    });

    todolist.innerHTML=newLitag
   inputBox.value=""
}

function deltask(index){
    let getLocalStorage=localStorage.getItem("New Todo")
    list= JSON.parse(getLocalStorage)
    list.splice(index,1)

    localStorage.setItem("New Todo",JSON.stringify(list))
    showList()
   
}