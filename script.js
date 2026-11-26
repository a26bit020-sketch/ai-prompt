
// Generate Prompt Function
function generatePrompt() {

    // Get values from input fields
    let role = document.getElementById("role").value.trim();
    let task = document.getElementById("task").value.trim();
    let context = document.getElementById("context").value.trim();
    let constraints = document.getElementById("constraints").value.trim();
    let format = document.getElementById("format").value;

    // Check whether the required fields are filled
    if (!role || !task) {
        alert("Please enter at least Role and Task!");
        return;
    }

    // Build the prompt
    let prompt = `ROLE:
${role}

TASK:
${task}`;

    if (context) {
        prompt += `

CONTEXT:
${context}`;
    }

    if (constraints) {
        prompt += `

CONSTRAINTS:
${constraints}`;
    }

    if (format) {
        prompt += `

OUTPUT FORMAT:
${format}`;
    }

    // Display generated prompt
    document.getElementById("output").textContent = prompt;

    // Clear previous message
    document.getElementById("message").textContent = "";
}


// Copy Prompt Function
function copyPrompt() {

    let prompt = document.getElementById("output").innerText;

    if (!prompt || prompt.includes("Your generated prompt will appear here")) {
        alert("Please generate a prompt first!");
        return;
    }

    navigator.clipboard.writeText(prompt)
        .then(() => {
            document.getElementById("message").textContent =
                "✓ Prompt copied successfully!";
        })
        .catch(() => {
            document.getElementById("message").textContent =
                "Unable to copy. Please select and copy manually.";
        });
}


// Clear Function
function clearPrompt() {

    document.getElementById("role").value = "";
    document.getElementById("task").value = "";
    document.getElementById("context").value = "";
    document.getElementById("constraints").value = "";
    document.getElementById("format").value = "";

    document.getElementById("output").innerHTML =
        '<span class="placeholder">Your generated prompt will appear here...</span>';

    document.getElementById("message").textContent = "";
}


// Load Sample Prompt Function
function loadSample() {

    document.getElementById("role").value =
        "Act as a Python teacher";

    document.getElementById("task").value =
        "Explain loops in Python with simple examples.";

    document.getElementById("context").value =
        "I am a first-year college student learning Python programming.";

    document.getElementById("constraints").value =
        "Use simple English. Keep the explanation beginner-friendly.";

    document.getElementById("format").value =
        "Bullet points";

    generatePrompt();
}
