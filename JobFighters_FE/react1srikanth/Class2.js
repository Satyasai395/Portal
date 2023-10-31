import React from "react";
import './Class2.css'

/*
// nested compponents
const InnerComponent=()=>{
    return <h1> innner compponents</h1>
};
const PrintName=()=>{
    return <InnerComponent />
}
function Class2(){
    return(
        <section>
            <PrintName />
            <PrintName />
            <PrintName />
            <PrintName />
        </section>
    );
}
*/
//----------------------------------------
/*  nested components in netflix and inline and internal css
const Class2=()=>{

    return <div>
        <Movie />
        <Movie />
        <Movie />
        </div>;
}
const Movie=()=>{
    return <article>
        <Imagecomponent />
        <Title />
    </article>
}
const Title=()=>{
    const styles={
        heading:{
            color:'pink',
            fontSize: "20px"
        },
        smallHeading:{
            color:'blue',
            fontSize:"9px"
        }
    }
    
    return (<div>
    <h3 style={{color:'red', fontSize:'1rem'}}> stranger things </h3>
    <h1 style={styles.heading}> its amazing</h1>
    <h1 style={styles.smallHeading}>zing zing</h1>
    </div>);
}
const Imagecomponent=()=>{
    return <img src="https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSNtJvu8215Gl8GlVv_EEDFMgltlMgvQGUb_8wpfUL6BKCLHa5PYQcZZVizJJhcTCUsy4ST5mhGNGGffm-MYgGgdgvIGJf_OvT0IPUEke88IaN7ireJ4uV_BVLjVTXbwlfo1.jpg?r=c68" alt="np"/>
}
*/
//--------------------------------------------------------------------------------------------------
// external css
/*
const Class2=()=>{

    return( <section className="movie-container">
        <Movie />
        <Movie />
        <Movie />
        </section>
    );
}
const Movie=()=>{
    return <article className="each-movie"> 
        <Imagecomponent />
        <Title />
    </article>
}
const Title=()=>{
    return (
    <h3 className="heading"> stranger things </h3>
    );
}
const Imagecomponent=()=>{
    return <img src="https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSNtJvu8215Gl8GlVv_EEDFMgltlMgvQGUb_8wpfUL6BKCLHa5PYQcZZVizJJhcTCUsy4ST5mhGNGGffm-MYgGgdgvIGJf_OvT0IPUEke88IaN7ireJ4uV_BVLjVTXbwlfo1.jpg?r=c68" alt="np"/>
}
*/
//-----------------------------------------------------------------------------------------
/*
let money={
    title:'money heist',
    url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326'
}
let monkey={
    title:'the monkey king',
    url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABahUH4-pDE5QJiEaVoGhXtI823SDmlkt2zRO64UKN_DNAcneLmbCRks8rI_xsuO5yySCaVdor45_VuSchLKrNWz3gT8HaM-4Vlmi267kQm3oIOWc2UtPGTkPg3jvG_NjyLxl.jpg?r=5d9'
}

let img='https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABftLqjNKjHCbPWAQDU8nhKmImuIHrtaMQhlXiXgBaH56ZIDCvo9oUvdIcgJfx-qa86kZ3x6Sif3DJ-QV8wXm18lfiLvlkZ7FVpvOHKqR-_GeY5qZF3HqEg8m4nyybFN4BE-J.jpg?r=dd1';
const Class2=()=>{

    return( <section className="movie-container">
        <Movie name="emma" last="watson"/>
        <Movie fullname='emma watson'/>
        <Movie title={monkey.title} imgurl={monkey.url}/>
        <Movie title={money.title} imgurl={money.url}/>
        
        </section>
    );
}
const Movie=(props)=>{
    console.log(props)
    return <article className="each-movie"> 
        <h2>{props.name}</h2>
        <h2>{props.fullname}</h2>
        <img src={props.imgurl || img} alt="netflix" />
        <h1>{props.title || 'no title'}</h1>
        
    </article>
}
*/
//-----------------------------------------------------------------------------------------------------
/*
const data=[
    {
        title:'money heist',
        url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326'
    },
    {
        title:'the monkey king',
        url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABahUH4-pDE5QJiEaVoGhXtI823SDmlkt2zRO64UKN_DNAcneLmbCRks8rI_xsuO5yySCaVdor45_VuSchLKrNWz3gT8HaM-4Vlmi267kQm3oIOWc2UtPGTkPg3jvG_NjyLxl.jpg?r=5d9'
    }
]
let img='https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABftLqjNKjHCbPWAQDU8nhKmImuIHrtaMQhlXiXgBaH56ZIDCvo9oUvdIcgJfx-qa86kZ3x6Sif3DJ-QV8wXm18lfiLvlkZ7FVpvOHKqR-_GeY5qZF3HqEg8m4nyybFN4BE-J.jpg?r=dd1';
const Class2=()=>{
    return( <section className="movie-container">
        <Movie title={data[0].title} imgurl={data[0].url}/>
        <Movie title={data[1].title} imgurl={data[1].url}/>
        <Movie />

        
        </section>
    );
}
const Movie=(props)=>{
    console.log(props)
    return <article className="each-movie"> 
        <h2>{props.name}</h2>
        <h2>{props.fullname}</h2>
        <img src={props.imgurl || img} alt="netflix" />
        <h1>{props.title || 'no title'}</h1>
    </article>
}
*/

//-----------------------returning html tags-----------------------------
/*
const data=[
    {
        title:'money heist',
        url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326'
    },
    {
        title:'the monkey king',
        url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABahUH4-pDE5QJiEaVoGhXtI823SDmlkt2zRO64UKN_DNAcneLmbCRks8rI_xsuO5yySCaVdor45_VuSchLKrNWz3gT8HaM-4Vlmi267kQm3oIOWc2UtPGTkPg3jvG_NjyLxl.jpg?r=5d9'
    },
];
const Class2=()=>{
    let temp=[<h1>Mango</h1>,<h1>banana</h1>]
    let newtempArray= data.map((eachobj)=>{
        return(
        <article>
            <h1>{eachobj.title}</h1>
            <img src={eachobj.url} alt={eachobj.title} />
        </article>
        
        );
    });
    console.log(newtempArray);
    return( <section className="movie-container">
        {newtempArray}
        </section>);
}
*/
//---------------returning component-----------------------------------

const data=[
    {
        title:'money heist',
        url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326'
    },
    {
        title:'the monkey king',
        url:'https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABahUH4-pDE5QJiEaVoGhXtI823SDmlkt2zRO64UKN_DNAcneLmbCRks8rI_xsuO5yySCaVdor45_VuSchLKrNWz3gT8HaM-4Vlmi267kQm3oIOWc2UtPGTkPg3jvG_NjyLxl.jpg?r=5d9'
    },
];
let img='https://occ-0-2701-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABftLqjNKjHCbPWAQDU8nhKmImuIHrtaMQhlXiXgBaH56ZIDCvo9oUvdIcgJfx-qa86kZ3x6Sif3DJ-QV8wXm18lfiLvlkZ7FVpvOHKqR-_GeY5qZF3HqEg8m4nyybFN4BE-J.jpg?r=dd1';

const Class2=()=>{ 
    return( <section className="movie-container">
        {data.map((eachobj,index)=>{  //-- index is placed due to overcome the error in console that we should give unique key
            //console.log(eachobj);
            //const {title :newtitle ,url}=eachobj;  -- want to change name place (actualname:newname)
            const {title,url}=eachobj;  //---destructring
            return ( <Movie key={index} title={title} imgurl={url}/>);
        })
        }</section>);

};
const Movie=(props)=>{ //const Movie=({title,imgurl}) =>{ -----we can also destructure here also
    //console.log(props)
    const {title,imgurl}=props
    return <article className="each-movie"> 
        {/* <img src={props.imgurl || img} alt="netflix" />
        <h1>{props.title || 'no title'}</h1> */}
        <img src={imgurl || img} alt="netflix" />
        <h1>{title || 'no title'}</h1>
    </article>
}
export default Class2;