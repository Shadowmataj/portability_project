import "./CSS/Footer.css";

export const Footer = () => {
    return (
        <footer
            style={{
                position: "static",
                bottom: "0px",
                height: "15vh",
                width: "100%",
            }}
        >
            <br></br>
            <nav>
                <a href="">
                    <img
                        src="../img/redes/facebook.png"
                        alt="logo_facebook"
                    ></img>
                </a>
                <a href="">
                    <img
                        src="../img/redes/instagram.png"
                        alt="logo_instagram"
                    ></img>
                </a>
                <a href="">
                    <img
                        src="../img/redes/youtube.png"
                        alt="logo_youtube"
                    ></img>
                </a>
            </nav>
            Derechos Reservados Portabilidad © 2025
        </footer>
    );
};
