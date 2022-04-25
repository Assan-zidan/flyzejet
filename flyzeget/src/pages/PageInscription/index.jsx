
import Footer from "../../components/Footer/Index";
import "../../Styles/connexion.css";
import Inscription from "../../components/Inscription";

const  PageInscription = () => {
    
        return(
            <>
            <div className="container-fluid connexion-content">
                <div className="row row-cols-md-2">
                    <Inscription/>
                    <div className="col banner-content ">
                        <img src="https://media.istockphoto.com/photos/passengers-commercial-airplane-flying-above-clouds-picture-id955952680?k=20&amp;m=955952680&amp;s=612x612&amp;w=0&amp;h=ySHtI28Vrvz4vj2q7T8ENJQakH_7wSHuhNLLiwr06EY=" alt=""/>
                    </div>
                </div>
                
                <Footer/>
            </div>
            
            
            </>
        )
    }


export default PageInscription