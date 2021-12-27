import React from 'react'
import './aboutus.css'
import wimg from './worklogo.jpeg'
const Workculture = () => {
    return (
        <>
        <div className="workblock" style={{marginBottom:"100px" , marginTop:"100px"}}>
            <div className="wleft">
            <h1>Our Work Culture</h1>
            <p> We holds an inclusive culture, where people are valued and
                encouraged to realize their potential. Our diversity is our
                strength. Despite our unique backgrounds, experiences and
                perspectives, we are brought together by a common vision for
                our company.
            </p>
            <p>Our organizational culture is more internally than externally driven. Despite ensuring a quick response to the changing customer needs, the top management openly communicates the importance of adopting an ethical attitude while responding to the market needs. The company shares strong commitment to embedding ethics and integrity into its business operations. The internally driven organizational culture has enabled the organization to use its ethical brand image as a tool to get a strong competitive edge over rival firms.Culture, at the work place is a very powerful force, which is consciously and deliberately cultivated and is passed on to the incoming employees. It is a thread which holds the organization together. The dominance and coherence of culture proved to be an essential quality of the excellent companies. Managers today are increasingly challenged with changing an organization culture to support new ways of accomplishing work. As competition and pressure to perform to world class standards grow, companies are forced to find new and innovative ways to differentiate or face closure.</p>
            </div>
            <div className="wright" style={{marginBottom:"100px" , marginTop:"100px"}}>
            <img src={wimg} width="700px" height="500px"></img>
            </div>
            
        </div>
        
        </>
    );
}
export default Workculture;