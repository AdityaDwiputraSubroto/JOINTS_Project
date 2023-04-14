const artists = [  
  {    name: 'Artist 1',    description: 'Description of Artist 1',    image: 'artist1.jpg',  },  
  {    name: 'Artist 2',    description: 'Description of Artist 2',    image: 'artist2.jpg',  },  
  {    name: 'Artist 3',    description: 'Description of Artist 3',    image: 'artist3.jpg',  },];

let currentArtistIndex = 0;

function updateArtist() {
  const artist = artists[currentArtistIndex];
  const descriptionEl = document.getElementById('artist-description');
  descriptionEl.innerHTML = `
    <div class="background-image" style="background-image: url('./images/${artist.image}');">
      <h2 class="text-2xl font-bold mb-2">${artist.name}</h2>
      <p class="text-gray-700">${artist.description}</p>
    </div>
  `;
}

function prevArtist() {
  currentArtistIndex--;
  if (currentArtistIndex < 0) {
    currentArtistIndex = artists.length - 1;
  }
  updateArtist();
}

function nextArtist() {
  currentArtistIndex++;
  if (currentArtistIndex >= artists.length) {
    currentArtistIndex = 0;
  }
  updateArtist();
}

updateArtist();
