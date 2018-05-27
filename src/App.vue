<template>
<div id="app">
    <!-- Slide content -->
    <div ref="transitiondiv" class="transition">
        <component :is="slideComponent" :conf="content[slideNumber]" :saveAnswer="saveAnswer" :previousAnswer="answers[slideNumber]" :popup="popup" />
    </div>

    <!-- Answer validation popup -->
    <div class="popup-container" v-if="showPopup" ref="popupContainer">
        <div class="popup-dialog" ref="popupDialog">
            <div class="dialog-block">
                <div class="content" v-html="popupContent">
                <el-button size="small" type="info" plain v-if="showPopupButton" @click="hidePopup" class="fadeInUp">Test</el-button>
                </div>
            </div>
        </div>
    </div>

    <!-- Slider navigation -->
    <nav>
        <el-button @click="gotoPrevious" v-if="slideNumber !== 0 && slideNumber !== content.length - 1" class="prev-button l-btn-anima">Previous</el-button>
        <el-button @click="gotoNext" v-if="slideNumber !== content.length - 1" class="next-button r-btn-anima">Test form</el-button>
        <el-button @click="restart" v-if="slideNumber === content.length - 1" class="next-button r-btn-anima">Restart</el-button>
    </nav>
</div>
</template>

<script>
import StaticSlide from './components/StaticSlide.vue';
import FormsSlide from './components/FormsSlide.vue';
import config from './data.js';

export default {
    name: 'app',
    data() {
        isScrolled: true;
        return this.getDefaultData();
    },
    methods: {
        gotoPrevious() {
            const nextSlide = this.slideNumber - 1;
            this.initSlideChange(nextSlide);
        },
        gotoNext() {
            const nextSlide = this.slideNumber + 1;
            this.initSlideChange(nextSlide);
        },
        hideButtons() {
            this.showButtons = false;
            },
        initSlideChange(nextSlide) {
            this.showPopup = false;
            this.$refs.transitiondiv.style.opacity = 0;

            setTimeout(() => {
                // Check what is the type of next slide and choose proper component
                switch (this.content[nextSlide].type) {
                     case 'forms': {
                        this.slideComponent = FormsSlide;
                        break;
                    }
                    default: {
                        this.slideComponent = StaticSlide;
                        break;
                    }
                }
                this.slideNumber = nextSlide;
                this.$refs.transitiondiv.style.opacity = 1;
                if (!this.answers[nextSlide]) {
                    this.answers[nextSlide] = {};
                } else if (this.answers[nextSlide].isCorrect !== undefined) {
                    if (this.answers[nextSlide].isCorrect) {
                        this.showPopup = true;
                        this.popupContent = this.content[nextSlide].correctMessage;
                    } else {
                        this.showPopup = true;
                        this.showPopupButton = true;
                        this.popupContent = this.content[nextSlide].incorrectMessage;
                    }
                } else {
                    this.showPopup = false;
                }
            }, 500);
        },
        restart() {
            Object.assign(this.$data, this.getDefaultData());
        },
        saveAnswer(answer, showPopup = true) {
            this.answers[this.slideNumber] = answer;
            this.showPopup = showPopup;
        },
        getDefaultData() {
            return {
                slideComponent: StaticSlide,
                slideNumber: 0,
                content: config.slides,

                answers: {},

                showPopup: false,
                showPopupButton: false,
                popupContent: ''
            };
        },
        popup(isCorrect, msg) {
            if (isCorrect) {
                this.popupContent = msg;
                this.showPopupButton = false; // try again button
            } else {
                this.popupContent = msg;
                this.showPopupButton = true; // try again button
            }

            this.showPopup = true;
        },
        hidePopup() {
            console.log(this.$refs);
            // add class to animate out
            this.$refs.popupDialog.classList.add('popup-dialog-out');
            this.$refs.popupContainer.classList.add('popup-container-out');

            // change showPopup to false after 1 second to give time to animate out
            setTimeout(()=> {
                this.showPopup = false;
            }, 1000);
        }
    }
};
</script>

<!-- import external styles and variables !!! -->
<style lang="scss">
@import './scss/app';
@import './vendor/CustomScrollbar/css/mCustomScrollbar.css';
html {
    background: url(assets/img/background-wallpaper.jpg) no-repeat center center fixed;
    background-size: cover;
}

</style>
<style lang="less">
@import './less/vue2-animate';
</style>
