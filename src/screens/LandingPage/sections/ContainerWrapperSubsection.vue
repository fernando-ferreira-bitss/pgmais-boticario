<template>
  <div class="container-wrapper-subsection">
    <div class="container-4">
      <div class="article-3">
        <div class="div-wrapper">
          <div class="text-wrapper-12">Saiba mais</div>
        </div>

        <p class="pague-contas-com">
          Pague contas com facilidade: assista o vídeo sobre a plataforma de
          <br />
          pagamentos.
        </p>

        <div class="button-3">
          <p class="text-wrapper-13">
            Assista o vídeo sobre a plataforma
          </p>

          <img
            class="SVG-4"
            alt="Svg"
            src="https://c.animaapp.com/Hg13enmV/img/svg-11.svg"
          />
        </div>
      </div>

      <img
        class="container-5"
        alt="Container"
        src="https://c.animaapp.com/Hg13enmV/img/container.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContainerWrapperSubsection",
});
</script>

<style>
.container-wrapper-subsection {
  background-color: #011e38;
  display: flex;
  flex: 1;
  max-height: 436px;
}

.container-wrapper-subsection .container-4 {
  display: flex;
  flex: 1;
  gap: 32px;
  height: 436px;
  margin-left: 320px;
  margin-right: 320px;
}

.container-wrapper-subsection .article-3 {
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
  margin-left: 90px;
  margin-top: 72px;
  width: 518px;
}

.container-wrapper-subsection .div-wrapper {
  border-color: #ffffff;
  border-left-style: solid;
  border-left-width: 2px;
  display: flex;
  flex: 1;
  max-height: 60px;
}

.container-wrapper-subsection .text-wrapper-12 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 40px;
  font-weight: 600;
  height: 52px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 60px;
  margin-left: 14px;
  margin-top: 4px;
  white-space: nowrap;
  width: 202.89px;
}

.container-wrapper-subsection .pague-contas-com {
  align-items: center;
  color: #edeef1;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 16px;
  margin-top: 18px;
  width: 479.58px;
}

.container-wrapper-subsection .button-3 {
  background: linear-gradient(
    291deg,
    rgba(255, 255, 255, 0.05) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 9999px;
  height: 84px;
  margin-top: 86px;
  position: relative;
  width: 465px;
}

.container-wrapper-subsection .text-wrapper-13 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 24px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  left: calc(50.00% - 208px);
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  text-align: center;
  top: calc(50.00% - 16px);
  white-space: nowrap;
  width: 383px;
}

.container-wrapper-subsection .SVG-4 {
  height: 25px;
  left: 418px;
  position: absolute;
  top: calc(50.00% - 12px);
  width: 23px;
}

.container-wrapper-subsection .container-5 {
  flex: 1;
  margin-bottom: 72px;
  margin-right: 90px;
  margin-top: 72px;
  object-fit: cover;
}
</style>
