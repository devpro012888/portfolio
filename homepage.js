document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); //stops page direct

    const formData = new FormData(this);

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));

    alert("Form submitted successfully!");

});