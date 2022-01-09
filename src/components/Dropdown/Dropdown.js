
import { useState } from 'react'
import "../../styles/Dropdown.css"
import {AiOutlineArrowDown} from "react-icons/ai"

function Dropdown() {

    const [displayDropdown, setDropdown] = useState(false);

    const dropdownMenu = (
        <ul>
            <li>Front of house</li>
            <li>Baker</li>
        </ul>
    );

    return (
        <div className='dropdownMenu' onClick={() => setDropdown(!displayDropdown)}>
            <div className='dropdownBtn btn'>
            <p>Choose a position</p>
            <AiOutlineArrowDown />
            </div>
            
            <div>
                {displayDropdown && dropdownMenu}
            </div>

            <div>
                content for baker job
            </div>
        </div>
    )
}

export default Dropdown
