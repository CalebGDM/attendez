import React from 'react'
import { useParams } from 'react-router-dom'

function Student() {
    const {classId} = useParams()
  return (
    <div>
        <div>id de clase: {classId}</div>
        <input type="text"/>
        <button type="submit">Enviar</button>
    </div>
  )
}

export default Student