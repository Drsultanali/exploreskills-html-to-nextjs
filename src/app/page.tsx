import Image from "next/image";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";



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
              <h3>Undergraduate Programs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
            </div>
            <div className="course-col">
              <h3>Graduate Programs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
            </div>
            <div className="course-col">
              <h3>Adult Learning & Degree Completion</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
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
            <div className="facilities-col">
              <Image src="/libary.png" width={400} height={400} alt="" />
              <h3>Best Libary</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
            <div className="facilities-col">
              <Image src="/playground.png" width={400} height={400} alt="" />
              <h3>Athletics</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
            <div className="facilities-col">
              <Image src="/food.png" width={400} height={400} alt="" />
              <h3>Tasty and Hewidth={400} height={400} althy Food</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
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
              <Image src="/user.png" width={400} height={400} alt="oo.." />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                  praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.</p>
                <h3>Student Name</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="testimonials-col">
              <Image src="/user.png" width={400} height={400} alt="oo.." />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                  praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.</p>
                <h3>Student Name</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-width={400} height={400} alt"></i>
              </div>
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