import Image from "next/image";
import Navbar from "./components/nav/navbar";
import TextCard from "./components/textcard/textcard";
import StudentCard from "./components/studentCard/studentCard";
import ImgCard from "./components/imgcard/imgcard";



const HomePage = () => {
  return (

      <>
        <Navbar/>

        <section className="course">
          <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
          </div>
          <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">
            <div className="course-col">
              <TextCard h3="Undergraduate Programs" />
            </div>
            <div className="course-col">
              <TextCard h3="Graduate Programs" />
            </div>
            <div className="course-col">
          
              <TextCard h3="Adult Learning & Degree Completion" />
            </div>
          </div>
        </section>

        <section className="campus">
          <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
          </div>
          <h1>TAKE OUR VIRTUAL TOUR</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">
            <div className="campus-col">
              <Image src="/Campus1.png" width={400} height={400} alt="" />
              <div className="layer">
                <h3>DELHI</h3>
              </div>
            </div>
            <div className="campus-col">
              <Image src="/Campus2.png" width={400} height={400} alt="" />
              <div className="layer">
                <h3>HYDERABAD</h3>
              </div>
            </div>
            <div className="campus-col">
              <Image src="/Campus3.png" width={400} height={400} alt="" />
              <div className="layer">
                <h3>MUMBAI</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="facilities">
          <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
          </div>
          <h1>Our Facilities</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">
            <ImgCard imgSrc="/libary.png" heading="Best Libary" />
            <ImgCard imgSrc="/playground.png" heading="Athletics" />
            <ImgCard imgSrc="/food.png" heading="Tasty and Hewidth={400} height={400} althy Food"/>
          </div>
        </section>

        <section className="testimonials">
          <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
          </div>
          <h1>What Our Student Says</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <div className="row">
            <div className="testimonials-col">
              <StudentCard />
            </div>
            <div className="testimonials-col">
           <StudentCard />
            </div>
          </div>
        </section>

        <section className="cta">
          <h1>GET READY FOR A BRIGHT FUTURE</h1>
          <a href="contact.html" className="hero_btn">CONTACT US</a>
        </section >
      </>
  )
}
export default HomePage;