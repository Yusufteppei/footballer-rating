import { useState } from "react";

const Mentality = () => {

    const [aggression, setAggression] = useState(['Aggression', 70]);
    const [interception, setInterception] = useState(['interception', 70]);
    const [positioning, setPositioning] = useState(['Positioning', 70]);
    const [vision, setVision] = useState(['Vision', 70]);
    const [penalties, setPenalties] = useState(['Penalties',70]);
    const [composure, setComposure] = useState(['Composure',70]);

    const abilities  = [aggression, interception, positioning, vision, penalties, composure]

    return ( 
        <div>
            <form action="" method="post">
                {
                    abilities.map((ability) => (
                        <div className='abilityInput'>
                            <input-group>
                                <label class="m-3" for="{ability[0]}">{ability[0]}</label>
                                <input type='text' id="{ability[0]}" class="ml-5"/>
                            </input-group>
                        </div>
                    ))
                }

            </form>
       </div>
     );
}
 
export default Mentality;