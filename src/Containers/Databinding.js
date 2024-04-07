import React, {useState} from 'react'


function Databinding(){
    const [data, setData] = useState({/*Immutable*/
        name:"Aman Kumar",
        age:25
    })
    const handleChange=(event)=>{
        let value = event.traget.value;
        setData({
            ...data,
            name :value
        });
    }
    return(
        <div>
            <h2>
                Data binding
            </h2>
            <h4>
                One Way Binding : {data.name} {data.age}
            </h4>
            <div>
                <input type='text' value = {data.name}
                onChange={handleChange}/>
            </div>
        </div>
    )
}

export default Databinding;