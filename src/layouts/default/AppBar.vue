
<template>

      <v-navigation-drawer
        permanent
        color="primary"
      >
        <template v-slot:prepend>
          <v-list-item
            lines="three"
            subtitle="Senior Software Engineer"
            class="text-center"
          >
            <template v-slot:title><h6 class="text-h5 font-weight-bold text-uppercase text-center">Joel Buikema</h6></template></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-phone" title="917-453-1127"></v-list-item>
          <v-list-item prepend-icon="mdi-email">
            <template v-slot:title>
              <a class="text-white" href="mailto:jbmyre@gmail.com">jbmyre@gmail.com</a>
            </template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-linkedin">
            <template v-slot:title>
            <a class="text-white" href="https://www.linkedin.com/in/joelbuikema">LinkedIn Profile</a>
            </template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-download">
            <template v-slot:title>
            <a class="text-white" :href="'/files/Joel B resume_2023.pdf'" download>Current Resume</a>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list-item
          lines="two"
          prepend-icon="mdi-code-json"
        >
        </v-list-item>
        <v-list nav>
          <v-list-item prepend-icon="mdi-language-python" lines="two">
            <p class="text-subtitle-2 text-uppercase">Python</p>
            <v-progress-linear model-value="80" :height="10"></v-progress-linear>
          </v-list-item>
          <v-list-item prepend-icon="mdi-language-typescript" lines="two">
              <p class="text-subtitle-2 text-uppercase">Typescript</p>
              <v-progress-linear model-value="50" :height="10"></v-progress-linear>
          </v-list-item>
          <v-list-item prepend-icon="mdi-aws" lines="two">
            <p class="text-subtitle-2 text-uppercase">Aws</p>
            <v-progress-linear model-value="50" :height="10"></v-progress-linear>
          </v-list-item>
        </v-list>


        <template v-slot:append>
          <v-divider></v-divider>
          <v-list-item
            lines="two"
            prepend-icon="mdi-school-outline"
          >
          </v-list-item>
          <v-list-item prepend-icon="mdi-circle-small" title="Infocomm" subtitle="CTS"></v-list-item>
          <v-list-item prepend-icon="mdi-circle-small" title="BMCC" subtitle="Broadcast Technology"></v-list-item>
        </template>
      </v-navigation-drawer>
</template>

<script setup>
  //
</script>
