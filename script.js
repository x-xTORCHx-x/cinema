const filmList = document.getElementById('filmList');
const filmForm = document.getElementById('filmForm');
const searchInput = document.getElementById('search');

let films = [];

filmForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const film = {
        nome: document.getElementById('nome').value,
        classificacao: document.getElementById('classificacao').value,
        duracao: document.getElementById('duracao').value,
        genero: document.getElementById('genero').value,
        ano: document.getElementById('ano').value,
        sinopse: document.getElementById('sinopse').value
    };
    films.push(film);
    document.getElementById('filmForm').reset();
    displayFilms();
});

function displayFilms() {
    filmList.innerHTML = '';
    films.forEach(film => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${film.nome}</strong><br>
            Classificação: ${film.classificacao}<br>
            Duração: ${film.duracao} minutos<br>
            Gênero: ${film.genero}<br>
            Ano de Lançamento: ${film.ano}<br>
            Sinopse: ${film.sinopse}
        `;
        filmList.appendChild(li);
    });
}

function searchFilm() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFilms = films.filter(film => film.nome.toLowerCase().includes(searchTerm));
    filmList.innerHTML = '';
    if (filteredFilms.length > 0) {
        filteredFilms.forEach(film => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${film.nome}</strong><br>
                Classificação: ${film.classificacao}<br>
                Duração: ${film.duracao} minutos<br>
                Gênero: ${film.genero}<br>
                Ano de Lançamento: ${film.ano}<br>
                Sinopse: ${film.sinopse}
            `;
            filmList.appendChild(li);
        });
    } else {
        filmList.innerHTML = '<li>Nenhum filme encontrado.</li>';
    }
}
