import React from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from '../CSS/style.css';
import logo from '../images/logo.png';
import tv from '../images/tv.png';
import videotv from '../videos/videotv.m4v';
import ReactPlayer from 'react-player';


const App = () =>{
   return (
   <div>
       <header className="upper-body ">
           
           <div className="top">
               <img className="logo" src={logo} alt={logo}></img>
               <button type="button" class="btn btn-md btn-danger  float-right">Sign in</button>
               
          
               
               <div className="top-content">
                   
                   <h1>Unlimited movies, TV shows, and more.</h1>
                   <h2 className="mt-2">Watch anywhere. Cancel anytime.</h2>
                    <div class="input-group mt-3">
                    <input type="text" class="form-control my-form" placeholder=" Email" />
                      <div class="input-group-append">
                      <button class="btn btn-lg btn-outline-danger" type="button"> Try it now  <i class="fas fa-chevron-right"></i></button>
                    </div>
                    </div>
               </div>
               </div>
               
       </header>

            {/* break border */}
            <div class="tabs">
            </div>

       <section className="my-section">
            <div class="container">
                <div class="row my-row">
                <div class="col-md my-col">
               <h1>Enjoy your TV</h1>
               <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
               </div>

               <div className="col-md">
                 <img src={tv} alt="tv">
                 {/* <ReactPlayer url="../videos/videotv.m4v" controls={true} />  */}

                 </img>
                </div>
                </div>
            </div>

            <div class="tabs">
            </div>

               <div class="container">
                    <div class="row my-row">
                
                    <div className="col-md">
                    <img src={tv} alt="tv">
                    {/* <ReactPlayer url="../videos/videotv.m4v" controls={true} />  */}</img>
                    </div>

                    <div class="col-md">
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                    </div>

                   </div>

            </div>

            
            <div class="tabs">
            </div>

            <div className="container mt-4">
             
              <h1 className="text-center font-weight-bold my-5">Frequently asked questions</h1>
              
              <div class="accordion mx-auto my-2" id="accordion">
                <div class="card">
                <div class="card-header collapsed"  data-toggle="collapse" 
                data-patent="#accordion" aria-expanded="false" href="#collapseOne">
                 <a className="card-title">
                  What is Netflix?
                  </a>
                </div>
            <div  className="card-body collapse" data-patent="#accordion" id="collapseOne">
                <p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!

                </p>
            </div>
        </div>    
        </div>

        <div class="accordion mx-auto my-2" id="accordion">
                <div class="card">
                <div class="card-header collapsed"  data-toggle="collapse" 
                data-patent="#accordion" aria-expanded="false" href="#collapseTwo">
                 <a className="card-title">
                How much does Netflix cost?
                  </a>
                </div>
            <div  className="card-body collapse" data-patent="#accordion" id="collapseTwo">
                <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from $9.99 a month. No extra costs or contracts.

                </p>
            </div>
        </div>    
        </div> 
        <div class="accordion mx-auto my-2" id="accordion">
                <div class="card">
                <div class="card-header collapsed"  data-toggle="collapse" 
                data-patent="#accordion" aria-expanded="false" href="#collapseThree">
                 <a className="card-title">
                    How do I cancel it?
                  </a>
                </div>
            <div  className="card-body collapse" data-patent="#accordion" id="collapseThree">
                <p>
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.

                </p>
            </div>
        </div>    
        </div>



           
            <div class="input-group my-5 mx-auto">
                     <input type="text" class="form-control my-form" placeholder=" Email" />
                      <div class="input-group-append">
                      <button class="btn btn-lg btn-outline-danger" type="button"> Try it now  <i class="fas fa-chevron-right"></i></button>
                    </div>
                    </div>

     </div>
                
     <div class="tabs">
         </div>          
              <div className="container mb-5 footer-container">
                <p>Questions? Call 1-123-123-1234</p>
            
                <div className="row ml-4">
                    <div className="col-lg-4 ">
                        <ul className="foot-list">
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Reedeem gift card</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="https://fast.com/">Speed test</a></li> 
                        </ul>

                    </div>

                    <div className="col-lg-4">
                        <ul className="foot-list">
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Reedeem gift card</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="https://fast.com/">Speed test</a></li> 
                        </ul>

                    </div>

                    <div className="col-lg-4">
                        <ul className="foot-list">
                            <li><a href="#">Media center</a></li>
                            <li><a href="#">Buy gift card</a></li>
                            <li><a href="#">Cookies prefereces</a></li>
                            <li><a href="#">Legal notice</a></li> 
                        </ul>

                    </div>


                </div>

            </div>
            
            
		</section>
     
    </div>
    );
};
export default App;