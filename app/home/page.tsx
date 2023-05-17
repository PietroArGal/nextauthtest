import HeroSection from "./components/HeroSection";
import { HomeHeader } from "../components/headers/HomeHeader";

const Home = () => {

    return (
        <div className="bg-white">
            <HomeHeader />
            <HeroSection />
        </div>
    );
};

export default Home;