<template>
    <b-container fluid>
        <h1 class="title-link">Historial</h1>        
        <b-table striped hover :items="items" :fields="fields" class="my-4"></b-table>
  
    </b-container>

</template>
<script>
export default {
    name: "Historial",
    data(){
        return{
            fields: ['id_dato', 'id_usuario', 'temp','pulso','pso','fecha','estatus'],
            items:[]
        }
    },
    mounted(){
        this.GetDatos();
    },
    methods:{
        GetDatos(){
            this.$axios.get(this.$RestApi+"datos.php")
            .then((res)=>{
                this.items=res.data.datos;
                console.log(res);
            })
            .catch(err=>console.log(err));
        }
    }
}
</script>
<style scoped>
.title-link{
    text-align: center;
}
</style>