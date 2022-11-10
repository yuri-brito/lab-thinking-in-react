import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from '../data.json';
import {useState} from 'react'
function ProductsPage(){
    function filtering(e){
        let newProds=[]
        if(!e.target.checked){
            newProds=[...products]
            e.target.setAttribute('value',0)
            
        }else{
            newProds=[...products].filter((obj)=>obj.inStock)
            
        }
        let newArray=[<SearchBar key='0' filtering={filtering} search={search}/>,<ProductTable key='1' prod={newProds}/>]
        
        setCompleto(newArray)
        
    }
    function search(e){
        
        let newProds=[]
        if(e.target.value===''){
            newProds=[...products]
        }else{
            newProds=[...products].filter((obj)=>obj.name.toLowerCase().includes(e.target.value.toLowerCase()))
        }
        
        let newArray=[<SearchBar key='0' filtering={filtering} search={search}/>,<ProductTable key='1' prod={newProds}/>]
        setCompleto(newArray)
    }
    const [products, setProducts] = useState(jsonData);
    const [completo,setCompleto]=useState([<SearchBar key='0' filtering={filtering} search={search}/>,<ProductTable key='1' prod={products}/>])
    return(
        <div className="productsPage">
            <h1>IronStore</h1>
            {completo}
        </div>
    )
}
export default ProductsPage;