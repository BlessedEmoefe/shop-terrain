import React,{ Component } from "react"
import "./Directory.styles.scss"
import MenuItem from "../menu-item/menu-item"

class Directory extends Component {
    state = { 

     }
    render() { 
        return ( 
                <div className="directory-menu">
                <MenuItem title="Hat"/>
                </div>

         );
    }
}
 
export default Directory;