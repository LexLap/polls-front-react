import React, { useState} from 'react';
import { submitPoll } from '../server/PollsManager';

const PollCard = (props) => {

    const [ chosenAnswer, setChosenAnswer ] = useState(-1)
    const [ updateID, setUpdateID ] = useState(0)

    const {
        _id,
        title,
        options
    } = props.poll

    return(
        <div className="poll-card">

            <div>
                <h3>{title}</h3>
            </div>

            { 
                options.map((elm, i)=>{
                    
                    return <div key={i}>

                        <input
                            id={elm.option+i}
                            checked={chosenAnswer === i}
                            type='radio'
                            onChange={()=>{
                                setChosenAnswer(i)
                            }}
                        />
                        
                        <label className='label' htmlFor={elm.option+i}>
                            {elm.option} ({elm.votes} votes so far)
                        </label>

                    </div>
                })
            }

            <div className="button"
                onClick={async () => {
                    if(chosenAnswer >= 0){
                        submitPoll(_id, chosenAnswer).then((result)=>{
                            if(result){
                                options[chosenAnswer].votes += 1
                                setUpdateID(updateID + 1)  
                            }
                        })
                    }
                }}
            >
                Submit
            </div>

            
        </div>
    );
};

export default PollCard;