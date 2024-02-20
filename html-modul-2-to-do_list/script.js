var list = document.getElementById("lista_todos")
var input = document.getElementById("text_casuta")

let items = 0

function createTodo() {
    var text = input.value;

    var div = document.createElement("p");
    div.className = "casuta"
    div.style.fontSize = "250%"
    div.style.fontFamily = "cursive"
    div.style.color = "rgb(81, 69, 59)"
    div.style.display = "block"
    list.appendChild(div)

    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")
    checkbox.style.transform = "scale(2.2)"
    checkbox.style.marginLeft = "40px"
    checkbox.style.maginTop = "25px"
    div.appendChild(checkbox);
    
    var textbox = document.createElement("span")
    textbox.style.marginLeft = "50px"
    textbox.style.alignContent = "center"
    textbox.innerText = text;
    textbox.style.fontFamily = "cursive"
    textbox.style.fontSize = "30px"
    textbox.style.color = "rgb(81, 69, 59)"
    div.appendChild(textbox)

    input.value = ""
    document.getElementById("items").innerHTML = items + "items left"
}

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('checkbox')){
    if(e.target.classList.contains('checked')) {
        e.target.nextElementSibling.style.textDecoration = "revert"
        e.target.classList.remove('checked')
        e.target.nextElementSibling.classList.remove('checked')
    }
    else{
        e.target.nextElementSibling.style.textDecoration = "line-through"
        e.target.classList.add('checked')
        e.target.nextElementSibling.classList.add('checked')
    }
    }
});

let childrenList = list.getElementsByTagName("p")

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) {
        for(var i = 0;i < items;i++) {
            if(childrenList[i].firstChild.classList.contains("checked")) {
                childrenList[i].style.display="none"
            }
        }
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('completed')) {
        for(var i = 0;i < items;i++) {
            if(!(childrenList[i].firstChild.classList.contains("checked"))) {
                childrenList[i].style.display="none"
            }
        }
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('all')) {
        for(var i = 0;i < items;i++) {
            childrenList[i].style.display="block"
        }
    }
})

input.addEventListener("keypress", function(event){
    var text = input.value;
    if(event.key === "Enter" && text != "") {
        createTodo()
        items++
        document.getElementById("items").innerHTML = items + "items left"
    }
});