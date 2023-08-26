const goodButton = document.querySelector("#mainDiv > #button1");
const badButton = document.querySelector("#mainDiv > #button2");
const clearButton = document.querySelector("#mainDiv > #CLEAR");

function goodUpdate () {
    const statusGood = document.createElement("p");
    statusGood.textContent = "GOODBYE!";
    statusGood.setAttribute("class", "container bg-success text-white text-center p-3");
    statusGood.setAttribute("id", "good-status");
    document.body.appendChild(statusGood);
}

function badUpdate () {
    const statusBad = document.createElement("p");
    statusBad.textContent = "GOODBYE!";
    statusBad.setAttribute("class", "container bg-danger text-white text-center p-3");
    statusBad.setAttribute("id", "bad-status");
    document.body.appendChild(statusBad);
}

function clearAll () {
    const lists = document.querySelectorAll("#good-status, #bad-status");
    for (let i = 0; i < lists.length; lists[i].remove(), i++) {}
}

goodButton.addEventListener("click", goodUpdate); 
badButton.addEventListener("click", badUpdate);
clearButton.addEventListener("click", clearAll);