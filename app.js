// ── Project data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title:  'C Text RPG',
    tag:    'C • CLI',
    img:    'Images/Text-RPG.png',
    href:   'https://github.com/Romantll/Text-RPG',
    desc:   'A command-line RPG written in C with turn-based combat, inventory management, and a branching story.',
  },
  {
    title:  'Hospital DB',
    tag:    'Python • MySQL',
    img:    'Images/Ospetal.png',
    href:   'https://github.com/Romantll/Ospetal',
    desc:   'A hospital management system for tracking patients, staff, and medical records using Python and MySQL.',
  },
  {
    title:  "The Dragon's Crystal",
    tag:    'Android • Java',
    img:    'Images/TheDragonsCrystal.png',
    href:   'https://github.com/Romantll/TheDragonsCrystal',
    desc:   'An Android RPG adventure game built in Java featuring turn-based combat and exploration.',
  },
  {
    title:  'Discord Bot',
    tag:    'Discord • Python',
    img:    'Images/RomanBot.png',
    href:   'https://github.com/Romantll/Roman-Bot',
    desc:   'A Discord bot written in Python with commands for server moderation and entertainment.',
  },
  {
    title:  'Akira Melodie',
    tag:    'Next.js • Tailwind',
    img:    'Images/akiramelodie.png',
    href:   'https://www.akiramelodie.com/',
    desc:   'Official website for VTuber Akira Melodie — built with Next.js and Tailwind CSS, deployed on Vercel.',
  },
  {
    title:  'DoppelbotSL',
    tag:    'FastAPI • WebSockets',
    img:    'Images/doppelbot.png',
    href:   'https://github.com/Romantll/DoppelbotSL',
    desc:   'A multiplayer social-deduction game where humans and AI bots share a chat room — players must vote out the AIs before the rounds run out.',
  },
  {
    title:  'ResonaMAT',
    tag:    'React • Node.js • PostgreSQL',
    img:    'Images/Resonamat-analytics.png',
    href:   'https://resonamat.com',
    desc:   'A creator analytics dashboard that aggregates YouTube, Twitch, Instagram, and Bluesky into one place, with scheduled posting and OAuth integrations.',
  },
];

// ── Render project cards ──────────────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('proj-grid');

  grid.innerHTML = PROJECTS.map(p => `
    <a class="proj-card"
       href="${p.href}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Open ${p.title}"
       data-title="${p.title}">
      <img class="proj-img"
           src="${p.img}"
           alt="Screenshot of ${p.title}"
           onerror="this.closest('.proj-card').classList.add('img-error')" />
      <div class="proj-hover-overlay">
        <p class="proj-desc">${p.desc}</p>
      </div>
      <div class="proj-label">
        <span class="proj-title">${p.title}</span>
        <span class="proj-tag">${p.tag}</span>
      </div>
    </a>
  `).join('');
}

// ── Navigation ────────────────────────────────────────────────────────────────
const NAV_MAP = {
  home:      'nav-home',
  projects:  'nav-projects',
  documents: 'nav-documents',
  contact:   'nav-contact',
};

function setActiveNav(key) {
  Object.values(NAV_MAP).forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(NAV_MAP[key]).classList.add('active');
}

function showHome() {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('welcome').classList.add('active');
  setActiveNav('home');
  closeMenu();
}

function showSection(id) {
  document.getElementById('welcome').classList.remove('active');
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  setActiveNav(id);
  closeMenu();
}

// ── Hamburger ─────────────────────────────────────────────────────────────────
const toggle   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

function closeMenu() {
  toggle.classList.remove('open');
  navLinks.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// ── Init ──────────────────────────────────────────────────────────────────────
renderProjects();
