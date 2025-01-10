    // Daftar Film yang sama untuk Trending dan Latest
    const movies = [
        { title: "Purple Hearts", img: "./image/purple-hearts.jpeg" },
        { title: "Man In Love", img: "./image/manInLove.jpg" },
        { title: "500 Days Of Summer", img: "./image/500daysOfSummer.jpeg" },
        { title: "20th Century Girl", img: "./image/20th-CenturyGirl.jpg" },
        { title: "La La Land", img: "./image/lalaland.jpeg" },
        { title: "18 x 2 Beyond Youthful Days", img: "./image/18x2beyondYouthfulDays.jpg" },
    ];
  
    function showMovies(movies, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
  
        if (movies.length === 0) {
            container.innerHTML = `<div class="no-results">Film tidak tersedia.</div>`;
            return;
        }
    
        for (const movie of movies) {
            const card = createMovieCard(movie);
            container.appendChild(card);
        }
    }
  
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('movie-card');
  
        card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
        </div>
        `;
        return card;
    }
  
    showMovies(movies, "trending-movies");
    showMovies(movies, "latest-movies");
  
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
  
    if (filteredMovies.length > 0) {
        document.getElementById("results-section").style.display = "block";
        showMovies(filteredMovies, "results-movies"); // Menampilkan semua hasil yang sesuai
        document.getElementById("trending-section").style.display = "none";
        document.getElementById("latest-section").style.display = "none";
    } else {
        document.getElementById("results-section").style.display = "block";
        showMovies([], "results-movies"); // Jika tidak ada hasil yang ditemukan, tampilkan film tidak tersedia
        document.getElementById("trending-section").style.display = "none";
        document.getElementById("latest-section").style.display = "none";
    }
    
    // Jika pencarian dihapus, kembalikan ke tampilan normal
    if (!searchTerm) {
        document.getElementById("results-section").style.display = "none";
        document.getElementById("trending-section").style.display = "block";
        document.getElementById("latest-section").style.display = "block";
    }
    });


    // @media menyesuaikan navbar dibawah 780pixel
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    });

  