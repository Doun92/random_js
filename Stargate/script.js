// Select all chevrons
const chevrons = document.querySelectorAll('.chevron');

// Function to activate chevrons in sequence
function activateChevrons() {
    chevrons.forEach((chevron, index) => {
        setTimeout(() => {
            chevron.classList.add('active');
            setTimeout(() => chevron.classList.remove('active'), 500);
        }, index * 600); // delay each chevron activation
    });
}

// Start the chevron activation sequence and loop it every 5 seconds
setInterval(activateChevrons, 5000);
activateChevrons();  // Initial activation on page load
