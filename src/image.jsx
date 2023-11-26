import React,{useState} from 'react';
let arr = ["https://cdn.pixabay.com/photo/2023/11/02/14/08/fox-squirrel-8360719_640.jpg",
"https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_640.png",
"https://cdn.pixabay.com/photo/2023/10/27/10/49/australian-king-parrot-8345064_640.jpg",
"https://cdn.pixabay.com/photo/2023/11/01/22/27/ai-generated-8359431_640.png"
]

function Image ()  {

    let [image,setImage]=useState(0)
    let nextImage = ()=>{
        setImage(image+1)
        if(image===arr.lenght-1){
            setImage(0);
        }
    }   
    let previuosImage =()=>{
        if(image===0){
            setImage(arr.lenght-1)
        }
        else{
            setImage(image-1)
        }
    }        

    return (
        <div>
            <button onClick={previuosImage}>left</button>
            <img src={arr[image]} alt="" height="500px" width="600px"/>
            <button onClick={nextImage}>right</button>
        </div>
    );
}

export default Image;
