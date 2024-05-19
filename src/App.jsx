import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [listItems, setListItems] = useState([])
  const [isNewItem, setIsNewItem] = useState(true)

  function handleFormSubmit(e) {
    e.preventDefault()

    if (inputValue.trim() !== "") {
      const newItem = inputValue[0].toUpperCase() + inputValue.slice(1)

      setInputValue("")
      setIsNewItem(true)
      setListItems([
        ...listItems,
        {
          id: crypto.randomUUID(),
          content: newItem
        }
      ])
    } else {
      setInputValue("")
      setIsNewItem(false)
    }
  }

  return (
    <main>
      <h1>React challenge</h1>
      <aside>
        <form
          className={isNewItem ? "" : "warning"}
          onSubmit={handleFormSubmit}
        >
          <label>Enter new item</label>
          <input
            placeholder="New item"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
            }}
          />
          <p>
            {isNewItem ? "" :
              <>
                <strong>Warning:</strong>
                &nbsp;
                You haven't entered an item yet.
              </>
            }
          </p>
          <button>Add</button>
        </form>
      </aside>
      <section>
        <h2>List of items:</h2>
        {listItems.length > 0 ?
          (
            <ul>
              {listItems.map(listItem => {
                return (
                  <li key={listItem.id}>
                    {listItem.content}
                    <button
                      onClick={() => {
                        setListItems(listItems.filter(currentItem => currentItem.id !== listItem.id))
                      }}
                    >
                      Delete
                    </button>
                  </li>
                )
              })}
            </ul>
          )
          :
          (
            <p>
              No items
            </p>
          )
        }
      </section>
    </main>
  )
}

export default App
