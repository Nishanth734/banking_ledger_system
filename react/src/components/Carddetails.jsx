import { useParams } from "react-router-dom"

const Carddetails=()=>{
    const {id}=useParams();
    return (
        <>
        <h3>Hotel Id:{id}</h3>
        <p>Experience the ultimate luxury in this beautiful 3-bedroom villa in the heart of Arpora. Comes with a massive private pool, a fully equipped kitchen, and daily housekeeping. Just a 10-minute drive to Baga Beach!</p>
        </>
    )
}

export {Carddetails}