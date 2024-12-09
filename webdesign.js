// Function to display the PDF on click
const rightSection = document.getElementById("right-section");
const pdfContainer = document.getElementById("pdf-container");

rightSection.addEventListener("click", () => {
    // If the PDF is not already displayed
    if (!pdfContainer.querySelector("iframe")) {
        const iframe = document.createElement("iframe");
        iframe.src = "PDF/webdesign.pdf";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        pdfContainer.appendChild(iframe);
    }

    pdfContainer.style.display = "block"; // Make the PDF container visible
    rightSection.style.cursor = "default"; // Change the cursor to indicate it's no longer clickable
    rightSection.removeEventListener("click", arguments.callee); // Remove click listener
});

function goToProjects() {
    window.location.href = "project.html";
}
