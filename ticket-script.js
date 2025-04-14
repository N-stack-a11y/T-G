const stationNames = {
  "UDHNA DARWAJA BRTS": "ઉધના દરવાજા",
  "SAHARA DARWAJA BRTS": "સહારા દરવાજા",
  "MAJURA GATE BRTS": "મજુરા ગેટ",
  "CITYLIGHT BRTS": "સિટીલાઇટ",
  "ADAJAN GAM BRTS": "અડાજણ ગામ",
  "PAL RTO BRTS": "પાળ આરટીઓ",
  "VESU BRTS": "વેસુ",
  "VARACHHA TERMINAL BRTS": "વારાછા ટર્મિનલ",
  "KATARGAM DARWAJA BRTS": "કતારગામ દરવાજા",
  "PANDESARA GIDC BRTS": "પાંડેસરા જીઆઇડીસી",
  "SARTHANA JAKATNAKA BRTS": "સાર્થના જકાતનાકા",
  "JAHANGIRPURA BRTS": "જહાંગીરપુરા",
  "ICHCHHAPOR BRTS": "ઇચ્છાપોર"
};

// Utility function for formatting
function formatDateTime(dateInput) {
  const date = new Date(dateInput);

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');

  return `${dd}-${mm}-${yyyy} ${hh}:${min}:${ss}`;
}

// Read values from URL
const params = new URLSearchParams(window.location.search);
const tno = params.get("tno");
const datetime = params.get("datetime");
const from = params.get("from");
const to = params.get("to");
const fare = params.get("fare");

if (!tno || !datetime || !from || !to || !fare) {
  alert("Missing ticket data. Please go back and generate the ticket again.");
} else {
  const entryTime = new Date(datetime);
  const expiryTime = new Date(entryTime.getTime() + 2 * 60 * 60 * 1000); // +2 hours
  const validWithinTime = new Date(entryTime.getTime() + 15 * 60 * 1000); // +15 minutes

  // Set ticket content
  document.getElementById("ticketNo").textContent = tno;
  document.getElementById("ticketDate").textContent = formatDateTime(datetime);
  document.getElementById("ticketFare").textContent = `Rs.${fare}`;
  document.getElementById("ticketExpiry").textContent = formatDateTime(expiryTime);
  document.getElementById("entryTime").textContent = validWithinTime.toTimeString().slice(0, 8);

  document.getElementById("fromEnglish").textContent = from;
  document.getElementById("toEnglish").textContent = to;
  document.getElementById("fromPlace").textContent = stationNames[from.toUpperCase()] || "";
  document.getElementById("toPlace").textContent = stationNames[to.toUpperCase()] || "";

  // Generate QR code
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${tno}&size=100x100`;
  document.getElementById("qrCode").src = qrURL;
}



/** 
  const stationNames = {
  "UDHNA DARWAJA BRTS": "ઉધના દરવાજા",
  "SAHARA DARWAJA BRTS": "સહારા દરવાજા",
  "MAJURA GATE BRTS": "મજુરા ગેટ",
  "CITYLIGHT BRTS": "સિટીલાઇટ",
  "ADAJAN GAM BRTS": "અડાજણ ગામ",
  "PAL RTO BRTS": "પાળ આરટીઓ",
  "VESU BRTS": "વેસુ",
  "VARACHHA TERMINAL BRTS": "વારાછા ટર્મિનલ",
  "KATARGAM DARWAJA BRTS": "કતારગામ દરવાજા",
  "PANDESARA GIDC BRTS": "પાંડેસરા જીઆઇડીસી",
  "SARTHANA JAKATNAKA BRTS": "સાર્થના જકાતનાકા",
  "JAHANGIRPURA BRTS": "જહાંગીરપુરા",
  "ICHCHHAPOR BRTS": "ઇચ્છાપોર"
};

const params = new URLSearchParams(window.location.search);
const tno = params.get("tno");
const datetime = params.get("datetime");
const from = params.get("from");
const to = params.get("to");
const fare = params.get("fare");

if (datetime) {
  const [datePart, timePart] = datetime.split("T");
  const displayDate = `${datePart.split("-").reverse().join("-")} ${timePart}`;

  const entryTime = new Date(datetime);
  const expiryTime = new Date(entryTime.getTime() + 2 * 60 * 60 * 1000);

  const expiryStr = `${expiryTime.getDate().toString().padStart(2, '0')}-${(expiryTime.getMonth() + 1).toString().padStart(2, '0')}-${expiryTime.getFullYear()} ${expiryTime.getHours().toString().padStart(2, '0')}:${expiryTime.getMinutes().toString().padStart(2, '0')}:${expiryTime.getSeconds().toString().padStart(2, '0')}`;

  document.getElementById("ticketDate").textContent = displayDate;
  document.getElementById("ticketExpiry").textContent = expiryStr;
  document.getElementById("entryTime").textContent = new Date(entryTime.getTime() + 15 * 60 * 1000).toTimeString().slice(0, 8);
} else {
  document.getElementById("ticketDate").textContent = "Invalid Date";
  document.getElementById("ticketExpiry").textContent = "Invalid Expiry";
  document.getElementById("entryTime").textContent = "Invalid";
}

document.getElementById("ticketNo").textContent = tno || "N/A";
document.getElementById("ticketFare").textContent = fare ? `Rs.${fare}` : "N/A";

document.getElementById("fromEnglish").textContent = from || "";
document.getElementById("toEnglish").textContent = to || "";
document.getElementById("fromPlace").textContent = stationNames[from?.toUpperCase()] || "";
document.getElementById("toPlace").textContent = stationNames[to?.toUpperCase()] || "";

const qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${tno}&size=100x100`;
document.getElementById("qrCode").src = qrURL; */
