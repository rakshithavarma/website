function toggleAccordion(accordionId) {
    var accordion = document.getElementById(accordionId);
    if (accordion.style.display === "block") {
        accordion.style.display = "none";
    } else {
        // Hide all accordions first
        var allAccordions = document.querySelectorAll('.accordion-content');
        for (var i = 0; i < allAccordions.length; i++) {
            allAccordions[i].style.display = "none";
        }

        // Then show the selected accordion
        accordion.style.display = "block";

        // Hide all panel buttons first
        var allButtons = document.querySelectorAll('.panel-button');
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].style.display = "none";
        }

        // Show the buttons corresponding to the selected accordion
        var buttons = accordion.querySelectorAll('.panel-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
        }
    }
}

function togglePanel(panelId) {
    var panel = document.getElementById(panelId);
    var allPanels = document.querySelectorAll('.panel-content');

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        for (var i = 0; i < allPanels.length; i++) {
            allPanels[i].style.display = "none";
        }
        panel.style.display = "block";
    }
}