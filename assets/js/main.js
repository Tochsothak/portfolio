// main.js - Your existing code plus project management

// Typed.js effect
var typingEffect = new Typed(".typedText", {
  strings: ["Hello!, I'm Sothak", "I'm a Software Development Student", "Of IT Academy Step Cambodia"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// ScrollReveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// Navigation menu functionality
const menuBtn = document.querySelector(".nav-menu-btn");
const navigation = document.querySelector(".nav-menu");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
}

// Active navigation link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    link.classList.add("active");
  });
});

// Menu function for mobile
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Check if Portfolio Manager is loaded
function checkPortfolioManager() {
  return window.PortfolioManager && window.PortfolioManager.isLoaded;
}

// Wait for Portfolio Manager to load
function waitForPortfolioManager(callback, maxAttempts = 10) {
  let attempts = 0;
  
  function check() {
    attempts++;
    if (checkPortfolioManager()) {
      callback();
    } else if (attempts < maxAttempts) {
      setTimeout(check, 200);
    } else {
      console.error('Portfolio Manager failed to load after', maxAttempts, 'attempts');
    }
  }
  
  check();
}

// Project Management Functions
function showAddProjectForm() {
  if (!checkPortfolioManager()) {
    alert('Portfolio Manager is not loaded yet. Please wait a moment and try again.');
    return;
  }

  const formHTML = `
    <div id="project-form-overlay" class="form-overlay">
      <div class="form-container">
        <h3>Add New Project</h3>
        <form id="add-project-form">
          <input type="text" id="project-title" placeholder="Project Title" required>
          <textarea id="project-description" placeholder="Project Description" required></textarea>
          <input type="text" id="project-technologies" placeholder="Technologies (comma separated)" required>
          <input type="text" id="project-icon" placeholder="Font Awesome Icon Class (e.g., fa-brands fa-react)" required>
          <input type="url" id="project-image" placeholder="Image URL" required>
          <input type="url" id="project-github" placeholder="GitHub URL" required>
          <input type="url" id="project-live" placeholder="Live Demo URL" required>
          <div class="form-buttons">
            <button type="submit">Add Project</button>
            <button type="button" onclick="closeProjectForm()">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', formHTML);
  
  document.getElementById('add-project-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newProject = {
      title: document.getElementById('project-title').value,
      description: document.getElementById('project-description').value,
      technologies: document.getElementById('project-technologies').value.split(',').map(tech => tech.trim()),
      icon: document.getElementById('project-icon').value,
      image: document.getElementById('project-image').value,
      githubUrl: document.getElementById('project-github').value,
      liveUrl: document.getElementById('project-live').value,
      featured: true
    };
    
    if (checkPortfolioManager()) {
      window.PortfolioManager.addProject(newProject);
      closeProjectForm();
      alert('Project added successfully!');
    } else {
      alert('Portfolio Manager not loaded. Please refresh the page and try again.');
    }
  });
}

function closeProjectForm() {
  const overlay = document.getElementById('project-form-overlay');
  if (overlay) {
    overlay.remove();
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Main.js DOM loaded');
  
  // Add admin button (hidden by default)
  const adminBtn = document.createElement('button');
  adminBtn.innerHTML = '+ Add Project';
  adminBtn.className = 'admin-btn';
  adminBtn.onclick = showAddProjectForm;
  document.body.appendChild(adminBtn);
  
  // Show admin button with Ctrl+Shift+A
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      adminBtn.style.display = adminBtn.style.display === 'none' ? 'block' : 'none';
    }
  });
  
  // Wait for Portfolio Manager and then render projects
  waitForPortfolioManager(() => {
    console.log('Portfolio Manager loaded, rendering projects...');
    window.PortfolioManager.renderProjects();
  });
});

// Fallback: Try to render projects when window loads
window.addEventListener('load', function() {
  console.log('Window loaded in main.js');
  
  setTimeout(() => {
    if (checkPortfolioManager()) {
      console.log('Fallback: Rendering projects from main.js');
      window.PortfolioManager.renderProjects();
    }
  }, 500);
});

console.log('Main.js loaded successfully');