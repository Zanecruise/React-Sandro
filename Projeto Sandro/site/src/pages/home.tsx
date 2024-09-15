import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/buttons.css"
import { useState } from "react";
import Button from "../components/Button";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import TotalMind from "../assets/images/TotalMind.webp";
import Harmony from "../assets/images/HarmonyHair.webp";
import Audionex from "../assets/images/AudioNex.webp";
import Fignar from "../assets/images/Fignar.webp";
import "../styles/hero.css";
import "../styles/produtos.css";



export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
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

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
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
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>

            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Suplementos para a sua saúde!</h1>
                    <p>Já pensou em melhorar sua saude somente com suplementos</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>


            </section>

            <div className="container content">
                <h2>Conheça alguns de nossos produtos que temos!</h2>
            </div>
            

            <section id="produtos">
                <div className="grid-container">
                    <div className="produto">
                        <img src={TotalMind} alt="Produto 1"/>
                    </div>
                    <div className="produto">
                        <img src={Harmony} alt="Produto 2"/>
                    </div>
                    <div className="produto">
                        <img src={Audionex} alt="Produto 3"/>
                    </div>
                    <div className="produto">
                        <img src={Fignar} alt="Produto 4"/>
                    </div>
                </div>
            </section>


        </>
    )
}