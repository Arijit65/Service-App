import {React,useState} from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';

const AddService = () => {
  const [image, setImage] = useState(null)
  const [serName, setSerName] = useState('')
  const [description, setDescription] = useState('')


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!image){
        throw new Error('Please select an image.')
      }
      const formData = new FormData()
      formData.append('image', image)
      formData.append('serName', serName)
      formData.append('description', description)

      const response = await axios.post('http://localhost:4000/add-service', formData, { headers: { 'Content-Type': 'multipart/form-data'}})
      console.log(response.data)
      setImage(null)
      setSerName('')
      setDescription('')
    
      
    } catch (error) {
      console.log(error)
    }
  }






  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">ADD SERVICE</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
          <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="image">
            <img  className='w-16 bg-gray-100 rounded-md cursor-pointer' src={ image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden />
          <p>Upload service <br /> image</p>
        </div>
            <label className=" mt-4 block text-gray-700 text-sm font-bold mb-2">
              Service name
            </label>
            <input
              type="text"
              id="sername"
              value={serName}
              onChange={(e) => setSerName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Service Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Give your service description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
              ADD SERVICE
            </button>
          </div>



        </form>
      </div>
    </div>
  )
}

export default AddService;