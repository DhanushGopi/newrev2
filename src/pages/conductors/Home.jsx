import { Link } from "react-router-dom";
import Header from "../../components/Header";
import AppPrimaryBtn from "../../components/AppPrimaryBtn";
import BottomNav from "../../components/BottomNav";
import { Dashboard, Info, Person, Restore, Verified } from "@mui/icons-material";

export default function Home (){
    return(
        <div className="page pass-page">
                <Header/>
                <div className="pass-card-cont">
                    <div className="pass-page-title">
                            <div className="pass-page-title-left">
                            <h2 className="text-subhead">Hi,</h2>
                            <p className="text-normal">Welcome to the Newre App</p>
                            </div>
                            <Link to="/terms"><Info className="terms"/></Link>
                    </div>
                    <br></br>
                    <div className="pass-proceed-btn">
                        <AppPrimaryBtn  btntext="Show QR Pass"/>
                        <AppPrimaryBtn btntext="Renew Pass"/>
                    </div>
                </div>
                <BottomNav 
                    navPaths={["/conductor/home", "/conductor/passverify", "/conductor/history", "/conductor/profile"]}
                    navLabels={["Home", "Verify", "History", "Profile"]}
                    navIcons = {[<Dashboard/>, <Verified/>,<Restore/>, <Person/>]}
                />

        </div>
    )
}