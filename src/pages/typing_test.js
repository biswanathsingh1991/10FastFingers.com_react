import React, { Component } from 'react';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Navlink from "../components/navlink";
import "../css/typing_test.css";
import Containbox from "../components/containbox";
import Typebox from "../components/typingbox"
import Footercmp from "../components/footercmp"


class Typingtest extends Component{
    state={
        navlink: "b-nav",
        contain_class: "typing_test--comp",
        typing_box_class: "typing--box"
    }

    render(){
        return(
            <div id="typing_test--main_container" >
                <Navbar />
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-2" >
                            <Navlink props={this.state.navlink} />
                        </div>
                        <div className="col-7">
                            <Containbox contain_class = {this.state.contain_class} />
                            <Typebox />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-4 tkr">
                            <h2>One-minute Typing Speedtest</h2>
                            <hr/>
                            <p>
                            The typing games on 10FastFingers.
                            com offer you an easy way to improve your typing speed. 
                            A quick way to test your typing speed is our 1-minute typing game on 
                            this page. The words that are used in this game are the most common 
                            words for each language. By playing the game you automatically 
                            improve your overall typing speed as you practice the words that you 
                            use all the time while chatting with your friends or writing a paper 
                            for school.
                            </p>
                        </div>
                        <div className="col-4 tkr">
                            <h2>How it works</h2>
                            <hr/>
                            <p>
                            And here is how it works: 
                            Just type as many words as you can in one minute. 
                            After the test ends you will receive your result as a WPM-value, 
                            which means words per minute (the amount of words you can type per 
                            minute). 
                            You can share your score with your friends via Facebook, Twitter, 
                            Google Plus or include your score in a forum. 
                            Your friends can then challenge you and try to beat your score. 
                            If you are interested in competing against others, 
                            try out our Typing Competitions. 
                            </p>
                        </div>
                        <div className="col-4 tkr">
                            <h2>WPM, Keystrokes & more</h2>
                            <hr/>
                            <h4>What does WPM mean?</h4>
                            <p>
                                WPM means "Words per minute" and is based on this calculation: 
                                5 keystrokes equal 1 WPM. This article on Wikipedia goes into 
                                more details.
                            </p>
                            <h4>What is a keystrokes?</h4>
                            <p>
                            Every key you hit on the keyboard to type a letter is one keystroke. 
                            The calculation also considers if you have to type uppercase letters 
                            or 
                            language specific letters who need 2 keystrokes to be typed 
                            (for example "A"). 
                            For example "quick" needs 5 keystrokes whereas "America" 
                            needs 8 keystrokes.
                            </p>
                            <h4>What is the average typing speed on 10FastFingers?</h4>
                            <p>
                            Its hard to calculate the average typing speed as this highly 
                            depends on the 
                            language and on the word-difficulty. 
                            For the normal version of the english typing test we have calculated 
                            an average of 41 WPM, 
                            this value is based on over 73 million typing results. 
                            Considering that these words are relatively easy to type, 
                            the avg WPM is probably around 20-25 WPM for normal text with 
                            punctutations etc.
                            </p>
                        </div>
                    </div>
                </div>
                <Footercmp />
            </div>
            
        );
    }
}

export default Typingtest;