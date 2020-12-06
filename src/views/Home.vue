<template>
    <div>
        <Header v-on:search="searchFor"/>
        <ImageSection v-on:displayModal="displayModal" :query="searchQuery"/>
        <div v-if="modal" class="" id="singleImageBody">
            <div id="imageModalBody">
                <div id="singleImageDiv">
                    <img :src="url" alt="Unsplash image here"/>
                </div>
                <div class="p-4 pl-5" id="singleImageDescriptionDiv">
                    <div id="photographer">{{ photographer }}</div>
                    <div id="location">{{ location }}</div>
                </div>
            </div>
            <span id="closeModal" @click="closeModal"> &times; </span>
        </div>
    </div>
</template>

<style type="scss" scoped>
    #singleImageBody{
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #imageModalBody{
        width: 800px;
        max-width: 80%;
        height: 600px;
        max-height: 80%;
        border-radius: 15px;
        animation: scale .3s linear;
    }

    @keyframes scale {
        from{
            transform: scale(0);
        }
    }

    #singleImageDiv{
        height: 80%;
        background: lightgrey;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }

    #singleImageDiv > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }

    #singleImageDescriptionDiv{
        height: 20%;
        background: white;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    #singleImageDescriptionDiv > #photographer {
        font-size: 24px;
        color: #2a3d5b;
        font-weight: 600;
    }

    #singleImageDescriptionDiv > #location {
        font-size: 14px;
        font-weight: 600;
        color: #2a3d5b;
        opacity: 0.8;
    }
    
    #closeModal{
        font-size: 30px;
        position: absolute;
        top: 40px;
        right: 40px;
        color: white;
        cursor: pointer;
        transition: all .5s linear;
    }

    #closeModal:hover{
        color: lightgrey;
        transform: scale(1.1);
    }
</style>

<script>
import Header from '@/components/Header.vue'
import ImageSection from '@/components/ImageSection.vue'
export default {
    name: 'Homepage',
    components: {
        Header,
        ImageSection,
    },
    data(){
        return {
            name: 'Bello Gbadebo',
            searchQuery: '',
            modal: false,
            photographer: '',
            location: '',
            url: ''
        }
    },
    methods: {
        searchFor(val){
            console.log("Searching for => ", val);
            this.searchQuery = val;
        },
        closeModal(){
            this.modal = false;
        },
        displayModal(data){
            this.photographer = data.photographer;
            this.location = data.location;
            this.url = data.url;
            this.modal = true;
        }
    }
}
</script>