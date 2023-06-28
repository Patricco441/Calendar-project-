<template>
  <v-app>
    <v-content>
      <CalendarView />
    </v-content>
  </v-app>
</template>

<script>
import CalendarView from './components/CalendarView';

export default {
  name: 'App',
  components: {
    CalendarView
  },
  data: () => ({
    //
  }),
};
</script>