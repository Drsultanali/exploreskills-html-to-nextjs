interface InputProps {
placeHolder: string;
type?: "text" | "number" | "password" | "email";
}
const Input:React.FC<InputProps> = ({type, placeHolder}) => {
  return (
    <input type={type} placeholder={placeHolder} required />

  )
}

export default Input