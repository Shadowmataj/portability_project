import "./CSS/ContactForm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config/config";

const ContactForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [formRegister, setFormRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const handleFirstName = (e) => {
        setFormRegister({
            ...formRegister,
            firstName: e.target.value,
        });
    };

    const handleLastName = (e) => {
        setFormRegister({
            ...formRegister,
            lastName: e.target.value,
        });
    };

    const handleEmail = (e) => {
        setFormRegister({
            ...formRegister,
            email: e.target.value,
        });
    };

    const handlePhoneNumber = (e) => {
        setFormRegister({
            ...formRegister,
            phoneNumber: e.target.value,
        });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { rows, errors, warnings } = await config.client.createTableRows({
            table: "CustumerTable",
            rows: [
                {
                    email: formRegister.email,
                    last_name: formRegister.lastName,
                    first_name: formRegister.firstName,
                    phone_number: formRegister.phoneNumber,
                    portability_status: "iniciado",
                },
            ],
        });
        setIsLoading(false);

        // const text = `Hola, quiero cambiarme a Bait. Nombre: ${formRegister.firstName} Apellido: ${formRegister.lastName} Número a portar: ${formRegister.phoneNumber} Confirmación: ${formRegister.phoneNumber} Contacto: ${formRegister.phoneNumber} Email: ${formRegister.email}`
        navigate(`${config.botLink}`);
    };
    useEffect(() => {}, []);
    return (
        <section className="contact-container">
            <div id="contact-form" className="contact">
                <br></br>
                <form
                    className="form-data d-flex flex-column jusYOUR_PAT_HEREtify-content-center align-items-center"
                    onSubmit={handleRegistration}
                >
                    <input
                        id="phone"
                        className="data"
                        type="text"
                        value={formRegister.phoneNumber || ""}
                        placeholder="Ingresa a 10 digitos el número que deseas portar"
                        name="phoneNumber"
                        onChange={handlePhoneNumber}
                        required
                    ></input>
                    <input
                        id="first_name"
                        className="data"
                        type="text"
                        value={formRegister.firstName || ""}
                        placeholder="Ingresa tu(s) nombre(s)"
                        name="firstName"
                        onChange={handleFirstName}
                        required
                    ></input>
                    <input
                        id="last_name"
                        className="data"
                        type="text"
                        value={formRegister.lastName || ""}
                        placeholder="Ingresa tu(s) nombre(s)"
                        name="lastName"
                        onChange={handleLastName}
                        required
                    ></input>
                    <input
                        id="email"
                        className="data dato-email"
                        type="email"
                        value={formRegister.email || ""}
                        placeholder="Email"
                        name="email"
                        onChange={handleEmail}
                        required
                    ></input>
                    <div className="buttons-form">
                        <input
                            id="submit"
                            className="button-form"
                            type="submit"
                        ></input>
                    </div>
                </form>
                <br></br>
            </div>
        </section>
    );
};

export default ContactForm;
