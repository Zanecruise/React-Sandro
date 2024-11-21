import React from "react";
import "../styles/testimonials.css";
import image1 from "../assets/images/depoimento1.jpg";



const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <header>
                <p className="desktop-only">Nossos clientes</p>
                <h2>Cada cliente mais feliz!</h2>
                <p>
                    Alguns depoimentos de nossos clientes
                </p>
            </header>

            <div className="carousel">
                <div className="carousel-content">
                    <div className="carousel-card">
                        <img src={image1} alt="Paciente 1" className="profile-image"/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione aliquam incidunt suscipit, nemo rem nisi voluptate, accusamus maxime quod molestias debitis! Quidem voluptatem nisi tempore id fugit ex ipsa inventore.</p>
                        <div className="rating">★★★★★</div>
                        <h4>Patrick</h4>
                        <span>18 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image1} alt="Paciente 2" className="profile-image"/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat esse, eius eveniet porro velit sapiente dolore atque quibusdam quisquam assumenda quod consequatur, deleniti molestiae explicabo sed? Libero quidem vitae mollitia?</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Patrick</h4>
                        <span>18 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image1} alt="Paciente 3" className="profile-image"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente ipsum distinctio cumque tenetur aliquid temporibus. Doloremque tenetur a provident, voluptas odit mollitia modi autem incidunt, suscipit ipsam, blanditiis dolorum!</p>
                        <div className="rating">★★★★★</div>
                        <h4>Patrick</h4>
                        <span>18 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image1} alt="Paciente 4" className="profile-image"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum praesentium, repudiandae libero sunt possimus aliquam! Ea repellendus unde labore pariatur temporibus eligendi exercitationem et eius optio, aspernatur nihil quidem.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Patrick</h4>
                        <span>18 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image1} alt="Paciente 5" className="profile-image"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, vel eligendi? Debitis voluptas cum repellendus soluta non ducimus, voluptatibus dicta dignissimos quis illo sunt, incidunt voluptatem, nam beatae deleniti error.</p>
                        <div className="rating">★★★★★</div>
                        <h4>Patrick</h4>
                        <span>18 anos</span>
                    </div>

                    <div className="carousel-card">
                        <img src={image1} alt="Paciente 6" className="profile-image"/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos labore quam velit sed illo? Ipsa, ratione fugiat, similique, nisi veniam obcaecati quidem ex pariatur facere commodi consectetur quis! Maxime, optio.</p>
                        <div className="rating">★★★★☆</div>
                        <h4>Patrick</h4>
                        <span>18 anos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
