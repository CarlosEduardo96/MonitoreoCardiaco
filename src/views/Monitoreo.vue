<template>
   <b-container fluid>
        <h1 class="title-link">Monitoreo</h1>     

        <b-form-select v-model="selected" class="mb-3 my-4" @change="Select">
            
            <template #first>
                <b-form-select-option :value="null" disabled>-- Seleccione un usuario --</b-form-select-option>
            </template>

            <b-form-select-option v-for="item in list" :key="item.id_dato" :value="item">
                {{item.id_dato}}
            </b-form-select-option>
        </b-form-select>

        <b-card-group deck class="my-5">
            <b-card bg-variant="primary" text-variant="white" header="Persona" class="text-center">
            <b-card-text>
                <p class="h1 mb-2">id: {{item.id_usuario}} <b-icon icon="person-fill"></b-icon></p>
            </b-card-text>
            </b-card>

            <b-card bg-variant="secondary" text-variant="white" header="PSO" class="text-center">
                <b-card-text>
                    <p class="h1 mb-2">{{item.pso}}/s <b-icon icon="heart"></b-icon></p>
                </b-card-text>
            </b-card>

            <b-card bg-variant="success" text-variant="white" header="Temperatura" class="text-center">
                <b-card-text>
                    <p class="h1 mb-2">{{item.temp}}° <b-icon icon="funnel"></b-icon></p>
                </b-card-text>
            </b-card>
            <b-card bg-variant="danger" text-variant="white" header="Pulso" class="text-center">
                <b-card-text>
                    <p class="h1 mb-2">{{item.pulso}} <b-icon icon="bar-chart-fill"></b-icon></p>
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-row class="justify-content-md-center" >
            <b-col cols="8">
            <b-card  border-variant="light" header-bg-variant="primary" header-text-variant="white" header="Grafica Personal" class="text-center h3">
                <b-card-text>                
                    <div id="chart">
                    </div>
                </b-card-text>
            </b-card>
            </b-col>
        </b-row>

    </b-container>
</template>
<script>
export default {
    name:"Monitoreo",
    data(){
        return {
            selected:null,
            list:[],
            item:{
                id_usuario:0,
                pso:0,
                temp:0,
                pulso:0
            }

        }
    },
    mounted(){
        this.GetDatos();
        this.CargarGrafica(0,0,0);
    },
    methods:{
        GetDatos(){
            this.$axios.get(this.$RestApi+"datos.php")
            .then((res)=>{
                this.list=res.data.datos;
            })
            .catch(err=>console.log(err));
        },
        Select(){
            if(this.selected===null){            
                this.item.id_usuario=0;
                this.item.pso=0;
                this.item.temp=0;
                this.item.pulso=0;
                
            }else{
                this.item=this.selected;
            }
            this.CargarGrafica(this.item.pso,this.item.temp,this.item.pulso);
        },
        CargarGrafica(pso,temp,pulso){
            var options = {
            chart: {
                width: '100%',
                type: "radialBar",
            },
            series: [pso,temp,pulso],
            plotOptions: {
                radialBar: {
                dataLabels: {
                    total: {
                    show: true,
                    label: 'TOTAL'
                    }
                }
                }
            },
            labels: ['PSO',"Temperatura",'Pulso']
            };
            var chart = new ApexCharts(document.querySelector("#chart"), options);

            chart.render();
        }
    }
}
</script>
<style scoped>
.title-link{
    text-align: center;
}
</style>