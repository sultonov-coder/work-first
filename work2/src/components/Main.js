import "../App.css";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import useSound  from 'use-sound'
import firstSong from '../assets/first.wav'


export default function Main(){
    const [playSound] = useSound(firstSong)

    const [color] = useState(true)
    const line = document.querySelectorAll("#links");
    function submitPage(){
        if(color){
            line[0].classList.add("link")
            line[1].classList.remove("link")
            line[2].classList.remove("link")
            line[3].classList.remove("link")
        }
    }
    function submitPage2(){
        if(color){
            line[1].classList.add("link")
            line[0].classList.remove("link")
            line[2].classList.remove("link")
            line[3].classList.remove("link")
        }
    }
    function submitPage3(){
        if(color){
            line[2].classList.add("link")
            line[0].classList.remove("link")
            line[1].classList.remove("link")
            line[3].classList.remove("link")
        }
    }
    function submitPage4(){
        if(color){
            line[3].classList.add("link")
            line[0].classList.remove("link")
            line[1].classList.remove("link")
            line[2].classList.remove("link")
        }
    }

    return(
        <div className="main">
            <div className="main-part">
                <ul>
                    <li id="links" onClick = {playSound}> <span onClick = {submitPage} id="spans"  className="moduls" ><Link className="links" to = "/first"><p>First Modul</p></Link></span></li>
                    <li id="links" onClick = {playSound}> <span onClick = {submitPage2} id="spans" className="moduls" ><Link className="links"  to = "/second"><p>Second Modul</p></Link></span></li>
                    <li id="links" onClick = {playSound}> <span onClick = {submitPage3} id="spans" className="moduls" ><Link className="links"  to = "/third"><p>Third Modul</p></Link></span></li>
                    <li id="links" onClick = {playSound}> <span onClick = {submitPage4} id="spans" className="moduls" ><Link className="links" to = "/fourth"><p>Fourth Modul</p></Link></span></li>
                </ul>
            </div>
        </div>
    )
}