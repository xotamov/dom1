const checkbox = document.querySelector('#myCheckbox');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    checkbox.style.backgroundColor = 'black';
  } else {
    checkbox.style.backgroundColor = '';
  }
});