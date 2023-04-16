
addFields();
const inputFieldsElement = document.getElementById("inputFields");
var inputFields = inputFieldsElement.children.length;
while(!inputFields){
  alert("you didn't input anything...");
  addFields();
  inputFields = inputFieldsElement.children.length;
}

addButtons();

const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;

function addField() {
  var inputFields = document.getElementById("inputFields");

  console.log(inputFields.children.length);
  var newh2 = document.createElement("h2");
    newh2.innerText = `Person ${inputFields.children.length/2+1}`;
    inputFields.appendChild(newh2);   

  var newField = document.createElement("div");
  newField.innerHTML = `
    <label for="fname">first name:</label>
    <input type="text" name="fname" class="nameinput" required>
    <label for="lname">last name:</label>
    <input type="text" name="lname" class="nameinput" required>
    <button type="button" onclick="removeField(this)">Remove</button>
  `;
  inputFields.appendChild(newField);
}
// function to remove an input field
function removeField(element) {
  var inputFields = document.getElementById("inputFields");
  var container = element.parentNode;
  var h2 = container.previousSibling;
  inputFields.removeChild(container);
  inputFields.removeChild(h2);
}

function addFields () {
  var inputFields = document.getElementById("inputFields");
  var newFields = parseInt(prompt("How many fields do you want to add?"));
  for (let i = 0; i < newFields; i++)
  {
    var newh2 = document.createElement("h2");
    newh2.innerText = `Person ${i + 1}`;
    inputFields.appendChild(newh2);    

    var newField = document.createElement("div");
    newField.innerHTML = `
    <label for="fname">first name:</label>
    <input type="text" name="fname" class="nameinput" required>
    <label for="lname">last name:</label>
    <input type="text" name="lname" class="nameinput" required>
    <button type="button" onclick="removeField(this)">Remove</button>`;
    inputFields.appendChild(newField);
  }
}

function addButtons () {
  const myButtons = document.getElementById("myButtons");
  var addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "Add Field";
  addButton.onclick = addField;


  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.value = "submit";
  submitButton.onclick = getNames;
  submitButton.textContent = "Submit";

  // append buttons to the form
  myButtons.appendChild(addButton);
  myButtons.appendChild(submitButton);
}

function getNames(event) {  
  const nameInputs = document.querySelectorAll('.nameinput');
  const nameArray = [];
  nameInputs.forEach(input => nameArray.push(input.value));
  console.log(nameArray);
  
  for(let i = 0; i < nameArray.length; i++){
    if(!namePattern.test(nameArray[i])){
      alert("you cannot put numbers in the name...");  
      console.log(nameArray);
      event.preventDefault();    
      break;
    }    
  }  
}
