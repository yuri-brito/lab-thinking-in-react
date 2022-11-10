import {useState} from 'react'

function ProductRow(props){
    const[prods,SetProds]=useState(props.prod)

    return(
        <tbody>
            <tr>
                    {props.stock?<td width={500}>{props.nomeProduto}</td>:<td width={500} style={{color:'red'}}>{props.nomeProduto}</td>}
                    <td width={500}>
                        {props.preco}
                    </td>
                </tr>
        </tbody>
    )
}
export default ProductRow;