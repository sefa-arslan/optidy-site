// Progressive enhancement: this is an explanation, never a conversion or scan.
const steps = [...document.querySelectorAll('.workflow-step')];
steps.forEach((step, index) => {
  const title = step.querySelector('h3');
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.step = String(index);
  button.setAttribute('aria-pressed', String(index === 0));
  button.textContent = title.textContent;
  title.replaceChildren(button);
  button.addEventListener('click', () => {
    steps.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
      item.querySelector('button').setAttribute('aria-pressed', String(i === index));
    });
  });
});
if (steps.length) steps[0].classList.add('is-active');
