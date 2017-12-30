import React from 'react'

import { Image } from 'semantic-ui-react'

const UnitImage = (props) => (
    <div>

    <Image src={props.img} fluid rounded />
    
       <div  className="top-padding">
       <p>"{props.quote}"</p>
       <p>– {props.author}</p>
       </div>
    </div>
)




export default UnitImage
