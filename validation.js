const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname_input');
const email_input = document.getElementById('email_input');
const password_input = document.getElementById('password_input');
const confirm_password_input = document.getElementById('confirm_password_input');
const error_message = document.getElementById('error_message')


form.addEventListener('submit', (e) => {
    


    let errors = [];
    if(firstname_input) {
        // if we have a firstname input then we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, confirm_password_input.value);
    }
    else {
        // if we don't have a firstname input then we are in the login
        errors = getLoginFormErrors(email_input.value, password_input.value);

    }

    if(errors.length > 0){
        // alert('you are a thief');
        e.preventDefault();
        error_message.innerText = errors.join("." );
    }
})

function getSignupFormErrors(firstname, email, password, confirm_password){
    let errors = [];
    if(firstname === '' || firstname == null){
        errors.push('Firstname is requierd');
        firstname_input.parentElement.classList.add('incorrect');
    }

    if(email === '' || email == null){
        errors.push('Email is requierd');
        email_input.parentElement.classList.add('incorrect');
    }


    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    if(password !== confirm_password){
        errors.push('passwords do not match');
        password_input.parentElement.classList.add('incorrect');
        confirm_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email, password){
    let errors = [];

     if(email === '' || email == null){
        errors.push('Email is requierd');
        email_input.parentElement.classList.add('incorrect');
    }


    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allInputs = [firstname_input, email_input, password_input, confirm_password_input].filter(input => input !=null);
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    })
})


