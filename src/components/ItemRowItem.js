function ItemRowItem(props) {

    const usDollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <tr>
            <td>{props.item.code}</td>
            <td>{props.item.description1}</td>
            {/* <td>{props.item.description2}</td> */}
            <td>{props.item.itemType}</td>
            {/* <td>{usDollarFormatter.format(props.item.unitPrice)}</td> */}
            {/* <td>{usDollarFormatter.format(props.item.issueCost)}</td> */}
            <td>{props.item.suppierId}</td>
            {/* <td>{props.item.itemImage}</td> */}
            <td>{props.item.cateory}</td>
            <td>{props.item.subCategory}</td>     
        </tr>  
    )
}

export default ItemRowItem

