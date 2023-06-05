import { Link } from "react-router-dom"
interface IConfirmationProps {
    msg: string,
}



export const Confirmation = ({msg}: IConfirmationProps) => {
    return <>
    <div>
        <h1>Tack, {msg}</h1>
        <p>Clicka <Link to="/">här</Link> för att komma tillbaka till startsidan.</p>
    </div>
    
    </>
}