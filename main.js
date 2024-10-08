const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(event) {
        const email = document.getElementById('nome2').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            alert('Por favor, insira um email válido.');
            event.preventDefault();
        }
    });
} else {
    console.error('Formulário não encontrado.');
}


const username = 'devHyrum';
const reposContainer = document.querySelector('.projetos');
const desiredRepos = [
  'User-Management-and-Blogging-API',
  'React-Accommodation-Finder',
  'weather-application',
  'Front-end-Authentication-System',
  'Tailwind-News-Homepage',
  'Back-end-Authentication-System'
];
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    if (data && Array.isArray(data)) {
      data.forEach(repo => {
        if (desiredRepos.includes(repo.name)) {
          const repoDiv = document.createElement('div');
          repoDiv.classList.add('section-projetos');
          repoDiv.innerHTML = `
              <img src="./scss/assets/images/githubWallpaper.jpg" alt="${repo.name}">
              <h5>${repo.name}</h1>
              <p>${repo.description}</p>
              <div>
                  <button><a href="${repo.html_url}" target="_blank">REPÓSITORIO</a></button>
                  <button><a href="${repo.homepage}" target="_blank">VER DEMO</a></button>
              </div>
          `;
          reposContainer.appendChild(repoDiv);
        }
      });
    } else {
      console.error('A resposta da API não contém a estrutura esperada.', data);
    }
  })
  .catch(error => {
    console.error('Erro ao buscar repositórios:', error);
  });
