
let studentName = localStorage.getItem("studentName");
let events = JSON.parse(localStorage.getItem("events"));

let totalFee = events.length * 150;

let summaryHTML = "<h2>Registration Confirmed</h2>" +
    "Name: " + studentName + "<br><br>" +
    "<b>Events:</b><br>" +
    events.join("<br>") + "<br><br>" +
    "Total Fee: " + totalFee + " Taka";

document.getElementById("summary").innerHTML = summaryHTML;

function goBack() {
    window.location.href = "index.html";
}