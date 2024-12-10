import React, { useState } from 'react'
import clases from '../data/clases'

function Class() {

  const [currentClass, setCurrentClass] = useState<string>(clases[0].id)
  return (
    <div>
    <h1>Clases</h1>
    <button>Crear clase</button>
    <div>
      <div>
      {
        clases.map(classItem => (<button onClick={() => setCurrentClass(classItem.id)}>{classItem.name}</button>))
      }
      </div>
      <div>
        <h3>{clases.find(currCalss => currCalss.id == currentClass)?.name}</h3>
        <div>
          <button>QR</button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Class