import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    useEffect(() =>{
        if(email){
            fetch(`https://b612-used-products-resale-server-side-mdyiaz.vercel.app/usertype/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data, 'from isBuyer');
                setIsBuyer(data.isBuyer);

                setIsBuyerLoading(false);
            })
        }

    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;