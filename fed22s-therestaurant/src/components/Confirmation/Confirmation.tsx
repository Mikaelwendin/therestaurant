import { Link } from "react-router-dom"

export const Confirmation = () => {
    return <>
    <div>
        <h1>Ditt bord är nu avbokat</h1>
        <p>Clicka <Link to="/">här</Link> för att komma tillbaka till startsidan.</p>
    </div>
    
    </>
}