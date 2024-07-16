document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.list ul li');
    const mainContent = document.getElementById('main');

    // Function to update the content and active state
    const updateContentAndActiveState = (element, content) => {
        menuItems.forEach(item => {
            item.style.color = "";
            item.style.textDecoration = "";
            item.classList.remove("active");
        });
        element.style.color = "rgb(105, 9, 9)";
        element.style.textDecoration = "underline";
        element.classList.add("active");
        mainContent.innerHTML = content;

        // Apply animations after content update
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('fadeIn');
        });
        
        const icons = document.querySelectorAll('.contact-item .icon');
        icons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2 + 0.5}s`;
            icon.classList.add('slideInFromTop');
        });
    };

    document.getElementById("home").addEventListener("click", function () {
        const content = `
            <div class="bodydiv">
                <aside>
                    <p>Hello..!</p>
                    <h1>I'm  <span>Nitish</span></h1>
                    <h1><span>Katteboyina</span></h1>
                    <button><a href="./assets/resume.pdf" download="nitish_resume.pdf">Download Resume</a></button>
                </aside>
                <img src="./assets/profile.jpg" alt="Profile Image">
            </div>
        `;
        updateContentAndActiveState(this, content);
    });

    document.getElementById("about").addEventListener("click", function () {
        const content = `
            <div class="about-page">
                <div class="profile-div">
                    <img class="profile-pic" src="./assets/ppsize.jpg" alt="Profile Image">
                    <section><br>
                    Name: Nitish Katteboyina<br><br>
                    Domain: Web Development<br><br>
                    Education: Bachelor of Engineering<br><br>
                    College: IIIT Trichy<br><br>
                    Languages: Telugu, English, Hindi, and Japanese<br><br>
                    Interests: Watching Anime and Grinding LeetCode
                    </section>
                </div>
                <div class="about-content">
                    <h1>About Me</h1>
                    <p>Aspiring software engineer with a strong foundation in programming and web development, I am currently pursuing a Bachelor of Technology at the Indian Institute of Information Technology Tiruchirappalli</p>
                    <div class="skills">
                        <div class="skill">
                            <span>SQL 95%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 95%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>JAVA 85%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 85%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>C++ 90%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 90%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>REACT JS 80%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 80%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>SPRING BOOT 75%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 75%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>JAVASCRIPT 90%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 90%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>NODE JS 80%</span>
                            <div class="skill-bar">
                                <div class="skill-progress" style="--skill-level: 80%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        updateContentAndActiveState(this, content);
    });

    document.getElementById("projects").addEventListener("click", function () {
        const content = `
            <div class="bodydiv column projects-page">
    <aside>
        <p>My Projects</p>
    </aside>
    <div class="project-div">
        <div class="project">
            <a href="#" target="_blank">
                <img src="./assets/results.jpg" alt="Student Results ManageMent">
            </a>
            <h2>Student Results</h2>
        </div>
        <div class="project">
            <a href="https://btechquizappforcse.000webhostapp.com/" target="_blank">
                <img src="./assets/quiz.jpg" alt="QUIZ APP">
            </a>
            <h2>Quiz App</h2>
        </div>
        <div class="project">
            <a href="https://enchanting-hummingbird-28cabd.netlify.app/" target="_blank">
                <img src="./assets/intrest.jpg" alt="INTREST CALCULATOR APP">
            </a>
            <h2>Interest Calculator</h2>
        </div>
        <div class="project">
            <a href="https://nitishkatteboyina.github.io/historical-places-of-india/" target="_blank">
                <img src="./assets/historical_places.jpg" alt="Historical Places APP">
            </a>
            <h2>Historical Places</h2>
        </div>
        <div class="project">
            <a href="https://nitishkatteboyina.github.io/Weather_app/" target="_blank">
                <img src="./assets/weather.jpg" alt="Weather APP">
            </a>
            <h2>Weather App</h2>
        </div>
    </div>
</div>

        `;
        updateContentAndActiveState(this, content);
    });

    document.getElementById("contact").addEventListener("click", function () {
        const content = `
             <div class="bodydiv1">
             <div class="contact-me">
                 <h1>Contact Me</h1>
                 <p>Below are the details to reach me out</p>
             </div>
        <div class="Contacts">
            <div class="contact-item">
                <a href="https://www.instagram.com/always_nitish_45?utm_source=qr&igsh=MWl4NTIzY2E4cHN6cA==" target="_blank">
                    <div class="icon"><i class="fab fa-instagram"></i></div>
                    <p>INSTAGRAM</p>
                </a>
            </div>
            <div class="contact-item">
                <a href="https://wa.me/+917799244908" target="_blank">
                    <div class="icon"><i class="fab fa-whatsapp"></i></div>
                    <p>WHATSAPP</p>
                </a>
            </div>
            <div class="contact-item">
                <a href="https://www.linkedin.com/in/nitish-katteboyina-69806a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                    <div class="icon"><i class="fab fa-linkedin-in"></i></div>
                    <p>LINKEDIN</p>
                </a>
            </div>
            <div class="contact-item">
                <a href="mailto:katteboyinanitish@gmail.com" target="_blank">
                    <div class="icon"><i class="fas fa-envelope"></i></div>
                    <p>GMAIL</p>
                </a>
            </div>
            <div class="contact-item">
                <a href="https://x.com/Always_nitish?t=ZKT5eDSybchi5Lz27lkkRg&s=08" target="_blank">
                    <div class="icon"><i class="fab fa-twitter"></i></div>
                    <p>TWITTER</p>
                </a>
            </div>
            <div class="contact-item">
                <a href="https://maps.app.goo.gl/yqLGtR45DnQCRygy9" target="_blank">
                    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                    <p>Piduguralla, India</p>
                </a>
            </div>
        </div>
        <div class="question">
            <p>Have a Question?</p>
            <a href="https://docs.google.com/forms/d/1z27a8VHZWlPQm9gsTPmP_zdtAVAVwlvK9J5wAqtSnoo/edit?usp=sharing_eip_se_dm&ts=6694f91c" class="question-btn" target="_blank"><button>CLICK HERE</button></a>
        </div>
    </div>
        `;
        updateContentAndActiveState(this, content);
    });

    // Initially mark Home as active
    const initialContent = `
        <div class="bodydiv">
            <aside>
                <p>Hello..!</p>
                <h1>I'm  <span>Nitish</span></h1>
                <h1><span>Katteboyina</span></h1><br>
                <button><a href="./assets/resume.pdf" download="nitish_resume.pdf">Download Resume</a></button>
            </aside>
            <img src="./assets/profile.jpg" alt="Profile Image">
        </div>
    `;
    updateContentAndActiveState(document.getElementById("home"), initialContent);
});
