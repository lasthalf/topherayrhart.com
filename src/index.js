export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
    <meta name="theme-color" content="#f5f5f0" />
    <meta name="description" content="Topher Ayrhart - DevOps Engineer building things that build things." />
    <title>Topher Ayrhart</title>
    <style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: 'Instrument Serif', Georgia, serif;
  background: #f5f5f0;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: none;
  pointer-events: none;
  z-index: 0;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 3rem;
}

.statements {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.6;
  font-weight: 400;
}

.statements p {
  margin: 0;
  white-space: nowrap;
}

footer {
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1.25rem;
}

.social-links a {
  color: #1a1a1a;
  transition: opacity 0.2s;
}

.social-links a:hover {
  opacity: 0.6;
}

.social-links svg {
  width: 20px;
  height: 20px;
}

.location {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  color: #1a1a1a;
  letter-spacing: 0.02em;
}

@media (max-width: 900px) and (orientation: portrait) {
  footer {
    padding: 1.25rem 1.5rem;
  }

  main {
    padding: 2rem 1.5rem;
  }

  .statements {
    font-size: 2.5rem;
  }

  .statements p {
    display: inline;
    white-space: normal;
  }

  .statements p::after {
    content: ' ';
  }
}

    </style>
  </head>

  <body>
    <main>
      <div class="statements">
        <p>Topher Ayrhart.</p>
        <p>DevOps engineer building things that build things.</p>
        <p>Makes computers do all the boring stuff.</p>
        <p>Currently vibecoding with AI and enjoying it way too much.</p>
      </div>
    </main>

    <footer>
      <div class="social-links">
        <a href="mailto:topher@ayrhart.net" aria-label="Email">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 6.25L10 11.25L17.5 6.25M3.75 15H16.25C17.2165 15 18 14.2165 18 13.25V6.75C18 5.7835 17.2165 5 16.25 5H3.75C2.7835 5 2 5.7835 2 6.75V13.25C2 14.2165 2.7835 15 3.75 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/topherayrhart" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 2.5H3.75C3.0596 2.5 2.5 3.0596 2.5 3.75V16.25C2.5 16.9404 3.0596 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.0596 16.9404 2.5 16.25 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 8.75V13.75M7.5 6.25V6.2625M12.5 13.75V10.625C12.5 10.2935 12.3683 9.97554 12.1339 9.74112C11.8995 9.5067 11.5815 9.375 11.25 9.375C10.9185 9.375 10.6005 9.5067 10.3661 9.74112C10.1317 9.97554 10 10.2935 10 10.625V13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="https://github.com/lasthalf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15.8333C3.75 17.0833 3.75 14.1666 2.5 13.75M12.5 17.5V14.5916C12.5297 14.2089 12.4792 13.8241 12.3517 13.4622C12.2242 13.1002 12.0224 12.769 11.7583 12.4916C13.9167 12.2416 16.1667 11.3916 16.1667 7.65831C16.1665 6.70062 15.8044 5.77886 15.15 5.07498C15.4574 4.21826 15.4348 3.27627 15.0867 2.43498C15.0867 2.43498 14.2583 2.18498 12.5 3.35831C11.0356 2.96203 9.48108 2.96203 8.01667 3.35831C6.25833 2.18498 5.43 2.43498 5.43 2.43498C5.08188 3.27627 5.05929 4.21826 5.36667 5.07498C4.71042 5.78078 4.34823 6.70578 4.35 7.66665C4.35 11.3833 6.6 12.2333 8.75833 12.5166C8.49672 12.7917 8.29674 13.1198 8.16993 13.4785C8.04312 13.8372 7.99225 14.2187 8.02083 14.5983V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <span class="location">Austin, TX</span>
    </footer>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
};
