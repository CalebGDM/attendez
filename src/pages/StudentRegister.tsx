
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Student() {
    const {classId} = useParams()
    const [registered, setRegistered] = useState<boolean>(false)
  return (
    <div>
        <div>id de clase: {classId}</div>
        {
            registered ? <div>Registrado</div>  : <div> <input type="text"/>
        <button type="submit" onClick={() => setRegistered}>Enviar</button></div>

        }
       
    </div>
  )
}

export default Student