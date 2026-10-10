var app = angular.module("portfolioApp", []);

app.controller("PortfolioController", function($scope) {

    // Skills
   $scope.skills = [
    {
        name: "C Programming",
        level: "Basic",
        category: "Programming"
    },
    {
        name: "Python",
        level: "Basic",
        category: "Programming"
    },
    {
        name: "JavaScript",
        level: "Basic",
        category: "Programming"
    },
    {
        name: "HTML",
        level: "Intermediate",
        category: "Web Development"
    },
    {
        name: "CSS",
        level: "Intermediate",
        category: "Web Development"
    },
    {
        name: "AngularJS",
        level: "Currently Learning",
        category: "Framework"
    },
    {
        name: "Arduino",
        level: "Project Experience",
        category: "Hardware"
    },
    {
        name: "Tinkercad",
        level: "Simulation Experience",
        category: "Simulation"
    }
];


    // Projects
   $scope.projects = [

    {
    name: "Arduino-Based Fire Alarm Detection System",

    description: "A fire detection project using Arduino Uno, a flame sensor, and a buzzer.",

    technologies: "Arduino Uno, Flame Sensor, Buzzer",

    category: "Hardware",

    status: "Completed",

    image: "images/projects/fire-alarm.jpeg"
},

   {
    name: "Temperature Monitoring System",

    description: "A temperature monitoring circuit created using Tinkercad simulation.",

    technologies: "Tinkercad Circuits",

    category: "Simulation",

    status: "Completed",

    image: "images/projects/temperature-monitoring.jpeg"
},

    {
        name: "Personal Portfolio Website",

        description: "Building a personal portfolio website to showcase my education, technical skills, and projects using web technologies.",

        technologies: "HTML, CSS, JavaScript, AngularJS",

        category: "Web Development",

        status: "In Progress",
         image: "images/portfolio-website.jpg"
      }
];

});
/* DARK MODE AND LIGHT MODE */

document.addEventListener("DOMContentLoaded", function () {

const themeBtn = document.getElementById("themeBtn");

if (!themeBtn) {
    console.error("Theme button not found in HTML!");
    return;
}

// Restore the saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

updateThemeButton();

// Change theme when the button is clicked
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const currentTheme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";

    localStorage.setItem("portfolioTheme", currentTheme);

    updateThemeButton();
});

// Update the button icon
function updateThemeButton() {

    const isLightMode = document.body.classList.contains("light-mode");

    themeBtn.textContent = isLightMode ? "🌙" : "☀️";

    themeBtn.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark mode" : "Switch to light mode"
    );
}
});
