var list = document.getElementById("lista_todos")
var input= document.getElementById("text_casuta")

let items=0
function createTodo(){
  var text=input.value;

  var div=document.createElement("p")
  div.className="casuta"
  div .style.fontSize="250%"
  div.style.fontFamily="Arial"
  div.style.color="grey"
  div.style.display="block"
  list.appendChild(div)

  var checkbox = document.createElement("input")
  checkbox.type="checkbox"
  checkbox.style.transform="scale(2.2)"
  checkbox.style.marginLeft="40px"
  checkbox.style.marginTop="25px"
  div.appendChild(checkbox)

  var textbox = document.createElement("span")
  textbox.style.marginLeft="50px"
  textbox.style.alignContent="center"
  textbox.innerText=text
  textbox.style.fontFamily="Arial"
  textbox.style.fontSize="30px" 
  textbox.style.color="grey"
  div.appendChild(textbox)

  input.value=""
  document.getElementById("items").innerHTML= items + "items "
}
