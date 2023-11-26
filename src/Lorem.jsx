import React from 'react';
import { useState } from 'react';
let s = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rem earum nostrum molestiae, temporibus ipsum consequuntur nesciunt numquam placeat dolorum sit repudiandae quis nisi porro dolor quo nihil distinctio quasi.
Suscipit consectetur tempora, repudiandae, maiores quas veritatis at fugit, alias dolore ipsam necessitatibus minima molestiae. Reiciendis beatae illum ipsa commodi, vitae nostrum iste eius laborum, nam numquam, incidunt error. Quia!
Repellat eveniet distinctio veritatis vitae, eos quos praesentium aut cupiditate nobis ex laborum repellendus est ab explicabo! Sed illum iusto exercitationem suscipit commodi vitae beatae, harum voluptatum debitis id? Dolorum.
Maiores eum, ex a ab iure et itaque officia animi natus nesciunt quo odit omnis, exercitationem laborum aliquid recusandae deleniti placeat beatae inventore fugit repudiandae, modi dolor fugiat! Quidem, dolorum?
Rem voluptatem quam nam repellendus, mollitia eaque illo autem accusantium itaque explicabo ducimus recusandae repellat numquam doloremque veniam modi, incidunt placeat culpa! Assumenda fuga fugit maiores error numquam sunt ab.`

 function Lorem () {
    let[isBool,setIsBool]=useState(true)
    let toggleImage = ()=>{
        setIsBool(!isBool)
    }
    return (
        <div>
            <p>{isBool?s.slice(0,200):s}</p>
            <button onClick={toggleImage}>{isBool?"readmore":"readless"}</button>
        </div>
    );
}

export default Lorem;


