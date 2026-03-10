document.addEventListener("DOMContentLoaded",()=>{/* c'est action quand tu clique*/
    const descriptions={
        "../photos/tel.jpg":"06 73 85 65 54 " ,
        "../photos/mail.jpg":"tomforget201513@gmail.com",
        "../photos/adresse.jpg":" 20 rue lanveur 56000 Lorient",
       
    };
    const zone = document.getElementById("information-text");
    document.addEventListener("click",(e) =>{
        const nom = e.target.getAttribute("src");/*recuperer la reference de l'objet e pour evenement */
        zone.textContent=descriptions[nom] || "Aucune description disponible";
    });
});