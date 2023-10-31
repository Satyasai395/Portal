import React, { useState } from "react";
function Class8_1(){
    const handlechange=()=>{
        //console.log("Change");
        //setshowdata(true);
        setshowdata(!showdata)
    }
    const [showdata,setshowdata]=useState(false)
    return(
        <div>
            <button onClick={handlechange}>{showdata ? 'hide':'show'}</button> {/* conditional rendering */}
            {/* {showdata &&(<div>sdkjf jdfjdhf jjhjhj njsjdjsd jhsjdhsdn nnsjdsjd sdsdiv eiw hhdfdf dffhdf df  fdf dfdf fd</div>)  }*/}
            {showdata ? <div>sdkjf jdfjdhf jjhjhj njsjdjsd jhsjdhsdn nnsjdsjd sdsdiv eiw hhdfdf dffhdf df  fdf dfdf fd</div> :<p>data is hidden</p>}
            
        </div>
    );
}
export default Class8_1;