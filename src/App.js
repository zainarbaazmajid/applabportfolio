import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( <
    div className = "App" >
    <
    header className = "App-header" >

    <
    p >
    Zain 's Portfolio <
    /p>
<br></br>
    <
    img src = {
      require('./img/me.jpg')
    }
    />

    <br></br>
<p>About Me</p>

    <
    p > My name is Zain Majid and I am an intended IMB Major at NYU Shanghai. I am originally from San Francisco and have studied in Shanghai
    for two years now. Next semester, I hope to be studying in New York to enhance my business acumen and I plan to
    return to Shanghai my senior year to continue studying Chinese as well as continue to gain foundational technical skillsets. < /p>
<br></br>
<p>Project Summary</p>


<p>Inspired by powerful security measures that were taken in Marvel's Agents of Shield TV show, I used an existing MD5 library to create my own encryption system. The design of the project is very simple- two boxes in which the user inputs a given phrase and is provided a real-time changing output employing the MD5 encryption algorithm. </p>

<br></br>

<p>Research</p>

<p>A lot of time and research was spent into the design of the project. It was crucial that it maintain a minimalist design in order to emphasize the key function of the site: the actual encryption. Moreover, I drew inspiration from The Matrix movie- hence the font and the black and green background color scheme. In terms of text, I wanted to keep the same simplistic design so the only two words and respective boxes correspond to the only thing the user really needs to pay attention to. </p>

<br></br>

<p>I was previously unaware how useful encryption algorithms could be made in the future. I only embarked on learning about encryptions because the idea of it looked interesting but, after more research, I learned how encryptions can be used anywhere from online financial security to password generation. More importantly, encryptions are very important because people are becoming more and more concerned with their presence online and their respective privacy rights.  </p>

<br></br>

<a href="https://md5sideproject.herokuapp.com/" > The Working Prototype </a >

<p>The working prototype may have some formatting issues depending on which computer you are using it on. If you experience this issue, it's best to zoom out to 25% to enhance the user experience. </p>

<br></br>

<p>Future Work</p>

<p>In the future, a key issue I would need to work on is the formatting of the image on various computers. In order to maintain the vision I had for this project, I had to construct multiple elements on Photoshop and use the final product as the background image. Thus, not using an image as the background could potentially yield better results.</p>

<br></br>

<p></p>


      <
      div className = "me" > < /div>


      <
      /header> <
      /div>
  );
}

export default App;