import React from 'react';

class QuestionResult extends React.Component {
    render() {
        return (
            <div className='question'>
                <div className='user-asks'>
                    <div className='title'>Asked by Tyler McGinnis</div>
                </div>
                <div className='question-content'>
                    <div className='avatar'>
                        <img></img>
                    </div>

                    <div className='question-info'>
                        <div className='question-title'>Results:</div>
                        <div className='chart'>
                            <div className='chart-title'>
                                Would you rather sleep?
                            </div>
                            <div id='option-1' className='results'>
                                <div className='result-show'>
                                    <div className='result-count'>
                                        <span className='vote'>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='number-vote'>
                                2 out of 10 votes
                            </div>
                        </div>
                        <div className='chart'>
                            <div className='chart-title'>
                                Would you rather eat?
                            </div>
                            <div id='option-2' className='results'>
                                <div className='result-show'>
                                    <div className='result-count'>
                                        <span className='vote'>
                                            80%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='number-vote'>
                                8 out of 10 votes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default QuestionResult;