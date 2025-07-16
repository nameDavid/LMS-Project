import "./css/Signup.css";

const Signup = () => {
  return (
    <div className="signupform">
        <img src="/lmsfrontend/public/vite.svg" alt="picture" />
 <form action="/submit" method="post">
        <h2>Sign Up</h2>
        <div className="form-group">
            <label htmlFor="fname">First Name: </label>
            <input type="text" name="fname" id="fname" required/>
        </div>
        <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" id="lname" required/>
        </div>
        <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input type="text" name="course" id="course"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required/>
        </div>
        <div className="form-group">
            <label htmlFor="cpassword"> Confirm Password:</label>
            <input type="password" name="cpassword" id="cpassword" required/>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    </div>

  );
};

export default Signup;
