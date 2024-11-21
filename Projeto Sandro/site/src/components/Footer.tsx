import React from "react";
import "../styles/footer.css";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                

                <div className="footer-column">
                    <h4>Links</h4>
                    <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#produtos">Produtos</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <img src={Logo} alt="Logo Dra Julia" className="logo" />
                </div>

                <div className="footer-column">
                    <h4>Social</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Site feito para a aula do Sandro.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
