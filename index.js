document.addEventListener("DOMContentLoaded", function () {
    var downloadButton = document.getElementById("downloadBtn");
    downloadButton.addEventListener("click", function () {
        // Get the full content of the resume
        var resumeContent = document.getElementById("resume");
        if (!resumeContent) {
            alert("Resume content not found.");
            return;
        }
        // Iterate through all elements and apply inline styles
        var elements = resumeContent.querySelectorAll('*');
        elements.forEach(function (element) {
            var computedStyle = window.getComputedStyle(element);
            var inlineStyle = '';
            // Collect all the computed styles for the element
            for (var i = 0; i < computedStyle.length; i++) {
                var property = computedStyle[i];
                inlineStyle += "".concat(property, ": ").concat(computedStyle.getPropertyValue(property), "; ");
            }
            // Set the inline style for the element
            element.setAttribute('style', inlineStyle);
        });
        // After applying inline styles, get the HTML content with inline styles
        var resumeWithInlineStyles = resumeContent.outerHTML;
        // Create a full HTML document with the inline styles included
        var fullHTMLContent = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Resume</title>\n</head>\n<body>\n    ".concat(resumeWithInlineStyles, "\n</body>\n</html>");
        // Create a Blob from the full HTML content (HTML + CSS)
        var blob = new Blob([fullHTMLContent], { type: "text/html" });
        // Create a link element to trigger the download
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.html"; // Set the filename for the download
        link.click(); // Trigger the download
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get elements by their IDs
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsSection = document.getElementById('skillsSection');
    // Set the initial state of the skills section (visible on page load)
    skillsSection.style.display = 'block'; // Show the skills section initially
    toggleSkillsButton.textContent = 'Hide Skills'; // Set the button text to "Hide Skills"
    // Add event listener to the button to toggle visibility
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
