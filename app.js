// ── Project categories ────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    label:    'Featured Projects',
    variant:  'featured',
    featured: true,
    projects: [
      {
        title:       'ResonaMAT',
        tag:         'React • Node.js • PostgreSQL',
        img:         'Images/Resonamat-analytics.webp',
        website:     'https://resonamat.com',
        closedSource: true,
        desc:        'A creator analytics dashboard that aggregates YouTube, Twitch, Instagram, and Bluesky into one place, with scheduled posting and OAuth integrations.',
      },
      {
        title:  'DoppelbotSL',
        tag:    'FastAPI • WebSockets',
        img:    'Images/doppelbot.png',
        github: 'https://github.com/Romantll/DoppelbotSL',
        desc:   'A multiplayer social-deduction game where humans and AI bots share a chat room — players must vote out the AIs before the rounds run out.',
      },
    ],
  },
  {
    label:    'Client / Professional Work',
    variant:  'professional',
    projects: [
      {
        title:       'Akira Melodie',
        tag:         'Next.js • Tailwind',
        img:         'Images/akiramelodie.webp',
        website:     'https://www.akiramelodie.com/',
        closedSource: true,
        desc:        'Official website for VTuber Akira Melodie — built with Next.js and Tailwind CSS, deployed on Vercel.',
      },
    ],
  },
  {
    label:    'Backend / Systems',
    variant:  'systems',
    projects: [
      {
        title:  'ArcaneLink',
        tag:    'Linux • WireGuard • Oracle Cloud',
        img:    'Images/ArcaneLink-Architecture.drawio.webp',
        github: 'https://github.com/Romantll/ArcaneLink',
        desc:   'Self-hosted modded Minecraft server infrastructure — home hardware routed through an Oracle VPS via WireGuard so the origin IP is never exposed, with Cloudflare Tunnel for hardened remote admin.',
      },
      {
        title:  'Hospital DB',
        tag:    'Python • MySQL',
        img:    'Images/Ospetal.png',
        github: 'https://github.com/Romantll/Ospetal',
        desc:   'A hospital management system for tracking patients, staff, and medical records using Python and MySQL.',
      },
      {
        title:  'Discord Bot',
        tag:    'Discord • Python',
        img:    'Images/RomanBot.webp',
        github: 'https://github.com/Romantll/Roman-Bot',
        desc:   'A Discord bot written in Python with commands for server moderation and entertainment.',
      },
    ],
  },
  {
    label:    'Creative / Games',
    variant:  'games',
    projects: [
      {
        title:  'C Text RPG',
        tag:    'C • CLI',
        img:    'Images/Text-RPG.png',
        github: 'https://github.com/Romantll/Text-RPG',
        desc:   'A command-line RPG written in C with turn-based combat, inventory management, and a branching story.',
      },
      {
        title:  "The Dragon's Crystal",
        tag:    'Android • Java',
        img:    'Images/TheDragonsCrystal.webp',
        github: 'https://github.com/Romantll/TheDragonsCrystal',
        desc:   'An Android RPG adventure game built in Java featuring turn-based combat and exploration.',
      },
    ],
  },
];

// ── SVG icons ─────────────────────────────────────────────────────────────────
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
const ICON_WEB   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5zM10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/></svg>`;

// ── Card template ─────────────────────────────────────────────────────────────
function cardHTML(p) {
  const githubBtn = p.github
    ? `<a class="proj-link" href="${p.github}" target="_blank" rel="noopener noreferrer" title="View on GitHub" onclick="event.stopPropagation()">${ICON_GITHUB}</a>`
    : '';
  const websiteBtn = p.website
    ? `<a class="proj-link proj-link--web" href="${p.website}" target="_blank" rel="noopener noreferrer" title="Visit website" onclick="event.stopPropagation()">${ICON_WEB}</a>`
    : '';

  return `
    <div class="proj-card" data-title="${p.title}">
      <div class="proj-img-wrap"
           onclick="openLightbox('${p.img}', '${p.title}')"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox('${p.img}','${p.title}')}"
           role="button" tabindex="0" aria-label="Enlarge ${p.title} screenshot">
        <img class="proj-img"
             src="${p.img}"
             alt="Screenshot of ${p.title}"
             loading="lazy"
             decoding="async"
             onerror="this.closest('.proj-img-wrap').classList.add('img-error');this.closest('.proj-card').setAttribute('data-title','${p.title}')" />
        <div class="proj-hover-overlay">
          <p class="proj-desc">${p.desc}</p>
        </div>
        <div class="proj-zoom-hint">⤢ enlarge</div>
      </div>
      <div class="proj-label">
        <div class="proj-label-info">
          <span class="proj-title">${p.title}</span>
          <span class="proj-tag">${p.tag}</span>
        </div>
        <div class="proj-links">
          ${p.closedSource ? `<span class="proj-closed" title="Closed source">⊘ closed source</span>` : ''}
          ${githubBtn}${websiteBtn}
        </div>
      </div>
    </div>
  `;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function openLightbox(src, title) {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src       = src;
  img.alt       = title;
  cap.textContent = title;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── Render categorized project sections ───────────────────────────────────────
function renderProjects() {
  const container = document.getElementById('proj-grid');

  container.innerHTML = CATEGORIES.map(cat => `
    <div class="proj-category proj-category--${cat.variant}">
      <h3 class="proj-category-label">${cat.label}</h3>
      <div class="proj-grid${cat.featured ? ' proj-grid--featured' : ''}">
        ${cat.projects.map(cardHTML).join('')}
      </div>
    </div>
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
