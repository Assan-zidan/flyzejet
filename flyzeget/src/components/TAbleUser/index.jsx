import {useEffect} from 'react'
import Table from 'react-bootstrap/Table'
// import axios from 'axios'

function  TAbleUser() {
    useEffect(() => {
       
     }, [])
  return (
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nom </th>
      <th>Prenom</th>
      <th>Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default TAbleUser