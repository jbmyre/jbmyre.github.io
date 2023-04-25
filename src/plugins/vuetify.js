/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */


import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#003852',
          secondary: '#75787B',
        },
      },
    },
  },
})
