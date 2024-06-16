# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

https://www.frontendmentor.io/solutions/contact-form-RnWQQtdNUZ

- Solution URL: [frontendmentor solution](https://www.frontendmentor.io/solutions/contact-form-RnWQQtdNUZ)
- Live Site URL: [github pages](https://coder-abdo.github.io/frontend-mentor-contact-form/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```html
<span class="message-error" role="alert"></span>
<span
  class="terms-checkmark"
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="terms check"
></span>
<span
  class="checkmark"
  role="radio"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="Support Request"
  data-value="Support Request"
></span>
```

```css
.terms input:checked ~ .terms-checkmark {
  background-color: var(--med-green);
}

/* Checkmark indicator */
.terms-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.terms input:checked ~ .terms-checkmark:after {
  display: block;
}

.terms .terms-checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
```

```js
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

### Continued development

1. Accessibility.
2. HTML5 Semantic.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) - This helped me for learn more about how to add an accessibility to span as a radio input. I really liked this pattern and will use it going forward.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role) - This is an amazing article which helped me learn more about how to add an accessibility to span as a checkbox input. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Abdulmonaem](https://abdelmonaem-portfolio.vercel.app/)
- Frontend Mentor - [@coder-abdo](https://www.frontendmentor.io/profile/coder-abdo)
