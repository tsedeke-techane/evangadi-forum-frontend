import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';


function Register() {
  const navigate = useNavigate();
  const UserEmail = useRef(null);
  const FirstName = useRef(null);
  const LastName = useRef(null);
  const UserName = useRef(null);
  const Password = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const userEmailValue = UserEmail.current.value;
    const firstNameValue = FirstName.current.value;
    const lastNameValue = LastName.current.value;
    const userNameValue = UserName.current.value;
    const passwordValue = Password.current.value;

    if (!userEmailValue || !firstNameValue || !lastNameValue || !userNameValue || !passwordValue) {
      alert("Please fill in all fields");
      return;
    }

    if (passwordValue.length < 6) {
      console.log("Password must be at least 6 characters long");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmailValue)) {
      console.log("Please enter a valid email address");
      return;
    }

    try {
      await axios.post('/users/register', {
        email: userEmailValue,
        firstname: firstNameValue,
        lastname: lastNameValue,
        username: userNameValue,
        password: passwordValue,
      });

      console.log("Registration successful");
      alert("Registration successful");
      navigate('/login');
    } catch (error) {
      console.log(error.response.data);
      console.log("Registration failed");
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={UserEmail} type="email" name="email" placeholder="Enter your email" />
        </div>

        <div>
          <div>
            <input ref={FirstName} type="text" name="firstName" placeholder="Enter your first name" />
          </div>
          <div>
            <input ref={LastName} type="text" name="lastName" placeholder="Enter your last name" />
          </div>
        </div>

        <div>
          <input ref={UserName} type="text" name="username" placeholder="Enter your username" />
        </div>

        <div>
          <input ref={Password} type="password" name="password" placeholder="Enter your password" />
        </div>

        <button type="submit">Register</button>

        <div>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
