import { useState } from 'react';

const Power = () => {

    const [longShots, setLongShots] = useState(['Long Shots', 70]);
    const [strength, setStrength] = useState(['Strength', 70]);
    const [stamina, setStamina] = useState(['Stamina', 70]);
    const [jumping, setJumping] = useState(['Jumping', 70]);
    const [shotPower, setshotPower] = useState(['Shot Power',70]);

    const abilities  = [shotPower, jumping, stamina, strength, longShots]



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
 
export default Power;