import React from 'react'

export default function Item() {
  return (
    <>

      <div className="card col-lg-6 col-xxl-4 mb-5 mx-auto p-0 border-0" style={{ width: '18rem',borderRadius:"10px" }}>
        <div style={{height: "200px",borderRadius:"10px 10px 0 0",background: "gray",border: "0"}}></div>
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </>
  )
  // return (
  //   <>

  //     <div className="col-lg-6 col-xxl-4 mb-5">
  //         <div className="card bg-light border-0 h-100">
  //           <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
  //             <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
  //             <h2 className="fs-4 fw-bold">Fresh new layout</h2>
  //             <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
  //           </div>
  //         </div>
  //       </div>
  //   </>
  // )
}
