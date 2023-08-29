const alertButton = document.getElementById('alertButton')
const toogleButton = document.getElementById('toogleButton')
const contactForms = document.getElementById('contactForms')
const titleContact = document.getElementById('titleContact')


alertButton.addEventListener("click",() => {
    alert('Formulario no esta listo');
}

);

toogleButton.addEventListener("click",() => {
    if (contactForms.style.display == "none"){
        contactForms.style.display = "block";
        titleContact.innerHTML = 'Contacto'
    } else {
        contactForms.style.display = "none";
        titleContact.innerHTML = 'Formulario no desplegado'
    }
    
})

function showPopup(icon) {
    alert(icon)
}