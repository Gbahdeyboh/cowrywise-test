<template>
    <div>
        <Header />
    </div>
</template>

<style scoped>
    /*  */
</style>

<script>
import Header from '@/components/Header.vue'
export default {
    name: 'Homepage',
    components: {
        Header,
    },
    data(){
        return {
            name: 'Bello Gbadebo'
        }
    }
}
</script>