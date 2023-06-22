import Link from "next/link";
import Head from "next/head";
import React from "react";
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilFileDownload } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'


const App = () => {


  return ( 
  <>
<Head>
  <meta title="about" content="My name is Miracle Agholor and I'm a web Developer" />
</Head>

        <section id="logo">
            <div className="container logo">
              <h3>It's Mi<span>mi </span></h3>
            </div>
        </section>
        
        <section id="main">
              <div className="container header">
                      <div className="first">
                          <h4>Hello it<span>'s me</span></h4>
                          <div className="name"><h2>Miracle Agholor <span>.</span> </h2></div>
                          <p>An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.</p>
                          
                      </div>
                      <div className="devimg">
                            <img src="/dev.png" alt="" />
                      </div>
              </div>
        </section>




       

  
  <section id="section__two">
  <div className=" container skills" id="">
      <div className="skill__heading">
            <h3>My Skil<span>lset </span> </h3>
            <br/>
           <div className="hskill"> <h2>Graphic Design, Interface Design & User Experience<span>. </span></h2></div>
      </div>
      <div className="skill__explanation">
            <p>I specialize in building web applications, working with front-end and back-end teams, digital product design and developing visual design systems. I enjoy the process of creating effortless user experience and designing delightful and beautiful digital products. The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me happy!
I worked with numerous clients ranging from early startups to well-established companies. I always seek new opportunities for cooperation on projects interesting design systems and landing pages. Let’s create something awesome together!</p>
      <br/>
      <div className="download"> <Link href='https://github.com/solomonMiracle'>Find Me on Git<UilGithub/></Link></div>
      </div>
  </div>
</section>


<section id="section__three">
            <div className="container process">
              <div className="process__heading">
              <h2>Design Proc<span>ess.</span> </h2>
              </div>

              <div className="process__grid">
                <div className="one">
                  <h3>Pre-Process</h3>
                    <p>Collect Informations</p>
                    <p>Personas</p>
                    <p>SetUp Goals</p>
                    <p>Project Folder + Moodboard</p>
                </div>

                <div className="one">
                    <h3>Low Fidelity</h3>
                    <p>Whiteboard</p>
                    <p>Maps Screen Info</p>
                    <p>Possible States</p>
                    <p>First Diagram</p>
                </div>

                <div className="one">
                    <h3>Work/ Design</h3>
                    <p>Moodboard</p>
                    <p>First Diagram</p>
                    <p>Write your copy</p>
                    <p>Intern Test</p>
                </div>
                

                <div className="one">
                    <h3>Assets & Delivery</h3>
                    <p>Specifications</p>
                    <p>Diagram</p>
                    <p>Final Prototype</p>
                    <p>Video x Notes</p>
                </div>

                <div className="one">
                    <h3>Final & Test</h3>
                    <p>Inspectlet x hotjar</p>
                    <p>Mixpanel</p>
                    <p>Google Analytics</p>
                    <p>Intercom</p>
                </div>

                <div className="one">
                  <h3>After Design</h3>
                  <p>Goals</p>
                  <p>Workspace</p>
                </div>

              </div>

            </div>
        </section>


      <section id="section__four">
        <div className="container projects">

        </div>

      </section>

      <section id="section__five">
        <div className="container careers">
        <div className="career__heading"><h2>Care<span>ers. </span></h2></div>
            <div className="career__container">
            <div className="career__one">
    
            <h3>Frelance</h3>
            <p>Web Developer</p>
            <p>May 2022 till Date</p>
            </div>

            <div className="career__one">
            
            <h3>IDSL/NNPC & BGP/CNPC JV</h3>
            <p>HSE Repr.</p>
            <p>Nov 2019 to 2022</p>
            </div>

            <div className="career__one">
            
            <h3>Fed Ministry WPH</h3>
            <p>IT Technician</p>
            <p>Nov 2017 to 2018</p>
            </div>

            <div className="career__one">
            
            <h3>Chinex Computer</h3>
            <p>Junior Hardware Technician</p>
            <p>Jan 2015 to Nov 2015</p>
            </div>
            </div>

            
        </div>
      </section>

      

  
  <section id="section__six">
  <div className=" container skills">
      <div className="skill__heading">
            <h3>About <span>Me </span> </h3>
            <br/>
           <div className="hskill"> <h2>Designing with passion for system solutions<span>. </span></h2></div>
      </div>
      <div className="skill__explanation">
            <p>I’ve always been passionate about pixels and design projects and haven’t stopped working and learning about new technologies . Other than sitting in from of my display I enjoy myself in playing video games, such as grand theft auto by Rock Stars games or others like basket ball.</p>
            <br/>
            <p>I'm grateful that my job allows me to work from anywhere.  I’m active on LinkedIn, and on Github where I share most of all my works and information about my upcoming projects.</p>
            <p>I also like sharing my experiences on instagram</p>
            <br/>
            <div className="download"> <Link href='https://www.linkedin.com/m/in/miracle-agholor-b16b88150'>Follow Me on LinkedIn <UilLinkedin/></Link></div>
      </div>
  </div>
</section>


<section id="section__seven">
      <div className="container invitation">
        <h2>What's <span>Next </span></h2>
        <h3>Lets work together!</h3>
        <div className="highlight"><p>If you'd like to talk about a project you want help with or need an advice about product design, just drop me a message at <span>miracleagholor@gmail.com </span> I'm currently Available for any design systems projects, dashboard designs or landing pages gigs.</p></div>
      </div>
</section>

<section id="section__eight">
  <div className="container footer">
        <div><p>Entirely Built by Me from the Scratch :)</p> <div className="download"> <Link href='/cv.pdf' download='/cv.pdf' >GET CV <UilFileDownload/> </Link> </div></div>
        
        <div className="logo">
              <h3>It's Mi<span>mi </span></h3>
        </div>
        
  </div>
</section>
</>
  );
}
 
export default App;