// Core logic
export function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  }
  
  // DOM setup (only runs in the browser)
  if (typeof document !== 'undefined') {
    const form = document.getElementById('urlForm');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  }
  