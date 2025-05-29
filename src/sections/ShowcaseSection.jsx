import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* {left} */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="Ryde" />

                    </div>
                </div>
                {/* {right} */}
            </div>

        </div>
    </div>
  )
}

export default ShowcaseSection