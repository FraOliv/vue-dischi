let app = new Vue ({


    el: "#root",
    
    data: {

        listaCD : [],

    },
    methods: {
        
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(response => {
            this.listaCD = response.data.response;
            console.log(this.listaCD);
        }).catch(error=>{
            console.log(error);
        })
    },

})
