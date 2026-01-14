const OWNER_KEY = "site_owner";

// Mark yourself once (run once in browser console)
// localStorage.setItem(OWNER_KEY, "true");

const API_KEY = "devpro012888/portfolio";

if (localStorage.getItem(OWNER_KEY) === "true") {
  // Owner: just get the count without incrementing
  fetch(`https://api.countapi.xyz/get/${API_KEY}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Counter not found');
      }
      return res.json();
    })
    .then(data => {
      document.getElementById("views").textContent = data.value;
    })
    .catch(err => {
      console.error("Error fetching view count:", err);
      document.getElementById("views").textContent = "0"; // Counter not created yet
    });
} else {
  // Visitor: increment and display
  fetch(`https://api.countapi.xyz/hit/${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("views").textContent = data.value;
    })
    .catch(err => {
      console.error("Error updating view count:", err);
      document.getElementById("views").textContent = "Error";
    });
}
