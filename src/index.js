console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        const imageContainer = document.querySelector('#image-container');
        
        images.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const breedList = document.querySelector('#breed-list');
        
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
      });
  });
  window.addEventListener('DOMContentLoaded', (event) => {
    // ... code from Challenge 2
    
    const breedList = document.querySelector('#breed-list');
    
    breedList.addEventListener('click', (event) => {
      const li = event.target;
      li.style.color = 'red';
    });
  });
  window.addEventListener('DOMContentLoaded', (event) => {
    // ... code from Challenge 2
    
    const breedList = document.querySelector('#breed-list');
    const dropdown = document.querySelector('#dropdown');
    
    dropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value.toLowerCase();
      
      breeds.forEach(breed => {
        const li = breedList.querySelector(`li[data-breed="${breed}"]`);
        if (breed.startsWith(selectedLetter)) {
          li.style.display = 'block';
        } else {
          li.style.display = 'none';
        }
      });
    });
  });
   