window.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('/api/projects', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const projects = await res.json();

  const container = document.getElementById('projectsContainer');
  projects.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><a href="project.html?projectId=${p._id}">View Tasks</a>`;
    container.appendChild(div);
  });
});