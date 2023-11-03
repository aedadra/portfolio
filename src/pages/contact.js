import "../styles/Contact.scss"

function Contact() {
    
    return (
        <div >
            <form class="contact">
                <h1 className="contact__title">Contact</h1>
                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom" />
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" />
                <button class="contact__submit">Envoyer</button>
            </form>
        </div>
    );
}   
    
export default Contact
