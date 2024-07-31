// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// import Signin from './Signin';
import LoginPage from './Loginpage'; // Correct the import paths
import RegisterPage from './Registerpage'; // Correct the import paths // Import the Register component
import YourComponentWithButtons from './YourComponentWithButtons'; // Update with your component file path


function App() {
  return (
    <Router>
  <div id="bg">
    <div >
    <table>
      <tr id="box">
      <img id="pic" src={`${process.env.PUBLIC_URL}/SVG.svg`} alt="" ></img>
      <td id="frmbt">FormBot</td>
      <nav>
        <td id="box1"><Link to="/login"><button id="btn">Sign In</button></Link></td>
        <td id="box2"><Link to="/register"><button id="btn1">Create a FormBot</button></Link></td>
      </nav>
      </tr>
    </table>
    </div>
    <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/Signin" element={<Signin />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<YourComponentWithButtons />} /> {/* Home component with buttons */}

        </Routes>
    <div>
      <table>
      <tr ><td id="vec1"><img src= {`${process.env.PUBLIC_URL}/Vec.png`} alt="" ></img>
       
        </td>
          <td id="head">Build advanced chatbots <br></br>visually
          <tr><td id="sub">Typebot gives you powerful blocks to create unique chat experiences. Embed them
          anywhere on your web/mobile apps and start collecting results like magic.</td></tr>
          </td>
          
          <td id="clip"><img src={`${process.env.PUBLIC_URL}/Clippathgroup.png`}alt=""></img></td>

        </tr><br></br>
        <tr><td><button id="btn2">Create a FormBot for free</button></td></tr>
      </table>
    </div>
    <div id="div">
   
    <img id="container" src={`${process.env.PUBLIC_URL}/image.png`}alt="" ></img>  
      </div>
    <div id="head1">
    Replace your old school forms <br></br>with<br></br>
            chatbots
    </div>
    <div id="sub1">
    Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by 3
    your conversion rate compared to classical forms.
    </div>
    <div>
      <span id="cross"><img src={`${process.env.PUBLIC_URL}/cross.png`}alt="" ></img> </span> <span id="tick"><img src={`${process.env.PUBLIC_URL}/tick.png`}alt="" ></img></span>
      <span id="try"><img src={`${process.env.PUBLIC_URL}/Try.png`}alt="" ></img></span>
       {/* <span id="arrow"><img src={`${process.env.PUBLIC_URL}/arrow.png`}alt="" ></img></span> */}
    </div>
    <div>
      <div>
        <span id="form"><img src={`${process.env.PUBLIC_URL}/form.png`}alt="" ></img></span>
                    
      </div>
      
    </div>
    <div>
      <table>
        <tr>
    <td ><span><img id="bubble"src={`${process.env.PUBLIC_URL}/Bubbles.png`}alt="" ></img></span></td>
    <td><h3 id="h1">Easy building<br></br> experience</h3><p id="p1">All you have to do is drag and<br></br>
drop blocks to create your app.<br></br>
Even if you have custom needs,<br></br>
you can always add custom<br></br>
code.</p></td>
</tr>
</table>
    <table>
      <tr>
        <td >
        <h3 id="h2">Embed it in a click</h3><p id="p2">Embedding your typebot in<br></br>
your applications is a walk in<br></br>
the park. Typebot gives you<br></br>
several step-by-step platform-<br></br>
specific instructions. Your<br></br>
typebot will always feel "native".</p>
        </td>
        <td><img id="quick"src={`${process.env.PUBLIC_URL}/Quick.png`}alt="" ></img></td>
      </tr>
    </table>
    </div>
    <div>
      <img id="icon" src={`${process.env.PUBLIC_URL}/icons.png`}alt="" ></img>
    </div>
    <div>
      <h4 id="h3">Integrate with any platform</h4>
      <p id="p3">Typebot offers several native integrations blocks as well as instructions on<br></br>
      how to embed typebot on particular platforms</p>
    </div>
    <div>
      <span id="h4">Collect results in real-time</span>
      <p id="p4">One of the main advantage of a chat application is that you collect the user's responses on each question.<br></br>
      You won't lose any valuable data.</p>
    </div>
      <div class="chat-container">
      <div class="message bot">
         <div class="text">As you answer this chat, you'll see your result in the real Airtable spreadsheet</div>
      </div>
      <div class="message bot">
        <div class="text">You can think of it as a guestbook 😂</div>
      </div>
      <div class="message bot">
        <div class="text">Ready?</div>
      </div>
      <div class="message user">
            <div class="text">Yeah!</div>
      </div>
    </div>
    <div>
    <span id="h5">And many more features</span>
    <p id="p5">Typebot makes form building easy and comes with powerful features</p>
    </div>
    <div>
      <table>
        <tr>
    <td><div class="container1">
        <div class="icon1">
          <img  src={`${process.env.PUBLIC_URL}/Hidden.png`}alt="" ></img>
        </div>
        <div class="title">Hidden fields</div>
        <div class="description">Include data in your form URL to segment your user and use its data directly in your form.</div>
      
    </div></td>
    <td><div class="container2">
        <div class="icon1">
          <img  src={`${process.env.PUBLIC_URL}/Team.png`}alt="" ></img>
        </div>
        <div class="title">Team collaboration</div>
        <div class="description">Invite your teammates to work on your
        typebots with you</div>
    </div></td>
    <td><div class="container2">
        <div class="icon1">
          <img  src={`${process.env.PUBLIC_URL}/Link.png`}alt="" ></img>
        </div>
        <div class="title">Link to sub typebots</div>
        <div class="description">Reuse your typebots in different parent
        bots.</div>
    </div></td>
    </tr>
    <tr>
    <td><div class="container1">
        <div class="icon1">
          <img  src={`${process.env.PUBLIC_URL}/Code.png`}alt="" ></img>
        </div>
        <div class="title">Custom code</div>
        <div class="description">Customize everything with your own
        Javascript & CSS code</div>
      </div></td>
      <td><div class="container2">
        <div class="icon1">
          <img  src={`${process.env.PUBLIC_URL}/Domain.png`}alt="" ></img>
        </div>
        <div class="title">Custom domain</div>
        <div class="description">Connect your typebot to the custom URL
        of your choice</div>
    </div></td>
    <td><div class="container2">
        <div class="icon1">
          <img  src={`${process.env.PUBLIC_URL}/Folder.png`}alt="" ></img>
        </div>
        <div class="title">Folder management</div>
        <div class="description">Organize your typebots in specific folders
to keep it clean and work with multiple
clients</div>
    </div></td>
    </tr>
    </table>
    <div>
      <span id="h6">Loved by teams and creators from all around the world</span>
    </div>
    </div>
    <div>
      <table>
        <div  class="image">
        <tr >
          <td><img src={`${process.env.PUBLIC_URL}/1.png`}alt="" ></img></td>
           <td><img src={`${process.env.PUBLIC_URL}/2.png`}alt="" ></img></td>
          <td><img src={`${process.env.PUBLIC_URL}/3.png`}alt="" ></img></td>
          <td><img src={`${process.env.PUBLIC_URL}/4.png`}alt="" ></img></td>
          </tr>
        </div>
        <div  class="image">
          <tr >
          <td><img src={`${process.env.PUBLIC_URL}/5.png`}alt="" ></img></td>
          <td><img src={`${process.env.PUBLIC_URL}/6.png`}alt="" ></img></td>
          <td><img src={`${process.env.PUBLIC_URL}/7.png`}alt="" ></img></td>
          <td><img src={`${process.env.PUBLIC_URL}/8.png`}alt="" ></img></td>
          </tr> 
          </div>
      </table>
    </div>
    <div>
    <img id="vec2"src= {`${process.env.PUBLIC_URL}/Vector.png`} alt="" ></img>
    </div>
    <span id="h7">Improve conversion and user engagement
    with FormBots </span>
    <span><button id="but" type="button">Create a FormBot</button></span>
    <p id="p6">No trial. Generous free plan.</p>
    <img id="vec3"src= {`${process.env.PUBLIC_URL}/clip.png`} alt="" ></img>
    <div id="bg2">
      <table>
        <tr>
          <td id="info">Made with ❤️ by<br></br>
          @cuvette</td>
          <td class="info1">Status <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
          Documentation <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
          Roadmap <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
          Pricing <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> 
          </td>
          <td class="info1">Discord <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
          GitHub repository <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
         Twitter <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
         Linkedin <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img> <br></br>
         OSS Friends <img src= {`${process.env.PUBLIC_URL}/box.png`} alt="" ></img>
          </td>
          <td class="info1">
            About<br></br>
            Contact<br></br>
            Terms of Service<br></br>
            Privacy Policy
          </td>
        </tr>
      </table>
    </div>
  </div>
  </Router>
  );
}

export default App;
