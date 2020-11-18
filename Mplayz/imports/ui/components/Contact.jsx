import React from "react";
import '../../../public/src/css/components/contact.css';

const Contact = () => {
    return (
        <>
            <h1 className='title-form-contact'>Formulaie de contact</h1>
            <form id="form-contact" action="" method="post">
                <label htmlFor="email">Votre mail</label>
                <input type="email" name="email" id="" />
                <label htmlFor="text">Formulation de la demande</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </>
    )
}

export default Contact;