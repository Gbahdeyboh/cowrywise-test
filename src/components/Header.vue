<template>
    <div id="header">
        <input type="text" placeholder="Search for a photo" id="searchInput"/>
    </div>
</template>

<style lang="scss" scoped>
    #header{
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #dde2e9;
    }

    #searchInput{
        height: 60px;
        width: 85%;
        padding-left: 4em;
        border-radius: 8px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        border: 0px;
        background: url('../assets/images/search.svg') no-repeat 20px 50% white;
        outline: none;
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