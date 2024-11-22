function kontrolliVanust (){
    //let age = prompt("Sisesta oma vanus")
    const age = document.getElementById("age").value
    
    if(isNaN(age)) {
        document.getElementById("message").textContent = "Sisend ei ole number, sisesta uuesti";
        //console.log("Sisend ei ole number, sisesta uuesti");
    } else if (age >= 7 && age <= 16) {
        document.getElementById("message").textContent = "Mine sööma kell 10:00";
        //console.log("Mine sööma kell 10:00")
    } else if ( age > 16 && age <=20) {
        document.getElementById("message").textContent = "Lähed sööma kell 11:00";
        //console.log("Lähed sööma kell 11:00")
    } else if (age > 20) {
        document.getElementById("message").textContent = "Mine sööma kell 12:00";
        //console.log("Lähed sööma kell 12:00")
    } else {
        document.getElementById("message").textContent = "Mis sa teed siin?";
        //console.log("Mis sa teed siin?")
    }
    }