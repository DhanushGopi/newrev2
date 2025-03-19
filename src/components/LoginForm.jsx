import PrimaryBtn from "./PrimaryBtn";

export default function LoginForm(props){

    alert(props.role);
    return(       
        <form className="login-form">
            <label className="login-title">{props.role} Login</label>
            <input className="login-input" type="text" placeholder="Enter your email"/>
            <input className="login-input" type="password" placeholder="Enter your password"/>
            <div className="login-btns"> 
            <PrimaryBtn btntext="Login"/>
            </div>
        </form>
    )
}