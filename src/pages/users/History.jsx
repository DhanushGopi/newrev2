import { useSelector } from "react-redux";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";

export default function History(){
    const getNewreUser = useSelector((state)=>state.newreUserData);
    
    return(
        <div className="page history-page">
                <Header/>
                <p>History</p>
                <h1> hi, {getNewreUser.userName}</h1>
                <BottomNav/>

        </div>
    )
}