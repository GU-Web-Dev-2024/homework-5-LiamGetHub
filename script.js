// ---------------------------------Step 1-----------------------
        // Initialize counter
        let viewedCount = 0;
        const counterDisplay = document.getElementById("counter");

        // Function to update the view counter
        function updateCounter() {
            viewedCount++;
            counterDisplay.textContent = `Artworks Viewed: ${viewedCount}`;
        }

        // Function to handle panel clicks (change background color and update counter)
        function handlePanelClick(event) {
            const panel = event.currentTarget;
    
            // Change background color when clicked
            panel.style.backgroundColor = "#d1c4e9";  // Any color of your choice

            // Ensure the panel is only counted once
            if (!panel.classList.contains("viewed")) {
             updateCounter();
             panel.classList.add("viewed");
            }
        }

        // Add event listeners to existing panels
        const panels = document.querySelectorAll(".art-panel");
        panels.forEach(panel => panel.addEventListener("click", handlePanelClick));
       

        // ---------------------------------Step 2-----------------------

        // Function to reset the gallery to its original state
        function resetGallery() {
            // Reset the view counter
            viewedCount = 0;
            counterDisplay.textContent = "Artworks Viewed: 0";

            // Reset the background color of all panels and remove the 'viewed' class
            const panels = document.querySelectorAll(".art-panel"); // gets each art panel
            panels.forEach(panel => {
                panel.style.backgroundColor = "#eee";  // Reset to original color
                panel.classList.remove("viewed"); // removes viewd apsect
            });
        }
        // event listner not working? function looks good tho.
        // Event listener for the "Reset Gallery" button
        document.getElementById("reset-button").addEventListener("click", resetGallery);




// ---------------------------------Step 3-----------------------

        // Reference to the art gallery container
        const gallery = document.querySelector(".art-grid");

        // Function to add a new artwork to the gallery
        function addNewArtwork() {
             // Generate a random index to select a new artwork
            const randomIndex = Math.floor(Math.random() * newArtworks.length);
            const art = newArtworks[randomIndex];

            // Create a new panel element
            const newPanel = document.createElement("div");
            newPanel.classList.add("art-panel");
            newPanel.innerHTML = `
                <img src="${art.img}" alt="${art.title}">
                <p>${art.title} by ${art.artist}</p>
            `;

            // Add click event listener to the new panel
            newPanel.addEventListener("click", handlePanelClick);

            // Append the new panel to the gallery
            gallery.appendChild(newPanel);
        }

        // Event listener for the "Add New Artwork" button
        document.getElementById("add-art-button").addEventListener("click", addNewArtwork);

    
        // List of additional artworks to add dynamically
        const newArtworks = [
            { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
            { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
            { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
            { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
            { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
            { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
            { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
            { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
            { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
            { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
        ];
        // Later, move this to an external JavaScript file for better organization.