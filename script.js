const scriptURL = 'https://script.google.com/macros/s/AKfycbxdBZ1BiCgbaNDUV1hUBSBsmqr3-Bh8iS7q4CYrQn7mLGRFoGAQaM_fI2eJh6rEaESw/exec'


const form = document.forms['lpForm']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
