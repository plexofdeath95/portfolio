<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'ResumeView',
    setup() {
        const activeSection = ref('summary'); // default section
        const sections = ref([
            { name: 'summary', label: '_summary.ts' },
            { name: 'experience', label: '_experience.ts' },
            { name: 'skills', label: '_skills.ts' },
            { name: 'education', label: '_education.ts' },
            { name: 'publications', label: '_publications.ts' }
        ]);

        const toggleSection = (sectionName: string) => {
            if (activeSection.value === sectionName) {
                activeSection.value = ''; // Collapse the section if it’s open
            } else {
                activeSection.value = sectionName; // Open the section if it’s closed
            }
        };

        return {
            activeSection,
            sections,
            toggleSection
        };
    }
})
</script>


<template>
    <div class="resume-view">
        <select class="mobile-dropdown" v-model="activeSection">
            <option v-for="section in sections" :key="section.name" :value="section.name" @change="toggleSection(section.name)" > {{ section.label }}</option>
        </select>
        <div class="sidebar">
            <div class="item" @click="activeSection = 'summary'">_summary.ts</div>
            <div class="item" @click="activeSection = 'experience'">_experience.ts</div>
            <div class="item" @click="activeSection = 'skills'">_skills.ts</div>
            <div class="item" @click="activeSection = 'education'">_education.ts</div>
            <div class="item" @click="activeSection = 'publications'">_publications.ts</div>
        </div>
        <div class="main-container">
            <div class="main-area">
                
                <div v-if="activeSection === 'summary'">
                    <div class="comment-heading">/* Summary * /</div>
                    <h2>Hassan Farhat</h2>
                    <p>VIC, 3047</p>
                    <p>+61 0411 017 988</p>
                    <p>hassanfarhatcons@gmail.com</p>
                    <p>Innovative and driven technologist with a strong understanding of various technology stacks and specialised experience in game development, pipeline design, and AI development. Equipped with a background in psychology, adept at integrating these disciplines to create seamless tech solutions that optimise efficiency and effectiveness. Proficient in using Unity, Unreal, Python, C#, C++, Java, Kotlin, Maya, and React/Next.js. Strong passion for continuous learning and skill development.</p>
                </div>
                <div v-if="activeSection === 'experience'">
                    <div class="comment-heading">/* Experience * /</div>
                    <h3>Showdog Studios, Franklin, TN USA — Technical Pipeline Designer</h3>
                    <p>August 2022 - PRESENT</p>
                    <ul>
                        <li>Designed and implemented pipeline tools using Unreal, Maya, and Python scripting to support artists and animators, which significantly increased workflow speed.</li>
                        <li>Developed an efficient and user-friendly website using React/Next.js, improving the studio's online presence and accessibility.</li>
                        <li>Collaborated with teams across the studio to understand needs and provide appropriate technological solutions.</li>
                        <li>Ensured seamless integration of new technologies into existing systems.</li>
                        <li>Identified and addressed performance issues to ensure optimal functioning of the pipeline.</li>
                    </ul>
                    
                    <h3>2x2 Studios, New York, NY USA — Co-Founder & CTO</h3>
                    <p>August 2022 - PRESENT</p>
                    <ul>
                        <li>Oversaw the design of solutions for various clients, bringing their app visions to life, including the planning and execution of a social media app.</li>
                        <li>Coordinated with marketing teams, investors, UX/UI designers to align technical solutions with business objectives.</li>
                        <li>Oversaw the development and implementation of company-wide IT strategies and ensured they aligned with the company's business goals.</li>
                        <li>Led a team of developers, ensuring effective delegation of tasks and quality control of all technical outputs.</li>
                    </ul>
                    
                    <h3>PlayingForward, Santa Monica, CA, USA — Data Analyst and AI Developer</h3>
                    <p>February 2019 - January 2023</p>
                    <ul>
                        <li>Built an AI motion capture app to detect user movement for clinical and research purposes. Integrated the application in Unity and iOS, serving as a vital bridge between technology and healthcare.</li>
                        <li>Conducted extensive data analysis to inform business decisions and presented insights to investors and stakeholders, enabling informed decision-making.</li>
                        <li>Collaborated with healthcare professionals such as nurses, doctors, and researchers, translating their needs into technical requirements for the development team.</li>
                        <li>Identified, cleaned, and integrated data to maintain its accuracy and usefulness for ongoing projects.</li>
                    </ul>
                    
                    <h3>La Trobe University, Bundoora, VIC, AU — Research Assistant</h3>
                    <p>February 2014 - January 2019</p>
                    <ul>
                        <li>Assisted in the design and execution of research studies within the psychology department.</li>
                        <li>Developed applications for use in data collection and research studies.</li>
                        <li>Analysed research data and presented findings in clear, digestible formats.</li>
                        <li>Co-authored several research papers published in scientific journals.</li>
                    </ul>
                </div>
                
                <div v-if="activeSection === 'skills'">
                    <div class="comment-heading">/* Skills * /</div>
                    <ul>
                        <li>Technology Stacks: Unity, Unreal, Python, C#, C++, Java, Kotlin, Maya, React/Next.js, JS</li>
                        <li>CI/CD integration</li>
                        <li>Git and DevOps</li>
                        <li>AI Development</li>
                        <li>Pipeline Development</li>
                        <li>Game Development</li>
                        <li>Research Study Design</li>
                        <li>Data Analysis</li>
                        <li>Website Development</li>
                        <li>App Development</li>
                        <li>Project Management</li>
                        <li>Communication and Team Coordination</li>
                        <li>Integration of AI functionalities into Mobile Applications</li>
                        <li>Understanding of User Behavior (AI and Psychology intersection)</li>
                    </ul>
                </div>
                
                <div v-if="activeSection === 'education'">
                    <div class="comment-heading">/* Education * /</div>
                    <p>La Trobe University, Bundoora, VIC, AU — Bachelor of Psychology</p>
                    <p>2012-2016</p>
                </div>
                
                <div v-if="activeSection === 'publications'">
                    <div class="comment-heading">/* Publications * /</div>
                    <ul>
                        <li>Hocking, D.R., Ardalan, A., Abu-Rayya, H.M. et al. Feasibility of a virtual reality-based exercise intervention and low-cost motion tracking method for estimation of motor proficiency in youth with autism spectrum disorder. J NeuroEngineering Rehabil 19, 1 (2022). <a href="https://doi.org/10.1186/s12984-021-00978-1" target="_blank">https://doi.org/10.1186/s12984-021-00978-1</a></li>
                        <li>Hocking DR, Fritsche S, Farhat H, Atkinson A, Bendak H, Menant J. Working memory is a core executive function supporting dual-task locomotor performance across childhood and adolescence. J Exp Child Psychol. 2020 Sep;197:104869. <a href="https://doi.org/10.1016/j.jecp.2020.104869" target="_blank">doi: 10.1016/j.jecp.2020.104869</a>. Epub 2020 Jun 20. PMID: 32574754.</li>
                        <li>Hocking, Darren & Farhat, Hassan & Gavrila, Cristina. (2019). The influence of cognitive load on transfer of implicit perceptual-motor sequence learning to novel task performance. Psychological Research. <a href="https://doi.org/10.1007/s00426-019-01198-8" target="_blank">10.1007/s00426-019-01198-8</a>.</li>
                    </ul>
                </div>
            </div>
            <div class="terminal">
                <p><span class="greenp">$</span> echo "Hello, World!" <span class="blinking-cursor">_</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.resume-view {
    display: flex;
    min-height: 90vh;
    padding-left: 0px;
    padding-right: 10px;
}

.sidebar {
    width: 20%;
    background-color: var(--primary-bg);
    color: #ecf0f1;
    padding: 10px;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.1);
    height:90vh;
    border-right: 1px solid #34495e;
}

.item {
    cursor: pointer;
    margin-bottom: 10px;
    padding: 10px;
    transition: background-color 0.3s;
}

.item:hover {
    background-color: #34495e;
}

.main-container {
    width: 80%;
}

.main-area {
    background-color: var(--secondary-bg);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    height: 70%;
    padding: 20px;
    overflow: scroll;
}

h2, h3, p, ul {
    margin-bottom: 20px;
    margin-top: 0px
}

h3 {
    margin-bottom: 10px;
    color:var(--primary-text)
}
ul {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
    color: var(--secondary-text)
}

.terminal {
    background-color: var(--primary-bg);
    color: #ecf0f1;
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    height:30%;
    border-top: 1px solid #34495e;
    border-bottom: 1px solid #34495e;
}

    .blinking-cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

.greenp {
    color: var(--accent-color);
}

.comment-heading {
    font-family: 'Courier New', Courier, monospace;
    color: var(--accent-color);
    position: relative;
}

.mobile-dropdown {
    display: none; /* By default, the dropdown is not displayed */
    width: 100%; /* Take full width on small screens */
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
}

@media (max-width: 768px) { /* This will apply to screens smaller than 768px */
    .resume-view {
        flex-direction: column; /* stack sidebar and main container vertically */
    }

    .sidebar, .main-container {
        width: 100%; /* Take full width on small screens */
        box-shadow: none; /* Remove shadow to clean up appearance on small screens */
    }

    .item {
        padding: 8px; /* Reduce padding for smaller screens */
        font-size: 14px; /* Reduce font size for smaller screens */
    }

    .main-area, .terminal {
        padding: 10px; /* Reduce padding for smaller screens */
    }
    
    h2, h3, p, ul {
        margin-bottom: 10px; /* Reduce margin for smaller screens */
    }
    
    h3 {
        font-size: 16px; /* Reduce font size for smaller screens */
    }
    
    li {
        font-size: 14px; /* Reduce font size for smaller screens */
    }

    .terminal {
        font-size: 12px; /* Reduce font size for smaller screens */
    }

    .sidebar {
        display: none; /* Hide sidebar on small screens */
    }

    .mobile-dropdown {
        display: block; /* Display dropdown on small screens */
    }
}

@media (max-width: 480px) { /* This will apply to screens smaller than 480px */
    .item {
        font-size: 12px; /* Reduce font size for very small screens */
    }
    
    h2, h3 {
        font-size: 14px; /* Reduce font size for very small screens */
    }
    
    p, li {
        font-size: 12px; /* Reduce font size for very small screens */
    }
}

</style>
