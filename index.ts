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

