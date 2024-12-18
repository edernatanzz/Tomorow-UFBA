import { useEffect, useState } from "react"
import feachProducts from "../api/api";

export default function Products(){
    const [products , setProducts] = useState();

    useEffect( () => {
        feachProducts('iphone');

    }, [])
    return (
        <section>
            produtos
        </section>

    )
}