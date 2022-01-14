const loginSection = document.getElementById('login');
const bankSection = document.getElementById('bank');
const loginForm = document.getElementById('login-form');
const loginUsernameInput = document.getElementById("username");
const loginPasswordInput = document.getElementById("password");
const totalInputHolder = document.getElementById("total-amount");
const logoutBtn = document.getElementById("logout");
const depoInput = document.getElementById("depo");
const depoBtn = document.getElementById("depoBtn");
const withraInput = document.getElementById("withra");
const withraBtn = document.getElementById("withraBtn");
const depoAmauntHolder = document.getElementById("deposit-ammount");
const withraAmauntHolder = document.getElementById("withdraw-ammount");


let loginUsername = "";
let loginPassword = "";

let totalAmmount = 2000;
let withraAmount = 0;
let depoAmount = 0;
let maxAmount = 20000;
let minAmount = 0;



// Login Button Click
loginForm.onsubmit = function(e){
    e.preventDefault();

    if(loginUsername == ''){
        login();
    }else if(loginUsernameInput.value == ''){
        alert("Please Enter The Username");
        loginUsernameInput.focus();
    }else if(loginUsernameInput.value !== loginUsername){
        alert("Please Enter The Correct Username");
        loginUsernameInput.focus();
    }else if(loginPassword == ''){
        login();
    }else if(loginPasswordInput.value == ''){
        alert("Please Enter The Password");
        loginPasswordInput.focus();
    }else if(loginPasswordInput.value !== loginPassword){
        alert("Please Enter The Correct Password");
        loginPasswordInput.focus();
    }else{
        login();
    }
}


// Logout Button Click
logoutBtn.addEventListener("click", function(){
    logout();
});


// Deposit Button Click 
depoBtn.addEventListener("click", function(e){
    deposit();
});

// Deposit Enter
depoInput.onfocus = function(){
    window.onkeyup = function(evt){
        if(evt.key == 'Enter'){
            deposit();
        }
    }
}



// Withdraw Button Click 
withraBtn.addEventListener("click", function(e){
    withdraw();
});

// Withdraw Enter
withraInput.onfocus = function(){
    window.onkeyup = function(evt){
        if(evt.key == 'Enter'){
            withdraw();
        }
    }
}





// Login Function
function login(){
    loginSection.style.display = "none";
    bankSection.style.display = "";
    displayValue();
}


// Logout Function
function logout(){
    loginSection.style.display = "";
    bankSection.style.display = "none";
}


// Set Value Function
function displayValue(){
    totalInputHolder.innerHTML = totalAmmount;
    depoAmauntHolder.innerHTML = depoAmount;
    withraAmauntHolder.innerHTML = withraAmount;
}


// Deposit Function
function deposit(){
    if(totalAmmount < maxAmount){
        if(isNaN(depoInput.value) || depoInput.value == ''){
            alert("Please Enter An Valid Amount");
        }else{
            let depoVal = parseFloat(depoInput.value);
            if(totalAmmount+depoVal <= maxAmount){
                    
                totalAmmount += depoVal;
                depoAmount += depoVal;
                displayValue();
                depoInput.value = "";
            }else{
                alert("Your Maximum Amount Is "+maxAmount)
            }
        }
    }else{
        alert("You Have Already Max Balance Amount");
    }
}


// Withdraw Function
function withdraw(){
    if(totalAmmount > minAmount){
        if(isNaN(withraInput.value) || withraInput.value == ''){
            alert("Please Enter An Valid Amount");
        }else{
            let withraVal = parseFloat(withraInput.value);
            if(totalAmmount-withraVal >= minAmount){
                totalAmmount -= withraVal;
                withraAmount += withraVal;
                displayValue();
                withraInput.value = "";
            }else{
                alert("Your Minimum Balance 0");
            }
        }
    }else{
        alert("You Have Already Max Balance Amount");
    }
}

logout();