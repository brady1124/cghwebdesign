const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#home" aria-label="CGH Web Design home">
      <span class="brand-mark">CGH</span>
      <span class="brand-copy">
        <strong>CGH Web Design</strong>
        <small>Creative Graphics House</small>
      </span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
      <span></span>
      <span></span>
      <span></span>
      <span class="sr-only">Open navigation</span>
    </button>
    <nav class="site-nav" id="site-nav" data-nav>
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home" data-hero>
      <img class="hero-image" src="public/assets/cgh-web-design-hero.png" alt="CGH Web Design futuristic logo artwork" />
      <div class="hero-orbit" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="eyebrow">Modern websites for brands ready to move</p>
        <h1>Web design with speed, style, and serious polish.</h1>
        <p class="hero-text">CGH Web Design creates responsive websites, brand-forward visuals, and conversion-ready digital experiences for businesses that need to look sharp from the first click.</p>
        <div class="hero-actions">
          <a class="button primary" href="#contact">Start a Project</a>
          <a class="button secondary" href="#services">Explore Services</a>
        </div>
      </div>
      <div class="hero-metrics" aria-label="CGH Web Design highlights">
        <div><strong>01</strong><span>Strategy-led builds</span></div>
        <div><strong>100%</strong><span>Mobile responsive</span></div>
        <div><strong>Fast</strong><span>Vercel-ready delivery</span></div>
      </div>
    </section>

    <section class="section intro">
      <div class="section-copy">
        <p class="eyebrow">Built for first impressions</p>
        <h2>Your website should feel as capable as your business.</h2>
      </div>
      <p>We pair clear messaging with crisp layouts, strong visuals, and responsive engineering so visitors know who you are, what you do, and how to take the next step.</p>
    </section>

    <section class="section services" id="services">
      <div class="section-copy centered">
        <p class="eyebrow">Services</p>
        <h2>Everything needed to launch sharper.</h2>
      </div>
      <div class="card-grid">
        <article class="service-card"><span class="card-index">01</span><h3>New Website Builds</h3><p>Custom sites designed from the ground up for credibility, clarity, and momentum.</p></article>
        <article class="service-card"><span class="card-index">02</span><h3>Website Updates</h3><p>Refresh copy, sections, visuals, navigation, and calls-to-action without losing your brand foundation.</p></article>
        <article class="service-card"><span class="card-index">03</span><h3>Redesigns</h3><p>Modernize dated sites with sharper structure, responsive layouts, and stronger conversion paths.</p></article>
        <article class="service-card"><span class="card-index">04</span><h3>Performance & SEO</h3><p>Improve speed, technical quality, and search-friendly foundations so your site works harder.</p></article>
      </div>
    </section>

    <section class="section process" id="process">
      <div class="section-copy">
        <p class="eyebrow">Process</p>
        <h2>A focused path from idea to launch.</h2>
      </div>
      <div class="timeline">
        <article><span>Discover</span><h3>Define the goal</h3><p>We clarify audience, services, content needs, and the action each page should drive.</p></article>
        <article><span>Design</span><h3>Shape the experience</h3><p>We craft a visual system that feels premium, readable, and unmistakably yours.</p></article>
        <article><span>Build</span><h3>Engineer for every screen</h3><p>We assemble responsive sections with smooth interactions and clean deployment paths.</p></article>
        <article><span>Launch</span><h3>Ship with confidence</h3><p>We verify the site, polish the details, and prepare it for Vercel deployment.</p></article>
      </div>
    </section>

    <section class="section portfolio" id="portfolio">
      <div class="section-copy centered">
        <p class="eyebrow">Portfolio</p>
        <h2>Recent websites with live previews.</h2>
      </div>
      <div class="portfolio-grid">
        <article class="portfolio-card">
          <a class="portfolio-preview" href="https://www.davidcalderinphotography.com" target="_blank" rel="noreferrer" aria-label="Open David Calderin Photography website">
            <iframe src="https://www.davidcalderinphotography.com" title="David Calderin Photography website preview" loading="lazy" tabindex="-1"></iframe>
            <span class="preview-fallback">davidcalderinphotography.com</span>
          </a>
          <div class="portfolio-copy">
            <span>Photography Website</span>
            <h3>David Calderin Photography</h3>
            <p>A visual-first photography site built to showcase portfolio work with immediate impact.</p>
            <a class="text-link" href="https://www.davidcalderinphotography.com" target="_blank" rel="noreferrer">Visit Website</a>
          </div>
        </article>
        <article class="portfolio-card">
          <a class="portfolio-preview" href="https://offdutys.vercel.app" target="_blank" rel="noreferrer" aria-label="Open Off Dutys website">
            <iframe src="https://offdutys.vercel.app" title="Off Dutys website preview" loading="lazy" tabindex="-1"></iframe>
            <span class="preview-fallback">offdutys.vercel.app</span>
          </a>
          <div class="portfolio-copy">
            <span>Vercel Web App</span>
            <h3>Off Dutys</h3>
            <p>A modern deployed web experience with fast hosting and clean interaction paths.</p>
            <a class="text-link" href="https://offdutys.vercel.app" target="_blank" rel="noreferrer">Visit Website</a>
          </div>
        </article>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="contact-panel">
        <div class="contact-copy">
          <p class="eyebrow">Contact</p>
          <h2>Tell us what you want to build.</h2>
          <p>Choose the reason for your inquiry and share a few details. CGH Web Design will use that context to start the right conversation.</p>
          <div class="contact-note"><strong>Web3Forms ready</strong><span>Add your access key to the environment file before production submissions go live.</span></div>
        </div>
        <form class="contact-form" action="https://api.web3forms.com/submit" method="POST" data-contact-form>
          <input type="hidden" name="access_key" value="" />
          <input type="hidden" name="subject" value="New CGH Web Design inquiry" />
          <input type="checkbox" name="botcheck" class="botcheck" tabindex="-1" autocomplete="off" />
          <label>Name<input name="name" type="text" autocomplete="name" required /></label>
          <label>Email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Phone<input name="phone" type="tel" autocomplete="tel" /></label>
          <label>Company<input name="company" type="text" autocomplete="organization" /></label>
          <label>Inquiry Type<select name="inquiry_type" required><option value="">Select one</option><option>Build New Website</option><option>Update Existing Website</option><option>Website Redesign</option><option>SEO / Performance Help</option><option>E-commerce Website</option><option>Branding / Graphics</option><option>Ongoing Maintenance</option></select></label>
          <label>Budget Range<select name="budget_range" required><option value="">Select one</option><option>Under $1,500</option><option>$1,500 - $3,500</option><option>$3,500 - $7,500</option><option>$7,500+</option><option>Not sure yet</option></select></label>
          <label>Timeline<select name="timeline" required><option value="">Select one</option><option>ASAP</option><option>2 - 4 weeks</option><option>1 - 2 months</option><option>Flexible</option></select></label>
          <label class="full">Message<textarea name="message" rows="5" required></textarea></label>
          <button class="button primary full submit-button" type="submit">Send Inquiry</button>
          <p class="form-status" role="status" aria-live="polite" data-form-status></p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <span>CGH Web Design</span>
    <span>Creative Graphics House</span>
    <a href="#home">Back to top</a>
  </footer>
`;

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const hero = document.querySelector('[data-hero]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && hero) {
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    hero.style.setProperty('--pointer-x', `${x}%`);
    hero.style.setProperty('--pointer-y', `${y}%`);
    hero.style.setProperty('--tilt-x', `${(y - 50) * -0.035}deg`);
    hero.style.setProperty('--tilt-y', `${(x - 50) * 0.035}deg`);
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--pointer-x', '50%');
    hero.style.setProperty('--pointer-y', '46%');
    hero.style.setProperty('--tilt-x', '0deg');
    hero.style.setProperty('--tilt-y', '0deg');
  });
}

const contactForm = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Add your Web3Forms access key before sending live inquiries.';
  formStatus.classList.add('is-visible');
});
