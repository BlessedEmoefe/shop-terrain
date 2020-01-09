import React ,{ Component} from "react"
import ShopData from "./ShopData"
import CollectionPreview from "../../components/collection-preview/collection-preview"

class ShopPage extends Component{
    state={
    collection:ShopData
    };

render(){
        return(
            <div>
                <CollectionPreview title={this.state.collection.title}/>
            </div>
        )
    }
};
export default ShopPage;