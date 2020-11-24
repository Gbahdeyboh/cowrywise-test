<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	@import '~bootstrap/dist/css/bootstrap.css'; /* bootstrap */
	@import './assets/scss/variables.scss'; /* CSS variables used */
	#app{
		height: 100%;
		width: 100%;
		max-width: 1800px;
		margin: 0px auto 0px auto;
		font-family: 'Work Sans', sans-serif;
		background: var(--pageColor);
	}
</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				window: {
		            width: 0,
		            height: 0
		        },
			}
		},
		created() {
	        window.addEventListener('resize', this.handleResize);
	        // Makes sure <html> and <body> have a height of 100% always 
	        document.querySelector('html').style.height = '100%';
	        document.querySelector('body').style.height = '100%';
	        document.querySelector('body').style.margin = '0px'; //body should have no default margin
	        this.handleResize();
	    },
	    destroyed() {
	        window.removeEventListener('resize', this.handleResize);
	    },
	    methods: {
	    	// Make resizing of the webpage sleek
	        handleResize() {
	            this.window.width = window.innerWidth;
	            this.window.height = window.innerHeight;
	        },
	    },
	}
</script>
