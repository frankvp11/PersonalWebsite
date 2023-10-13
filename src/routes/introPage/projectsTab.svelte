<script>
    import IMG2 from "$lib/images/recaptcha_en.png";
    import IMG3 from "$lib/images/mapsapp.png"
    import VID from "$lib/images/Screencast from 2023-09-10 10:13:47 AM.webm";
    import VID2 from "$lib/images/Screencast from 2023-09-10 06:33:26 PM.webm"
    let project_names = ["Math Solver", 
                        "JSON Visualizer",
                        "re-Captcha Solver",
                        "Maps App"];
    let project_descriptions = [
        "Simply upload an image and it will solve it for you",
        "Upload a JSON file and it will display it for you in a tree format",
        "Simply activate the Chrome extension and it would solve the reCaptcha for you (discontinued)",
        "Android Phone app similar to Strava that shows where you are, how far you've travelled and at what speed  (work in progress)"
    ];
    let project_links = [
        "https://github.com/frankvp11/MathSolver",
        "https://github.com/frankvp11/JsonVisualizer",
        "https://github.com/frankvp11/reCaptcha-images-Solver",
        "https://github.com/frankvp11/MapsApp",
        
    ];
    let images =  [
        {"src": VID, "type":1},
        {"src": VID2, "type":1}, 
        {"src": IMG2, "type":2},
        {"src": IMG3, "type":2}


    ]
</script>

<div class="main-container">
    <div class="project-container">
        <h1 class="latest-projects">Latest Projects</h1>
    </div>
    {#each project_names as project, index}
        <div class="math-solver-project">
            <div class="project-img">
                {#if images[index].type == 1}
                    <video src={images[index].src}   class="me-image" autoplay loop muted></video>
                {:else}
                    <img src={images[index].src} alt="None" class="me-image"/>
                {/if}
            </div>
            <div class="project-desc">
                <h1 class="math-solver-h1">{project}</h1>
                <h4 class="math-solver-h2">
                    {project_descriptions[index]}
                </h4>
                <a href={project_links[index]} class="link-button">
                    <i class="fas fa-link" /> Find out More
                </a>
            </div>
        </div>
    {/each}
</div>

<style>
    .math-solver-h1 {
        font-size: 3vmin;
    }

    .math-solver-h2 {
        font-size: 2vmin;
    }

    .me-image {
        max-width: 50%; /* Controls the maximum width of the image */
        height: auto; /* Maintain the image's aspect ratio */
        display: block;
    }

    .link-button {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        gap: 5px;
        font-size: 2vmin;
        margin-top: 1em; /* Optional: Adds some space above the button */
    }

    .project-desc {
        padding: 1em;
        flex: 1; /* Takes up available space */
    }

    .project-img {
        flex: 1; /* Takes up available space */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .math-solver-project {
        display: flex; /* Set to row (default), so children are side by side */
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 2em;
    }

    .latest-projects {
        padding-top: 5%;
        font-size: 5vmin;
        text-align: center;
    }

    .project-container {
        text-align: center;
        width: 100%;
        margin-top: 10%;
    }
    /* 
.main-container {
    width: 60%;
    margin: 5% auto;
    background-color: white;
} */
    .main-container {
        width: 80%;
        justify-content: center;
        align-items: center;
        height: auto;
        margin-top: 5%;
        background-color: white;
        margin-bottom: 5%;
        padding-bottom: 5%;
    }
</style>
