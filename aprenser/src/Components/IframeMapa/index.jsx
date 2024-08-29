function IframeMapa() {
    return (
        <div className="iframe">
            <h2>Contatos</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184188.61701904522!2d-74.06861163236552!3d40.72646586499632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e1!3m2!1spt-BR!2sbr!4v1724892511261!5m2!1spt-BR!2sbr" 
                width="95%" 
                height="600" 
                style={{ border: "0", display: "block", margin: "0 auto" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default IframeMapa;
