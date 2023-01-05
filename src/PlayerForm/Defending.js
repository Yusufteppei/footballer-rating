import { useState } from "react";

const Defending = () => {

    const [slidingTackle, setSlidingTackle] = useState(['Sliding Tackle', 70]);
    const [standingTackle, setStandingTackle] = useState(['Standing Tackle', 70]);
    const [markingAwareness, setMarkingAwareness] = useState(['Marking Awareness', 70]);

    const abilities  = [markingAwareness, slidingTackle, standingTackle]



    return ( <div>
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
   </div> );
}
 
 
export default Defending;