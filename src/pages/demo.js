import Head from 'next/head'
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic";
import styles from '@/styles/Home.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    console.log(styles)
    return (
        <>
            <Head>
                <title>Thooni</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />


                <link href="static/plugin/font-awesome/css/fontawesome-all.min.css" rel="stylesheet" />
                <link href="static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />

                <link href="static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="static/plugin/owl-carousel/css/owl.carousel.min.css" rel="stylesheet" />
                <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />


                <link href="static/css/sty.css" rel="stylesheet" />
                <link href="static/css/color/default.css" rel="stylesheet" id="color_theme" />

                <link rel="icon" href="favicon.ico" />


            </Head>
            <div className={inter.className}>

                <header>
                    <nav className="navbar header-nav fixed-top navbar-expand-lg header-nav-light">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                THOONI
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    <li><a className="nav-link" href="#about">About Us</a></li>
                                    <li><a className="nav-link" href="#features">Service</a></li>
                                    <li><a className="nav-link" href="#price">Testimonial</a></li>
                                    <li><a className="nav-link" href="#blog">Designer Consultation</a></li>
                                    <li><a className="nav-link" href="#contatus">questions:team@thooni.com</a></li>

                                    <li><a className="nav-btn nav-link" href="#">Login</a></li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <main>
                    <section id="home" className="home-banner-01 gray-bg-g border-bottom">
                        <div className="container">
                            <div className={`row  align-items-center ${styles.fixBannerHeight}`}>
                                <div className="col col-md-12 col-lg-6 col-xl-6 p-80px-tb md-p-30px-b sm-p-60px-t m-50px-t">
                                    <div className="home-text-center p-50px-r md-p-0px-r">
                                        <h1 className="font-alt">Perfect fit,home delivered</h1>
                                        <p>Click to download our app now</p>
                                        <div className="subscribe-box">
                                           <img src="../static/img/google.png"  />
                                           <img src="../static/img/apple.png" className={`${styles.imgFixAPP}`}/>
                                        </div>
                                    </div>
                                </div> <div className="col-md-12 col-lg-6 col-xl-6 home-right m-50px-t md-m-0px-t">
                                    <div className="font-alt">
                                    <Carousel autoPlay={true} showThumbs={false} centerMode={true}>
                                        <div className={`${styles.bannerImg}`}>
                                            <img src="static/img/banner_Image_1.png"/>
                                          
                                        </div>
                                        <div className={`${styles.bannerImg}`}>
                                            <img src="static/img/banner_Image_2.png"/>
                                          
                                        </div>
                                        <div className={`${styles.bannerImg}`}>
                                            <img src="static/img/banner_Image_1.png"/>
                                          
                                        </div>
                                    </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/****find the right dress section  */}


                    <section id="blog" className="section border-bottom">
                        <div className="container">
                            <div className="row justify-content-center m-45px-b md-m-25px-b">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <div className="section-title text-center">
                                        
                                        <h2 >All our products are custom made</h2>
                                        <h4>Avoid the hassle of going to your tailor's shop and waiting for a long time to get your dress.Sit back and relax</h4>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_01.png" title="" alt="" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_02.png" title="" alt="" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_03.png" title="" alt="" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 m-15px-tb">
                                    <div>
                                        <div className="img">
                                            <img src="static/img/model_04.png" title="" alt="" />
                                        </div>
                                        <div >
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/*note1*/}

                    <section id="home" className="home-banner-01 gray-bg-g border-bottom">
                        <div className="container">
                            <div className={`row  align-items-center ${styles.fixBannerHeight}`}>
                                <div className="col col-md-12 col-lg-6 col-xl-6 p-80px-tb md-p-30px-b sm-p-60px-t m-50px-t">
                                    <div className="home-text-center p-50px-r md-p-0px-r">
                                        <h2 className="font-alt">Do you want to be incharge of your own style & fashion</h2>    
                                        <div className='malan'>
                                        <ol>
                                            <li>Choose your fabric</li>
                                            <div className='h7'>
                                            <h7>Find a fabric that suits your style</h7>
                                            </div>
                                            <li>Provide accurate measurements</li>
                                            <div className='h8'>
                                            <h8>Outfit requirments your exact measurements</h8>
                                            </div>
                                            <li>Choose a style and delivery options</li>
                                            <div className='h9'>
                                            <h9>We will deliver your outfit to your doorstep</h9>
                                            </div>
                                        </ol>
                                        </div>
                                    </div>
                                </div> 
                                
                                <div className="col-md-12 col-lg-6 col-xl-6 home-right m-50px-t md-m-0px-t">
                                    <div className="home-right-inner">
                                        <div className='container'>
                                            <h5 className='home-banner-01 h5'>Avoid the hassle of going to your tailor's shop and waiting for a long time to get your dress.Sit back and relax</h5>
                                        </div>
                                        <div className="3dmodel">
                                            <img src="../static/img/3d.png"/>
                                          
                                        </div>
                                    </div>
                                </div>
                                
      
                            </div>
                        </div>
                    </section>



                    {/**what users say */}

                    <section className="section testimonial-section border-bottom">
                        <div className="container">
                            <div className="row justify-content-center m-60px-b md-m-40px-b">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <div className="section-title text-center">
                                        <h2 className="theme-after-bg">What our users say</h2>
                                        <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <Carousel autoPlay={true} showThumbs={false} centerMode={true}>
                                        <div className="testimonial-col">
                                            <i className="ti-quote-left"></i>
                                            <div className="say">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                            <div className="user">
                                                <div className="img">
                                                    <img src="static/img/avtar1.jpg" alt="" title="" />
                                                </div>
                                                <div className="name">
                                                    <span>Jennifer Lutheran</span>
                                                    <label>CEO at AppWay</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <i className="ti-quote-left"></i>
                                            <div className="say">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                            <div className="user">
                                                <div className="img">
                                                    <img src="static/img/avtar2.jpg" alt="" title="" />
                                                </div>
                                                <div className="name">
                                                    <span>Salma Hayek</span>
                                                    <label>CEO at AppWay</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <i className="ti-quote-left"></i>
                                            <div className="say">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                            <div className="user">
                                                <div className="img">
                                                    <img src="static/img/avtar3.jpg" alt="" title="" />
                                                </div>
                                                <div className="name">
                                                    <span>Martin Lutheran</span>
                                                    <label>CEO at AppWay</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <i className="ti-quote-left"></i>
                                            <div className="say">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                            <div className="user">
                                                <div className="img">
                                                    <img src="static/img/avtar4.jpg" alt="" title="" />
                                                </div>
                                                <div className="name">
                                                    <span>Brad Pitt</span>
                                                    <label>CEO at AppWay</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-col">
                                            <i className="ti-quote-left"></i>
                                            <div className="say">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                            <div className="user">
                                                <div className="img">
                                                    <img src="static/img/team-1.jpg" alt="" title="" />
                                                </div>
                                                <div className="name">
                                                    <span>Jennifer</span>
                                                    <label>CEO at AppWay</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/**contact us */}

                    <section id="contatus" className="section border-bottom">
                        <div className="container">
                            <div className="row">
                               
                                <div className="col-md-4 col-lg-6 m-15px-tb">
                                <h2>Contact our designer to curate your unique style</h2>
                                    <div className="contact-form m-50px-l md-m-0px-l">
                                        
                                        <form className="contactform" method="post">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input name="name" type="text" placeholder="Name" className="validate form-control" required="" />
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input name="name" type="text" placeholder="Last Name" className="validate form-control" required="" />
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" placeholder="Email" name="email" className="validate form-control" required="" />
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea placeholder="Message" name="message" className="form-control" required=""></textarea>
                                                        <span className="input-focus-effect"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="send">
                                                    <button className={`btn btn-xs btn-primary ${styles.btnCustomBlack}`}> Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-6 m-15px-tb">
                                    <img src="../static/img/banner_Image_1.png"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="footer-light">
                    <section className="footer-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-5 sm-m-15px-tb md-m-30px-b">
                                    <h4 className="font-alt">THOONI</h4>
                                   

                                </div>
                                <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
                                    <ul className="fot-link">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Service</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
                                    <ul className="fot-link">
                                        <li><a href="#">Testimonial</a></li>
                                        <li><a href="#">designer Consultation</a></li>
                                    </ul>
                                </div>

                                <div className="col-md-4 col-lg-3 sm-m-15px-tb">
                                    <p>Click to download our app now</p>
                                    <div className="subscribe-box1">
                                            <img src="../static/img/apple.png" className={`${styles.customFooterBtn}`}/>
                                           <img src="../static/img/google.png"  className={`${styles.customFooterBtn}`} />
                                        </div>
                                        <ul className="social-icons">
                                        <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a className="linkedin" href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="footer-copy">
                                <div className="row">
                                    <div className="col-12">
                                        <p>2023 Thooni.com. All Rights Reserved.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        </>
    )
}
