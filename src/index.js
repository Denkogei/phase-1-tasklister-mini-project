document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTodo(e.target["new-task-description"].value)
    const priority = e.target["priority"].value;
    form.reset()
  })
})

function createTodo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = ` ${todo}  `
  btn.textContent = ' X'
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
