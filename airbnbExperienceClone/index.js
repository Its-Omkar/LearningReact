// import data from "./data"                         This doesnt run as this isnt suppprted but you have to import file like this

function Navbar(){
    return(
        <nav>
            <img src="./airbnb-logo.png" className="nav--logo"></img>
        </nav>

    )
}
function Hero(){
    return(
        <section className="hero">
            <img src="experiences.png" className="hero--photo"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home </p>
        </section>

    )
}

function Card(props){
    return(
        <div className="card">
            {!props.openspots && <div className="card--badge">SOLD OUT</div>}
            <img src={props.img} className="card--image"></img>
            <div className="card--stats">
                <img src="./Star.png" className="card--star"></img>        
                {/*{ `./images/{star.png}`} */}
                <span >{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>

    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <Hero /> 
        <div className="card-con">
            <Card 
                img="./photo1.png"
                rating={5.0}
                reviewCount={6}
                location="USA"
                title="Life Lessons from Katie Zaferes"
                price={136}
                openspots={0}
            />
            <Card 
                img="./photo2.png"
                rating={3.0}
                reviewCount={16}
                location="India"
                title="Life Lessons from The Queen"
                price={365}
                openspots={10}
            />
            <Card 
                img="./photo1.jpg"
                rating={3.0}
                reviewCount={5}
                location="USA"
                title="Life Lessons from Catie"
                price={36}
                openspots={2}
            />
            <Card 
                img="./photo2.jpg"
                rating={2.9}
                reviewCount={12}
                location="USA"
                title="Life Lessons from Parkie"
                price={5}
                openspots={20}
            />

        </div>
    </div>
    ,document.getElementById("root"))
    
    
    
    
    
    
    
    
    
    
    
{/* const cards = data.map(item => {
            return (
                    <Card 
                        img={item.coverImg}
                        rating={item.stats.rating}
                        reviewCount={item.stats.reviewCount}
                        location={item.location}
                        title={item.title}
                        price={item.price}
                    />
                    )
                })        
                    
                    return (
                        <div>
                            <Navbar />
                            {cards}
                        </div>
                    ) */}



        