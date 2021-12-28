// All merchandise
import Merchandise from "./Merchandise.js"

function Merchandises() {
    return (
        <div className="merchandises">
            <p>All merchandise</p>
            <Merchandise name="Champion's Shopping Bag" price="$35.00"/>
            <Merchandise name="Champion's Baseball Cap" price="$25.00"/>
            <Merchandise name="Bolo Bun Pin" price="$5.00"/>
            <Merchandise name="Champion's Shopping Bag + Bolo Bun Pin Bundle" price="$37.00"/>
            <Merchandise name="Champion's Cap + Bolo Bun Pin Bundle" price="$27.00"/>
            <Merchandise name="Champion's Shopping Bag + Bolo Bun Pin + Champion's Cap Bundle" price="$60.00"/>
        </div>
    )
}

export default Merchandises
