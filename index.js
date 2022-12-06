import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let searchInput = document.querySelectorAll('input')[0]
let filterInput = document.querySelectorAll('input')[1]
let btnSearch = document.querySelectorAll('.btn')[0]
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

btnSearch.addEventListener('click', () => {
  searchInJSON()
})

function searchInJSON() {
  fetch('Digital_Archive_Do_569.json')
  .then((response) =>{
    return response.json()
  })
  .then((objects) =>{
    objects.forEach(object => {
      if (object.filename.toString().toUpperCase().includes(`${searchInput.value.toUpperCase()}`)){
        console.log(object.filename)
      }else {
        console.log('Y')
      }
    })
  })
}