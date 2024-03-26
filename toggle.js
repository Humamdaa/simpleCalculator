// Get the toggle button element
const toggleButton = document.getElementById('toggleButton');

const CalculatorBody = document.getElementById('cont');
const buttonOperators = document.querySelectorAll('.operator');

// Add event listener to toggle button
toggleButton.addEventListener('change', function () {
    // Check if the toggle button is checked
    if (this.checked) {
        // If checked, change the content design
        CalculatorBody.style.background = '#000e1a';
        buttonOperators.forEach(button => {
            button.style.color = '#4d17e0';
            button.style.background = '#ffff00';
        });
        console.log('checked');
    } else {
        // If not checked, revert the content design to default
        console.log('not checked');
        CalculatorBody.style.background = '#cee0fa';
        buttonOperators.forEach(button => {
            button.style.color = '#36361f';
            button.style.background = ' #eee';
        });
    }
});

function loadCSS(filename, filename1) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    
    var link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.type = 'text/css';
    link1.href = filename1;
    
    document.head.appendChild(link);
    document.head.appendChild(link1);
}


// toggleButton.addEventListener('change',changeDesign());
// changeDesign(){

// }
