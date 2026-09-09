/* Offline-friendly viewer: no uploads, fetch calls or remote image requests. */
const documents = window.courseMarkdown;
const picker = document.querySelector('#reader-select');
const content = document.querySelector('#reader-content');
const status = document.querySelector('#reader-status');
const renderer = window.markdownit({html: false, linkify: true});
renderer.renderer.rules.image = (tokens, index) => '[Image: ' + renderer.utils.escapeHtml(tokens[index].content || 'not loaded') + ']';
let current = 'README.md';
for (const name of Object.keys(documents).sort()) {
  picker.add(new Option(name, name));
}
function render(source, name) {
  current = name;
  content.innerHTML = renderer.render(source);
  document.querySelector('#reader-source').textContent = source;
  status.textContent = name;
  picker.value = Object.hasOwn(documents, name) ? name : '';
  const ids = new Set();
  for (const heading of content.querySelectorAll('h1,h2,h3,h4,h5,h6')) {
    const base = heading.textContent.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s+/g, '-') || 'section';
    let id = base, suffix = 1;
    while (ids.has(id)) id = base + '-' + suffix++;
    ids.add(id); heading.id = id;
  }
  for (const link of content.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      link.addEventListener('click', event => {
        event.preventDefault();
        try { document.getElementById(decodeURIComponent(href.slice(1)))?.scrollIntoView(); } catch {}
      });
      continue;
    }
    if (/^https?:/i.test(href)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else if (!/^[a-z][a-z0-9+.-]*:/i.test(href) && !href.startsWith('//')) {
      const url = new URL(href, 'https://reader.invalid/' + name);
      const file = decodeURIComponent(url.pathname.slice(1));
      if (Object.hasOwn(documents, file)) {
        link.href = '#' + encodeURIComponent(file) + url.hash;
        link.addEventListener('click', event => {
          event.preventDefault();
          location.hash = encodeURIComponent(file) + url.hash;
          navigate();
        });
      } else if (!href.startsWith('#')) {
        // Relative assets from a course file resolve from the site root.
        link.href = url.pathname.slice(1) + url.search + url.hash;
      }
    }
  }
}
function navigate() {
  try {
    const [encoded, ...anchor] = location.hash.slice(1).split('#');
    const name = decodeURIComponent(encoded || 'README.md');
    if (!Object.hasOwn(documents, name)) { status.textContent = 'Course document not found. Choose a document or open a local file.'; return; }
    render(documents[name], name);
    if (anchor.length) document.getElementById(decodeURIComponent(anchor.join('#')))?.scrollIntoView();
  } catch { status.textContent = 'Invalid document link. Choose a course document below.'; }
}
picker.addEventListener('change', () => { location.hash = encodeURIComponent(picker.value); });
window.addEventListener('hashchange', navigate);
document.querySelector('#reader-file').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { status.textContent = 'Please choose a file smaller than 2 MB.'; return; }
  try { render(await file.text(), file.name); }
  catch { status.textContent = 'Could not read that file. Please try again.'; }
});
document.querySelector('#reader-print').addEventListener('click', () => window.print());
navigate();
