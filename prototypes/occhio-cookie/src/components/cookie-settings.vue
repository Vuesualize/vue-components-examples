<template>
  <div>
    <form action="https://postman-echo.com/post" method="post">

      <h1>cookie settings</h1>
      <div v-show="step === 1">

        <p>description text</p>

        <button @click.prevent="next()">Next</button>

      </div>

      <div v-show="step === 2">
        <h2>radios</h2>

        <div v-for="item in cookieTypes" :key="item.id" :class="{'level-active' : item.id <= cookieLevel}">
          <input type="radio" :id="item.id" :value="item.id" v-model="cookieLevel">
          <label :for="item.id">{{ item.title }}</label>
          <div>{{ item.text }}</div>
        </div>

        <button @click.prevent="prev()">Previous</button>
        <button @click.prevent="next()">Next</button>

      </div>

      <div v-show="step === 3">
        <h2>third page</h2>

        <div v-for="item in cookieTypes" :key="item.id" v-if="item.id <= cookieLevel">
          <h2>{{ item.title }}</h2>
          {{ item.text }}
          <ul>
            <li v-for="domain in domains" :key="domain.id">
              <div>{{ domain.name }}</div>
              <div>{{ domain.description }}</div>
            </li>
          </ul>
        </div>

        <button @click.prevent="prev()">Previous</button>
        <input type="submit" value="Save">

      </div>
    </form>

    <br/><br/>cookieLevel: {{ cookieLevel }}
  </div>
</template>

<script>
  export default {
    props: [
      'test'
    ],
    data() {
      return {
        step: 1,
        cookieLevel: 1,
        cookieTypes: [{
            id: 1,
            title: 'Erforderliche Cookies',
            text: 'Diese Cookies lassen die Website richtig funktionieren'
          }, {
            id: 2,
            title: 'Analytische Cookies',
            text: 'Diese Cookies ermöglichen uns eine Analyse der Webseite, damit wir die Performance unserer Seiten messen und verbessern können.'
          }, {
            id: 3,
            title: 'Social Media',
            text: 'Über diese Cookies können Sie sich mit Ihren Social Media Kanälen verbinden und Reviews lesen.'
          }, {
            id: 4,
            title: 'Marketing Cookies',
            text: 'Wir nutzen diese Cookies, um Ihnen auf Ihre Interessen zugeschnittene Werbung anzuzeigen, innerhalb und außerhalb der Philips Webseiten.'
          }],
        domains: [{
          name: 'occhio.de',
          description: 'A diversified technology company whose main objective is to improve the lives of people with significant innovation in the areas of Healthcare, Consumer &amp; Lifestyle and Lighting'
        }, {
          name: 'my.occhio.de',
          description: 'xx'
        }, {
          name: 'store.occhio.de',
          description: 'yy'
        }]
      }
    },
    methods:{
      prev() {
        this.step--;
      },
      next() {
        this.step++;
      }
    }
  }
</script>
<style lang="scss">
  .level-active {
    background: green;
  }
</style>

