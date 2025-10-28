<template>
  <div class="section-wrapper-subsection">
    <div class="heading-2">
      <div class="text-wrapper-14">Passo a passo</div>
    </div>

    <div class="nav">
      <button class="button-4">
        <div class="text-wrapper-15">1</div>
      </button>

      <button class="button-5">
        <div class="text-wrapper-16">2</div>
      </button>

      <button class="button-6">
        <div class="text-wrapper-16">3</div>
      </button>

      <button class="button-5">
        <div class="text-wrapper-16">4</div>
      </button>
    </div>

    <div class="list-2">
      <div class="item-8">
        <p class="heading-informe-2">
          Informe seu CPF e data de
          <br />
          nascimento para iniciar
        </p>

        <div class="container-6">
          <p class="em-poucos-segundos">
            Em poucos segundos nosso sistema validará
            <br />
            seus dados de acesso e buscará seus contratos.
          </p>

          <div class="separator" />

          <p class="caso-n-o-tenha-t">
            Caso não tenha títulos ativos, seu login não será
            <br />
            efetuado.
          </p>

          <div class="separator" />
        </div>
      </div>

      <img
        class="item-9"
        alt="Item"
        src="https://c.animaapp.com/Hg13enmV/img/item.svg"
      />
    </div>

    <div class="informe-seu-CPF-e" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionWrapperSubsection",
});
</script>

<style>
.section-wrapper-subsection {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 72px 40px;
  min-height: 577px;
  width: 100%;
}

.section-wrapper-subsection .heading-2 {
  border-color: #011e38;
  border-left-style: solid;
  border-left-width: 2px;
  display: flex;
  height: 60px;
  margin-left: 90px;
}

.section-wrapper-subsection .text-wrapper-14 {
  align-items: center;
  color: #011e38;
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
  width: 259.68px;
}

.section-wrapper-subsection .nav {
  border-color: #011e38;
  border-left-style: solid;
  border-left-width: 2px;
  display: flex;
  flex-direction: column;
  width: 80px;
  gap: 2px;
  align-self: stretch;
}

.section-wrapper-subsection .button-4 {
  all: unset;
  align-items: center;
  background-color: #011e38;
  border-radius: 0px 8px 8px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-left: 2px;
  flex: 1;
  max-height: 92px;
  overflow: hidden;
}

.section-wrapper-subsection .text-wrapper-15 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 24px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 36px;
  margin-left: 0.4px;
  text-align: center;
  white-space: nowrap;
  width: 14.78px;
}

.section-wrapper-subsection .button-5 {
  all: unset;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-left: 2px;
  flex: 1;
  max-height: 92px;
  overflow: hidden;
}

.section-wrapper-subsection .text-wrapper-16 {
  align-items: center;
  color: #8b97a5;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 24px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 36px;
  margin-left: 0.4px;
  text-align: center;
  white-space: nowrap;
  width: 14.78px;
}

.section-wrapper-subsection .button-6 {
  all: unset;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-left: 2px;
  height: 92px;
  overflow: hidden;
}

.section-wrapper-subsection .list-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  align-self: stretch;
}

.section-wrapper-subsection .item-8 {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 18px;
  height: 222px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 16px;
  max-height: 222px;
}

.section-wrapper-subsection .heading-informe-2 {
  align-items: center;
  color: #264fec;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 20px;
  font-weight: 500;
  height: 57px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 30px;
  margin-left: 16px;
  margin-top: 1px;
  width: 242.48px;
}

.section-wrapper-subsection .container-6 {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 14px;
  margin-left: 16px;
  margin-right: 76px;
  max-height: 146px;
}

.section-wrapper-subsection .em-poucos-segundos {
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
  margin-top: 2px;
  width: 343.64px;
}

.section-wrapper-subsection .separator {
  border-color: #d7dbe0;
  border-top-style: solid;
  border-top-width: 1px;
  flex: 1;
  max-height: 1px;
}

.section-wrapper-subsection .caso-n-o-tenha-t {
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
  width: 343.68px;
}

.section-wrapper-subsection .item-9 {
  flex: 1;
  height: 48px;
  margin-bottom: 16px;
  margin-left: 32px;
  margin-right: 32px;
  max-height: 48px;
  object-fit: cover;
}

.section-wrapper-subsection .informe-seu-CPF-e {
  background-image: url(https://c.animaapp.com/Hg13enmV/img/informe-seu-cpf-e-data-de-nascimento-para-iniciar.png);
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 373px;
  width: 516px;
  align-self: center;
}
</style>
