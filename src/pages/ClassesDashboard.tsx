
import { useState } from 'react'
import clases from '../data/clases'
import QRCode from 'react-qr-code'
import { ClassType } from '../types'


function Class() {

  const [currentClassID, setCurrentClassID] = useState<string>(clases[0].id)
  const [currentClass, setCurrentClass] = useState<ClassType | undefined>(clases[0])
  const [active, setActive] = useState<boolean>(false)

  const handleCurrentClass = (id: string) => {
    setCurrentClassID(id) 
    setCurrentClass(clases.find(currCalss => currCalss.id == currentClassID))
  }
  return (
    <div>
    <h1>Clases</h1>
    <button>Crear clase</button>
    <div>
      <div>
      {
        clases.map(classItem => (<button onClick={() => handleCurrentClass(classItem.id)}>{classItem.name}</button>))
      }
      </div>
      <div>
        <h3>{}</h3>
        <div>
          <button onClick={() => setActive(!active)}>QR</button>
          <div className={active ? 'qrActive' : 'qr'}>
            <QRCode value={`https://main.d3q6e59e6emvz.amplifyapp.com/student/${currentClass ? currentClass.id : '0000'}`}/>
          </div>
         
        </div>

      </div>
    </div>
    </div>
  )
}

export default Class