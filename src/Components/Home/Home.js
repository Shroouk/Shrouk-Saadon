import React, { Component } from 'react';

import Typer from '../UI/Typer/Typer'
import './Home.css'

class Home extends Component {
  
        
 
 
    render(){

        
      
        return(
            <>        
                <div className='home-sec'> 
                    <div className='row mt-5'>
                      <div></div>
                    </div>
                    <div className='head-wrapper'>
                    <div className='head-txt'>
                       
                       <h2 className="static-txt">Hi. I'm</h2>
                        {/* <ul className="dynamic-txt">
                            <li><span>Shrouk Saadon</span></li>
                            <li><span> a Front-End Developer</span></li>
                        </ul> */}
                       
                        <Typer
                        heading=" "
                        dataText={[  
                        'Shrouk Saadon. ', 
                        'a Front-End Developer. ',
                        'Shrouk Saadon. ',
                        'a Front-End Developer. ',
                        'Shrouk Saadon. ',
                        'a Front-End Developer. ',
                        'Shrouk Saadon. ',
                        'a Front-End Developer. ',
                        'Shrouk Saadon. ',
                        'a Front-End Developer. ',
                        'Shrouk Saadon. '
                                            ]} 
                                        />
                    
                       </div>
                    </div>
                    <div className='row '>
                        <p className='sub-txt'>I enjoy writing clean code, building beautiful user interfaces</p>
                    </div>

                    <div className='row txt-bg'>
                    <div className='mt-3 px-5 py-3' >
                    <p>
                    An energetic and imaginative web developer who is able to work in a team to create responsive websites. an ambitious type who has the drive and massive energy needed to really make a difference to a project.

                    </p>
                    
                    </div>

                    </div>

                    <div className='row'>
                        <a href='https://drive.google.com/file/d/1yUMpmlxxY-_lWD0wa45Um055yU5VOSu-/view' target="_blank">
                        <button className='link-btn'>Resume</button>
                        </a>
                        
                    </div>
            
                    
                    
                </div>




      




              
            </>

            
        )
    }

}

export default Home;



