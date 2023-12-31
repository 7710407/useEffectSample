import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [id, setId] = useState("")
  const [data, setData] = useState()
  useEffect(() => {
    if (id.length === 2) {
      const handle = setTimeout(() => { 
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(stream => stream.json())
        .then(results => { 
          setData(results)
        })
      }, 2000)

      return () => { 
        clearTimeout(handle)
      }
    }
  }, [id])

  let title = ""
  let todoId = ""
  if (data !== undefined) {
    title = data.title
    todoId = data.id
  }

  return (
    <div className="App">
      <h1>{id}</h1>
      <input
        type='text'
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      />

      <h1>
        ## {todoId}  {title} ##
      </h1>
    </div>
  );
}

export default App;
