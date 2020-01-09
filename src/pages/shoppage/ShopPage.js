import React ,{ Component} from "react"
import ShopData from "./ShopData"
import CollectionPreview from "../../components/collection-preview"

class ShopPage extends Component{
    state={
    collection:ShopData
    };

render(){
        return(
            <div>
                <CollectionPreview title={this.state.collection.}/>
            </div>
        )
    }
};
export default ShopPage;