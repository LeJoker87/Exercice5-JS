let prixUnitaire = prompt("Saisissez un prix Unitaire");
let quantite = prompt("Choisissez une quantité a commandé")
let prixPayer = 0;
let total = prixUnitaire * quantite;
console.log(total);

if (total >= 100 && total <= 200) {
    let resultat = (total * 5) / 100;
    let prixPayer = total - resultat;
    alert("Le prix a payer sera de : " + prixPayer + " aprés une remise de 5%")
    if (prixPayer < 500) {
        let PORT = (prixPayer * 2) / 100;
    alert("Les frais de port s'élève a : " + PORT + " Port minimum de 6€");
        if (PORT < 6) {
            let resultat = (prixPayer + 6)
        alert("Le prix a payer avec les frais de port est de : " + resultat)
        }
    }

} else if (total < 100) {
    let prixPayer = total
    if (prixPayer < 500) {
        let PORT = (prixPayer * 2) / 100;
        console.log(PORT);
        if (PORT < 6) {
            let resultat = (prixPayer + 6)
        alert("Le prix a payer avec les frais de port et sans aucune remise est de : " + resultat)
        }
    }
} else {
    let resultat = (total * 10) / 100;
    let prixPayer = total - resultat;
    alert("Le prix a payer sera de : " + prixPayer + " aprés une remise de 10%")

    if (prixPayer <= 500) {
        let port = (prixPayer * 2) / 100;
        let resultatFinal = prixPayer + port;
       alert("Les frais de port s'eleve a : " + port)
        if (port < 6) {
            let resultat = (total + 6)
          console.log(resultat)
        alert("Le prix avec les frais de port sera de :" + resultat)
        };

        alert("Le prix a payer aprés les frais de port sera de : " + resultatFinal)
    } else {

        alert("Le prix a payer aprés toutes les reduction sera de : " + prixPayer)
    }
}