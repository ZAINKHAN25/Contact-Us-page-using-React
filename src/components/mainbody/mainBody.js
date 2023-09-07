import './mainBody.css';
import contactimage from '../Contact-image.png';
import bgChatblack from '../bgBlackChat.png';
import bgChatwhite from '../BgWhiteChat.png';
import phoneimage from '../bgBlackPhone.png';


function Mainbody() {
  return (
    <div className='mainbody'>
      <div>
        <h3 className='headingofmainbody'>CONTACT US</h3>
        <p className='paraofmainbody'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      </div>
      <div className='formarea'>
        <div className='mainForm'>
          <div className='row'>
            <button className='btnofmainform'><img src={bgChatblack} alt="" /> VIA SUPPORT CHAT </button>
            <button className='btnofmainform'><img src={phoneimage} alt="" /> VIA CALL </button>
          </div>
          <div className='viaemailform'><img src={bgChatwhite} alt="" /> VIA EMAIL FORM </div>

          <div className='divofform'>
            <div className='divgonetodownward'> Name </div>
            <input className='inputofform' type="text" ></input>
          </div>

          <div className='divofform'>
            <div className='divgonetodownward'> E-Mail </div>
            <input className='inputofform' type="email" ></input>
          </div>

          <div className='divofform'>
            <div className='divgonetodownward'> TEXT </div>
            <textarea className='inputofform textofdivform'>

            </textarea>
          </div>

          <button className='submitbtn'> SUBMIT </button>
        </div>
        <div className='imgare'>
          <img src={contactimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
