// ------------------------------
// Farmer Registration
// ------------------------------

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const farmer = {
            name: document.getElementById("name").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            village: document.getElementById("village").value,
            district: document.getElementById("district").value,
            password: document.getElementById("password").value
        };

        localStorage.setItem(
            "farmer",
            JSON.stringify(farmer)
        );

        alert("Registration successful!");

        window.location.href = "login.html";
    });
}


// ------------------------------
// Farmer Login
// ------------------------------

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const mobile =
            document.getElementById("loginMobile").value;

        const password =
            document.getElementById("loginPassword").value;

        const farmer =
            JSON.parse(localStorage.getItem("farmer"));

        if (
            farmer &&
            farmer.mobile === mobile &&
            farmer.password === password
        ) {

            localStorage.setItem(
                "loggedIn",
                "true"
            );

            alert("Login successful!");

            window.location.href =
                "dashboard.html";

        } else {

            alert(
                "Invalid mobile number or password."
            );
        }

    });
}


// ------------------------------
// Display Farmer Name
// ------------------------------

const profileName =
    document.getElementById("profileName");

if (profileName) {

    const farmer =
        JSON.parse(localStorage.getItem("farmer"));

    if (farmer) {
        profileName.innerText =
            farmer.name;
    }
}


// ------------------------------
// Logout
// ------------------------------

function logout() {

    localStorage.removeItem("loggedIn");

    alert("Logged out successfully.");

    window.location.href =
        "index.html";
}


// ------------------------------
// Search Schemes
// ------------------------------

function searchSchemes() {

    const input =
        document.getElementById("schemeSearch")
        .value.toLowerCase();

    const cards =
        document.querySelectorAll(".scheme-card");

    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ------------------------------
// Scheme Details
// ------------------------------

function showScheme(name) {

    localStorage.setItem(
        "selectedScheme",
        name
    );

    window.location.href =
        "scheme-details.html";
}


// ------------------------------
// Display Selected Scheme
// ------------------------------

const detailTitle =
    document.getElementById("detailTitle");

if (detailTitle) {

    const scheme =
        localStorage.getItem("selectedScheme");

    if (scheme) {

        detailTitle.innerText =
            scheme;

        const description =
            document.getElementById(
                "detailDescription"
            );

        description.innerText =
            "This page provides information about " +
            scheme +
            ". Farmers should verify the current " +
            "eligibility criteria and application " +
            "procedure through the concerned official " +
            "government department.";
    }
}


// ------------------------------
// Apply for Scheme
// ------------------------------

function applyScheme() {

    const scheme =
        localStorage.getItem("selectedScheme");

    if (!scheme) {
        alert("Please select a scheme first.");
        return;
    }

    const application = {

        id:
            "APP" +
            Math.floor(
                Math.random() * 100000
            ),

        scheme: scheme,

        date:
            new Date().toLocaleDateString(),

        status:
            "Submitted"

    };

    localStorage.setItem(
        "application",
        JSON.stringify(application)
    );

    alert(
        "Application information saved. " +
        "For actual submission, connect this step " +
        "to the concerned official government service."
    );

    window.location.href =
        "applications.html";
}


// ------------------------------
// Admin Add Scheme
// ------------------------------

function addScheme() {

    const name =
        document.getElementById(
            "newSchemeName"
        ).value;

    const description =
        document.getElementById(
            "newSchemeDescription"
        ).value;

    if (!name || !description) {

        alert(
            "Please enter scheme name and description."
        );

        return;
    }

    const message =
        document.getElementById(
            "adminMessage"
        );

    message.innerHTML =
        "<p>✓ Scheme '" +
        name +
        "' added successfully.</p>";

    document.getElementById(
        "newSchemeName"
    ).value = "";

    document.getElementById(
        "newSchemeDescription"
    ).value = "";
}
