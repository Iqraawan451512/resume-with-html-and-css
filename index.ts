document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("downloadBtn") as HTMLButtonElement;

    downloadButton.addEventListener("click", () => {
        // Get the full content of the resume
        const resumeContent = document.getElementById("resume");

        if (!resumeContent) {
            alert("Resume content not found.");
            return;
        }

        // Iterate through all elements and apply inline styles
        const elements = resumeContent.querySelectorAll('*');

        elements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            let inlineStyle = '';

            // Collect all the computed styles for the element
            for (let i = 0; i < computedStyle.length; i++) {
                const property = computedStyle[i];
                inlineStyle += `${property}: ${computedStyle.getPropertyValue(property)}; `;
            }

            // Set the inline style for the element
            element.setAttribute('style', inlineStyle);
        });

        // After applying inline styles, get the HTML content with inline styles
        const resumeWithInlineStyles = resumeContent.outerHTML;

        // Create a full HTML document with the inline styles included
        const fullHTMLContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
</head>
<body>
    ${resumeWithInlineStyles}
</body>
</html>`;

        // Create a Blob from the full HTML content (HTML + CSS)
        const blob = new Blob([fullHTMLContent], { type: "text/html" });

        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.html";  // Set the filename for the download
        link.click();  // Trigger the download
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // Get elements by their IDs
    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;

    // Set the initial state of the skills section (visible on page load)
    skillsSection.style.display = 'block'; // Show the skills section initially
    toggleSkillsButton.textContent = 'Hide Skills'; // Set the button text to "Hide Skills"

    // Add event listener to the button to toggle visibility
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});


