<template>
   <b-container fluid>
        <h1>Monitoreo</h1>
        <div>
            <b-row>
    <div class="container">
    <b-form-select v-model="selected" class="mb-3"> Selecione
      <b-form-select-option :value="null">Please select an option</b-form-select-option>
      <b-form-select-option value="a">Option A</b-form-select-option>
      
    </b-form-select>

  </div>
</b-row>    

            <b-card-group deck>
            <b-card bg-variant="primary" text-variant="white" header="Persona" class="text-center">
                <b-card-text>
                    <p class="h1 mb-2">id: 1 <b-icon icon="person-fill"></b-icon></p>
                </b-card-text>
            </b-card>

            <b-card bg-variant="secondary" text-variant="white" header="PSO" class="text-center">
                <b-card-text>
                    <p class="h1 mb-2">90/s <b-icon icon="heart"></b-icon></p>
                </b-card-text>
            </b-card>

            <b-card bg-variant="success" text-variant="white" header="Temperatura" class="text-center">
                <b-card-text>
                    <p class="h1 mb-2">29° <b-icon icon="funnel"></b-icon></p>
                </b-card-text>
            </b-card>
            </b-card-group>
        </div>
    </b-container>
</template>
<script>
export default {
    name:"Monitoreo"
}
</script>