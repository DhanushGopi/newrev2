import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Dashboard, Info, Person, Restore, Verified } from "@mui/icons-material";
import AppPrimaryBtn from "../../components/AppPrimaryBtn";
import BottomNav from "../../components/BottomNav";
import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import CryptoJS from "crypto-js";
import { firebaseApp } from "../../config/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function PassVerify(){


   const firestoreDb = getFirestore(firebaseApp);

    const [scannedData, setScannedData] = useState(null);
  const [decryptedData, setDecryptedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef(null);



  
  const getVerifiedPass = async(decryptedData) =>{
   try {
    const  passScannedUserId = decryptedData.uid;
    const newreUserDetails = await getDoc(doc(firestoreDb, "User",passScannedUserId));
     const newreUserDetailsData = newreUserDetails.data();
     console.log("The user in the from db", newreUserDetailsData)
     console.log("The user in the QR",decryptedData);
   } catch (error) {
    console.error("from addVerifiedPass()",error);
   } 
  }




  const secretKey = "b7!A$df1@Gz9xLqP4mT8vW#Y2sR6NcKd";

  const decryptData = (encryptedText) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedText ? JSON.parse(decryptedText) : null;
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  };

  const handleVerify = () => {
    if (!scannedData) {
      console.log("❌ No QR Code scanned.");
      return;
    }

    const decrypted = decryptData(scannedData);
    if (decrypted) {
      setDecryptedData(decrypted);
      getVerifiedPass(decrypted);
    //   setVerificationMessage("✅ QR Code is valid.");
    } else {
      setDecryptedData(null);
    //   setVerificationMessage("❌ Invalid QR Code.");
    }

  };

  const startScanner = () => {
    if (isScanning || scannerRef.current) return;

    setIsScanning(true);

    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
      disableFlip: false,
      rememberLastUsedCamera: true,
    });

    scanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        // stopScanner();
        handleVerify();
      },
      (error) => {
        console.warn("QR Scan Error:", error);
      }
    );

    scannerRef.current = scanner;
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current
        .clear()
        .then(() => {
          setIsScanning(false);
          scannerRef.current = null;
        })
        .catch((err) => console.warn("Error stopping scanner:", err));
    }
  };



  useEffect(() => {
    handleVerify();
  }, [scannedData]);


    return(
            <div className="page pass-page">
                    <Header/>
                    <div className="pass-card-cont">
                        <div className="pass-page-title">
                                <div className="pass-page-title-left">
                                <h2 className="text-subhead">Pass Verfier</h2>
                                <p className="text-normal">Secured way to verifiy the pass</p>
                                </div>
                                <Link to="/terms"><Info className="terms"/></Link>
                        </div>

      {/* Live Camera Preview */}
      <div id="qr-reader" style={{ width: "100%", maxWidth: "400px", margin: "auto" }}></div>

      {/* Scanned Data */}
      {scannedData && (
        <div style={{ width: "400px", textAlign:"center" }}>
          <h3>Scanned Successfull</h3>
          <br></br>
          <br></br>
          {/* <AppPrimaryBtn funcact={handleVerify} btntext="View the User Profile"/> */}
        </div>
      )}

      {/* Decrypted Data */}
      {decryptedData && (
        <div className="pass-ticket-validity">
        <p className="pass-ticket-text">Name :<b>{decryptedData.name}</b></p>
        <p className="pass-ticket-text">Pass Plan: <b>{decryptedData.selectedPass}Pass</b></p>
        <p className="pass-ticket-text">Valid From: <b>{decryptedData.date}</b></p>
        <p className="pass-ticket-text">Valid To: <b>{decryptedData.validTo}</b></p>
    </div>
      )}
                        <br></br>
                         {/* Scanner Start/Stop */}
                        <div className="pass-proceed-btn">
                            {isScanning ? (
                                <AppPrimaryBtn funcact={stopScanner}  btntext="⛔ Stop Scanner"/>) :
                                (<AppPrimaryBtn funcact={startScanner} btntext="📷 Start Scanning"/>
                            )}
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