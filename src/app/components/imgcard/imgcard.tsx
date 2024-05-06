import Image from "next/image"
import React from "react";
interface ImgCardProps {
    imgSrc: string;
    heading: string;
}
const ImgCard: React.FC<ImgCardProps> = ({imgSrc, heading}) => {
  return (
    <>
       <div className="facilities-col">
              <Image src={imgSrc} width={400} height={400} alt="" />
              <h3>{heading}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
    </>
  )
}

export default ImgCard