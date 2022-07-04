import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

const Body = () => {
    return (
        <div>
            {/*Banner*/}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="maskot.png" alt />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-dark"><b>Moon</b> Hallo</h1>
                                        <h3 className="h2">Tiny and Perfect eCommerce </h3>
                                        <p>
                                            Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
                                            This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website.
                                            Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                            <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                            <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="mahasiswa.jpg" alt />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Proident occaecat</h1>
                                        <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                        <p>
                                            You are permitted to use this Zay CSS template for your commercial websites.
                                            You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="banner_img_03.jpg" alt />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Repr in voluptate</h1>
                                        <h3 className="h2">Ullamco laboris nisi ut </h3>
                                        <p>
                                            We bring you 100% free CSS templates for your websites.
                                            If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/*Category */}
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Selamat Datang</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="dosen.jpg" className="rounded-circle img-fluid border" /></a>
                        <h5 className="text-center mt-3 mb-3">Data Dosen</h5>
                        <Link href="user/dosen">
                        <p className="text-center"><a className="btn btn-outline-dark">Kunjungi</a></p>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="mahasiswa.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Data Mahasiswa</h2>
                        <Link href="user/mahasiswa">
                        <p className="text-center"><a className="btn btn-outline-dark">Kunjungi</a></p>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="about.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Profil Kami</h2>
                        <p className="text-center"><a className="btn btn-outline-dark">Kunjungi</a></p>
                    </div>
                </div>
            </section>
            {/*Berita*/}
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Berita Terbaru</h1>
                            <p>
                                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/">
                                <a>
                                    <img src="b1.jpeg" className="card-img-top" alt="..." />
                                </a>
                                </Link>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                            <i className="bi bi-star" />
                                        </li>
                                        <li className="text-muted text-right"><i class="bi bi-hand-thumbs-up-fill"></i>10K</li>
                                    </ul>
                                    <Link href="/"><a className="h5 text-decoration-none text-dark">PEMBINAAN DOSEN DAN KARYAWAN TENTANG STANDART TRIDARMA</a></Link>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                    </p>
                                    <p className="text-muted"> Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/">
                                <a>
                                    <img src="b2.jpg" className="card-img-top" alt="..." />
                                </a>
                                </Link>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                            <i className="bi bi-star" />
                                        </li>
                                        <li className="text-muted text-right"><i class="bi bi-hand-thumbs-up-fill"></i>10K</li>
                                    </ul>
                                    <Link href="/"><a className="h5 text-decoration-none text-dark">TAUSIYAH DAN SILATURAHMI DALAM RANGKA DIESNATALIS KE-29</a></Link>
                                    <p className="card-text">
                                        Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                                    </p>
                                    <p className="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-80">
                                <Link href="/"><a href="">
                                    <img src="b3.jpg" className="card-img-top" alt="..." />
                                </a></Link>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                            <i className="bi bi-star" />
                                        </li>
                                        <li className="text-muted text-right"><i class="bi bi-hand-thumbs-up-fill"></i>10K</li>
                                    </ul>
                                    <Link href="/">
                                    <a  className="h5 text-decoration-none text-dark">"FOOD LAVITATION PHOTOGRAPHY" BISNIS BARU DI BIDANG FOTOGRAFI</a>
                                    </Link>
                                    <p className="card-text">
                                        Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                                    </p>
                                    <p className="text-muted">Reviews (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Us*/}
            <section className="bg-dark py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>About Us</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src="7033730_among us_icon.svg" alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
            {/*Our Services*/}
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Our Services</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-dark text-center"><i className="bi bi-truck bi-lg" /></div>
                            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-dark text-center"><i className="bi bi-arrow-left-right"></i></div>
                            <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-dark text-center"><i className="bi bi-percent" /></div>
                            <h2 className="h5 mt-4 text-center">Promotion</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-dark text-center"><i className="bi bi-person-fill" /></div>
                            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                        </div>
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}
export default Body;