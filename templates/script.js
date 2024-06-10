// Dynamic content for the About section
document.addEventListener('DOMContentLoaded', function () {
    const designations = ["A Python Programmer", "An Artificial Intelligence Expert", "A Machine Learning Engineer"];
    const designationElement = document.querySelector('.designation');                      // Using querySelector for class selection
    let index = 0;

    function updateDesignation() {
        const currentText = designationElement.textContent;
        const nextIndex = (index + 1) % designations.length;
        const nextText = designations[nextIndex];
        const char_type_delay = 500
        
        // Delete the characters of the current designation one-by-one with a slight delay
        function deleteCharacters(index) {
            if (index >= 0) {
                setTimeout(function() {
                    designationElement.textContent = currentText.substring(0, index);
                    deleteCharacters(index - 1);
                }, char_type_delay);                                    // Delay between character deletions
            } else {                                                    // Once all characters are deleted
                setTimeout(function() {                                 // Start typing the next designation after a short delay
                    typeCharacters(nextText, 0);
                }, char_type_delay);
                index = nextIndex;
            }
        }
        
        // Type the characters of the next designation one-by-one with a slight delay
        function typeCharacters(text, index) {
            if (index <= text.length) {
                setTimeout(function() {
                    designationElement.textContent = text.substring(0, index);
                    typeCharacters(text, index + 1);
                }, char_type_delay);                                    // Delay between character insertions
            } else {                                                    // Once all characters are typed, update the index and call updateDesignation recursively
                index = nextIndex;
                updateDesignation();
            }
        }
        
        // Start by deleting characters of the current designation
        deleteCharacters(currentText.length - 1);
    }
    

    // Update the designation every 2 seconds
    setInterval(updateDesignation, 3000);
});


// Smooth scrolling function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
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
        event.preventDefault();                                                         // Prevent default behavior
        const targetId = link.getAttribute('href');                                     // Get target section id
        const duration = 1000;                                                          // Set duration of scroll (in milliseconds)
        smoothScroll(targetId, duration);                                               // Call smoothScroll function
    });
});

// Highlight current section in navbar
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            // Add a class to the corresponding navigation link
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('current-section');
                } else {
                    link.classList.remove('current-section');
                }
            });
        }
    });
}

// Call the highlightCurrentSection function when scrolling
window.addEventListener('scroll', highlightCurrentSection);


// projects section listeners
document.addEventListener('DOMContentLoaded', function () {
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
            const imageUrls = [                     // These are displayed in the overlay screen
                '../assets/project_images_videos/ToDo_List/ToDo_List_screenshot1.png',
                '../assets/project_images_videos/Client_interaction_Trackers_screenshot_1.png',
                '../assets/project_images_videos/Nutrilens_AI/nutrilens-logo.png',       // TODO: change this...
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
});