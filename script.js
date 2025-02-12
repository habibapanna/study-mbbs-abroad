document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value;

    if (!name || !email || !phone || country === "Select Preferred Country") {
        alert("Please fill in all fields correctly.");
        return;
    }

    alert("Form submitted successfully!");
});
