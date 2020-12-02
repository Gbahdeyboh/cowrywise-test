<template>
    <div class="" id="imageContainer">
        <div class="grid p-5" v-show="!loading">
            <div 
                v-for="image in images" 
                :key="image.id" 
                class="item"
                :style="`grid-row-end: span ${ image.spanSize }`"
            >
                <div class="imageOverlay pl-3 pb-4">
                    <div class="photographerName">{{ image.user.first_name }} {{ image.user.last_name }}</div>
                    <div class="photographerLocation">{{ image.user.location }}</div>
                </div>
                <img 
                    :src='image.urls.full' 
                    class='images' 
                    :alt='image.description' 
                    @load="loaded"
                />
            </div>
        </div>

        <div v-show="loading" class="grid p-5">
            <div 
                v-for="image in 6" 
                :key="image" 
                class="itemLoader"
                :style="`grid-row-end: span ${ calculateSpan() }`"
            >
                <div class="skeleton">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<style type="scss" scoped>
    #imageContainer{
        min-height: calc(100vh - 350px);
        position: relative;
        bottom: 150px;
        margin: auto;
        max-width: 980px;
    }

    .grid {
        display: grid;
        grid-row-gap: 30px;
        grid-column-gap: 40px;
        column-gap: 40px;
        grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
        text-rendering: optimizeLegibility;
    }

    .item, .itemLoader {    
        background-color: #ffffff;
        min-height: 300px;
        border-radius: 8px;
        transition: all .5s;
        position: relative;
    }

    .item:hover{
        transform: scale(1.07);
        cursor: pointer;
    }

    .images{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .imageOverlay{
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background:linear-gradient(rgba(0,0,0,.04), rgba(0,0,0,.2), rgba(0,0,0,.2), rgba(0,0,0,.95));
        border-radius: 10px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }


    .photographerName{
        font-size: 16px;
    }

    .photographerLocation{
        font-size: 12px;
    }

    .skeleton {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px 0px 1em 1em;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: #f5f5f5;
        background: linear-gradient(#f5f5f5, 100%, transparent 0);
        border-radius: 10px;
        animation: shine-lines 1.6s infinite linear;
    }
    .skeleton .line {
        float: left;
        width: 140px;
        height: 10px;
        margin-top: 12px;
        border-radius: 2px;
        background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
        background-size: 600px;
        animation: shine-lines 1.6s infinite linear;
    }

    .skeleton .line:nth-child(even){
        width: 70px;
    }

    @keyframes shine-lines {
        0% {
            background-position: -100px;
        }
        40%, 100% {
            background-position: 140px;
        }
    }

</style>

<script>
export default {
    /* eslint-disable no-unused-vars */
    name: 'imageSection',
    data(){
        return {
            name: 'Section',
            loading: true,
            images: '',
            // images: [
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog1.jpg',
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog3.jpg',
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog4.jpg',
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog5.jpg',
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog2.jpg',
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog9.jpg',
            //     'https://www.andybarefoot.com/codepen/images/dogs/dog10.jpg',
            // ]
        }
    },
    methods: {
        calculateSpan(){
            let random = Math.ceil(Math.random() * 3 ) + 3;
            return random;
        },
        loaded(){
            // Wait for the src to load the images beforre displaying them
            this.loading = false;
        }
    },
    async created(){
        const unsplashURI = 'https://api.unsplash.com/search/photos?query=Nigeria'
        console.log("Token is => ", process.env.VUE_APP_UNSPLASH_ACCESS_KEY);
        const imagesData = await this.$axios.get(unsplashURI, {
            headers: {
                Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`
            }
        })

        const images = imagesData.data.results;

        images.map(image => {
            image.spanSize = this.calculateSpan();
        });
        
        this.images = images;

        console.log("The fetched images are =>", images)
    },
}
</script>