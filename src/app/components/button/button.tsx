interface ButtonProps {
    text: string;
   
    btn?: string
}
const Button:React.FC<ButtonProps> = ({text, btn}) => {
  return (
    <button type="submit" className={`hero_btn ${btn}`}>{text}</button>
  )
}

export default Button;