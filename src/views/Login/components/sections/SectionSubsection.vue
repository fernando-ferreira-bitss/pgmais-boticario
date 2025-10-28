<template>
  <div class="section-subsection">
    <div class="container-2">
      <div class="container-3">
        <div class="background-4" />
        <div class="mulher-segurando-o" />
      </div>
      <div class="article-2">
        <div class="heading">
          <div class="text-wrapper-5">Vantagens</div>
        </div>
        <p class="negocie-em-nossa">
          Negocie em nossa plataforma online e realize o pagamento
          <br />
          de suas contas de forma rápida e segura.
        </p>
        <div class="list">
          <div class="item">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-4.svg"
            />
            <div class="text-wrapper-6">Agilidade e Segurança</div>
          </div>
          <div class="item-2">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-5.svg"
            />
            <p class="p">Negociação rápida e fácil 24h</p>
          </div>
          <div class="item-3">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-6.svg"
            />
            <div class="text-wrapper-7">Segunda via do acordo</div>
          </div>
          <div class="item-4">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-7.svg"
            />
            <p class="text-wrapper-8">Pagamento via cartão de crédito</p>
          </div>
          <div class="item-5">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-8.svg"
            />
            <p class="text-wrapper-9">
              Envio do código de barras via WhatsApp e E-mail
            </p>
          </div>
          <div class="item-6">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-9.svg"
            />
            <p class="text-wrapper-10">Receba o título via E-mail</p>
          </div>
          <div class="item-7">
            <img
              class="SVG-3"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-10.svg"
            />
            <p class="text-wrapper-11">Negocie e volte a revender</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionSubsection",
});
</script>

<style>
.section-subsection {
  background-image: url(https://c.animaapp.com/Hg13enmV/img/section.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex: 1;
  max-height: 784px;
}

.section-subsection .container-2 {
  flex: 1;
  height: 640px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 72px;
  position: relative;
  max-width: 1280px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
}

.section-subsection .container-3 {
  height: 640px;
  position: relative;
  width: 45%;
  min-width: 400px;
  max-width: 550px;
}

.section-subsection .background-4 {
  background-color: #ffbc82;
  border-radius: 4px;
  height: 93.12%;
  left: 5.71%;
  position: absolute;
  top: 0;
  width: 94.29%;
}

.section-subsection .mulher-segurando-o {
  background-image: url(https://c.animaapp.com/Hg13enmV/img/mulher-segurando-o-cabelo-e-sorrindo-para-c-mera.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 4px;
  height: calc(100% - 18px);
  left: 0;
  position: absolute;
  top: 18px;
  width: calc(100% - 18px);
}

.section-subsection .article-2 {
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
  position: relative;
  width: 485px;
  max-width: 50%;
}

.section-subsection .heading {
  border-color: #011e38;
  border-left-style: solid;
  border-left-width: 2px;
  display: flex;
  flex: 1;
  max-height: 72px;
}

.section-subsection .text-wrapper-5 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 48px;
  font-weight: 600;
  height: 62px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 72px;
  margin-left: 14px;
  margin-top: 5px;
  white-space: nowrap;
  width: 233.91px;
}

.section-subsection .negocie-em-nossa {
  align-items: center;
  color: #586371;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 16px;
  width: 422.95px;
}

.section-subsection .list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  max-height: 488px;
}

.section-subsection .item {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 266.91px;
}

.section-subsection .SVG-3 {
  height: 40px;
  margin-left: 16px;
  margin-top: 8px;
  width: 40px;
}

.section-subsection .text-wrapper-6 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 183.25px;
}

.section-subsection .item-2 {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 326.34px;
}

.section-subsection .p {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 242.73px;
}

.section-subsection .item-3 {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 269.92px;
}

.section-subsection .text-wrapper-7 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 186.26px;
}

.section-subsection .item-4 {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 349.66px;
}

.section-subsection .text-wrapper-8 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 265.96px;
}

.section-subsection .item-5 {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 484.92px;
}

.section-subsection .text-wrapper-9 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 401.28px;
}

.section-subsection .item-6 {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 293.34px;
}

.section-subsection .text-wrapper-10 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 209.7px;
}

.section-subsection .item-7 {
  display: flex;
  gap: 12px;
  height: 56px;
  width: 301.92px;
}

.section-subsection .text-wrapper-11 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 14.5px;
  white-space: nowrap;
  width: 218.29px;
}
</style>
