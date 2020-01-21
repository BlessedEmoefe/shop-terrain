import React from "react"
import "./component-item.styles.scss"

const CollectItem = ({ imageUrl, price, id, name }) =>{
    return(
<div className="collection-item">
    <div className="image" style={{background:`url(${imageUrl})`}} />

<div className="collection-footer" >

<span className="name">{name}</span>
<span className="price">{price}</span>
</div>
    
</div>
    )
}
export default CollectItem;