// Add a click event listener to each project container
document.querySelectorAll('.project-container').forEach(item => {
    item.addEventListener('click', event => {
        // Get the overlay element
        const overlay = document.getElementById('overlay');
        
        // Get the overlay content container
        const overlayContent = document.querySelector('.overlay-content');
        
        // Show the overlay
        overlay.style.display = 'block';
        
        // Clear existing content in the overlay content container
        overlayContent.innerHTML = '';
        
        // Get data from the clicked project container
        const projectData = {
            title: event.currentTarget.querySelector('.project-container-overlay-text-title').textContent,
            technology: event.currentTarget.querySelector('.project-container-overlay-text-technology').textContent,
            // Add more data properties as needed
            // information: event.currentTarget.querySelector('.project-container-overlay-text-details').textContent
            information: event.currentTarget.querySelector('.project-container-overlay-text-details') ? event.currentTarget.querySelector('.project-container-overlay-text-details').textContent : ''
        };
        
        // Create a new element for the expanded display
        // no need, just use overlay-content
        
        // Customize the content of the overlay-content based on the data
        overlayContent.innerHTML = `
            <!-- TODO: currently, i have the project-extended-display-images-banner set to be the image of the website project and this will apply to all projects... fix it -->
            <div class="project-extended-display-images-banner"></div>
            <div class="project-extended-display-details">
                <h2>${projectData.title}</h2>
                <h3>${projectData.technology}</h3>
                <p>${projectData.information}</p>
            </div>
            <div class="project-extended-display-footer">
                <a class="close-expanded-display">Close</a>
            </div>
        `;

        // Add an event listener to the overlay content container to handle click events on the close button
        document.querySelector('.close-expanded-display').addEventListener('click', () => {
            // Hide the overlay
            overlay.style.display = 'none';
        });
    });
});

// closing the expanded display
// Hide the overlay when clicked outside of it
document.getElementById('overlay').addEventListener('click', event => {
    if (event.target === document.getElementById('overlay')) {
        document.getElementById('overlay').style.display = 'none';
    }
});
