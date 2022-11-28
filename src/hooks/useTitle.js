import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Auto RitZ`;
    }, [title])
};

export default useTitle;