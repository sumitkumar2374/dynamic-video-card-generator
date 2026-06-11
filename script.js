// Create a function ..
function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

// Call the function's
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 8, "31:22", "https://i.ytimg.com/vi/3LRZRSIh_KE/hq720.jpg?sqp=-%E2%80%A6BACGAY4AUAB&rs=AOn4CLAfEvew-k6Bn7XD6uWOvvPRNqU4RA")

// At the end of code ..
console.log("Here is your Dynamic Card ....")

