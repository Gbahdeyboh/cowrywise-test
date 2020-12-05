<template>
    <div>
        <Header v-on:search="searchFor"/>
        <ImageSection :query="searchQuery"/>
    </div>
</template>

<style scoped>
    /*  */
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
            searchQuery: ''
        }
    },
    methods: {
        searchFor(val){
            console.log("Searching for => ", val);
            this.searchQuery = val;
        }
    }
}
</script>