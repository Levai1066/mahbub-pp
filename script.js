// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeIcon.className = savedTheme === 'light-mode' ? 'fas fa-sun' : 'fas fa-moon';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    themeIcon.className = 'fas fa-moon'; // Switch to moon icon
    localStorage.setItem('theme', ''); // Save preference
  } else {
    body.classList.add('light-mode');
    themeIcon.className = 'fas fa-sun'; // Switch to sun icon
    localStorage.setItem('theme', 'light-mode'); // Save preference
  }
});

// Hide all sections initially
const hideAllSections = () => {
  const sections = ['projects', 'resume', 'contact-section'];
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = 'none';
    }
  });
};

// Show the selected section
const showSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'block';
  }
};

// Project Button Toggle Visibility (Show projects only once)
const projectsButton = document.querySelector('.nav-button:nth-child(1)'); // The "Projects" button
projectsButton.addEventListener('click', () => {
  hideAllSections();  // Hide all sections before showing the clicked one
  showSection('projects'); // Show the projects section
});

// Resume Button Toggle Visibility
const resumeButton = document.querySelector('.nav-button:nth-child(2)'); // The "Resume" button
resumeButton.addEventListener('click', () => {
  hideAllSections();  // Hide all sections before showing the clicked one
  showSection('resume'); // Show the resume section

  // Start the progress bar animation when resume section is displayed
  animateProgress('html', percentages.html);
  animateProgress('css', percentages.css);
  animateProgress('js', percentages.js);
});

// Contact Button Toggle Visibility
const contactButton = document.querySelector('.nav-button:nth-child(3)'); // The "Contact" button
contactButton.addEventListener('click', () => {
  hideAllSections();  // Hide all sections before showing the clicked one
  showSection('contact-section'); // Show the contact section
});

// Progress bar animation function
let percentages = {
  html: 80,
  css: 75,
  js: 50,
};

function animateProgress(id, targetPercentage) {
  let numberElement = document.querySelector(`#number-${id}`);
  let circleElement = document.querySelector(`#circle-${id}`);
  const circumference = 472; // Circumference of the circle (2 * π * r where r = 70)
  let countdown = 0;

  let interval = setInterval(() => {
      if (countdown >= targetPercentage) {
          clearInterval(interval);
      } else {
          countdown += 1;
          numberElement.innerHTML = countdown + "%";
          let offset = circumference - (circumference * countdown) / 100;
          circleElement.style.strokeDashoffset = offset; // Sync the visual progress
      }
  }, 30);
}
