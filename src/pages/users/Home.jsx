import { useSelector } from "react-redux"
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";

export default function Home (){
    
    const getNewreUser = useSelector((state)=>state.newreUserData);
    
    return(
        <div className="page home-page">
                <Header/>
                <h1> hi, {getNewreUser.userName}</h1>
                <BottomNav/>

        </div>
    )
}