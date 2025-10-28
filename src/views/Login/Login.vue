<template>
  <div class="login-page" data-model-id="115:6007">
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
import MainSubsection from "./components/sections/MainSubsection.vue";
import SectionSubsection from "./components/sections/SectionSubsection.vue";
import ContainerWrapperSubsection from "./components/sections/ContainerWrapperSubsection.vue";
import SectionWrapperSubsection from "./components/sections/SectionWrapperSubsection.vue";
import DivWrapperSubsection from "./components/sections/DivWrapperSubsection.vue";
import FooterSubsection from "./components/sections/FooterSubsection/FooterSubsection.vue";

export default defineComponent({
  name: "Login",
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
.login-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.login-page .header {
  width: 100%;
  height: 80px;
  object-fit: contain;
}

/* Centraliza o conteúdo para telas grandes */
@media (min-width: 1921px) {
  .login-page {
    align-items: center;
  }

  .login-page > * {
    max-width: 1920px;
    width: 100%;
  }
}
</style>
