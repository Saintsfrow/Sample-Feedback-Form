var nameError = document.getElementById('name-error');
var mobileError = document.getElementById('mobile-error');
var emailError = document.getElementById('email-error');
var feedbackError = document.getElementById('feedback-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    var name = document.getElementById('contact-name').value;
    nameError.style.display = 'block';
    setTimeout(function(){nameError.style.display = 'none';},3000);
    if(name.length == 0)
    {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML = 'Enter your full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateMobile()
{
    var mobile = document.getElementById('contact-mobile').value;
    mobileError.style.display = 'block';
    setTimeout(function(){mobileError.style.display = 'none';},3000);
    if(mobile.length == 0)
    {
        mobileError.innerHTML = 'Mobile Number is required';
        return false;
    }
    if(mobile.length !== 10)
    {
        mobileError.innerHTML = 'Invalid Mobile Number';
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/))
    {
        mobileError.innerHTML = 'Only digits are allowed';
        return false;
    }
    mobileError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateEmail()
{
    var email = document.getElementById('contact-email').value;
    emailError.style.display = 'block';
    setTimeout(function(){emailError.style.display = 'none';},3000);
    if(email.length == 0)
    {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateFeedback()
{
    var feedback = document.getElementById('contact-feedback').value;
    var required = 10;
    var left = required - feedback.length;
    feedbackError.style.display = 'block';
    setTimeout(function(){feedbackError.style.display = 'none';},3000);
    if(left > 0)
    {
        feedbackError.innerHTML = left + ' more characters is required';
        return false;
    }
    feedbackError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateForm()
{
    if(!validateName() || !validateMobile() || !validateEmail() || !validateFeedback())
    {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Fill all the fields required';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}