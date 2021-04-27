const getRepos = async (username) =>
  await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
  .then((response) => response.json())
  .catch((error) => console.log(error));

const listRepos = async (repos) => {
  const markup = repos.map((repo) => `
    <li>
      <a href="${repo.html_utl}">${repo.name}</a>
      (⭐ ${repo.stargazers_count})
    </li>
  `).join('');

  const content = document.getElementById('content');
  content.innerHTML= `<ul>${markup}</ul>`
}

const repos = await getRepos('jmejiaxdev');
listRepos(repos);