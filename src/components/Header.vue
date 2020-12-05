<template>
    <div id="header">
        <input 
            v-if="search" 
            type="text" 
            placeholder="Search for a photo" 
            id="searchInput"
            v-model="searchInput"
            v-on:keyup.enter="searchUnsplash"
        />
        <div v-else id="searchField">
            <span>Search Results for </span>
            <span id="searchedQuery">"{{ searchInput }}"</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #header{
        height: 350px;
        display: flex;
        align-items: center;
        background: #dde2e9;
    }

    #searchInput{
        height: 60px;
        width: 85%;
        padding-left: 4em;
        margin: auto;
        border-radius: 8px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        border: 0px;
        background: url('../assets/images/search.svg') no-repeat 20px 50% white;
        outline: none;
    }

    #searchedQuery{
        opacity: 0.8;
    }

    #searchField{
        color: #263958;
        font-size: 38px;
        font-weight: 700;
        padding-left: 3rem;
    }
</style>

<script>
export default {
    name: 'Header',
    data(){
        return{
            search: true,
            searchInput: ''
        }
    },
    methods: {
        searchUnsplash(){
            this.search = false;
            this.$emit('search', this.searchInput);
        }
    }
}
</script>