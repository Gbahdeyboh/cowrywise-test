<template>
    <div class="grid p-5" id="imageContainer">
        <div 
            v-for="image in images" 
            :key="image.id" 
            class="item"
            :style="`grid-row-end: span ${ image.spanSize }`"
        >
            <div class="imageOverlay">{{ image.user.first_name }} {{ image.user.last_name }}</div>
            <img 
                :src='image.urls.full' 
                class='images' 
                alt='Unsplash Image here' 
            />
        </div>

        <!-- <div 
            v-for="(image, index) in images" 
            :key="index" 
            class="item"
        >
            <div class="imageOverlay">Text</div>
            <img :src='image' class='images' alt='Unsplash Image here' />
        </div> -->
    </div>
</template>

<style scoped>
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
        /* grid-auto-rows: 40px; */
        text-rendering: optimizeLegibility;
    }

    .item {
        background-color: #ffffff;
        height: 100% !important;
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
    }
</style>

<script>
export default {
    /* eslint-disable no-unused-vars */
    name: 'imageSection',
    data(){
        return {
            name: 'Section',
            images: ''
            // [
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
        resizeGridItem(item){
            let random = Math.floor(Math.random() * 4 ) + 4;
            item.style.gridRowEnd = "span " + random;
        },
        resizeAllGridItems(){
            const allItems = document.getElementsByClassName("item");
            for(let x = 0; x < allItems.length; x++){
                this.resizeGridItem(allItems[x]);
            }
        },
        calculateSpan(){
            let random = Math.floor(Math.random() * 4 ) + 4;
            return random;
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
        // this.resizeAllGridItems();

        console.log("The fetched images are =>", images)
    },
}
</script>