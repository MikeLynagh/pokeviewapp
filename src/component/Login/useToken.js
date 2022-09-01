import { useState } from "react"

// code taken from 
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications


//create a function called useToken 
export default function useToken(){

    // getToken is a function that gets and sets the userToken to from and to localStorage
    const getToken = () => {
        const tokenString = localStorage.getItem("token")
        const userToken = JSON.parse(tokenString)
        return userToken?.token
        }

        const [token, setToken] = useState(getToken())

        const saveToken = userToken => {
            localStorage.setItem("token", JSON.stringify(userToken))
            setToken(userToken.token)
        }

        return {
            setToken: saveToken,
            token
        }

    }
