import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let searchInput = document.querySelectorAll('input')[0]
let filterInput = document.querySelectorAll('input')[1]
let items = document.querySelectorAll('.list-group-item')

filterInput.addEventListener('input', () => {
  items.forEach(item => {
    if (item.innerText.toLowerCase().includes(filterInput.value.toLowerCase())){
      item.classList.remove('d-none')
    }else {
      item.classList.add('d-none')
    }
  })
})

searchInput.addEventListener('click', () => {
  console.log('123')
}

function serachInJSON() {
  fetch('./Digital_Archive_Do_569.json')
  .then((response) =>{
    return response.json()
  })
  .then((objects) =>{
    objects.forEach(object => {
      console.log(object.filename)
    })
  })
}
