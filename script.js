document.getElementById("applyNowBtn").addEventListener("click", function() {
    document.getElementById("lead-form").classList.remove("hidden");
    document.getElementById("lead-form").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value;

    if (!name || !email || !phone || country === "Select Preferred Country") {
        Toastify({
            text: "Please fill in all fields correctly.",
            duration: 3000,
            gravity: "top", 
            position: "right",
            backgroundColor: "#e53e3e", 
            stopOnFocus: true,
        }).showToast();
        return;
    }

    Toastify({
        text: "Form submitted successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#38a169", 
        stopOnFocus: true,
    }).showToast();
    e.target.reset();
});