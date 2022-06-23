function Contact(props ){
    return(
        
            <div className="contact-card">
                <img src={props.img} className="contact-card-img"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./phone-icon.png"  />
                    <p>props.phone</p>
                </div>
                <div className="info-group">
                    <img src="./mail-icon.png" />
                    <p>props.email</p>
                </div>
            </div>
    )
}

const page=(
    <div className="contacts">
        <Contact 
                img="./photo1.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
        />
        <Contact 
                img="./photo2.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
        />
        <Contact 
                img="./photo3.jpg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
        />
        <Contact 
                // to pass no.
                // upvotes={100}
                img="./photo4.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
        />
        
    </div>
)

ReactDOM.render(page,document.getElementById("root"))