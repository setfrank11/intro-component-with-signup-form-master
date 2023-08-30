const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const emailAddress = document.getElementById('emailInput');
const password = document.getElementById('passInput');

const firstError = document.getElementById('firstNameError');
const lastError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passError');

const button = document.querySelector('.submit');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailError);
    validateEmpty(password.value, password, passError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'looks like this is not an email')
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);
    } else {
        hideError(divInput, divError);
    }
};

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red'
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
    <p class= "error">${error}</p>`;
};

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
};
