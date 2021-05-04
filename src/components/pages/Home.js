import Intro from "./Intro";
import Team from "./Team";



const Home = (props) => {
    return (
        <div className="container">
            <Intro />
            <Team />
        </div>
    );
}

export default Home