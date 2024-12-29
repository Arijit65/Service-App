import {React,useEffect, useState} from 'react'
import axios from 'axios'

const ServiceList = () => {
  const [data,setData]=useState([]);
  const getData = async ()=>{
   const response = await axios.get('http://localhost:4000/services')
   const services =  response.data.map(service=>({
      serName:service.serName,
      description:service.description
    }))
   setData(services)
  }

  useEffect(() => { 
    getData(); 
  }, []);

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-200 text-gray-600">
        <tr>
          <th className="py-2 px-4 text-left">Name</th>
          <th className="py-2 px-4 text-left">Description</th>
          <th className="py-2 px-4 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{item.serName}</td>
            <td className="py-2 px-4">{item.description}</td>
            <td className="py-2 px-4 text-center">
              <button
                //onClick={() => onEdit(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1"
              >
                Edit
              </button>
              <button
                //onClick={() => onDelete(item)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-1"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default ServiceList;





//import React from 'react';

// const TableComponent = ({ data, onEdit, onDelete }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white">
//         <thead className="bg-gray-200 text-gray-600">
//           <tr>
//             <th className="py-2 px-4 text-left">Name</th>
//             <th className="py-2 px-4 text-left">Description</th>
//             <th className="py-2 px-4 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-2 px-4">{item.name}</td>
//               <td className="py-2 px-4">{item.description}</td>
//               <td className="py-2 px-4 text-center">
//                 <button
//                   onClick={() => onEdit(item)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(item)}
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-1"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;
