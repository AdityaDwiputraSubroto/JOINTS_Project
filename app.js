const artists = [  
  {    name: 'Dominik J.',      image: 'guest-1.jpeg',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi error autem perferendis debitis doloribus, saepe necessitatibus! Et reprehenderit placeat cum totam earum ex modi, sapiente consequuntur vitae labore molestias?',  },  
  {    name: 'Jominic D.',      image: 'guest-2.jpeg',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi error autem perferendis debitis doloribus, saepe necessitatibus! Et reprehenderit placeat cum totam earum ex modi, sapiente consequuntur vitae labore molestias?',  },  
  {    name: 'Jella D.',      image: 'guest-3.jpeg',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi error autem perferendis debitis doloribus, saepe necessitatibus! Et reprehenderit placeat cum totam earum ex modi, sapiente consequuntur vitae labore molestias?', },];

let currentArtistIndex = 0;

function updateArtist() {
  const artist = artists[currentArtistIndex];
  const descriptionEl = document.getElementById('star-container');
  descriptionEl.innerHTML = `
  <div
  class="h-screen bg-[url('assets/${artist.image}')] bg-cover bg-center"
  id="star-container"
>
  <div class="text-center text-white relative bg-black/20">
    <h1 class="text-[64px] font-bold  w-full absolute">Guest Star</h1>

    <div class="flex flex-col justify-center h-screen">
      <div class="flex justify-between">
        
          <img src="assets/right-arrow.png" id="left-arrow" onclick="prevArtist()" class="w-10 h-10 hover:cursor-pointer transform rotate-180" alt="">
        
        
          <img src="assets/right-arrow.png" id="right-arrow" onclick="nextArtist()" class="w-10 hover:cursor-pointer h-10" alt="">
        
      </div>
    <div class="w-full mt-40 absolute bottom-5">
      <h2 class="text-[48px] font-bold">${artist.name}</h2>
      <p class="text-[20px]">${artist.description}</p>
    </div>
  </div>
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

function scrollToSection() {
  const section = document.getElementById("informasi");
  section.scrollIntoView({ behavior: "smooth" });
}

updateArtist();
