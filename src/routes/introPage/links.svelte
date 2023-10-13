




<script>
    import resumeImagePath from "$lib/images/resume.pdf"
    let urls = ["https://github.com/frankvp11",  "https://linkedin.com/in/frank-van-paassen-2954a522a", "https://medium.com/@frankvanpaassen3"] 
    let favicons = ["fab fa-github" , "fab fa-linkedin", "fab fa-medium"] 
    /**
     * @param {string} url
     */
    function goToGitHub(url) {
        // window.location.href = url; 
        window.open(url, "_blank")
    }
</script>
<div class="favicons-organizer">
{#each favicons as favi, index}
    <button on:click={() => goToGitHub(urls[index])} class="github-button">
        <i class={favi} />
    </button>
{/each}
    <nav>
        <button class="resume-button">
            <a href="{resumeImagePath}" target="_blank" class="resume-link">
                <strong>
                    Resume
                </strong>
                
            </a>
            
        </button>


    </nav>


</div> 


<style>
.resume-link {
    color: white;
    text-decoration: none;

}
.resume-button {
    display: flex;
    align-items: center;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    font-size: 14px;
    height: 5vmin;
    width: 6.5vmin;
}
.favicons-organizer{
    display: flex;
    gap: 5%;
}
.github-button {
    display: flex;
    align-items: center;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    font-size: 16px;
}
.github-button i.fab {
    font-size: 5vmin;
}


.github-button:hover {
    background-color: #555;
}

</style>
