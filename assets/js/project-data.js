// project-data.js - Updated to match resume exactly
console.log('🚀 Loading updated project data script...');

// Your project data - exactly matching your resume
const projectsData = [
  {
    id: 1,
    title: "SmartExpense",
    subtitle: "Graduation Project",
    description: "A full-stack personal finance tracker built with Flutter (frontend) and a Laravel API (backend). Includes a multi-account balance system with multi-currency support and real-time exchange rates powered by the ExchangeRate API. Features include secure login with OTP email verification, role-based accounts, expense categorization and reporting, and offline caching with Hive. Allows users to securely track, categorize, and analyze financial patterns with dynamic charts.",
    technologies: ["Flutter", "Laravel", "Dart", "PHP", "ExchangeRate API", "OTP Verification", "Hive", "Multi-Currency"],
    icon: "fa-solid fa-chart-line",
    image: "./assets/images/smartexpense.png",
    githubUrl: "https://github.com/Tochsothak/smartexpense.git",
    liveUrl: "https://smartexpense-demo.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "My Store App",
    subtitle: "E-commerce Platform",
    description: "A full-stack e-commerce app inspired by Amazon, built with Flutter (frontend) and Express.js + MongoDB (backend). Features include a responsive UI, real-time product updates, and a seamless shopping experience. Utilized the Provider package for efficient state management.",
    technologies: ["Flutter", "Express.js", "MongoDB", "Node.js", "Provider", "Dart"],
    icon: "fa-solid fa-shopping-cart",
    image: "./assets/images/mystore.png",
    githubUrl: "https://github.com/Tochsothak/my-store-app.git",
    liveUrl: "https://mystore-app-demo.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "Phoneshop",
    subtitle: "Online Store Management",
    description: "Created a full-stack web application for managing an online phone shop using Spring Boot (backend) and Thymeleaf (frontend). Implemented functionalities for managing products, orders, and customer reviews. This project demonstrates a solid understanding of both front-end and back-end development with Java technologies.",
    technologies: ["Spring Boot", "Thymeleaf", "Java", "MySQL", "JPA"],
    icon: "fa-solid fa-mobile-alt",
    image: "./assets/images/phoneshop.png",
    githubUrl: "https://github.com/Tochsothak/phoneshop.git",
    liveUrl: "https://phoneshop-demo.herokuapp.com/",
    featured: true
  },
  {
    id: 4,
    title: "Gym App",
    subtitle: "Fitness Tracker",
    description: "Created a fitness tracking app with a focus on workout routines and progress tracking. The app provides a list of exercises, and users can log their workouts and monitor their improvements over time.",
    technologies: ["React.js", "JavaScript", "CSS"],
    icon: "fa-solid fa-dumbbell",
    image: "./assets/images/gym.png",
    githubUrl: "https://github.com/Tochsothak/gym-app.git",
    liveUrl: "https://healthy-fit.netlify.app/",
    featured: true
  },
  {
    id: 5,
    title: "NASA API",
    subtitle: "Space Data Visualization",
    description: "Developed an interactive web app that consumes NASA's API to fetch and display astronomy-related data using React.js.",
    technologies: ["React.js", "NASA API", "JavaScript", "CSS"],
    icon: "fa-solid fa-rocket",
    image: "./assets/images/nasa.png",
    githubUrl: "https://github.com/Tochsothak/react-nasa-api.git",
    liveUrl: "https://nasa-react-api-thak.netlify.app/",
    featured: true
  },
  {
    id: 6,
    title: "Weather Forecast",
    subtitle: "Weather Application",
    description: "Built a weather forecasting application using HTML, CSS and JavaScript and the OpenWeatherMap API. Implemented features like weather updates, search functionality, and user location tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    icon: "fa-solid fa-cloud-sun",
    image: "./assets/images/Weather.png",
    githubUrl: "https://github.com/Tochsothak/weather-API.git",
    liveUrl: "https://tochsothak.github.io/weather-API/",
    featured: true
  },
  {
    id: 7,
    title: "Quote Generator",
    subtitle: "Random Quote App",
    description: "A web application built with React.js and Redux to generate random quotes. Fetches data from a public API, demonstrating proficiency in asynchronous data handling, front-end state management, and UI development.",
    technologies: ["React.js", "Redux", "JavaScript", "CSS", "Public API"],
    icon: "fa-solid fa-quote-right",
    image: "./assets/images/quotes.png",
    githubUrl: "https://github.com/Tochsothak/quote-generator.git",
    liveUrl: "https://quote-generator-react.netlify.app/",
    featured: true
  },
  {
    id: 8,
    title: "Fireball Shooting Game",
    subtitle: "2D Platformer Game",
    description: "A 2D action-adventure game built with Unity. Players navigate through dynamic levels, defeat enemies, and progress by completing objectives. Features a robust respawn system at the last checkpoint, as well as victory and game over screens.",
    technologies: ["Unity", "C#", "2D Game Development", "Game Physics"],
    icon: "fa-solid fa-gamepad",
    image: "./assets/images/fireball-game.png",
    githubUrl: "https://github.com/Tochsothak/fireball-shooting-game.git",
    liveUrl: "https://fireball-game.itch.io/",
    featured: true
  },
  {
    id: 9,
    title: "TO-Do List",
    subtitle: "Task Management App",
    description: "A simple but effective web application built with React.js for managing daily tasks. Demonstrates core front-end skills in state management, component creation, and handling user input for creating, updating, and deleting tasks.",
    technologies: ["React.js", "JavaScript", "CSS", "Local Storage"],
    icon: "fa-solid fa-tasks",
    image: "./assets/images/todo.png",
    githubUrl: "https://github.com/Tochsothak/todo-list-react.git",
    liveUrl: "https://todo-list-react-app.netlify.app/",
    featured: true
  }
];

// Clean HTML generation function (no inline styles)
function generateProjectHTML(project) {
  const techTags = project.technologies.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');

  return `
    <div class="project-box">
      <!-- Project Image -->
     
      
      <!-- Project Content -->
      <div class="project-content">
        <!-- Project Header -->
        <div class="project-header">
          <i class="${project.icon}"></i>
          <h3>${project.title}</h3>
          ${project.subtitle ? `<p style="font-size: 0.85rem; color: #667eea; font-weight: 500; margin: 0.25rem 0 0.5rem 0;">${project.subtitle}</p>` : ''}
        </div>
        
        <!-- Project Description -->
        <p>${project.description}</p>
        
        <!-- Technology Tags -->
        <div class="project-technologies">
          ${techTags}
        </div>
        
        <!-- Action Buttons -->
        <div class="project-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
            <span>Code</span>
          </a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-external-link-alt"></i>
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Function to render projects
function renderProjects() {
  console.log('🎨 Rendering updated projects...');
  
  const projectContainer = document.querySelector('.project-container');
  
  if (!projectContainer) {
    console.error('❌ Project container not found!');
    return;
  }

  console.log('✅ Project container found:', projectContainer);

  // Show all featured projects
  const projectsToShow = projectsData.filter(project => project.featured);
  console.log('📋 Projects to show:', projectsToShow.length);

  if (projectsToShow.length === 0) {
    projectContainer.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-folder-open"></i>
        <h3>No projects to display</h3>
        <p>Check your project data configuration.</p>
      </div>
    `;
    return;
  }

  try {
    // Generate and insert HTML
    const projectsHTML = projectsToShow.map(project => generateProjectHTML(project)).join('');
    projectContainer.innerHTML = projectsHTML;
    
    console.log('✅ Updated projects rendered successfully!');
    console.log('📈 Projects count:', projectsToShow.length);
    
    // Add loading states for images
    const images = projectContainer.querySelectorAll('img');
    images.forEach((img, index) => {
      img.addEventListener('load', function() {
        console.log(`✅ Image ${index + 1} loaded successfully`);
      });
      
      img.addEventListener('error', function() {
        console.warn(`⚠️ Image ${index + 1} failed to load:`, this.src);
        // Set a placeholder image
        this.src = 'https://picsum.photos/400/250?random=' + (index + 1);
        this.alt = 'Project image placeholder';
      });
    });
    
  } catch (error) {
    console.error('❌ Error rendering projects:', error);
    projectContainer.innerHTML = `
      <div class="error-state">
        <i class="fa-solid fa-exclamation-triangle"></i>
        <h3>Error loading projects</h3>
        <p>${error.message}</p>
        <button onclick="window.PortfolioManager.renderProjects()">Try Again</button>
      </div>
    `;
  }
}

// Initialize Portfolio Manager
window.PortfolioManager = {
  renderProjects: renderProjects,
  getProjects: () => [...projectsData],
  getProject: (id) => projectsData.find(p => p.id === id),
  
  debug: () => {
    console.log('=== 🎨 UPDATED PROJECT DEBUG INFO ===');
    console.log('📊 Projects data:', projectsData);
    console.log('📦 Project container:', document.querySelector('.project-container'));
    console.log('🎯 Project boxes count:', document.querySelectorAll('.project-box').length);
    
    const stats = {
      projectsCount: projectsData.length,
      featuredCount: projectsData.filter(p => p.featured).length,
      technologies: [...new Set(projectsData.flatMap(p => p.technologies || []))],
      renderedProjects: document.querySelectorAll('.project-box').length,
      containerExists: !!document.querySelector('.project-container'),
      containerVisible: document.querySelector('.project-container')?.offsetParent !== null
    };
    
    console.log('📈 Stats:', stats);
    return stats;
  },
  
  forceRender: () => {
    console.log('🔧 Force rendering updated projects...');
    renderProjects();
  },
  
  isLoaded: true,
  version: '10.0.0 - Resume Matched'
};

// Initialize projects when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 DOM loaded, initializing updated projects...');
  setTimeout(renderProjects, 100);
});

// Backup initialization
window.addEventListener('load', function() {
  console.log('🔄 Window loaded, checking updated projects...');
  const container = document.querySelector('.project-container');
  
  if (container && container.querySelectorAll('.project-box').length === 0) {
    console.log('📝 No projects found, rendering...');
    renderProjects();
  }
});

// Debug functions for console
window.debugProjects = function() {
  return window.PortfolioManager.debug();
};

window.forceRenderProjects = function() {
  return window.PortfolioManager.forceRender();
};

console.log('✅ Updated project data script loaded successfully');
console.log('📈 Version:', window.PortfolioManager?.version);
console.log('🎨 Ready to render updated projects!');