<template>
    <div class="bg-primary" id="header">
        <h3>{{ name }}</h3>
    </div>
</template>

<style lang="scss" scoped>
    #header{
        height: 300px;
    }
</style>

<script>
export default {
    name: 'Header',
    data(){
        return{
            name: "This is the header page"
        }
    }
}
</script>