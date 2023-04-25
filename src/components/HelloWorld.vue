<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center  fill-height">

      <h1 class="text-h3 font-weight-bold text-center">WORK HISTORY</h1>

      <div class="py-14" />

      <v-timeline side="end">
        <v-timeline-item
          v-for="(job, i) in history.jobs"
          :key="i"
        >
          <template v-slot:opposite>
            <h3 class="font-weight-light">
              {{job.start_year}}-{{job.end_year}}
            </h3>
          </template>
          <v-card>
            <v-card-title class="primary text-center">
              <h2 class="font-weight-light">
                {{job.title}}
              </h2>
              <h4 class="font-weight-light">
                {{job.company}}
              </h4>
            </v-card-title>
            <v-card-text>
              <p>{{job.description}}</p>
              <br/>

              <ul class="ps-5">
                <li
                v-for="(skill, i) in job.responsibilities"
                v-text="skill"
                :key="i"
                />
              </ul>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <v-row class="d-flex align-center justify-center">
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useWorkHistory } from '@/store/app'
const history = useWorkHistory()

</script>
