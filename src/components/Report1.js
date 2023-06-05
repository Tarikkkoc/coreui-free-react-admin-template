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
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((a) => {
        setData(a)
        // console.log(data)
      })
  }, [])

  if (Object.keys(data).length === 0 || !data.products) {
    return <div>Please wait.</div>
  }
  return (
    <div className="bg-white shadow-md rounded p-4">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-600 w-1/3">Id</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Title</th>
              <th className="p-3 text-left text-gray-600 w-1/3">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.products.map((p) => (
              <tr key={p.id} className="bg-blue-50">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.price} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Report1
