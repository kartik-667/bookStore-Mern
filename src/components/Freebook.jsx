import React, { useEffect, useState } from 'react'
import list from "../../public/list"
import Card from './Card';
import axios from "axios"

function Freebook() {

   const [listdata, setlistdata] = useState([])
  
      useEffect(() => {
          const getData=async ()=>{
            const res=await axios.get('http://localhost:6767/book')
            // console.log(res.data);
            let arr=res.data
            arr.filter((ele)=> ele.category==="free")
            console.log(arr);
            
            // let filtereddata=res.data.filter((ele)=> ele.category==="free")
            // console.log(filtereddata);
            setlistdata(arr)
            
            // setlistdata(res.data)
            // console.log(listdata);
            
            
          }
          getData()
        
      
        
      }, []) //

    // const freebooklist=list.filter((ele)=> ele.category==="free")
    // console.log(freebooklist);
    

  return (
    
    <div className='main w-full flex flex-col justify-center p-4 m-4'>
        <hr />
      <h1 className='font-bold text-xl'>Free courses available here </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione odit beatae qui eius deleniti mollitia aut quasi, aperiam et recusandae quas quibusdam soluta, dicta ipsum error nam, ut quaerat.</p>
      <div className="box flex flex-row flex-wrap justify-center gap-4">
      {listdata.map((ele)=>{
        return <Card item={ele} key={ele.id}></Card>
      })}

      </div>
    </div>
  )
}

export default Freebook
