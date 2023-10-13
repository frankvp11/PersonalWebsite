<script>
    import Me from "$lib/images/me.jpg";
    import GithubIcon from "./links.svelte"
    import ProjectsTab  from "./projectsTab.svelte";
    import TechnicalSkills from "./technicalSkills.svelte";
</script>

<div class="center-container">
    <div class="image-container">
        <img src={Me} alt="Frank van Paassen" class="me_image" />
    </div>
    <div class="text-container">
        <h1>Frank van Paassen</h1>
        <h3>Software Engineer | Computer Vision Enthusiast | Student</h3>
        <GithubIcon></GithubIcon>
        
    </div>
</div>
<div class="main-container"> 
    <div class='inside-container'>
        <div class="history"> 
            <h1 class="simple-h1"> About Me</h1>
            <p class="info-para"> I began exploring computer science in grade 8, initially with HTML and CSS via Codecademy. However, finding it wasn't for me, I transitioned to Python on the same platform. I soon realized I needed a more practical learning approach than what Codecademy offered. This led me to Udemy's "100 days of Python" course, enabling me to create 100 projects of varying complexity. In grades 11 and 12, I crafted numerous computer science projects, such as a Candy Crush-like game in Pygame and JavaScript, a JSON visualizer, an Excel Automator, a re-Captcha Solver, and a math problem solver akin to Photomath.

                Professionally, I've always been rooted in the greenhouse industry. I began working at 14 years old in a packing hall, handling cucumbers and tomatoes. By grade 11, I secured a co-op at Ecoation, a tech firm utilizing AI to optimize greenhouse yields and reduce pest management expenses.
                
                
                
                
                
            </p>
        </div>
        <ProjectsTab></ProjectsTab>

    </div>
    <div>
        <div class="contact-me">
            <h1> Contact Me  </h1>
            <div class="contact-info"> 
                <h3> - 1381 Oxford Avenue East Kingsville Ontario</h3>
                <h3> - frankvanpaassen3@gmail.com</h3>
                <h3> - 519-613-8882</h3>
            </div>
        </div>
        <TechnicalSkills></TechnicalSkills>

    </div>
</div>


<style>
    .contact-info {
        margin-left: 10%;
    }

    .contact-me {
        background-color: white;
        width: 80%;
        padding: 10%;
        display: block;
        overflow: visible;
        }
    .simple-h1 {
        justify-content: center;
        text-align: center;
        width: 100%;
        
    }
    .history {
        padding: 5%;

        background-color: white;
        width: 70%;
        
        
    }
    .inside-container {
        width: 70%;
        height: 100%;
        justify-content: center;
        align-items: center;
        margin-right: -10%;
    }
    
    .info-para{
        width: 100%;
        
        font-size: 2vmin;

    }
    .main-container {
        display: flex;
        background-color: rgb(211, 209, 209);
        justify-content: center;
        /* align-items: center; */
        height: 100%;
        width: 100%;
        padding-top: 5%;
    }
    .image-container {
        width: 20%;
        height: 20%;
    }
    .me_image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .center-container {
        display: flex;
        justify-content: left;

        height: 20%;
        margin-left: 10%;
        margin-bottom: 2%;
    }
    .text-container {
        margin-left: 2%;
        margin-top: 2.5%;
        width: 70%;
        justify-content: center;
        align-items: center;
    }
    h1 {
        text-align: left;
        font-size: 5vmin;
        margin: 0px;
    }
    h3 {
        text-align: left;
        font-size: 2vmin;
    }
</style>
