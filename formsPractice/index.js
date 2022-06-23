function Form() {
    const [formData, setFormData] = React.useState(
        {
            email: "", 
            password: "",
            confirmpassword: "", 
            joinedNewsletter: true,
            
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password==formData.confirmpassword){
            console.log("Successfully Signed up")
        }else{
            console.log("Passwords do not mattch")
            return
        }

        if(formData.joinedNewsletter){
            console.log("Thanks for signing up for our newsletter")
        }
    }
    
    return (
        <div className="form-conatiner">
        <form onSubmit={handleSubmit} className="form">
            <input
                className="form--input"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                className="form--input"
                type="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                name="password"
                
            />
            <input
                className="form--input"
                type="password" 
                value={formData.confirmpassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                name="confirmpassword"
                
            />
            <div className="form--marketing">
            <input 
                type="checkbox" 
                id="okayToEmail" 
                checked={formData.joinedNewsletter}
                onChange={handleChange}
                name="joinedNewsletter"
            />
            <label htmlFor="joinedNewsletter">I want to join the join Newsletter</label>
            </div>
            
            <button className="form--submit">Submit</button>
        </form>
        </div>
    )
}

ReactDOM.render(<Form />,document.getElementById("root"))