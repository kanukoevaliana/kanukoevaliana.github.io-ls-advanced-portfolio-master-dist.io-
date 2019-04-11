import Vue from 'vue';

const skill = {
    template: "#skill",
    props:{
        skillName: String,
        skillValue: Number
    },
    methods:{
        userful(){
            const circle = this.$refs['percent'];
            const dasharray = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
            const val = (dasharray / 100) * (100 - this.skillValue);
            circle.style.strokeDashoffset = val;
        }
    },
    mounted(){
        this.userful();
    }
};

const skills_container = {
    template: "#skills-container",
    components: {
        skill
    },
    props: {
        skill: Object
    }
};

new Vue({
    el: "#skill-components",
    template: "#skills",
    components: {
        skills_container
    },
    data(){
        return{
            skills: {}
        }
    },
    created(){
        const data = [
            {
                "title": "Frontend",
                "skills":{
                    "HTML" : 60,
                    "CSS" : 50,
                    "Javascript": 20,
                    "jQuery/Vue.js" : 20,
                }
            },
            {
                "title": "Workflow",
                "skills":{
                    "GIT" : 40,
                    "Terminal" : 30,
                    "Gulp" : 10,
                    "Webpack": 15
                }
            }
        ]
        this.skills = data;
    }
});