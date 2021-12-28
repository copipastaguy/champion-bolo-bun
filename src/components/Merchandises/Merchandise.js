// Individual merchandise

function Merchandise({ image, name, price, button}) {
    return (
        <div className="merchandise">
            <img src={image} alt="product" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default Merchandise
