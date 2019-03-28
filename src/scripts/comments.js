import Vue from 'vue';
import { file } from 'babel-types';


const slider_items = {
    template : "#slider__items",
    props:{
        slide: Object
    }
}


const slider = {
    template : "#comments__content",
    components : {
        slider_items
    },
    methods:{
        this_slider(data){
            return data.map(slide_item => {
                const requireImg = require(`../images/content/${slide_item.image}`);
                slide_item.image = requireImg;

                return slide_item;
            })
        } 
    },
    data(){
        return{
            slider__info : {}
        }
    },
    created(){
        const data = [
            {
                "text":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа форм развития.",
                "image" : "dima.png",
                "name": "Ковальчук Дмитрий",
                "acc" : "Остнователь Loftschool"
            },
            {
                "text":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа форм развития.",
                "image" : "vladimir.png",
                "name": "Владимир Сабанцев",
                "acc" :  "Преподаватель"
            },
            {
                "text":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа форм развития.",
                "image" : "dima.png",
                "name": "Ковальчук Дмитрий",
                "acc" : "Остнователь Loftschool"
            },
            {
                "text":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа форм развития.",
                "image" : "vladimir.png",
                "name": "Владимир Сабанцев",
                "acc" :  "Преподаватель"
            },
            {
                "text":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа форм развития.",
                "image" : "dima.png",
                "name": "Ковальчук Дмитрий",
                "acc" : "Остнователь Loftschool"
            },
            {
                "text":"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа форм развития.",
                "image" : "vladimir.png",
                "name": "Владимир Сабанцев",
                "acc" :  "Преподаватель"
            },
        ]
        this.slider__info = this.this_slider(data);
    }
}


const slider_title = {
    template : "#title"
}


new Vue({
    el: "#comments_slider",
    template: "#content",
    components : {
        slider_title,
        slider
    }
})