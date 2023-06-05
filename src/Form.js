import React, { useState } from 'react'
import Data from './data/Persons.json'

const Form = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')

  // const handleSave = () => {
  //   const newData = {
  //     name: name,
  //     surname: surname,
  //     email: email,
  //   }

  //   // var jsonString = JSON.stringify(newData)
  //   // var fileWriter = new FileWriter('./data/Persons.json')
  //   // fileWriter.write(jsonString)
  //   // fileWriter.close()

  //   var jsonString = JSON.stringify(newData)
  //   var blob = new Blob([jsonString], { type: 'application/json' })

  //   var downloadLink = document.createElement('a')
  //   downloadLink.href = URL.createObjectURL(blob)
  //   downloadLink.download = 'data.json'

  //   downloadLink.click()
  // }
  const handleSave = () => {
    const newData = {
      name: name,
      surname: surname,
      email: email,
    }

    // JSON dosyasını güncelleme isteği gönder
    fetch('./data/Persons.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((response) => {
        if (response.ok) {
          // Güncelleme başarılıysa dosyayı indir
          return fetch('./data/Persons.json')
        } else {
          throw new Error('Data update failed')
        }
      })
      .then((response) => response.blob())
      .then((blob) => {
        // Blob'u indir
        const downloadLink = document.createElement('a')
        downloadLink.href = URL.createObjectURL(blob)
        downloadLink.download = 'data.json'
        downloadLink.click()
      })
      .catch((error) => {
        console.error('Error updating data', error)
        // Hata durumunda gerekirse hata yönetimi yapabilirsiniz
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
