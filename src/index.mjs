import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
// const li = document.createElement('li')
// console.log(li)
// li.id = Math.round(Math.random() * 10 +1)
// li.className = 'list'
// li.innerHTML = 'myList'
// document.querySelector('.list-container').appendChild(li)
// const input = document.createElement('input')
// console.log(input)
// input.type = 'text'
// input.placeholder = 'Enter the text'
// input.id = 'input'
// input.className = 'text-input'
// document.querySelector('.todo-list-input').appendChild(input)

const inputFild = document.querySelector('.todo-input-field')
const addList = document.querySelector('.add-list')
function addToodoList(){
  const newText = inputFild.value
  const li = document.createElement('li')
  // li.id = Math.round(Math.random() * 10 +1)
  // li.appendChild(document.createTextNode(newText))
  // document.querySelector('.list-container').appendChild(li)

  //for adding delete button
  const span = document.createElement('span')
  span.textContent = newText

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'

  deleteButton.addEventListener('click', () => {
    li.remove()
  })

  li.appendChild(span)
  li.appendChild(deleteButton)
  document.querySelector('.list-container').appendChild(li)
}

// addToodoList(newText)

addList.addEventListener('click', addToodoList)


/************************************/
// import "./styles.css";

// const inputFild = document.querySelector('.todo-input-field')
// const addList = document.querySelector('.add-list')
// function addToodoList(){
//   const newText = inputFild.value
//   const li = document.createElement('li')

//    //for adding delete button
//    const span = document.createElement('span')
//    span.textContent = newText
 
//    const deleteButton = document.createElement('button')
//    deleteButton.textContent = 'Delete'
 
//    deleteButton.addEventListener('click', () => {
//      li.remove()
//    })

//    //Edit
//    const editButton = document.createElement('button')
//    editButton.textContent = 'Edite List'

//    editButton.addEventListener('click', () => {
//     const currentInput = document.createElement('li')
//     currentInput.textContent = inputFild.value
    
//     li.replaceWith(currentInput)
//    })
 
//    li.appendChild(span)
//    li.appendChild(deleteButton)
//    li.appendChild(editButton)
//    document.querySelector('.list-container').appendChild(li)

//    inputFild.value = "";
//  }


//  addList.addEventListener('click', addToodoList)

// //  const subInputField = document.createElement('input')
// //  subInputField.placeholder = 'Enter the new text'





