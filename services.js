// JavaScript function to toggle testimonials
function showTestimonial(index) {
    var testimonials = document.getElementsByClassName("testimonial");
    var buttons = document.getElementsByClassName("testimonial-button");
    
    // Hide all testimonials
    for (var i = 0; i < testimonials.length; i++) {
      testimonials[i].classList.remove("active");
    }
    
    // Deactivate all buttons
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    
    // Show selected testimonial and activate corresponding button
    testimonials[index].classList.add("active");
    buttons[index].classList.add("active");
  }
  