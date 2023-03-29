import React from 'react'

function Footer() {
    return (
        <div>
            <div className="container-fluid py-5 footerContainer">

                <div className="row">

                    <div className="col-md-10 col-12 mx-auto">

                        <div className="row">
                            <div className="col-md-3 col-12">
                                {/* <img src="" alt="" /> */}
                                <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur unde quasi alias, quam quia, dolores aperiam exercitationem asperiores ducimus delectus porro in cumque corporis enim sunt? Labore vel reprehenderit ad.</p>
                                <ul className='d-flex m-0 p-0 list-unstyled mt-4'>
                                    <li className='me-3 footer-social-icon'><i className="bi bi-facebook"></i></li>
                                    <li className='mx-3 footer-social-icon'><i className="bi bi-instagram"></i></li>
                                    <li className='mx-3 footer-social-icon'><i className="bi bi-linkedin"></i></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12">
                                <p className='text-light'>Quick Links</p>
                                <ul className='list-unstyled m-0 p-0'>
                                    <li className='text-light'> Link 1 </li>
                                    <li className='text-light'> Link 2 </li>
                                    <li className='text-light'> Link 3 </li>
                                    <li className='text-light'> Link 4 </li>
                                    <li className='text-light'> Link 5 </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12">
                                <p className='text-light'>Helpful Links</p>
                                <ul className='list-unstyled m-0 p-0'>
                                    <li className='text-light'> FAQ </li>
                                    <li className='text-light'> Terms & Conditions </li>
                                    <li className='text-light'> Privacy Policy </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12">

                                <p className='text-light'>Helpful Links</p>
                                <p className="text-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos, et vero minima eum. Minus accusamus nemo
                                </p>

                                <div className="footer-news-letter mt-5">
                                    <input type="mail" placeholder='Enter Your Email' />
                                    <button >Send</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer