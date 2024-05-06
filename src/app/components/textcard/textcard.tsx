interface HeadingProps{
    h3: string;
}
const TextCard: React.FC<HeadingProps> = ({h3}) => {
  return (
    <>
    <h3>{h3}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
                </>
  )
}

export default TextCard