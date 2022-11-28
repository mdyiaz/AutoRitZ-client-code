import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() =>{
        if(email){
            fetch(`https://b612-used-products-resale-server-side-mdyiaz.vercel.app/usertype/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data, 'from useAdmin');
                setIsAdmin(data.isAdmin);

                setIsAdminLoading(false);
            })
        }

    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;