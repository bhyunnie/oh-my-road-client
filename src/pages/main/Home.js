import GlobalNavigationBar from "../../components/navbar/GlobalNavigationBar";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import FirstSection from "./components/FirstSection";

const Home = () => {
  return (
    <div id="home">
      <GlobalNavigationBar></GlobalNavigationBar>
      <FirstSection></FirstSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
