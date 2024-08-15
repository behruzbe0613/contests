import React, { useState } from 'react'
import Progress from './Progress'

export default function ProgressProvide() {
    const [reviewScore,setReviewScore] = useState(72)

    return (
        <>
            <Progress percentage={reviewScore} />
            <div className="types">
                <div className="easy">
                    <p className='easy'>Easy</p>
                    <span>24/569</span>
                </div>
                <div className="middle">
                    <p className='middle'>Med.</p>
                    <span>486/1469</span>
                </div>
                <div className="Hard">
                    <p className='hard'>Hard</p>
                    <span>1020/5569</span>
                </div>
            </div>
        </>
    )
}

