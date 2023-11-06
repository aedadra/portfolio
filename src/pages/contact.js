import "../styles/Contact.scss"

function Contact() {

    const send = (e) => {
        e.preventDefault();
        document.contact.reset();
        alert("votre message à bien été envoyé")
    };
    
    return (
        <div >
            <form name="contact" class="contact" action="mailto:aedadra@gmail.com" onSubmit={send}>
                <h1 className="contact__title">Contact</h1>
                <label for="nom">Nom</label>
                <input type="text" name="nom" required />
                <label for="email">Email</label>
                <input type="email" name="email" required/>
                <label for="message">Message</label>
                <textarea name="message" cols="30" rows="10" required />
                <button type="submit" class="contact__submit">Envoyer</button>
            </form>
        </div>
    );
}   
    
export default Contact
