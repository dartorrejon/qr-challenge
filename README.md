# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

#### Desktop View

![Desktop View](./images/Frontend%20Mentor%20QR%20code%20component-desktop.png)

#### Movile View
![Movile View](./images/Frontend%20Mentor%20QR%20code%20component-movile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Frontend Mentor | QR code component](https://dartorrejon.github.io/qr-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript


### What I learned

I put into practice what I learned about Grid and Flexbox, to be able to effectively center the qr card, I also implemented a resolution viewer with vanilla js to be able to see what resolution it worked at the time of making the styles.  It's a simple yet challenging task for someone starting out in the web design space.

I add some code snippets down below:

```html
 <article class="qr-container">
      <div class="qr-img-container">
        <img class="qr-img" src="./images/image-qr-code.png" alt="qr code">
      </div>
      <h4 class="qr-title">
        Improve your front-end <br>skills by building projects
      </h4>
      <p class="qr-text">
        Scan the QR code to visit Frontend<br> Mentor and take your coding skills to<br> the next level
      </p>
    </article>
```
```css
.qr-container{
    background-color: var(--bg-wite);
    display: flex;
    row-gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 450px;
    min-width: 320px;
    min-height: 480px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    padding: 10px 10px;
    padding-bottom: 25px;
}
```
```js
const $resolution = document.querySelector('.resolucion');

window.addEventListener('resize', ev => {
    const ancho = window.innerWidth
    const alto = window.innerHeight
    $resolution.textContent = `${ancho} x ${alto}`
})

```


### Continued development

I would like to continue to advance and refine my work with css. Especially with animations and transitions, which is what I saw the least so far. I'd also like to practice css nesting more, which is a relatively new thing.


### Useful resources

- [GitHub Pages](https://www.github.com) - I liked this resource to make the deployment of the website. It's simple to use and very fast.

- [MDN Web Docs](https://developer.mozilla.org/es/) - This page really is every frontend programmer's bible. And without a doubt a great help for the first steps. I do not hesitate to continue consulting information from this in the future.



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
