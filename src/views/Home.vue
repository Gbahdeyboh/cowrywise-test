<template>
    <div>
        <Header />
        <ImageSection />
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
            name: 'Bello Gbadebo'
        }
    }
}
</script>