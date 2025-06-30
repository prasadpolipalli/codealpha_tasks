window.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('projectId');
  const token = localStorage.getItem('token');
  const res = await fetch(`/api/projects/${projectId}/tasks`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const tasks = await res.json();

  const container = document.getElementById('tasksContainer');
  tasks.forEach(t => {
    const div = document.createElement('div');
    div.innerHTML = `<h4>${t.title}</h4><p>${t.description}</p><small>Status: ${t.status}</small>`;
    container.appendChild(div);
  });
});