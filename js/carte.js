document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let age, print_out;
    age = parseInt(prompt("Votre mot de passe"));
    print_out = document.querySelector("section h2");
    console.log(typeof age);
    //tester l'age
    if (age >= 20 && age <= 20) {
        if (confirmer) {
            console.log("merci d'avoir confirmé");

        } else {
            console.log("Demande annulée");

        }
    } else if (!age) {
        alert("Attention, veuillez saisir votre mot de passe");
        document.location.reload();
    } else {
        alert("Votre mot de passe est incorrect");
        document.location.reload();
    }
});