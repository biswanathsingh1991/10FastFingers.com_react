import React, { Component } from 'react';
import Sidebar from "../components/sidebar"
import "../css/home.css"
import logo from "../media/img/logo@2x.png"

class Home extends Component{

    render(){
        return(
            <div className="row" id="homepage" >
            
                <Sidebar className="col-2" />
                <div className="col-8 " >
                    <div className="row">
                        < div className="" id="center_box"  className="col-6 offset-3">
                            <img src={ logo } alt=""/>
                            <hr/>
                            <h1 id="logo-txt">Test & Improve your Typing Speed with our<br/>free Typing Games</h1>
                            <hr/>
                            <div className="btn-group btn-group-lg" role="group">
                                <button type="button " className="btn-danger mr-2 ">Start Typing Test</button>
                                <button type="button" className="btn-danger">Start Competation</button>

                            </div>

                            <h2 className="text-dark">Typing Test</h2>
                            <p  className="text-dark">
                            One huge benefit: The more you use our typing game, 
                            the faster you will be able to type as the typing test uses the top 200 words of each language. 
                            If you are able to type the most frequent words faster, you will be able to type everything else faster as well!
                            </p>
                            <h2 className="text-dark">Typing Competition</h2>
                            <p className="text-dark">
                            Ready to compete against the big guys? Then check out our typing competitions! 
                            Every competition is open for 24 hours, 
                            during this time you will have the opportunity to reach the first place. 
                            The competitions work in the same way as our Typing Test but instead of having a random list of words everytime you reload the test, 
                            the words will stay the same for each competition. 
                            If you have a friendly typing competition with just your buddies you should try out the "privat competition"-option.
                            </p>
                            <h2 className="text-dark">Text Practice Mode</h2>
                            <p className="text-dark">
                            The Typing Test is great if you want to practice the most common words of a language, 
                            but what if you want to practice more difficult words, punctuations, 
                            special characters or just a paragraph from a book?
                                <br/>
                            In this case check out our Text Practice Mode! 
                            You can create your own text to practice or pick from a huge list of user generated practice texts. 
                            Just select one text from the top-list and you will be garantied to have a fun and challenging experience. 
                            Start now and improve your typing skills even further!
                            </p >
                            <h2 className="text-dark">Typing Practice</h2>
                            <p className="text-dark">
                            If you want to steadily improve your typing speed or train some specific typing skills you should check out the typing practice page. 
                            Improve your typing speed with practicing the Top 1000 words of each language (while unlocking those sweet, 
                            sweet stars), or challenge your typing skills with a user-submitted text. 
                            The practice mode is currently under development, 
                            more features & modes will be added in the near future
                            </p>
                            <h2 className="text-dark">Mobile Typing App</h2>
                            <p className="text-dark">
                            How fast are your thumbs? 
                            Our mobile typing app will let you know! No matter 
                            if you use your mobile phone or your tablet (iPad, etc.) the mobile test will surely suit your needs, 
                            good luck climbing the highscore list
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Home;