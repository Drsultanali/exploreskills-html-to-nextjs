import Image from "next/image"

const StudentCard = () => {
  return (
    <>
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
              </>
  )
}

export default StudentCard