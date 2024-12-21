document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img:not(.ad-container img)"); // Exclude ad-container images
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.innerHTML = '<img src="" alt="Zoomed Image">';
    document.body.appendChild(modal);

    const modalImage = modal.querySelector("img");

    let isZoomedIn = false;
    let translateX = 0; // X-axis movement
    let translateY = 0; // Y-axis movement

    function disablePageScroll() {
        document.body.style.overflow = "hidden"; // Disable page scroll
    }

    function enablePageScroll() {
        document.body.style.overflow = ""; // Enable page scroll
    }

    images.forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src; // Set the clicked image as the modal's source
            modal.style.display = "flex";
            disablePageScroll(); // Disable scrolling when the modal is active
        });
    });

    modalImage.addEventListener("click", (event) => {
        if (isZoomedIn) {
            // Zoom out
            modalImage.classList.remove("zoomed-in");
            modalImage.style.transform = "translate(0, 0) scale(1)"; // Reset transform
            modalImage.style.transformOrigin = "center center"; // Reset transform origin
            isZoomedIn = false;
            translateX = 0;
            translateY = 0;
        } else {
            // Zoom in
            const rect = modalImage.getBoundingClientRect();
            const offsetX = event.clientX - rect.left; // X-coordinate of the click
            const offsetY = event.clientY - rect.top;  // Y-coordinate of the click
            const originX = (offsetX / rect.width) * 100; // Convert to percentage
            const originY = (offsetY / rect.height) * 100;

            modalImage.style.transformOrigin = `${originX}% ${originY}%`; // Set zoom origin
            modalImage.classList.add("zoomed-in");
            modalImage.style.transform = "scale(2)"; // Zoom factor
            isZoomedIn = true;
        }
    });

    modalImage.addEventListener("wheel", (event) => {
        if (isZoomedIn) {
            event.preventDefault(); // Prevent default scrolling behavior

            // Adjust translate values based on scroll direction
            const scrollSpeed = 20; // Adjust this value for sensitivity
            translateX += event.deltaX * scrollSpeed * -0.01; // Invert direction for natural feel
            translateY += event.deltaY * scrollSpeed * -0.01;

            // Apply translation along with zoom
            modalImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(2)`;
        }
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"; // Close modal when clicking outside the image
            modalImage.classList.remove("zoomed-in"); // Reset zoom state
            modalImage.style.transform = "translate(0, 0) scale(1)"; // Reset transform
            modalImage.style.transformOrigin = "center center"; // Reset transform origin
            isZoomedIn = false;
            translateX = 0;
            translateY = 0;
            enablePageScroll(); // Re-enable scrolling when modal is closed
        }
    });
});