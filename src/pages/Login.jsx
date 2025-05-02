import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../axiosConfig"

function Login() {
  const navigate = useNavigate()
  const userEmail = useRef(null)
  const password = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    const userEmailValue = userEmail.current?.value
    const passwordValue = password.current?.value

    if (!userEmailValue || !passwordValue) {
      alert("Please fill in all fields")
      return
    }

    if (passwordValue.length < 8) {
      console.log("Password must be at least 8 characters long")
      return
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmailValue)) {
      console.log("Please enter a valid email address")
      return
    }

    try {
      const {data} = await axios.post("/users/login", {
        email: userEmailValue,
        password: passwordValue,
      })

      console.log("Login successful")
      alert("Login successful")

      // Store the token in local storage or a cookie
      localStorage.setItem("token", data.token)
      // Optionally, you can redirect the user to another page after login

      // navigate("/")
      console.log("token", data)
    } catch (error) {
      console.log("This is from backend", error.response.data)
      console.log("Login failed")
    }
  }


  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={userEmail} type="email" name="email" placeholder="Enter your email" />
        </div>

        <div>
          <input ref={password} type="password" name="password" placeholder="Enter your password" />
        </div>

        <button type="submit">Login</button>

        <div>
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </section>
  )
}

export default Login