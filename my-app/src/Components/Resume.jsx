import NavBlock from "./NavBlock";


// Components
import ResumeCard from './SubComponents/ResumeCard';
import '../CSS/Resume.css';


export default function Resume() {

        return (
            <div>
                <NavBlock />
                <video className="background-video" autoPlay loop muted>
                        <source src="../Videos/mixkit-glodfish-swimming-8498-medium.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                <ResumeCard />
            </div>
        )
}