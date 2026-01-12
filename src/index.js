export default {
  async fetch(request) {
    // Color palettes: gradient, text, title, subtitle, themeColor
    const palettes = [
      {
        name: 'Midnight Glow Party',
        gradient: 'linear-gradient(135deg, #0D0106 0%, #3626A7 30%, #657ED4 60%, #FF331F 100%)',
        text: '#FBFBFF',
        title: '#FBFBFF',
        subtitle: '#1D2951',
        theme: '#0D0106'
      },
      {
        name: 'Sunset Blaze',
        gradient: 'linear-gradient(135deg, #390099 0%, #9E0059 25%, #FF0054 50%, #FF5400 75%, #FFBD00 100%)',
        text: '#FFE4A0',
        title: '#FFD580',
        subtitle: '#FF8A5B',
        theme: '#9E0059'
      },
      {
        name: 'Ocean Depths',
        gradient: 'linear-gradient(135deg, #0A1628 0%, #1A365D 30%, #2C5282 60%, #38B2AC 100%)',
        text: '#E6FFFA',
        title: '#E6FFFA',
        subtitle: '#81E6D9',
        theme: '#0A1628'
      },
      {
        name: 'Aurora Borealis',
        gradient: 'linear-gradient(135deg, #0F0F1A 0%, #1E3A5F 25%, #2E8B8B 50%, #7B68EE 75%, #FF69B4 100%)',
        text: '#F0F8FF',
        title: '#E0FFFF',
        subtitle: '#B0E0E6',
        theme: '#0F0F1A'
      }
    ];

    // Check for palette query param (?p=1-4), otherwise random
    const url = new URL(request.url);
    const paletteParam = url.searchParams.get('p');
    const paletteIndex = paletteParam ? parseInt(paletteParam) - 1 : Math.floor(Math.random() * palettes.length);
    const palette = palettes[Math.max(0, Math.min(paletteIndex, palettes.length - 1))];

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zain:wght@400;700&display=swap" rel="stylesheet">
    <meta name="theme-color" content="${palette.theme}" />
    <meta name="description" content="Topher Ayrhart - DevOps Engineer building scalable infrastructure, exploring AI-augmented development, and creating." />
    <title>Topher Ayrhart</title>
    <style>
/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --text-color: ${palette.text};
  --text-title-color: ${palette.title};
  --subtitle-color: ${palette.subtitle};
}

html {
  font-size: 18px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Zain', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background: ${palette.gradient};
  background-size: 200% 200%;
  background-attachment: fixed;
  animation: gradientFlow 20s ease infinite;
  overflow-x: hidden;
  font-weight: 400;
  position: relative;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Container */
.container {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
}

.hero-content {
  animation: fadeIn 1.4s ease-out;
  max-width: 800px;
}

.hero-name {
  font-family: 'Zain', sans-serif;
  font-size: clamp(3.5rem, 15vw, 9rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.95;
  margin-bottom: 2rem;
  color: var(--text-title-color);
}

.hero-subtitle {
  font-family: 'Zain', sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 400;
  color: var(--subtitle-color);
  letter-spacing: -0.01em;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* About Section */
.about {
  padding: 4rem 0 8rem;
  position: relative;
  z-index: 1;
}

.about p {
  font-size: clamp(1.0625rem, 2.2vw, 1.25rem);
  line-height: 1.75;
  color: var(--text-color);
  margin-bottom: 1.75rem;
  font-weight: 400;
}

.about p:last-child {
  margin-bottom: 0;
}

.about a {
  color: var(--text-color);
  text-decoration: underline;
  text-decoration-color: var(--subtitle-color);
  text-underline-offset: 0.15em;
  transition: all 0.3s ease;
}

.about a:hover {
  color: var(--subtitle-color);
}

/* Contact Section */
.contact {
  padding: 6rem 0 8rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.contact-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.contact-link {
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.contact-link span {
  display: none;
}

.contact-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.contact-link:hover {
  color: var(--subtitle-color);
  transform: translateY(-2px);
}

.contact-location {
  color: var(--subtitle-color);
  font-size: 1rem;
  font-weight: 400;
}

/* Selection */
::selection {
  background-color: rgba(0, 0, 0, 0.18);
  color: #0a0a0a;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .about {
    padding: 3rem 0 6rem;
  }

  .contact {
    padding: 4rem 0 6rem;
  }

  .contact-links {
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 17px;
  }

  .container {
    padding: 0 1.5rem;
  }

  .hero {
    padding: 2.5rem 1.5rem;
  }

  .hero-name {
    margin-bottom: 1.5rem;
  }

  .about {
    padding: 2.5rem 0 5rem;
  }

  .contact {
    padding: 3.5rem 0 5rem;
  }
}
    </style>
  </head>

  <body>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-name">Topher Ayrhart</h1>
        <p class="hero-subtitle">DevOps Engineer exploring AI-augmented engineering.</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <p>I build scalable cloud infrastructure at <a href="https://www.outsideonline.com" target="_blank" rel="noopener noreferrer">Outside</a>. I specialize in AWS, Terraform, and container orchestration—making systems that are fault-tolerant and automated.</p>
        <p>I'm exploring how AI changes the way we build software. Pair programming with Claude, vibecoding, thinking differently about what's possible.</p>
        <p>Trained as an architect, spent a decade in the field, then pivoted to photography before finding my way to DevOps. Still creating. I believe the best engineering comes from staying curious and thinking outside the box.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <div class="contact-links">
          <a href="mailto:topher@ayrhart.net" class="contact-link">
            <svg class="contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 6.25L10 11.25L17.5 6.25M3.75 15H16.25C17.2165 15 18 14.2165 18 13.25V6.75C18 5.7835 17.2165 5 16.25 5H3.75C2.7835 5 2 5.7835 2 6.75V13.25C2 14.2165 2.7835 15 3.75 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/topherayrhart" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg class="contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.25 2.5H3.75C3.0596 2.5 2.5 3.0596 2.5 3.75V16.25C2.5 16.9404 3.0596 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.0596 16.9404 2.5 16.25 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 8.75V13.75M7.5 6.25V6.2625M12.5 13.75V10.625C12.5 10.2935 12.3683 9.97554 12.1339 9.74112C11.8995 9.5067 11.5815 9.375 11.25 9.375C10.9185 9.375 10.6005 9.5067 10.3661 9.74112C10.1317 9.97554 10 10.2935 10 10.625V13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/lasthalf" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg class="contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15.8333C3.75 17.0833 3.75 14.1666 2.5 13.75M12.5 17.5V14.5916C12.5297 14.2089 12.4792 13.8241 12.3517 13.4622C12.2242 13.1002 12.0224 12.769 11.7583 12.4916C13.9167 12.2416 16.1667 11.3916 16.1667 7.65831C16.1665 6.70062 15.8044 5.77886 15.15 5.07498C15.4574 4.21826 15.4348 3.27627 15.0867 2.43498C15.0867 2.43498 14.2583 2.18498 12.5 3.35831C11.0356 2.96203 9.48108 2.96203 8.01667 3.35831C6.25833 2.18498 5.43 2.43498 5.43 2.43498C5.08188 3.27627 5.05929 4.21826 5.36667 5.07498C4.71042 5.78078 4.34823 6.70578 4.35 7.66665C4.35 11.3833 6.6 12.2333 8.75833 12.5166C8.49672 12.7917 8.29674 13.1198 8.16993 13.4785C8.04312 13.8372 7.99225 14.2187 8.02083 14.5983V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
        <p class="contact-location">Austin, TX</p>
      </div>
    </section>
    <script>
      document.addEventListener('keydown', e => {
        if (e.key >= '1' && e.key <= '4') {
          window.location.href = '?p=' + e.key;
        }
      });
    </script>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
};
