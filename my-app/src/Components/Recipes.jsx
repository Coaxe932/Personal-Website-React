import NavBlock from "./NavBlock";


// Components


export default function Home() {
    return (
        <div>
            <NavBlock />
            <video className="background-video" autoPlay loop muted>
                    <source src="../Videos/mixkit-glodfish-swimming-8498-medium.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
    )
}