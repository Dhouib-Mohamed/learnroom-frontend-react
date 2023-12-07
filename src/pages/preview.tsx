import PreviewHeader from "../components/PreviewHeader";
import TextButtom from "../components/textButton";
import image from "../assets/landingImage.png";
import {Button} from "@chakra-ui/react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import quote from "../assets/quote.png";
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";
import {removeItem} from "../../utils/localStorage";


export default function Preview() {
  const history =  useHistory()
  return (
    <>
      <PreviewHeader />

      <div style={{ height: '1000px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 2, textAlign: 'left', display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '30px', marginBottom: '150px', width: "500px" }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Where teaching and learning come together </h1>
            <br />
            <p style={{ fontSize: '24px', fontWeight: 'normal' }}>
              Your all-in-one place for teaching and learning. Easy-to-use and secure tool that helps educators manage, measure, and enrich learning experiences.</p>

            <br /><br />

              <Button colorScheme="custom" color="#FFF" bgColor="#FF796E" rounded="full" size="md" marginLeft={'180px'}
                      height="45px"
                      width="150px" onClick={() => {
                  removeItem("user");
                  history.push("/signup")
              }}
              >Start</Button>
          </div>
        </div>
        <div style={{ flex: 3 }}>
          <img src={image} alt="landing image" style={{ width: '1000px' }} />

        </div>
      </div>
      <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', backgroundColor: '#FFFBEC' }}>
        <div style={{ padding: '20px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <img src={image1} alt=" image 1" style={{ width: '200px' }} />
            <br />
            <h1 style={{ fontSize: '22px', fontWeight: 'normal',textAlign:'center' }}>All-in-one place </h1>

            <p style={{ fontSize: '18px', fontWeight: 'lighter' ,textAlign:'center'}}>
              Bring all your learning tools together and manage multiple classes in one central destination.              </p>
          </div>
        </div>
        <div style={{ padding: '20px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <img src={image2} alt=" image 1" style={{ width: '200px' }} />
            <br />
            <h1 style={{ fontSize: '22px', fontWeight: 'normal',textAlign:'center' }}>Easy to use </h1>

            <p style={{ fontSize: '18px', fontWeight: 'lighter',textAlign:'center' }}>
            Anyone in your school community can get up and running with Classroom in minutes.</p>          </div>
        </div><div style={{ padding: '20px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <img src={image3} alt=" image 1" style={{ width: '200px' }} />
            <br />
            <h1 style={{ fontSize: '22px', fontWeight: 'normal',textAlign:'center' }}>Built for collaboration </h1>

            <p style={{ fontSize: '18px', fontWeight: 'lighter' ,textAlign:'center'}}>
            Work simultaneously and  connect face-to-face with Google Meet.               </p>
          </div>
        </div><div style={{ padding: '20px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <img src={image4} alt=" image 1" style={{ width: '200px' }} />
            <br />
            <h1 style={{ fontSize: '22px', fontWeight: 'normal',textAlign:'center' }}>Access from anywhere </h1>

            <p style={{ fontSize: '18px', fontWeight: 'lighter' ,textAlign:'center'}}>
            Empower teaching and learning from anywhere, on any device, and give your class more flexibility. </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <TextButtom/>
      <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={quote}  alt="quote"  />
      </div>
      <br /><br /><br />
      <Footer/>
    </>
  )
}