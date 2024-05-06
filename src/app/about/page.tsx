import Image from "next/image"
import Nav from "../components/nav/nav"
export default function About () {
    return (
        <body>
<Nav title="About Us" />
    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world&apos;s largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <Image src="/about.png" alt="" width={400} height={400} />
            </div>
        </div>
    </section>


</body>
    )
}