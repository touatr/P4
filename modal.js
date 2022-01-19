function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Les élémments du DOM auxquelles on accéde
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const textControl = document.getElementsByClassName("text-control");//la classe text control correspond à l'input
const inscription = document.getElementById("inscription");
const firstName = document.getElementById("first");
const firstNameError = document.getElementById("first-name-error");
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("last-name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const birthdate = document.getElementById("birthdate");
const birthdateError =  document.getElementById("birthdate-error");
const tournoiNumber = document.getElementById("quantity");
const tournoiNumberError = document.getElementById("tournoi-number-error");
const tournoiChoice = document.querySelectorAll("location1");
const tournoiChoiceError = document.getElementById("tournoi-choice-error");
const conditionsUtilisation = document.getElementById("checkbox1");
const conditionsUtilisationError = document.getElementById("conditions-utilisation");


// launch modal form cette fonction affiche le formulaire
function launchModal() {
  modalbg.style.display = "block";
  }

//fonction qui vérifie si le champ texte contient que des lettres
function stringIsValid(value) {
  return /[a-zA-Z]/.test(value);
}  

//fonction qui valide le champ prénom
function validateFirstName() {
    if(firstName.value == "") {
      firstNameError.innerHTML = "Vous devez entrer un prénom.";
      firstName.style.border = "1px solid red";
      return false;
    }
    if(stringIsValid(firstName.value) == false) {
      firstNameError.innerHTML = "Vous devez entrer un prénom valide.";
      return false;
    }
    if(firstName.value.length <2) {
      firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
    else {
      firstNameError.innerHTML = "";
      firstName.style.border = "none";
      return true;
    }
}

//fonction qui valide le champ nom
function validateLastName() {
  if(lastName.value == "") {
    lastNameError.innerHTML = "Vous devez entrer un nom.";
    lastName.style.border = "1px solid red";
    return false;
  }
  if(stringIsValid(lastName.value) == false) {
    lastNameError.innerHTML = "Vous devez entrer un nom valide.";
    lastName.style.border = "1px solid red";
  }
  else if(lastName.value.length < 2) {
    lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else {
    lastNameError.innerHTML = "";
    lastName.style.border = "none";
  }
}  

//fonction qui vérifie le format d'une adresse mail s'il est valide
function emailIsValid(value) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

//fonction qui valide l'adresse email avec l'expression régulière regex
function validateEmail() {
  if(email.value == "") {
    emailError.innerHTML = "Vous devez entrer une adresse mail.";
    email.style.border = "1px solid red";
    return false;
  }
  if(emailIsValid(email.value) == false) {
    emailError.innerHTML = "Veuillez entrer une adresse mail valide.";
    email.style.border = "1px solid red";
  }
  else {
    emailError.innerHTML = "";
    email.style.border = "none";
  }
}

//Vérifier le champ date de naissance
function validateBirthdate() {
  if(birthdate.value == "") {
    birthdateError.innerHTML = "Vous devez entrer un prénom.";
    birthdate.style.border = "1px solid red";
    return false;
  }
  if(birthdate.value >= "1999/01/01") {
    birthdateError.innerHTML = "Veuillez entrer une date de naissance supérieur à 1999.";
    birthdate.style.border = "1px solid red";
  }
  else {
    birthdateError.innerHTML = "";
    birthdate.style.border = "none";
  }
}

////Vérifier le champ date de nombre de tournois
function validateTournoiNumber() {
  if(tournoiNumber.value == "") {
    tournoiNumberError.innerHTML = "Vous devez entrer un nombre.";
    tournoiNumber.style.border = "1px solid red";
    return false;
  }
  if(tournoiNumber.value < 0 || tournoiNumber.value > 99) {
    tournoiNumberError.innerHTML = "Veuillez entrer un nombre entre 0 et 99.";
    tournoiNumber.style.border = "1px solid red";
  }
  else {
    tournoiNumberError.innerHTML = "";
    tournoiNumber.style.border = "none";
  }
}

//Vérifier la case choix du tournoi si elle est coché
function validateTournoiChoice() {
  if(tournoiChoice.checked == false) {
    tournoiChoiceError.innerHTML = "Vous devez choisir une option.";
    return false;
  }
  else {
    tournoiChoiceError.innerHTML = "";
  }
}

//Vérifier la case conditions d'utilisation s'il est coché
function validateConditionsUtilisation() {
  if(conditionsUtilisation.checked == true) {/*la valeur de conditionsUtilisation est on*/}
  else {
    conditionsUtilisationError.innerHTML = "Vous devez accepter les conditions d'utilisation.";
  }
}

// launch modal event : l'evenement click qui lance le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//Ecouter l'événement input champ de saisi du prénom
lastName.addEventListener('input', validateFirstName);

  //Ecouter l'événement input champ de saisi du nom
  lastName.addEventListener('input', validateLastName);

  //Ecouter l'événement input champ de saisi du mail
  email.addEventListener('input', validateEmail);

  //Ecouter l'événement input champ de saisi de la date de naissance
  birthdate.addEventListener('input', validateBirthdate);

  //Ecouter l'événement input champ de saisi du nombre de tournoi GameOn
  tournoiNumber.addEventListener('input', validateTournoiNumber);
  
  //Ecouter l'événement input du choix du tournoi GameOn
  tournoiChoice.addEventListener('input', validateTournoiChoice);
  
  //Ecouter l'événement input du choix des termes et conditions GameOn
  conditionsUtilisation.addEventListener('input', validateConditionsUtilisation);
//Ecouter l'événement submit pour déclencher l'évenement d'envois du formulaire
inscription.addEventListener('submit', function(event){
  event.preventDefault();//Empêcher de recharger la page du formulaire après click du bouton submit
  validateFirstName();
  validateLastName();
  validateEmail();
  validateBirthdate();
  validateTournoiNumber();
  validateTournoiChoice();
});

//la fonction Validate qui valide le formulaire avant de l'envoyer








