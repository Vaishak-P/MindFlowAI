import React from 'react'
import '../../styles/_chat.scss'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { useContext } from 'react'
// import '../../../public/favicon.png';
const Chat = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
    const demo1 = "I can't withstand my pressure anymore";
    const demo2 = 'Suggest me some exercises to improve focus';
    const demo3 = "What should I do if someone is distancing themselves from me?";
    const demo4 = 'Can you tell me a story of poor girl who got rich?';
  return (
    <div className='main'>
        <div className="main-container">
            <div className="result-container">
                {!showResult ?
                    <>
                    <div className="greet">
                        <p><span>Ready to relax?</span></p>
                        <p>I'm here to guide you.</p>
                    </div>
                    <div className="cards">
                        <div onClick={()=>onSent(demo1)} className="card" role="button" tabIndex='0'>
                            <p>{demo1}</p>
                            <i class="fa-regular fa-face-sad-cry"></i>
                        </div>
                        <div onClick={()=>onSent(demo2)} className="card">
                            <p>{demo2}</p>
                            <i class="fa-solid fa-brain"></i>
                        </div>
                        <div onClick={()=>onSent(demo3)} className="card">
                            <p>{demo3}</p>
                            <i class="fa-regular fa-lightbulb"></i>
                        </div>
                        <div onClick={()=>onSent(demo4)} className="card">
                            <p>{demo4}</p>
                            <i class="fa-solid fa-book-open"></i>
                        </div>
                    </div>
                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <i class="fa-solid fa-user"></i>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                        </div>
                    </div>
                }
            </div>
            

            <div className="main-bottom">
                <div className="search-box">
                    <input 
                    onChange={(e)=>setInput(e.target.value)} 
                    value={input}
                    //event should be passed to determine which key is that
                    onKeyDown={(e)=>{
                        if (e.key === 'Enter'){ //NOT: 'enter'
                            onSent(input);
                        }
                    }}
                    type="text" 
                    placeholder="or just send a 'Hii..'" />
                    <div>
                        <i onClick={()=>onSent(input)} class="fa-regular fa-paper-plane"></i>
                    </div>
            </div>
            <div className="bottom-info">

            <a  href="https://www.linkedin.com/in/vaishakpanakkat/"><p>Made with ❤ by Vaishak</p></a>
            {/* <p >
                Disclaimer: The information provided may not always be accurate. Verify independently.
            </p> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Chat