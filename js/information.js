document.addEventListener("DOMContentLoaded",()=>{/* c'est action quand tu clique*/
    const descriptions={
        "../photos/tel.jpg":"07 53 82 35 95 " ,
        "../photos/mail.jpg":"forgetom9356@gmail.com",
        "../photos/adresse.jpg":" 24 rue lanveur 56000 Lorient",
       
    };
    const zone = document.getElementById("information-text");
    document.addEventListener("click",(e) =>{
        const nom = e.target.getAttribute("src");/*recuperer la reference de l'objet e pour evenement */
        zone.textContent=descriptions[nom] || "Aucune description disponible";
    });
});
