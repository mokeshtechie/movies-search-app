import React from 'react';
import pt from 'prop-types';



export default function Employee(props){
    let upper=props.sname.toUpperCase()
    return(<div>

        <h3>Name: {upper}</h3>
        <img src={props.imgurl} height="200px" width="200px"/>
        <h4>Age:{props.age}</h4>
        <marquee>{props.children}</marquee>
    </div>)

}

Employee.defaultProps={
    sname:"no Name",
    age:0,
    imgurl:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
}
Employee.propTypes={
    sname:pt.string,
    age:pt.number,
    imgurl:pt.string
}