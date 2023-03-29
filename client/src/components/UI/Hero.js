import React from 'react'
import { NavLink } from 'react-router-dom'
// import HeroBg from '../assets/herobg.jog'

const Hero = () => {
    return (
        <div id='HeroSec'>
            <div className="row">
                <div className="col-md-11 col-12 mx-auto HeroContent">
                    <h1 className='text-light mainHeading mb-4'>directory</h1>
                    <div className="mainHeroSearch">
                        <i className="bi bi-search HeroIconSearch"></i>
                        <input type="text" className='searchInput' placeholder='Seacrh Company or Industry' />
                        <select className='searchSelect' name="" id="">
                            <option value="" >Location</option>
                            <option value="">Location1</option>
                            <option value="">Location2</option>
                            <option value="">Location3</option>
                        </select>
                        <select className='searchSelect' name="" id="">
                            <option value="">Location</option>
                            <option value="">Location1</option>
                            <option value="">Location2</option>
                            <option value="">Location3</option>
                        </select>
                        <select name="" className='searchSelect' id="">
                            <option value="">Location</option>
                            <option value="">Location1</option>
                            <option value="">Location2</option>
                            <option value="">Location3</option>
                        </select>

                        <button className='btn seacrhBtn'>Search</button>
                    </div>

                    <div className="searchTagGroup mt-3">
                        <p className='searchTitle me-3'>Industry : </p>
                        <div className="d-flex flex-wrap searchTagList">
                            <NavLink className="searchTag" to="/" >Company</NavLink>
                            <NavLink className="searchTag" to="/" >Company</NavLink>
                            <NavLink className="searchTag" to="/" >Company</NavLink>
                            <NavLink className="searchTag" to="/" >Company</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Hero