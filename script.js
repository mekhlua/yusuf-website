// Mobile Navigation Drawer Toggle
const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.getElementById('nav-container');

menuToggle.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  if (navContainer.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close Mobile Menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navContainer.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// Theme Switcher (Dark/Light Mode)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
  const icon = themeBtn.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// Image Preview Function for File Uploads
function previewImage(input, targetId) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById(targetId).src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}

// Multi-Language Switcher logic
function changeLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  document.querySelectorAll('.lang-text').forEach(el => {
    if (el.dataset[lang]) {
      if (el.children.length > 0) {
        // Keep HTML elements inside like <b> or <i>
        el.childNodes[0].nodeValue = el.dataset[lang];
      } else {
        el.innerText = el.dataset[lang];
      }
    }
  });
}