import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let searchInput = document.querySelectorAll('input')[0]
let filterInput = document.querySelectorAll('input')[1]
let items = document.querySelectorAll('.list-group-item')

filterInput.addEventListener('input', () => {
  items.forEach(item => {
    if (item.innerHTML.toLowerCase().includes(filterInput.value.toLowerCase())){
      item.classList.remove('d-none')
    }else {
      item.classList.add('d-none')
    }
  })
})