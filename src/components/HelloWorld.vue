<template>

  <v-container class="fill-height">
    <v-responsive class="d-flex align-center fill-height">
      <div class="py-8" />

      <h4 class="text-h4 font-weight-bold text-center">WORK HISTORY</h4>


      <div class="py-8" />

      <v-row no-gutters class="d-flex align-center justify-sm-space-between">

        <v-timeline side="end">
        <v-timeline-item
          v-for="(job, i) in history.jobs"
          :key="i"
          size="small"
        >
          <template v-slot:opposite>
            <h3 class="font-weight-light">
              {{job.start_year}}-{{job.end_year}}
            </h3>
          </template>
          <v-col cols="12">
          <v-card class="mx-auto" elevation="0">
            <v-card-title class="primary text-center">
              <h2 class="font-weight-light">
                {{job.title}}
              </h2>
              <h4 class="font-weight-light">
                {{job.company}}
              </h4>
            </v-card-title>
            <v-card-text>
              <p class="font-weight-medium text-body-2">{{job.description}}</p>
              <br/>
              <v-list density="compact">
                <v-list-item
                  v-for="(item, i) in job.responsibilities"
                  :key="i"
                  :value="item"
                >
                <template v-slot:prepend>
                  <v-icon icon="mdi-circle-medium"></v-icon>
                </template>
                  {{item}}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          </v-col>
        </v-timeline-item>
      </v-timeline>
      </v-row>

    </v-responsive>
  </v-container>
</template>

<script setup>
import { useWorkHistory } from '@/store/app'
const history = useWorkHistory()

</script>
