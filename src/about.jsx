import mainPicture from './assets/profile1.jpg';
import gitIcon from './assets/logo/git.png';
import htmlIcon from './assets/logo/html.png';
import cssIcon from './assets/logo/css.png';
import jsIcon from './assets/logo/js.png';
import nodeJsIcon from './assets/logo/node.png';
import npmIcon from './assets/logo/npm.png';
import vscIcon from './assets/logo/vsc.png';

//!About me
function AboutMe(){
    return (
    <section className="about-me" id="about">
    <h2 className="section__title section__title--about">About me</h2>
    <p className="section__subtitle section__subtitle--about">Experience, skills and dedication</p>

    <div className="about-me__body">
    <p>I have experience as a senior manager for manufacturing 
            company, My dedication
            to mentoring and helping others has helped
            me create successful teams that support each other.
    </p>
    <p>
        After 7years in manufacturing which includes 5-6 years 
        in leadership, I decided to do what my heart desires.
        changing my career was one of the best way to get a fresh start as a <strong>Website and Application developer</strong>.
    </p>
    <p>
        I have strong critical thinking and problem solving 
        skills with the ability to make suggestions that will help
        improve functionality in the <strong>technology industry</strong>.
        I have hands on experience designing games, websites and applications
        that meet the technical requirements and functionality. That means
        for most of your coding needs, I'm there for you.
    </p>
    <p>
    <strong>HTML, CSS, </strong>and <strong>JavaScript </strong> are my cooding languages.
    </p>
</div>
<img src={mainPicture} alt="third image" className="about-me__img"></img>
    <div className="coodingLogo">
            <img src={htmlIcon}></img>
            <img src={cssIcon}></img>
            <img src={jsIcon}></img>
            <img src={nodeJsIcon}></img>
            <img src={npmIcon}></img>
            <img src={vscIcon}></img>
            <img src={gitIcon}></img>
    </div>
    </section>
    );
}

export default AboutMe;
