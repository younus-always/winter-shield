import useTitle from "../hook/useTitle"
import AboutUs from "./AboutUs"
import Banner from "./Banner"
import Heading from "./Heading"
import HowitWorks from "./HowitWorks"
import MakeDifference from "./MakeDifference"

const Home = () => {
  useTitle('Home');

  return (
    <>
      {/* banner */}
      <Banner />
      <div className="w-11/12 lg:max-w-6xl mx-auto py-5">
        {/* how it works */}
        <section className="py-7">
          <Heading title={"How it Works"}
            subtitle={"Join our volunteer network in few steps"} />
          <HowitWorks />
        </section>
        {/* about us */}
        <section className="py-7">
          <AboutUs />
        </section>
        {/* want to make differrence */}
        <section className="py-7">
          <MakeDifference />
        </section>
      </div>
    </>
  )
}

export default Home