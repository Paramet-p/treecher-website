import { useEffect, useState } from "react"
import  axiosInstance  from "./axios"


const Whoami = () => {
	const [user, setUser] = useState([])

	useEffect( async () => {
		let user_result = await axiosInstance.get('user/whoami')
		    console.log(user_result.data, user_result.status)
		    setUser(user_result.data)
        
	}, [])

    return user
}

export default Whoami