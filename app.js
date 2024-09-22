const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    //Button click active class
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    
    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toogle theme

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}




particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80, // Adjust the number of particles
        "density": {
          "enable": true,
          "value_area": 800 // The area where particles will be distributed
        }
      },
      "color": {
        "value": ["#00ffff", "#00aaff", "#ffffff"] // Electric spark colors (cyan, blue, white)
      },
      "shape": {
        "type": "circle", // You can also experiment with "edge" or "triangle"
      },
      "opacity": {
        "value": 0.6, // Semi-transparent for electric glow effect
        "random": true
      },
      "size": {
        "value": 5, // Size of particles
        "random": true // Random size for variety
      },
      "move": {
        "enable": true,
        "speed": 6, // Speed of the particles, adjust to make it feel "electric"
        "direction": "none", // Moves randomly in all directions
        "random": true,
        "straight": false, // If true, particles will move in straight lines
        "out_mode": "out", // Particles will disappear and reappear
        "bounce": false // Particles won't bounce on the edges
      }
    },
    "interactivity": {
      "detect_on": "canvas", // Detects mouse interaction within the canvas
      "events": {
        "onhover": {
          "enable": true, // Interact with the mouse on hover
          "mode": "repulse" // Particles move away from the cursor
        }
      }
    },
    "retina_detect": true // Adjusts for high-resolution displays
  });
  


















PageTransition();










