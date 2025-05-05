import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../axiosConfig"
import "./Register.css"

function Register() {
  const navigate = useNavigate()
  const UserEmail = useRef(null)
  const FirstName = useRef(null)
  const LastName = useRef(null)
  const UserName = useRef(null)
  const Password = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    const userEmailValue = UserEmail.current.value
    const firstNameValue = FirstName.current.value
    const lastNameValue = LastName.current.value
    const userNameValue = UserName.current.value
    const passwordValue = Password.current.value

    if (!userEmailValue || !firstNameValue || !lastNameValue || !userNameValue || !passwordValue) {
      alert("Please fill in all fields")
      return
    }

    if (passwordValue.length < 6) {
      console.log("Password must be at least 6 characters long")
      return
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmailValue)) {
      console.log("Please enter a valid email address")
      return
    }

    try {
      await axios.post("/users/register", {
        email: userEmailValue,
        firstname: firstNameValue,
        lastname: lastNameValue,
        username: userNameValue,
        password: passwordValue,
      })

      console.log("Registration successful")
      alert("Registration successful")
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
      console.log("Registration failed")
    }
  }

  return (
    <div className="page-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo-container">
            <img src="/evangadi-black.png" alt="Evangadi Logo" className="logo" />
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/how-it-works" className="nav-link">
              How it Works
            </Link>
            <Link to="/login" className="sign-in-button">
              SIGN IN
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Blue Shape */}
        <div className="blue-shape"></div>

        {/* Right Pink Shape */}
        <div className="pink-shape"></div>

        <div className="container main-container">
          {/* Registration Form */}
          <div className="form-section">
            <div className="form-card">
              <h2 className="form-title">Join the network</h2>
              <p className="form-subtitle">
                Already have an account?{" "}
                <Link to="/login" className="orange-link">
                  Sign in
                </Link>
              </p>

              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                  <input ref={UserEmail} type="email" name="email" placeholder="Email" className="form-input" />
                </div>

                <div className="name-fields">
                  <div className="form-group">
                    <input
                      ref={FirstName}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input ref={LastName} type="text" name="lastName" placeholder="Last Name" className="form-input" />
                  </div>
                </div>

                <div className="form-group">
                  <input ref={UserName} type="text" name="username" placeholder="User Name" className="form-input" />
                </div>

                <div className="form-group password-group">
                  <input ref={Password} type="password" name="password" placeholder="Password" className="form-input" />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => {
                      const passwordInput = Password.current
                      passwordInput.type = passwordInput.type === "password" ? "text" : "password"
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eye-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <button type="submit" className="submit-button">
                  Agree and Join
                </button>

                <p className="terms-text">
                  I agree to the{" "}
                  <a href="#" className="orange-link">
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="orange-link">
                    terms of service
                  </a>
                  .
                </p>

                <div className="login-link-container">
                  <p className="login-text">
                    Already have an account?{" "}
                    <Link to="/login" className="orange-link">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Content */}
          <div className="content-section">
            <div className="content-container">
              <p className="about-label">About</p>
              <h2 className="content-title">Evangadi Networks Q&A</h2>
              <div className="content-paragraphs">
                <p className="content-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quidem voluptate officiis beatae nobis
                  pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
                  quisquam! Molestias, ut commodi!
                </p>
                <p className="content-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quidem voluptate officiis beatae nobis
                  pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
                  quisquam! Molestias, ut commodi!
                </p>
                <p className="content-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Earum dolor odio harum sunt, quaerat,
                  molestias fuga expedita ad excepturi officiis aliquam aut nemo ratione culpa id laborum ipsum porro
                  tempore?
                </p>
                <div>
                  <button className="how-it-works-button">HOW IT WORKS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <img src="/evangadi-logo.png" alt="Evangadi Logo" className="footer-logo" />
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Useful Link</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Contact Info</h3>
              <p className="footer-text">Evangadi Networks</p>
              <p className="footer-text">support@evangadi.com</p>
              <p className="footer-text">+1-202-386-2702</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Register
