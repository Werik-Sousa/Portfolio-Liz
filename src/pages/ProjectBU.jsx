import HeroBU from "../components/projectBU/HeroBU";
import AboutBU from "../components/projectBU/AboutBU";
import ScreensBU from "../components/projectBU/ScreensBU";
import FeaturesBU from "../components/projectBU/FeaturesBU";
import ProcessDesign from "../components/projectBU/ProcessDesign"
import MoodBoard from "../components/projectBU/MoodBoard"
import FlowConstruction from "../components/projectBU/FlowConstruction"
import MainScreens from "../components/projectBU/MainScreens"
import VisualIdentity from "../components/projectBU/VisualIdentity"
import Tecnica from "../components/projectBU/Tecnica"
import Tipografia from "../components/projectBU/Tipografia"
import Cards from "../components/projectBU/Cards"
import ScreensGif from "../components/projectBU/ScreensGif"
import Footer from "../components/projectBU/Footer"
import GifCard from "../components/projectBU/GifCard"
import Illustrations from "../components/projectBU/Illustrations"

const ProjectBU = () => {
  return (
    <div>
      <HeroBU />
      <AboutBU />
      <ProcessDesign/>
      <MoodBoard/>
      <FeaturesBU />
      <FlowConstruction/>
      <ScreensBU />
      <ScreensGif/>
      <MainScreens/>
      <VisualIdentity/>
      <Tecnica/>
      <Tipografia/>
      <Illustrations/>
      <Cards/>
      <GifCard/>
      <Footer/>
    </div>
  );
};

export default ProjectBU;