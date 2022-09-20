import React from 'react'

function UserDetails() {

  return (
    <div className='container mx-0 w-75'>
        <h1>Welcome..</h1>
        <div className="card p-5">
        <i className="fa fa-user fs-1 text-center"></i>
            <div className="d-flex justify-content-between py-3">
                <h4><i className="fa fa-user"></i>Name: Abdimalik Osman Hassan</h4>
                <h4>Title:<span className="fs-6"> Web developer</span></h4>
            </div>
            <div className="d-flex justify-content-between py-3">
                <h4><i className="fa fa-envelope"></i> Email: myfather8818@gmail.com</h4>
                <h4>Phone:<span className="fs-6"> 616328920</span></h4>
            </div>
        </div>
    </div>
  )
}

export default UserDetails