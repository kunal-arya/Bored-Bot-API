const heading = document.getElementById("main-heading");
const displayMsg = document.getElementById("text-msg");
const boredBtn = document.getElementById("btn");


function boredBtnClickHandler() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            // Changing the display Message in textarea
            displayMsg.textContent = data.activity;

            // Changing the main heading
            heading.textContent = `🦾 Happy Bot 🦿`

            // Changing the background of the body
            document.querySelector("body").classList.add("fun");
        })
}

 boredBtn.addEventListener("click" , boredBtnClickHandler);