const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let checkedItems = 0

function newTodo() {
  itemCount++
  const newItem = document.createElement('li')
  let itemId = `item-ID-${itemCount}`
  let checkId = `check-ID-${itemCount}`
  newItem.className = classNames.TODO_ITEM
  newItem.id = `${itemId}`

  
  const newItemCheckBox = document.createElement('input')
  newItemCheckBox.type = 'checkbox'
  newItemCheckBox.value = 'newTodo'
  newItemCheckBox.name = `${checkId}`
  newItemCheckBox.id = `${checkId}`
  newItemCheckBox.className = classNames.TODO_CHECKBOX
  newItemCheckBox.onclick = () => handleCheckClick(checkId)

  const newItemLabel = document.createElement('label')
  newItemLabel.name = `${checkId}`
  newItemLabel.innerHTML = `TODO item ${itemCount}`

  const deleteItem = document.createElement('div')
  deleteItem.innerHTML = 'x'
  deleteItem.className = classNames.TODO_DELETE
  deleteItem.onclick = () => handleDelete(itemId, checkId)

  newItem.appendChild(newItemCheckBox)
  newItem.appendChild(newItemLabel)
  newItem.appendChild(deleteItem)

  itemCountSpan.innerHTML = itemCount
  let unchecked = itemCount - checkedItems

  uncheckedCountSpan.innerHTML = unchecked
  
  
  list.appendChild(newItem)
}

function handleCheckClick(id) {
  let todoList = document.getElementById('todo-list')
  let children = todoList.childNodes
  let checkedCount = 0
  children.forEach(child => {
    if (child.childNodes[0].checked){
      checkedCount++
    }
  })
  checkedItems = checkedCount
  let unchecked = itemCount - checkedItems

  uncheckedCountSpan.innerHTML = unchecked
}

function handleDelete (listId, checkId) {
  itemCount--
  itemCountSpan.innerHTML = itemCount
  let deletedElement = document.getElementById(listId)
  deletedElement.remove()
  handleCheckClick(checkId)
}
