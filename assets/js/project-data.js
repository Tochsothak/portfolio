// project-data.js - Fixed to match the colorful CSS structure
const projectsData = [
  {
    id: 1,
    title: "SmartExpense (Graduation Project)",
    description: "A comprehensive full-stack personal finance tracker built with Flutter for the frontend and Laravel API for the backend. Features a sophisticated multi-account balance system with multi-currency support and real-time exchange rates powered by the ExchangeRate API. Includes secure authentication with OTP email verification, role-based user accounts, advanced expense categorization and detailed reporting capabilities. Implements offline caching with Hive for seamless user experience even without internet connectivity. Users can securely track, categorize, and analyze their financial patterns with dynamic charts and visualizations, making personal finance management intuitive and insightful.",
    technologies: ["Flutter", "Laravel", "PHP", "ExchangeRate API", "OTP Verification", "Hive", "Multi-Currency"],
    icon: "fa-solid fa-chart-line",
    image: "./assets/images/smartexpense.png",
    githubUrl: "https://github.com/Tochsothak/smartexpense.git",
    liveUrl: "https://smartexpense-demo.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "My Store App",
    description: "A sophisticated full-stack e-commerce application inspired by Amazon's user experience, built with Flutter for a responsive mobile frontend and Express.js with MongoDB for a robust backend infrastructure. Features include real-time product updates, seamless shopping cart functionality, secure user authentication, order management, and payment integration. Utilized the Provider package for efficient state management across the application, ensuring smooth performance and user experience. The app includes advanced features like product search and filtering, user reviews and ratings, wishlist functionality, and order tracking capabilities.",
    technologies: ["Flutter", "Express.js", "MongoDB", "Node.js", "Provider", "REST API"],
    icon: "fa-solid fa-shopping-cart",
    image: "./assets/images/mystore.png",
    githubUrl: "https://github.com/Tochsothak/my-store-app.git",
    liveUrl: "https://mystore-app-demo.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "Phoneshop",
    description: "A comprehensive full-stack web application for managing an online phone shop, built using Spring Boot for the backend and Thymeleaf for dynamic frontend templating. Implemented complete CRUD functionalities for managing products, processing orders, and handling customer reviews and ratings. Features include inventory management, user authentication and authorization, shopping cart functionality, order processing and tracking, and an admin dashboard for business management. The application demonstrates solid understanding of enterprise-level Java development, including database design, security implementation, and responsive web design principles.",
    technologies: ["Spring Boot", "Thymeleaf", "Java", "MySQL", "JPA", "Spring Security"],
    icon: "fa-solid fa-mobile-alt",
    image: "./assets/images/phoneshop.png",
    githubUrl: "https://github.com/Tochsothak/phoneshop.git",
    liveUrl: "https://phoneshop-demo.herokuapp.com/",
    featured: true
  },
  {
    id: 4,
    title: "Gym App",
    description: "Created a comprehensive fitness tracking application with a focus on workout routines and progress monitoring. The app provides an extensive library of exercises with detailed instructions, allowing users to create custom workout plans tailored to their fitness goals. Users can log their workouts, track their progress over time with detailed analytics and charts, set fitness goals, and monitor their improvements. Features include exercise categorization, workout history, progress visualization, and personalized recommendations based on user activity and preferences.",
    technologies: ["React.js", "JavaScript", "CSS", "Chart.js"],
    icon: "fa-solid fa-dumbbell",
    image: "./assets/images/gym.png",
    githubUrl: "https://github.com/Tochsothak/gym-app.git",
    liveUrl: "https://healthy-fit.netlify.app/",
    featured: true
  },
  {
    id: 5,
    title: "NASA Explorer",
    description: "Developed an interactive and educational web application that consumes NASA's public APIs to fetch and display fascinating astronomy-related data using React.js. Features include the Astronomy Picture of the Day, Mars Rover photos, space mission information, and detailed celestial object data. The app provides users with an immersive experience to explore space content with high-quality images, detailed descriptions, and educational information. Includes search functionality, favorites system, image galleries, and detailed information panels for each space object or mission.",
    technologies: ["React.js", "NASA API", "JavaScript", "CSS", "REST API"],
    icon: "fa-solid fa-rocket",
    image: "./assets/images/nasa.png",
    githubUrl: "https://github.com/Tochsothak/react-nasa-api.git",
    liveUrl: "https://nasa-react-api-thak.netlify.app/",
    featured: true
  },
  {
    id: 6,
    title: "Weather Forecast",
    description: "Built a comprehensive weather forecasting application using HTML, CSS, and JavaScript with the OpenWeatherMap API integration. The application provides real-time weather data for any location worldwide with an intuitive user interface that displays current conditions, hourly forecasts, and 5-day weather predictions. Implemented features like city search functionality, geolocation-based weather updates, and detailed weather information including temperature, humidity, wind speed, atmospheric pressure, and weather alerts. The app features a responsive design that works seamlessly across all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Geolocation API"],
    icon: "fa-solid fa-cloud-sun",
    image: "./assets/images/Weather.png",
    githubUrl: "https://github.com/Tochsothak/weather-API.git",
    liveUrl: "https://tochsothak.github.io/weather-API/",
    featured: true
  },
  {
    id: 7,
    title: "Quote Generator",
    description: "A dynamic web application built with React.js and Redux for generating inspirational and motivational random quotes. The app fetches data from a public quotes API, demonstrating proficiency in asynchronous data handling, front-end state management, and modern UI development. Features include quote categorization, favorite quotes system, social sharing functionality, and a clean, responsive design. The application showcases advanced React concepts including hooks, context API, and efficient state management patterns with Redux for optimal performance.",
    technologies: ["React.js", "Redux", "JavaScript", "CSS", "Quotes API"],
    icon: "fa-solid fa-quote-right",
    image: "./assets/images/quotes.png",
    githubUrl: "https://github.com/Tochsothak/quote-generator.git",
    liveUrl: "https://quote-generator-react.netlify.app/",
    featured: true
  },
  {
    id: 8,
    title: "Fireball Shooting Game",
    description: "A thrilling 2D action-adventure platformer game built with Unity game engine. Players navigate through dynamic and challenging levels, defeat various enemies using fireball attacks, and progress by completing specific objectives and missions. The game features a robust checkpoint-based respawn system that saves player progress at strategic points, comprehensive victory and game over screens, smooth character controls and animations, enemy AI behavior, and immersive sound effects. Demonstrates proficiency in game development, physics implementation, and user experience design in gaming environments.",
    technologies: ["Unity", "C#", "2D Game Development", "Physics Engine", "Animation"],
    icon: "fa-solid fa-gamepad",
    image: "./assets/images/fireball-game.png",
    githubUrl: "https://github.com/Tochsothak/fireball-shooting-game.git",
    liveUrl: "https://fireball-game.itch.io/",
    featured: true
  },
  {
    id: 9,
    title: "TO-Do List App",
    description: "A simple yet effective task management web application built with React.js for organizing and tracking daily activities and responsibilities. The app demonstrates core front-end development skills including component-based architecture, state management, and user interaction handling. Features include creating new tasks, updating existing tasks, marking tasks as complete or incomplete, deleting tasks, task filtering and sorting, local storage persistence, and a clean, intuitive user interface. The application showcases modern React development practices and responsive design principles.",
    technologies: ["React.js", "JavaScript", "CSS", "Local Storage", "Responsive Design"],
    icon: "fa-solid fa-tasks",
    image: "./assets/images/todo.png",
    githubUrl: "https://github.com/Tochsothak/todo-list-react.git",
    liveUrl: "https://todo-list-react-app.netlify.app/",
    featured: true
  }
];

// FIXED: Function to generate project HTML that matches the colorful CSS structure
function generateProjectHTML(project) {
  const techTags = project.technologies.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');

  return `
    <div class="project-box">
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      
      <!-- Default content (visible by default) - MATCHES CSS -->
      <div class="project-info-default">
        <i class="${project.icon}"></i>
        <h3>${project.title}</h3>
        <div class="project-technologies">
          ${techTags}
        </div>
      </div>
      
      <!-- Hover content (description only) - MATCHES CSS -->
      <div class="project-info-hover">
        <div class="description-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </div>
      
      <!-- Persistent action buttons (always accessible) - MATCHES CSS -->
      <div class="project-actions-persistent">
        <a href="${project.githubUrl}" target="_blank" class="github-link">
          <i class="fa-brands fa-github"></i>
          <span>Code</span>
        </a>
       
      </div>
    </div>
  `;
}

// Simple function to render projects
function renderProjects() {
  console.log('🎨 Rendering colorful projects...');
  
  const projectContainer = document.querySelector('.project-container');
  
  if (!projectContainer) {
    console.error('❌ Project container not found!');
    console.log('Available containers:', document.querySelectorAll('[class*="project"]'));
    return;
  }

  console.log('✅ Project container found:', projectContainer);

  // Show all featured projects
  const projectsToShow = projectsData.filter(project => project.featured);
  console.log('📋 Projects to show:', projectsToShow.length);

  if (projectsToShow.length === 0) {
    projectContainer.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3 style="margin-bottom: 0.5rem;">No projects to display</h3>
        <p style="font-size: 0.9rem; opacity: 0.7;">Check your project data!</p>
      </div>
    `;
    return;
  }

  try {
    // Generate and insert HTML
    const projectsHTML = projectsToShow.map(project => generateProjectHTML(project)).join('');
    projectContainer.innerHTML = projectsHTML;
    
    // Add click event listeners to prevent hover interference
    addClickListeners();
    
    console.log('✅ Colorful projects rendered successfully!');
    console.log('📈 Projects count:', projectsToShow.length);
    
    // Debug: Check if elements exist
    console.log('🔍 Debug info:');
    console.log('- Project boxes:', document.querySelectorAll('.project-box').length);
    console.log('- Default info:', document.querySelectorAll('.project-info-default').length);
    console.log('- Hover info:', document.querySelectorAll('.project-info-hover').length);
    console.log('- Action buttons:', document.querySelectorAll('.project-actions-persistent').length);
    
  } catch (error) {
    console.error('❌ Error rendering projects:', error);
    projectContainer.innerHTML = `
      <div class="error-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #ff4757;">
        <i class="fa-solid fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h3 style="margin-bottom: 0.5rem; color: #ff4757;">Error loading projects</h3>
        <p style="font-size: 0.9rem; opacity: 0.7;">${error.message}</p>
        <button onclick="window.PortfolioManager.renderProjects()" 
                style="margin-top: 1rem; padding: 0.5rem 1rem; background: #ff4757; color: white; border: none; border-radius: 8px; cursor: pointer;">
          Try Again
        </button>
      </div>
    `;
  }
}

// Add click event listeners to buttons
function addClickListeners() {
  const buttons = document.querySelectorAll('.github-link, .visit-btn');
  console.log('🎯 Adding click listeners to', buttons.length, 'buttons');
  
  buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', function(e) {
      // Prevent hover effect on button hover
      e.stopPropagation();
      this.style.zIndex = '1000';
    });
    
    button.addEventListener('mouseleave', function(e) {
      this.style.zIndex = '';
    });
    
    button.addEventListener('click', function(e) {
      // Ensure click works
      e.stopPropagation();
      console.log('🔗 Button clicked:', this.href);
    });
    
    console.log(`✅ Button ${index + 1} listeners added`);
  });
}

// Initialize Portfolio Manager
window.PortfolioManager = {
  // Core functions
  renderProjects: renderProjects,
  
  // Data functions
  getProjects: () => [...projectsData],
  getProject: (id) => projectsData.find(p => p.id === id),
  
  // Debug function
  debug: () => {
    console.log('=== 🎨 COLORFUL PROJECT DEBUG INFO ===');
    console.log('📊 Projects data:', projectsData);
    console.log('📦 Project container:', document.querySelector('.project-container'));
    console.log('🏗️ Container HTML length:', document.querySelector('.project-container')?.innerHTML?.length || 0);
    console.log('⚙️ PortfolioManager:', window.PortfolioManager);
    
    // Check CSS classes
    console.log('🎨 CSS Classes Check:');
    console.log('- .project-box:', document.querySelectorAll('.project-box').length);
    console.log('- .project-info-default:', document.querySelectorAll('.project-info-default').length);
    console.log('- .project-info-hover:', document.querySelectorAll('.project-info-hover').length);
    console.log('- .project-actions-persistent:', document.querySelectorAll('.project-actions-persistent').length);
    console.log('- .tech-tag:', document.querySelectorAll('.tech-tag').length);
    
    const stats = {
      projectsCount: projectsData.length,
      featuredCount: projectsData.filter(p => p.featured).length,
      technologies: [...new Set(projectsData.flatMap(p => p.technologies || []))]
    };
    
    console.log('📈 Stats:', stats);
    return stats;
  },
  
  // Force render function
  forceRender: () => {
    console.log('🔧 Force rendering colorful projects...');
    renderProjects();
  },
  
  // Status
  isLoaded: true,
  version: '4.0.0 - Colorful'
};

// Initialize projects when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 DOM loaded, initializing colorful projects...');
  
  // Small delay to ensure CSS is loaded
  setTimeout(() => {
    renderProjects();
  }, 100);
});

// Backup initialization
window.addEventListener('load', function() {
  console.log('🔄 Window loaded, checking colorful projects...');
  const container = document.querySelector('.project-container');
  
  if (container) {
    const hasContent = container.innerHTML && container.innerHTML.trim() !== '' && !container.innerHTML.includes('loading');
    
    if (!hasContent) {
      console.log('📝 Container is empty, rendering colorful projects...');
      renderProjects();
    } else {
      console.log('✅ Colorful projects already rendered');
    }
  } else {
    console.warn('⚠️ Project container not found');
  }
});

// Debug functions for console
window.debugProjects = function() {
  return window.PortfolioManager.debug();
};

window.forceRenderProjects = function() {
  return window.PortfolioManager.forceRender();
};

// Log successful script load
console.log('✅ Colorful project data script loaded successfully');
console.log('📈 Version:', window.PortfolioManager?.version);
console.log('🎨 Ready to render colorful projects!');

// Test function to check if everything is working
window.testColorfulProjects = function() {
  console.log('🧪 Testing colorful projects...');
  
  const container = document.querySelector('.project-container');
  console.log('Container exists:', !!container);
  
  if (container) {
    console.log('Container classes:', container.className);
    console.log('Container children:', container.children.length);
  }
  
  console.log('Projects data length:', projectsData.length);
  console.log('Featured projects:', projectsData.filter(p => p.featured).length);
  
  // Try to render
  renderProjects();
  
  return {
    containerExists: !!container,
    projectsCount: projectsData.length,
    featuredCount: projectsData.filter(p => p.featured).length
  };
};