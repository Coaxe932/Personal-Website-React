import NavBlock from "./NavBlock";
import '../CSS/Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.bgvideo = null;
    }
    componentDidMount() {
        this.bgvideo.muted = true;
        this.bgvideo.play();
    }
    render() {
        return (
            <div>
                <NavBlock />
                <div className="Welcome">
                    <video ref={(video) => { this.bgvideo = video; }} className="background-video" autoPlay loop muted>
                        <source src="../Videos/mixkit-glodfish-swimming-8498-medium.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1> Welcome to my Website! </h1>
                    <p> Please feel free to look around. My contact information is in my resume (See link above) </p>
                </div>
            </div>
        )
    }
}
