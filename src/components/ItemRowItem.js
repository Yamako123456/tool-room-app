function ItemRowItem(props) {
    return (
        <tr>
            <td>{props.item.code}</td>
            <td>{props.item.description1}</td>
            <td>{props.item.description2}</td>
            <td>{props.item.itemType}</td>
            <td>{props.item.unitPrice}</td>
            <td>{props.item.issueCost}</td>
            <td>{props.item.suppierId}</td>
            <td>{props.item.itemImage}</td>
            <td>{props.item.cateory}</td>
            <td>{props.item.subCategory}</td>     
        </tr>  
    )
}

export default ItemRowItem

