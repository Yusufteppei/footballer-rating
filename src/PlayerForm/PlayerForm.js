import { useState } from "react";
import { dot, transpose, mean } from "mathjs";

const PlayerForm = () => {
    const default_rating = 65;
    const [crossing, setCrossing] = useState(['Crossing', default_rating]);
    const [finishing, setFinishing] = useState(['Finishing', default_rating]);
    const [headingAccuracy, setHeadingAccuracy] = useState(['Heading Accuracy', default_rating]);
    const [shortPassing, setShortPassing] = useState(['Short Passing', default_rating]);
    const [volleys, setVolleys] = useState(['Volleys',default_rating]);

    const [acceleration, setAcceleration] = useState(['Acceleration', default_rating]);
    const [sprintSpeed, setSprintSpeed] = useState(['Sprint Speed', default_rating]);
    const [agility, setAgility] = useState(['Agility', default_rating]);
    const [reactions, setReactions] = useState(['Reactions', default_rating]);
    const [balance, setBalance] = useState(['Balance',default_rating]);

    const [slidingTackle, setSlidingTackle] = useState(['Sliding Tackle', default_rating]);
    const [standingTackle, setStandingTackle] = useState(['Standing Tackle', default_rating]);
    const [markingAwareness, setMarkingAwareness] = useState(['Marking Awareness', default_rating]);

    const [dribbling, setDribbling] = useState(['Dribbling', default_rating]);
    const [curve, setCurve] = useState(['Curve', default_rating]);
    const [freekickAccuracy, setfreekickAccuracy] = useState(['Freekick Accuracy', default_rating]);
    const [longPassing, setlongPassing] = useState(['Long Passing', default_rating]);
    const [ballControl, setballControl] = useState(['Ball Control', default_rating]);

    const [longShots, setLongShots] = useState(['Long Shots', default_rating]);
    const [strength, setStrength] = useState(['Strength', default_rating]);
    const [stamina, setStamina] = useState(['Stamina', default_rating]);
    const [jumping, setJumping] = useState(['Jumping', default_rating]);
    const [shotPower, setshotPower] = useState(['Shot Power',default_rating]);

    const [aggression, setAggression] = useState(['Aggression', default_rating]);
    const [interception, setInterception] = useState(['Interception', default_rating]);
    const [positioning, setPositioning] = useState(['Positioning', default_rating]);
    const [vision, setVision] = useState(['Vision', default_rating]);
    const [penalties, setPenalties] = useState(['Penalties',default_rating]);
    const [composure, setComposure] = useState(['Composure',default_rating]);

    const [res, setRes] = useState(default_rating);

    let abilities  = [crossing, finishing, headingAccuracy, shortPassing, volleys,
        aggression, interception, positioning, vision, penalties, composure,
        acceleration, sprintSpeed, agility, reactions, balance,
        markingAwareness, slidingTackle, standingTackle,
        dribbling, curve, freekickAccuracy, longPassing, ballControl,
        shotPower, jumping, stamina, strength, longShots
    ]

    
    const Analyze = (record) =>{
        let coef = 0;
        let intercept = 0;
        if (mean(record) > 85){
            coef = [ 0.01947325, -0.0273429 ,  0.02389325,  0.16023708, -0.03166874,
                0.00098123, -0.10004594,  0.04118113,  0.00174628, -0.16306716,
               -0.02226325,  0.03141075,  0.10008508,  0.24908153,  0.01139304,
               -0.01176428, -0.02736327, -0.03133763,  0.05756125,  0.03704573,
               -0.00126186,  0.02202081,  0.02248473,  0.01908007,  0.00073154,
                0.03568764, -0.01463951, -0.00575198, -0.02447372];
                //ORIGINAL INTERCEPT = 55.45245708640083;
            intercept = 59.45245708640083;
        }
        else{
            coef = [ 7.06880341e-02,  4.75191450e-03, -2.72522038e-02,  5.41142646e-02,
                -2.70242752e-02, -1.36725962e-02, -1.58247882e-03, -1.20392453e-02,
                -1.94263910e-02,  7.08383990e-02,  1.74799892e-02,  1.13406687e-02,
                 1.33224522e-03,  4.89391946e-01, -4.06435235e-02,  1.31467825e-01,
                 2.31639300e-02,  4.47539940e-03,  3.99134329e-02, -6.24976050e-02,
                -1.79405527e-02, -1.37887730e-02, -8.08415380e-02,  2.98813734e-02,
                -2.46120895e-02,  1.13507436e-01,  1.94491524e-04, -2.24702041e-03,
                -5.82998718e-03];
            intercept = 20.242233096143487;
        }
        
        const res = dot(coef, record) + intercept
        setRes(res);
        console.log(res)
        return res
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        Analyze(transpose(abilities)[1]);

        console.log('Mean', mean(transpose(abilities)[1]))
    }
    
    return ( 
        <div className='bg-light'>
            <form onSubmit={handleSubmit}>
                <div className='abilityInput'>
                    <input-group>
                        <label className="m-3"> Crossing</label>
                        <input type='text' className="ml-5" onChange={(e) => {setCrossing(['Crossing', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Finishing</label>
                        <input type='text' className="ml-5" onChange={(e) => {setFinishing(['Finishing', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Heading Accuracy</label>
                        <input type='text' className="ml-5" onChange={(e) => {setHeadingAccuracy(['Heading Accuracy', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Short Passing</label>
                        <input type='text' className="ml-5" onChange={(e) => {setShortPassing(['Short Passing', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Volleys</label>
                        <input type='text' className="ml-5" onChange={(e) => {setVolleys(['Volleys', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Acceleration</label>
                        <input type='text' className="ml-5" onChange={(e) => {setAcceleration(['Acceleration', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Sprint Speed</label>
                        <input type='text' className="ml-5" onChange={(e) => {setSprintSpeed(['Sprint Speed', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Agility</label>
                        <input type='text' className="ml-5" onChange={(e) => {setAgility(['Agility', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Reactions</label>
                        <input type='text' className="ml-5" onChange={(e) => {setReactions(['Reactions', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Balance</label>
                        <input type='text' className="ml-5" onChange={(e) => {setBalance(['Balance', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Sliding Tackle</label>
                        <input type='text' className="ml-5" onChange={(e) => {setSlidingTackle(['Sliding Tackle', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Standing Tackle</label>
                        <input type='text' className="ml-5" onChange={(e) => {setStandingTackle(['Standing Tackle', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Marking Awareness</label>
                        <input type='text' className="ml-5" onChange={(e) => {setMarkingAwareness(['Marking Awareness', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Dribbling</label>
                        <input type='text' className="ml-5" onChange={(e) => {setDribbling(['Dribbling', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Curve</label>
                        <input type='text' className="ml-5" onChange={(e) => {setCurve(['Curve', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Freekick Accuracy</label>
                        <input type='text' className="ml-5" onChange={(e) => {setfreekickAccuracy(['Freekick Accuracy', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Long Passing</label>
                        <input type='text' className="ml-5" onChange={(e) => {setlongPassing(['Long Passing', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Ball Control</label>
                        <input type='text' className="ml-5" onChange={(e) => {setballControl(['Ball Control', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Long Shots</label>
                        <input type='text' className="ml-5" onChange={(e) => {setLongShots(['Long Shots', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Strength</label>
                        <input type='text' className="ml-5" onChange={(e) => {setStrength(['Strength', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Stamina</label>
                        <input type='text' className="ml-5" onChange={(e) => {setStamina(['Stamina', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Jumping</label>
                        <input type='text' className="ml-5" onChange={(e) => {setJumping(['Jumping', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Shot Power</label>
                        <input type='text' className="ml-5" onChange={(e) => {setshotPower(['Shot Power', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Aggression</label>
                        <input type='text' className="ml-5" onChange={(e) => {setAggression(['Aggression', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Interception</label>
                        <input type='text' className="ml-5" onChange={(e) => {setInterception(['Interception', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Positioning</label>
                        <input type='text' className="ml-5" onChange={(e) => {setPositioning(['Positioning', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Vision</label>
                        <input type='text' className="ml-5" onChange={(e) => {setVision(['Vision', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Penalties</label>
                        <input type='text' className="ml-5" onChange={(e) => {setPenalties(['Penalties', e.target.value])}}/>
                    </input-group>
                    <input-group>
                        <label className="m-3"> Composure</label>
                        <input type='text' className="ml-5" onChange={(e) => {setComposure(['Composure', e.target.value])}}/>
                    </input-group>
                </div>
                <h4>OVR : {Math.round(res)}</h4>
                <button type="submit" className="btn-success m-5 btn btn-lg">Analyze</button>
            </form>
        </div>
     );
}
 
export default PlayerForm;