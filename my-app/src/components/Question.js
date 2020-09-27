import React from 'react';

class Question extends React.Component {
    render() {
        return (
            <div className='question'>
                <div className='user-asks'>
                    <div className='title'>Tyler McGinnis asks:</div>
                </div>
                <div className='question-content'>
                    <div className='avatar'>
                        <img></img>
                    </div>

                    <div className='question-info'>
                        <div className='question-title'>Would You Rather ...</div>
                        <label class='option'>Option 1
                            <input type='checkbox' checked='checked' />
                            <span className='checkmark'></span>
                        </label>
                        <label class='option'>Option 2
                            <input type='checkbox' checked='checked' />
                            <span className='checkmark'></span>
                        </label>
                        <button className='btn'>Submit</button>
                    </div>
                </div>

            </div>
        );
    }
};

export default Question;