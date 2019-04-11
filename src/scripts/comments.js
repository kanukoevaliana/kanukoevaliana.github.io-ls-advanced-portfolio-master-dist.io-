import Vue from 'vue';
import { file } from 'babel-types';


const slider_items = {
    template : "#slider__items",
    props:{
        slide: Object
    }
};


const slider = {
    template : "#comments__content",
    components : {
        slider_items
    },
    data(){
        return{
            slider__info : {},
            sliderIndex: 0
        }
    },
    computed: {
        commentsSlider(){
            return this.slider__info[this.sliderIndex];
        }
    },
    methods:{
        this_slider(data){
            return data.map(slide_item => {
                const requireImg = require(`../images/content/${slide_item.image}`);
                slide_item.image = requireImg;

                return slide_item;
            });
        },
        sliderComments(direction){
            switch(direction){
                case 'next':
                    this.sliderIndex++;
                    breake;
                case 'prev':
                    this.sliderIndex--;
                    breake;
            }
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
};

const btns = {
    template: "#btns"
}

const slider_title = {
    template : "#title",
    components : {
        btns
    }
};


new Vue({
    el: "#comments_slider",
    template: "#content",
    components : {
        slider_title,
        slider
    }
});