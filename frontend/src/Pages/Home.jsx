import React, { useState,useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { assets } from '../assets/assets';
const Home = () => {
    const [cardsData,setCardsData] = useState([])
    const getCardsData = async()=>{
        const response = await axios.get('http://localhost:4000/services')
        const services =  response.data.map((service)=>({
            title : service.serName,
            description : service.description,
            image:`http://localhost:4000/${service.image}`
        }))
        setCardsData(services)

    }

    useEffect(() => {
        getCardsData();
    }, [])


  return (
    <div className="flex flex-wrap justify-center">
        {cardsData.map((card,index)=>{
            return(
                <Card key={index} title={card.title} description={card.description} image={card.image} />
            );
           
        })}
       
    </div>
  )
}

export default Home;