
function submitButton() {
    const firstname = document.getElementById("first-name");
    const lastname = document.getElementById("last-name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const pincode = document.getElementById("pincode");
    const gender = document.getElementsByName("Gender");
    const foodChoice = document.getElementById("food").selectedOptions;
    const state = document.getElementById("state");
    const country = document.getElementById("country");
    let genderVal;
    for (let i=0; i<gender.length; i++) {
        if (gender[i].checked) {
            genderVal = gender[i];
        }
    }
    
    let foodvalues = Array.from(foodChoice).map(({value}) => value);
    
    const table = document.getElementById("myTable");
    const tbodyElement = document.getElementById("bodyelem");
    const rowElement = tbodyElement.insertRow(tbodyElement.rows.length);
  
    rowElement.insertCell(0).innerHTML = firstname.value;
    rowElement.insertCell(1).innerHTML = lastname.value;
    rowElement.insertCell(2).innerHTML = email.value;
    rowElement.insertCell(3).innerHTML = address.value;
    rowElement.insertCell(4).innerHTML = pincode.value;
    rowElement.insertCell(5).innerHTML = genderVal.value;
    rowElement.insertCell(6).innerHTML = foodvalues;
    rowElement.insertCell(7).innerHTML = state.value;
    rowElement.insertCell(8).innerHTML = country.value;
    tbodyElement.appendChild(rowElement);
    table.appendChild(tbodyElement);

    return false;
}