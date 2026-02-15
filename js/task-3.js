const ref = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', () => {
  const value = ref.input.value.trim();
  if (value !== '') {
    ref.output.textContent = value;
  } else {
    ref.output.textContent = 'Anonymous';
  }
});
