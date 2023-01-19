import NavBlock from "./NavBlock";


// Components
import ResumeCard from './SubComponents/ResumeCard';


export default function Home() {
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