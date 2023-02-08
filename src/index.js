





const ramenContainer = document.getElementById("ramen-menu");
const ramenDetailImage = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")

fetch("http://localhost:3000/ramens")
    .then((r) => r.json() )
    .then((json) => loadRamens(json))
    

    function loadRamens(json){

        json.forEach(makeRamen)
            
        }

    

    function makeRamen(ramenObject){

        const ramenDiv = document.getElementById("ramen-menu")
        let ramenCard = document.createElement("div")
        ramenCard.className = "ramen"


    const ramenImg = document.createElement("img")
    ramenImg.src = ramenObject.image
    ramenImg.className = "ramen-menu"

    ramenCard.append(ramenImg)
    }


        // const ramenh2 = document.createElement("h2")
        // ramenh2.textContent = ramenObject.name
