import { useEffect, useState } from 'react'
import JsonData from "../data/data.json";

function UsePageDataHook() {
    const [landingPageData, setLandingPageData] = useState({});
    
    useEffect(()=> {
        setLandingPageData(JsonData)
    },[])

    return {landingPageData, setLandingPageData}
}

export default UsePageDataHook
