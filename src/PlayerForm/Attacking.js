import { useState } from "react";

const AttackingForm = () => {

    const [crossing, setCrossing] = useState(['Crossing', 70]);
    const [finishing, setFinishing] = useState(['Finishing', 70]);
    const [headingAccuracy, setHeadingAccuracy] = useState(['Heading Accuracy', 70]);
    const [shortPassing, setShortPassing] = useState(['Short Passing', 70]);
    const [volleys, setVolleys] = useState(['Volleys',70]);

    const abilities  = [crossing, finishing, headingAccuracy, shortPassing, volleys]
    const setters = [setCrossing, setFinishing, setHeadingAccuracy, setShortPassing, setVolleys]

    const setter_ = 0;

    const handleSubmit = () =>{

    }

    return ( 
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                {
                    abilities.map((ability) => (
                        <div className='abilityInput'>
                            <input-group>
                                <label class="m-3" for="{ability[0]}">{ability[0]}</label>
                                <input type='text' id="{ability[0]}" class="ml-5" onChange={(e) => {
                                    setters[setter_]([ability[0], e.target.value]);
                                    setter_++;
                                }}/>
                            </input-group>
                        </div>
                    ))
                    
                }

            </form>

       </div>
     );
}
 
export default AttackingForm;