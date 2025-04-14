
function submitForm() {
    const tno = document.getElementById("tno").value;
    const datetime = document.getElementById("datetime").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const fare = document.getElementById("fare").value;

    if (tno.length !== 17 || !datetime || !from || !to || !fare) {
        alert("Please fill all fields correctly.");
        return;
    }

    const params = new URLSearchParams({ tno, datetime, from, to, fare });
    window.location.href = "ticket.html?" + params.toString();
}
