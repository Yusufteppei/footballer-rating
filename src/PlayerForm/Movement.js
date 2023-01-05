import { useState } from 'react';

const Movement = () => {

    const [acceleration, setAcceleration] = useState(['Acceleration', 70]);
    const [sprintSpeed, setSprintSpeed] = useState(['Sprint Speed', 70]);
    const [agility, setAgility] = useState(['Agility', 70]);
    const [reactions, setReactions] = useState(['Reactions', 70]);
    const [balance, setBalance] = useState(['Balance',70]);

    const abilities  = [acceleration, sprintSpeed, agility, reactions, balance]



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
 
export default Movement;