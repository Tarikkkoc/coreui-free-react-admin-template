import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')

  const handleSave = () => {
    const newData = {
      name: name,
      surname: surname,
      email: email,
    }

    fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Veri kaydetme işlemi başarılı')
        } else {
          console.log('Veri kaydetme işlemi başarısız')
        }
      })
      .catch((error) => {
        console.error('Veri kaydedilirken bir hata oluştu', error)
      })
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="surname" className="block mb-1">
          Surname:
        </label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  )
}

export default Form
