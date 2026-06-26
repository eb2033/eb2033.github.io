# Terminal Portfolio

A modern portfolio website with terminal-inspired aesthetics built with vanilla JavaScript and GSAP.

## Features

- 🖥️ Terminal-inspired design with monospace font and neon green styling
- ✨ Smooth animations powered by GSAP and CSS
- 🎨 Modern glassmorphism cards and effects
- 📱 Fully responsive design
- ⚡ Lightweight vanilla JavaScript (no heavy frameworks)
- 🔗 Easy to customize and deploy

## File Structure

```
eb2033.github.io/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and animations
├── js/
│   └── main.js         # Animation and interaction logic
├── assets/             # Images, projects, etc. (optional)
└── README.md           # This file
```

## Quick Start

1. Clone or fork this repository
2. Edit `index.html` to add your content
3. Customize colors in `css/style.css` (look for `:root` variables)
4. Update links and social media in the relevant sections
5. Push to GitHub and enable GitHub Pages in settings

## Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary: #00ff00;        /* Main terminal green */
    --accent: #ffff00;         /* Yellow accent */
    --bg: #0a0e27;             /* Dark background */
    --text: #00ff00;           /* Text color */
}
```

### Adding Projects

Edit the project cards in `index.html`:

```html
<div class="project-card">
    <div class="card-header">
        <span class="prompt">$</span> my-project
    </div>
    <div class="card-content">
        <p>Project description here</p>
        <div class="card-meta">
            <span class="tag">Technology</span>
        </div>
    </div>
</div>
```

### Adding Blog Posts

Edit the blog section in `index.html`:

```html
<article class="blog-card">
    <div class="blog-header">
        <h3><span class="prompt">$</span> blog-post-title</h3>
        <span class="date">YYYY-MM-DD</span>
    </div>
    <p>Post description here...</p>
    <a href="#" class="read-more">read more →</a>
</article>
```

### Adding Social Links

Edit the socials section in `index.html`:

```html
<a href="https://github.com/yourname" class="social-card">
    <span class="prompt">$</span> github
</a>
```

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- GSAP 3 (for advanced animations)

## Animations

- **Fade-in on scroll**: Cards animate in as they become visible
- **Hover effects**: Cards lift up and glow on hover
- **Typing animation**: Hero text types out on page load
- **Blinking cursor**: Terminal-style cursor in header

## Deployment

### GitHub Pages (Free)

1. Create a repository named `username.github.io`
2. Push your code to the main branch
3. Visit `https://username.github.io`

### Custom Domain

1. Create a `CNAME` file with your domain
2. Configure DNS records pointing to GitHub Pages
3. Enable custom domain in repository settings

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT - Feel free to use this as a template!

## Tips

- Use `<span class="prompt">$</span>` to add the terminal prompt symbol
- Use `<span class="cursor"></span>` for the blinking cursor
- Add `class="tag"` to create tech stack badges
- The site uses a sticky navigation - customize it in `navbar` CSS

Happy coding! 🎉