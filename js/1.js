const home = {
        template: `
                <section>
                        <h3>{{ $route.params.id }}</h3>
                        <router-view class="home"></router-view>
                </section>`,
        components: {
        	props: ["id"],
			template: `
		                <section>
		                        <h3>{{ $route.params.id }}</h3>
		                        <img src="" v-if="id===library">
		                        <img src="" v-if="id===kafe">
		                        <router-view class="first"></router-view>
		                </section>`
        }
}

const first = {
	
}

const router = new VueRouter ( {
        routes: [
        	{
        		path: 'places',
        		component: home
        		children: [
        			{  path: ':id',  component: first  }
        		]
        	}
                
        ]
} )

new Vue({
	el: '#sample',
	mounted: function() {
      console.log(this.$route) 
    },
	router: router

})
