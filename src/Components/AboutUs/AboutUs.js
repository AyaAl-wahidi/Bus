import React from "react";
import "./AboutUs.css";
import aya from "../images/aya.jpeg"
import mahmoud from "../images/mahmoud.jpeg"
import raghad from "../images/raghad.jpeg"
function AboutUs() {
    return (
        <div class="container" style={{marginBottom:'50px'}}>
            <div class="container4">
            <h1>About Us</h1><br/>
            <span style={{ fontSize: "20px", fontFamily: "Monospace"}}>
                Adopting a cat isn't just about getting a pet.
                 It's finding a lifelong friend and opening your heart to  boundless joy.
                  Imagine that magical first meeting: their curious eyes, tentative yet hopeful.
                   In that instant, a silent promise is made - of trust, companionship, and happiness.
                    Through playfulness, cuddles, and laughter,a deep bond blossoms.
                     But it's more than gaining a pet; it's building a family where both find belonging.
                      So, welcoming a cat means embarking on a journey of love and companionship, 
                      filling your life with warmth and meaning.</span><br/>
            <div class="Mahmoud">
                <a href="https://www.linkedin.com/in/mahmoudal3nbtawi/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img alt="hello" src={mahmoud} class="developersImages"></img>
                </a>
                <h6>Mahmoud</h6>
            </div>
            <div class="Aya">
                <a href="https://www.linkedin.com/in/aya-alwahidi-982a79156/">
                    <img alt="hello" src={aya} class="developersImages" ></img>
                </a>
                <h6>Aya</h6>
            </div>
            <div class="Saja">
                <a href="https://www.linkedin.com/in/saja-fawaz-43989530a/">
                    <img  alt="hello" src="" class="developersImages"></img>
                </a>
                <h6>Saja</h6>
            </div>
            <div class="Abdullah">
                <a href="https://www.linkedin.com/in/abdallah-abuhalima-494086282/">
                    <img alt="hello" src="https://live.staticflickr.com/65535/53734135775_5dc105fd2d_n.jpg" class="developersImages"></img>
                </a>
                <h6>Abdullah</h6>
            </div>
            <div class="Ragad">
                <a href="https://www.linkedin.com/in/raghad-abdullah-bb3848216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img alt="hello" src={raghad} class="developersImages"></img>
                </a>
                <h6>Raghad</h6>
            </div>
            </div>
        </div>
    );
}

export default AboutUs;