import {useState, useEffect} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/e86c45aab4e2e2e824fff008/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]))
    },[currency])
    return data
}

export default useCurrencyInfo;