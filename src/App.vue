<template>
  <div>
    <div>
      <header-layout></header-layout>
    </div>
    <div>
      <section-layout></section-layout>
    </div>
    <div>
      <main-layout></main-layout>
    </div>
    <div>
      <footer-layout></footer-layout>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    headerLayout: Header,
    sectionLayout: Section,
    mainLayout: Main,
    footerLayout: Footer
  }
}
</script>

