import React ,{ Component} from "react"
import ShopData from "./ShopData"
import CollectionPreview from "../../components/collection-preview/collection-preview"

class ShopPage extends Component{
    state={
    collections:ShopData
    };

render(){
    const { collections } = this.state
        return(
            <div>
                {
collections.map(({id,...othercollectionitems})=><CollectionPreview key={id} {...othercollectionitems}/>)
                }
                
            </div>
        )
    }
};
export default ShopPage;