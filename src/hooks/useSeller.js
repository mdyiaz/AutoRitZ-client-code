import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() =>{
        if(email){
            fetch(`http://localhost:5000/usertype/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data, 'from isAdmin');
                setIsSeller(data.isSeller);

                setIsSellerLoading(false);
            })
        }

    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;