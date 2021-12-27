import React from "react";
import data from '../data'

export default function Lorem(){

    const [count, setCount] = React.useState(0)

    const [lorem,setLorem] = React.useState([])

    function handleChange(myEvent){
        setCount(myEvent)
        console.log(count)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(count<=0){
            setCount(parseInt(1))
            
        }
        if(count>8){
            setCount(parseInt(8))
        }
        setLorem(data.slice(0,count))
    }

    const mapper = lorem.map(item=>{
        return (
            <div className="p-5">
                {item}
            </div>
            
        )
    })
    return (
        <div className="container text-center pt-8">
        
        <form onSubmit={handleSubmit}>

                <span className="pr-3">Paragraphs</span><input className="pl-4 focus:outline-sky-500 border-2 border-slate-500 rounded-md px-5 py-2" onChange={(e)=>handleChange(e.target.value)} value={count}>
                
                </input>
    
                <button className="px-3 py-1 rounded-md focus:border-blue-300 border-4 ml-4 " >Generate</button>

        </form>
            

        <div className="drop-shadow-md lorem mx-auto pt-6 pb-6 mt-5 h-auto w-1/2 text-xl rounded-md bg-slate-400 text-slate-50 font-semibold ">
            {
               mapper
            }
        </div>


        </div>
    )
}