import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const Report1 = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((a) => {
        setData(a)
        // console.log(data)
      })
  }, [])
  const getData = () => {
    console.log(data)
  }
  if (Object.keys(data).length === 0) {
    return <div>Please wait.</div>
  }
  return (
    <div className="bg-white shadow-md rounded p-4">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-600 w-1/3">Id</th>
              <th className="p-3 text-left text-gray-600 w-1/3">First Name</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Last Name</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Age</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Height</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Birthday</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Phone</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.users.map((p) => (
              <tr key={p.id} className="bg-blue-50">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.firstName}</td>
                <td className="p-3">{p.lastName}</td>
                <td className="p-3">{p.age}</td>
                <td className="p-3">{p.height} m</td>
                <td className="p-3">{p.birthDate}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">{p.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Report1
