import NavBlock from "./NavBlock";
import '../CSS/Home.css';


export default function Home() {
    return (
        <div>
            <NavBlock />
            <div className="Welcome">
                <video className="background-video" autoPlay loop muted>
                    <source src="../Videos/mixkit-glodfish-swimming-8498-medium.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1> Welcome to my Website! </h1>
                <p> Please fee free to look around. My contact is in my resume (See link above) </p>
            </div>
        </div>
    )
}