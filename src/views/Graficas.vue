<template>
  <b-container fluid>
    <h1>Graficas</h1>

<b-row>
    <div class="container">
    <b-form-select v-model="selected" class="mb-3"> Selecione
      <b-form-select-option :value="null">Please select an option</b-form-select-option>
      <b-form-select-option value="a">Option A</b-form-select-option>
      
    </b-form-select>

  </div>
</b-row>    

    
   <!-- <div class="card">
    <h4>grafica 1</h4>
<div id="chart" class="pt-4">
   <apexchart type="radialBar"> 
</div>
    </div> ¡-->
    
  </b-container>
</template>
<script>
export default {
  name: "Tablas",
  methods: {
    CargarGrafica() {
      var options = {
        chart: {
          height: 280,
          type: "radialBar",
        },

        series: [67],
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#293450",
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#fff",
                fontSize: "13px",
              },
              value: {
                color: "#fff",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Progress"],
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);

      chart.render();
    },
  },
};
</script>