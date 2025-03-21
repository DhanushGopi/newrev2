import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import LoginHeader from "../../components/LoginHeader";


export default function Login(){
    return(
        <div className="login">
        <LoginHeader/>
        <LoginForm role="Admin"/>
        <Link className="jumptopage" to='/admin/reg'>Don't have a account? Then, Register here!</Link>
        </div>
    )
}