import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/voldemortlord573-code')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, [])
    const data = useLoaderData()
    return(
        <div>Github followers : {data.followers}
        <img src={data.avatar_url} alt='git pic' width={300} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/voldemortlord573-code')
        return response.json()
}