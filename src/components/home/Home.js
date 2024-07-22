import React from 'react'
import './Home.css'
import confi from '../../images/confi.png';
import identity from '../../images/identity.jpeg';
import edu from '../../images/edu.png';
import medical from '../../images/medical.png';
function Home() {
  return (
    <div>
      <div className="background">
        <div className="content text-right">
          <p className="title text-right text-white">DocHub</p>
          <p className="subtitle text-right text-white">Efficiency at Your Fingertips</p>
        </div>
      </div>
      {/* <div className="items">
          <div className="item1">
            <img src={edu} alt="" className="items-image"/>
            <h3 className="items-heading">Order Online</h3>
            <p className="items-paragraph">Stay home and order to your door step</p>
          </div>
          <div className="item2">
            <img src={identity} alt="" className="items-image"/>
            <h3 className="items-heading">Dining</h3>
            <p className="items-paragraph">View the cities favourite Dining venues</p>
          </div>
          <div className="item3">
              <img src={confi} alt="" className="items-image"/>
            <h3 className="items-heading">Night Life and Clubs</h3>
            <p className="items-paragraph">Explore the cities top nightlife outlets</p>
          </div>
          <div className="item4">
              <img src={medical} alt="" className="items-image"/>
            <h3 className="items-heading">Night Life and Clubs</h3>
            <p className="items-paragraph">Explore the cities top nightlife outlets</p>
          </div>
      </div> */}
      <div className='container mt-4 users'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
          <div className="col text-center mx-auto">

            <div className="card pb-1">
              <img src={confi} className='mx-auto p-1 profile' alt="" />
              <div className='card-body'>
                <h4 className=' name'>Confidential documents</h4>
                <p className='lead par'>Authenticate your documents and provide security</p>
              </div>
            </div>
          </div>
          <div className="col text-center mx-auto">
            <div className="card pb-1">
              <img src={identity} className='mx-auto p-1 profile' alt="" />
              <div className='card-body'>
                <h4 className='name'>Identity documents</h4>
                <p className='lead par'>Easy access to all your identity documents</p>
              </div>
            </div>
          </div>
          <div className="col text-center mx-auto">
            <div className="card pb-1">
              <img src={edu} className='mx-auto p-1 profile' alt="" />
              <div className='card-body'>
                <h4 className=' name'>Education documents</h4>
                <p className='lead par'>Store all your educational documents and certifications at one spot.</p>
              </div>
            </div>
          </div>
          <div className="col text-center mx-auto">
            <div className="card pb-1">
              <img src={medical} className='mx-auto p-1 profile' alt="" />
              <div className='card-body'>
                <h4 className='name'>Medical documents</h4>
                <p className='lead par'>All the medical reports can be stored ans accessed easily.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home