function addNewColors() {
    document.getElementById('cc1').classList.add('npp1');
    document.getElementById('cc2').classList.add('npp2');
    document.getElementById('cc3').classList.add('npp3');
}

function removeNewColors() {
    document.getElementById('cc1').classList.remove('npp1');
    document.getElementById('cc2').classList.remove('npp2');
    document.getElementById('cc3').classList.remove('npp3');
}

document.getElementById('cc1').addEventListener('mouseover', addNewColors);
document.getElementById('cc2').addEventListener('mouseover', addNewColors);
document.getElementById('cc3').addEventListener('mouseover', addNewColors);

document.getElementById('cc1').addEventListener('mouseout', removeNewColors);
document.getElementById('cc2').addEventListener('mouseout', removeNewColors);
document.getElementById('cc3').addEventListener('mouseout', removeNewColors);

window.onload = function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    const percentages = [95, 95, 100, 90, 100]; // Set different percentages here

    progressBars.forEach((bar, index) => {
        const percentage = percentages[index] || 0;
        bar.style.setProperty('--progress-width', percentage + '%');
        bar.style.width = percentage + '%'; // Ensure immediate width update

        let counter = 0;
        const progressText = bar.parentElement.nextElementSibling; // Find the text element

        const interval = setInterval(() => {
            if (counter < percentage) {
                counter++;
                progressText.innerHTML = counter + '%';
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
};
