new Vue({
	data(){
		return{
			activeIndex: '1',
			value:3.7,
			
		}
	},
	methods:{
		handleSelect(key, keyPath) {
//			console.log(key, keyPath);
		},
		getData() {
			
		}
	},
	created() {
		this.projectId = getQueryVariable('projectId');
	}
}).$mount('#app')