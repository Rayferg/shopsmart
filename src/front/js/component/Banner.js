import React from 'react'

const Banner = () => {
  return (
    <div className="p-5 mb-4 bannerCont" >
      <div className="container-fluid py-5" id= "homeBanner">
        <h1 className="display-5 fw-bold">Try out new Bugeting tool</h1>
        <p className=" fs-4">With Christmas coming we know how hard it can be. Try our new tool and we make it easy for you!</p>
        {/* <button className="btn btn-lg myBtn" type="button">Try it out!</button> */}
      </div>
    </div>
  )
}

export default Banner