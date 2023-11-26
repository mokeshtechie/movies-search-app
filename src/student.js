import React from "react";
import Employee from "./Employee";




const Student = () => {
    return (<div >
        <Employee sname="john" imgurl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" age={45}/>  
        <Employee sname="moke" imgurl="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" age={50}/>
        <Employee sname="sahana" imgurl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww" age={67}/>
        <Employee sname="sara" imgurl="https://media.istockphoto.com/id/1372281808/photo/woman-face-profile-young-girl-portrait-with-smooth-healthy-skin-model-facial-side-view-over.jpg?s=612x612&w=0&k=20&c=0sycwPGkFcwXL75kdHCy52c2jX7r9qJwPXqS4J3PZb8=" age={56}/>     
        </div>
    );
}

export default Student;
