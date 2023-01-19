import NavBlock from "./NavBlock";


// Components



export default class Projects extends React.Component {


    constructor(props) {
        super(props);
        this.bgvideo = null;
    }
    componentDidMount() {
        this.bgvideo.muted = true;
        this.bgvideo.play();
    }


    render(){
        return (
            <div>
                <NavBlock />
                <video ref={(video) => { this.bgvideo = video; }} className="background-video" autoPlay loop muted>
                    <source src="../Videos/mixkit-glodfish-swimming-8498-medium.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}