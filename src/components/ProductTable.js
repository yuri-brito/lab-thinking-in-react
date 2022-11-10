import ProductRow from "./ProductRow";
import './ProductTable.css'
import {useState} from 'react'
function ProductTable(props){
    //const[rows,setRows]=useState(props.prod)
    const rows=props.prod
    const temp=[]
    for (let row of rows){
        temp.push(<ProductRow key={rows.indexOf(row)} nomeProduto={row.name} preco={row.price} stock={row.inStock}/>)
    }
    return(
        <table className="table" cellSpacing="0">
            <thead>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
            </thead>
            
            {temp}
            
        </table>
    )
}
export default ProductTable;