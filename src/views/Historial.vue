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
            fields: ['first_name', 'last_name', 'age'],
            items:[
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                {  age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                {  age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    methods:{
        GetDatos(){
            
        }
    }
}
</script>
<style scoped>
.title-link{
    text-align: center;
}
</style>