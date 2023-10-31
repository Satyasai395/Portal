import React,{useState} from "react";
function Class8(){
    const initialarray=[
        { id:'abcd',firstname:"satya",lastname:'pasupuleti',age:23},
        {id:'dcba',firstname:"sravani",lastname:'panchabatla',age:24},
    ]
    const [data,setData]=useState(initialarray)
    //console.log(data);
    const deleteme=(id)=>{
        //console.log(id);
        const filterdata=data.filter((eachitem)=>{
            return eachitem.id !== id;
        });
        setData(filterdata);
    }

    return(
        <div>
            <ul>
                {
                    data.map((eachitem,index)=>{
                        const {firstname,lastname,age,id}=eachitem;
                        return (
                        <li key={index}>
                            <div>my first name:<strong> {firstname} </strong></div><br></br>
                            <div>my last name: <strong>{lastname} </strong></div><br></br>
                            <div>age:  {age}</div><br></br>
                            <button onClick={()=>deleteme(id)}>delete me</button>
                            </li>
                            );
                    })
                }
            </ul>

        </div>

    );
}
export default Class8;
