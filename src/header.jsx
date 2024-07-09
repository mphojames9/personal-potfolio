import profilePicture from './assets/profileImage.jpg';

function Header(){
    const openSidebar = () => {
        console.log("hi")
    }
    return (
        <div className="hero" id="home">
        <nav>
            <h2 className="mainLogo">ma<span>tli.com</span></h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Portfolio</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
            <div className="open_menu_btn" onClick={openSidebar}>Menu</div>
        </nav>

        <div className="content">
        <div className="content__profileImage">
                <div className="profileImg">
                    <img src={profilePicture} alt="ProfileImage" className="intro_profileImg"></img>
                </div>
            </div>
            <div className="content__intro">
                <h4>Hello, my name is</h4>
                <h1>Mpho Matli</h1>
                <h3>And I'm a <span>Frontend/Backend</span> Developer</h3>
                <a href="#" className="resumeBtn">Download Resume</a>
            </div>
        </div>
    </div>
    );
}

export default Header;