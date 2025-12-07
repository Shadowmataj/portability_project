import { Link } from "react-router-dom";
import "./CSS/Header.css";

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/">
                        <img
                            src="https://static.wixstatic.com/media/54ed4f_23bbd40e79284c5faaa3db0682447c8a~mv2.png/v1/fill/w_489,h_80,al_c,lg_1,q_85,enc_avif,quality_auto/encabezado_PNG.png"
                            alt="Portabilidad_bait"
                        ></img>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav navbar"></div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
