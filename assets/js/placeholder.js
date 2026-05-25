/* Shared placeholder page renderer for sections coming in later sprints. */
function renderPlaceholder({ id, title, emoji, sprint, description, features }) {
  const main = document.querySelector('main.main');
  main.innerHTML = `
    <div id="topbar-slot"></div>
    <div class="page-header">
      <div>
        <h1>${emoji} ${title}</h1>
        <div class="subtitle">${description}</div>
      </div>
      <span class="chip" style="background:var(--peach-soft);">Coming in ${sprint}</span>
    </div>
    <div class="card">
      <div class="card-title">🌱 What's planned</div>
      <ul style="line-height:1.9;color:var(--ink-soft);">
        ${features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
    <div class="card mt-2" style="background:linear-gradient(120deg, var(--blush-soft) 0%, var(--lavender-soft) 100%); border:none;">
      <div style="font-family:var(--font-display); font-size:1.4rem; margin-bottom:6px;">Patience, little seed 🌸</div>
      <p>This part of your garden is on its way. We're building Bloom one sprint at a time so each section gets the care it deserves.</p>
      <a href="index.html" class="btn btn-secondary mt-1">← Back to dashboard</a>
    </div>
  `;
  renderShell(id);
}
