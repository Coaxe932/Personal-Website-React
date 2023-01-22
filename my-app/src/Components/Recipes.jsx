import NavBlock from "./NavBlock";
import '../CSS/Recipe.css';


// Components
import RecipeCard from "./SubComponents/RecipeCard";


export default function Recipes() {


    return (
        <div>
            <NavBlock />
            <video className="background-video" autoPlay loop muted>
                <source src="../Videos/mixkit-glodfish-swimming-8498-medium.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="Card--Container">
            <RecipeCard />
            </div>
        </div>
    )
}