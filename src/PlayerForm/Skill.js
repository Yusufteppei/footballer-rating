import { useState } from 'react';

const Skill = () => {

    const [dribbling, setDribbling] = useState(['Dribbling', 70]);
    const [curve, setCurve] = useState(['Curve', 70]);
    const [freekickAccuracy, setfreekickAccuracy] = useState(['Freekick Accuracy', 70]);
    const [longPassing, setlongPassing] = useState(['Long Passing', 70]);
    const [ballControl, setballControl] = useState(['Ball Control', 70]);

    const abilities  = [dribbling, curve, freekickAccuracy, longPassing, ballControl]



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
 
export default Skill;