document.addEventListener("DOMContentLoaded", function () {
    const sidebarContainer = document.getElementById("sidebar-container");

    fetch("../pages/sidebar.html") // Adjust path here if necessary
        .then(response => {
            console.log("Requested URL:", response.url);
            if (!response.ok) {
                console.log("Error status:", response.status, response.statusText);
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            sidebarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading sidebar:", error);
            sidebarContainer.innerHTML = "<p>Failed to load sidebar content.</p>";
        });
});
