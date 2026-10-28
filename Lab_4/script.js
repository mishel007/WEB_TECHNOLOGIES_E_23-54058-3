let events = [];

function addEvent() {
    let eventInput = document.getElementById("event").value;
    if (eventInput == "") {
        alert("Please enter an event name.");
        return;
    }
    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }
    events.push(eventInput);
    document.getElementById("event").value = "";
    alert("Event Added");
}
function confirmRegistration() {
    let studentName = document.getElementById("studentName").value;

    if (studentName == "" || events.length == 0) {
        alert("Please enter your name and add at least one event.");
        return;
    }
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "confirm.html";
}
