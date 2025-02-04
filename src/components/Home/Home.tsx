import LandingPage from "../LandingPage/LandingPage";
import Gallery from "../Gallery/Gallery";
import AboutDecoupage from "../About/Decoupage/AboutDecoupage";
import AboutMe from "../About/Me/AboutMe";
import Course from "../Course/Course";
import AboutSchool from "../About/School/AboutSchool";
import Footer from "../Footer/Footer";
import News from "../News/News";
import { useMediaQuery } from "react-responsive";
import LandingPageMobile from "../LandingPage/LandingPageMobile";
import NewsMobile from "../News/NewsMobile";
// import AboutDecoupageMobile from "../About/Decoupage/AboutDecoupageMobile";
import * as S from "./Home.styles"
import About from "../Mobile/About";
const Home = () => {
  const isDesktop: boolean = useMediaQuery({ query: `(min-width: 768px)` })
  return (
    <>
      {isDesktop &&
        <>
          <S.Content>
            <LandingPage />
            <News />
            <Gallery />
            <AboutDecoupage />
            <AboutMe />
            <AboutSchool />
            <Course />
            <Footer />
          </S.Content>
        </>
      }
      {!isDesktop &&
        <>
          <S.Content_Mobile>
            <LandingPageMobile />
            <NewsMobile />
            <About />
            {/* <AboutDecoupageMobile /> */}
            <Gallery />
            <Footer />
          </S.Content_Mobile>
        </>
      }
    </>
  )
}

export default Home;