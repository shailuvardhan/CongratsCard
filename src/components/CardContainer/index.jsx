import "./index.css"

const CardConatiner=()=>{
    return(
        <>
            <div className="card-container">
                <div className="img-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="profile" className="img"/>
                </div>
                <h2 className="name">Kiran V</h2>
                <p className="para">Vishnu Institute of Technology Bhimavaram</p>
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="watch" className="watch-img" />
            </div>
        </>
    )
}

export default CardConatiner;
