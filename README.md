# eb2033.github.io

Personal portfolio site of Georgy Bodrov, hosted on GitHub Pages. It is a single static page built with plain HTML, CSS and JavaScript, styled as a terminal with a GitHub-like dark grey and light blue theme.

## Page sections

- **Navbar**: a sticky bar with the name, a blinking cursor and links to each section.
- **Home**: a `$ whoami` header that types itself out on load, followed by a subtitle and a short introduction.
- **About**: three cards covering background, skills and technologies, and security philosophy.
- **Projects**: a grid of cards, one per GitHub repository, each with a description and tech tags. Each card links to its repo.
- **Connect**: links to GitHub, LinkedIn and email.
- **Footer**: a one-line `echo` sign-off.
- **Background**: a looping, muted voice-wave video behind the page.

## Files

```
index.html       Page content and structure
css/style.css    Theme colours (:root variables), layout, card styles and animations
js/main.js       Fade-in on scroll, the whoami typing effect and smooth anchor scrolling
assets/          Background voice-wave video (webm, mp4) and a GIF version
```
