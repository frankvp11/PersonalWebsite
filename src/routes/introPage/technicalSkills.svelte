<script>
    let languages = [
        "Python",
        "Docker",
        "C++",
        "Computer Vision",
        "Svelte",
        "Bash",
        "Google Cloud (buckets)",
        "React",
        "Prompt Engineering",
    ];
    let proficiencies = [80, 70, 65, 65, 65, 50, 50, 40, 33, 30];

    /**
     * @param {number} percent
     */
    let mapping = (percent) => {
        if (percent > 66) {
            return "Intermediate";
        } else if (percent > 40) {
            return "Moderate";
        } else {
            return "Beginner";
        }
    };
</script>

<div class="technical-skills">
    <h1>Technical Skills</h1>
    {#each languages as language, index}
        <div class="temp1">
            <div class="temp2">
                <h2>{language}</h2>
            </div>
            <div class="temp3">
                <h5>{mapping(proficiencies[index])}</h5>
            </div>
        </div>
        <div class="container">
            <div
                class="skill {language}"
                style="width: {proficiencies[index]}%"
            >
                <div class="skill {language}">{proficiencies[index]}%</div>
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        background-color: rgb(138, 135, 135);
        width: 100%;
        border-radius: 15px;
    }

    .skill {
        background-color: rgb(116, 194, 92);
        color: rgb(255, 255, 255);
        padding: 1%;
        text-align: right;
        font-size: 2vmin;
        border-radius: 15px;
    }

    .temp1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .temp2 {
        flex: 1;
    }

    .temp3 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 2;
        padding-right: 1em;
    }

    .technical-skills {
        background-color: white;
        margin-top: 10%;
        width: 80%;
        padding: 10%;
        padding-top: 1%;
        display: block;
        overflow: visible;
    }
    h1 {
        font-size: 4vmin;
    }
    h2 {
        font-size: 2vmin;
    }
    h5 {
        font-size: 1.5vmin;
    }
</style>
