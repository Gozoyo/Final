// Function to navigate to a specific project page
function goToProjectPage(projectName) {
    switch (projectName) {
        case 'arduino':
            window.location.href = 'Arduino.html'; // Replace with actual project page URL
            break;
        case 'deeplearning':
            window.location.href = 'deeplearning.html';
            break;
        case 'flying':
            window.location.href = 'flying.html';
            break;
        case 'leapyear':
            window.location.href = 'leapyear.html';
            break;
        case 'music_calendar':
            window.location.href = 'poster.html';
            break;
        case 'music_journey':
            window.location.href = 'musicjourney.html';
            break;
        case 'webdesign':
            window.location.href = 'webdesign.html';
            break;
        default:
            console.log('Unknown project');
            break;
    }
}
