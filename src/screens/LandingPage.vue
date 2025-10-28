<template>
  <div class="landing-page" data-model-id="115:6007">
    <img
      class="header"
      alt="Header"
      src="https://c.animaapp.com/Hg13enmV/img/header.svg"
    />
    <MainSubsection />
    <SectionSubsection />
    <ContainerWrapperSubsection />
    <SectionWrapperSubsection />
    <DivWrapperSubsection />
    <FooterSubsection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSubsection from "./LandingPage/sections/MainSubsection.vue";
import SectionSubsection from "./LandingPage/sections/SectionSubsection.vue";
import ContainerWrapperSubsection from "./LandingPage/sections/ContainerWrapperSubsection.vue";
import SectionWrapperSubsection from "./LandingPage/sections/SectionWrapperSubsection.vue";
import DivWrapperSubsection from "./LandingPage/sections/DivWrapperSubsection.vue";
import FooterSubsection from "./LandingPage/sections/FooterSubsection/FooterSubsection.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    MainSubsection,
    SectionSubsection,
    ContainerWrapperSubsection,
    SectionWrapperSubsection,
    DivWrapperSubsection,
    FooterSubsection,
  },
});
</script>

<style>
.landing-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 5033px;
  min-width: 1920px;
  width: 100%;
}

.landing-page .header {
  flex: 1;
  max-height: 80px;
  object-fit: cover;
}
</style>
