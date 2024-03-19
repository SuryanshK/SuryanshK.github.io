// smooth scrolling function
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var scrollAmount = Math.floor(easeInOutQuad(timeElapsed, startPosition, distance, duration));
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add click event listeners to navigation links
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default behavior
        var targetId = link.getAttribute('href'); // Get target section id
        var duration = 1000; // Set duration of scroll (in milliseconds)
        smoothScroll(targetId, duration); // Call smoothScroll function
    });
});

// Add a click event listener to each project container
document.querySelectorAll('.project-container').forEach((item, index) => {
    item.addEventListener('click', event => {
        // Get the overlay element
        const overlay = document.getElementById('overlay');
        
        // Get the overlay content container
        const overlayContent = document.querySelector('.overlay-content');
        
        // Show the overlay
        overlay.style.display = 'block';
        
        // Clear existing content in the overlay content container
        overlayContent.innerHTML = '';
        
        // Define an array of image URLs for each project
        const imageUrls = [
            '../assets/project_images_videos/ToDo_List_screenshot1.png',
            '../assets/project_images_videos/Client_interaction_Trackers_screenshot_1.png',
            'url/to/your/image3.jpg',
            // Add URLs for each project's background image
            '../assets/website-img.png',
            'url/to/your/image5.jpg',
            'url/to/your/image6.jpg',
        ];
        const videoURLS = [
            '../assets/project_images_videos/ToDo_List_recording.mov',
            'url/to/your/video2.jpg',
            'url/to/your/video3.jpg',
            'url/to/your/video4.jpg',
            'url/to/your/video5.jpg',
            'url/to/your/video6.jpg',
        ];

        // TODO: Not every project will have a demo video, so do something about this...

        // Get data from the clicked project container
        const projectData = {
            title: event.currentTarget.querySelector('.project-container-overlay-text-title').textContent,
            technology: event.currentTarget.querySelector('.project-container-overlay-text-technology').textContent,
            information: event.currentTarget.querySelector('.project-container-overlay-text-details') ? event.currentTarget.querySelector('.project-container-overlay-text-details').textContent : '',
            imageUrl: imageUrls[index],                                                                 // Use the corresponding URL for the current project
            videoURL: videoURLS[index]
        };
        
        // Customize the content of the overlay-content based on the data
        overlayContent.innerHTML = `
            <div class="project-extended-display-images-banner" style="background-image: url(${projectData.imageUrl});"></div>
            <div class="project-extended-display-details">
                <h2>${projectData.title}</h2>
                <h3>${projectData.technology}</h3>
                <p>${projectData.information}</p>
            </div>
            <div class="project-extended-display-footer">
                <a class="close-expanded-display">Close</a>
                <a href="${projectData.videoUrl}" target="_blank">Watch Demo Video</a>                  <!-- Add the video link -->
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