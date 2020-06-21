const form = document.getElementById('form_wrapper');
const uItemList = document.getElementById('column_layout')
form.addEventListener('submit',addItems);

function addItems(e){
  e.preventDefault();
//Add Class

//Adding an Id
//myList.id ="newItem";

//Add Attribute
//myList.setAttribute("title","New Item");
//Create Text Node and Append to li
//Get user input
const userInput = document.querySelector('.input_addItems').value;

let myList = document.createElement("li"); //Creating Elements
myList.className ="items";
const textNode= document.createTextNode(userInput);
//Append text to the list
myList.appendChild(textNode);


//Append li as Child to ul
uItemList.appendChild(myList);
console.log(myList);

//Create new button element
const myButton= document.createElement("button");
//Add Class
myButton.className = "delete_item";
//add
myButton.innerHTML ="Delete"; //since there is not textNode
//Append button into li
myList.appendChild(myButton);

}

const cardWrapper = document.querySelector('.wrapper');
const heading = document.querySelector('.header');

cardWrapper.addEventListener('mousemove', runEvent); //any movement inside the card
function runEvent(e){
 console.log(`Event Type:${e.type}`);

 //uses the mousemove event
// heading.innerHTML =`MouseX: ${e.offsetX} MouseY ${e.offsetY}`;
 cardWrapper.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY}, 50)`;
 const heading2 = document.querySelector('.my_header');
 heading2.style.color ="#000";
 document.querySelector('.my_title').style.color="#000";
 document.querySelector('.input_submit').style.backgroundColor="#000";
 document.querySelector('.input_submit').style.border= "none";
 document.querySelector('.input_submit').style.color="#fff";

 const delete_btn = document.querySelectorAll('li .delete_item');
 for(let i=0; i<delete_btn.length; i++){
   delete_btn[i].style.color = "#fff";
 }
 }
 //classList
 //DeleteItem
 uItemList.addEventListener('click', deleteItem);
 let listItems = document.querySelector('.items');

 function deleteItem(e){
     e.preventDefault();
    if(e.target.classList.contains('delete_item')){
        console.log("hey");
        if(confirm('Your task will be deleted')){
            let myList= e.target.parentElement;
            //move the child of the ul
            uItemList.removeChild(myList);
        }
    }
 }