import React from 'react'
import "./TitlePage.css"
import Zoom from 'react-reveal/Zoom'

const TitlePage = () => {
    return(
        <div className = "title-page">
            
            <div className = 'title-container'>
                <div className = 'tpage-staticblock-left'></div>
                <div className="title">
                        <Zoom bottom>
                        <div className="team-name">Team</div>
                        <div className="team-name">Sammard</div>
                        <div className="title-text">GIVE YOUR DREAMS SOME SPACE TO UNFOLD</div>
                        </Zoom>
                </div>
            </div>            
        </div>
    )
}

export default TitlePage