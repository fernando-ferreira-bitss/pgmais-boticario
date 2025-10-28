<template>
  <div class="main-subsection">
    <div class="section">
      <div class="article">
        <div class="heading-bem-vindo">Bem-vindo(a) ao portal</div>

        <div class="heading-regulariza">
          Regulariza Grupo
          <br />
          Boticário
        </div>
      </div>

      <div class="beauty-week" />

      <div class="link">
        <img
          class="SVG"
          alt="Svg"
          src="https://c.animaapp.com/Hg13enmV/img/svg.svg"
        />

        <p class="text-wrapper">Confira aqui como podemos te atender</p>
      </div>

      <div class="form">
        <div class="fieldset">
          <div class="heading-informe">Informe seus dados</div>

          <div class="div">
            <img
              class="img"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-1.svg"
            />

            <div class="input">
              <div class="container">
                <div class="text-wrapper-2">CPF</div>
              </div>
            </div>
          </div>

          <div class="div">
            <img
              class="img"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-2.svg"
            />

            <div class="input">
              <div class="container">
                <div class="text-wrapper-3">DATA DE NASCIMENTO</div>
              </div>
            </div>
          </div>

          <button class="button">
            <div class="continuar">CONTINUAR</div>
          </button>
        </div>

        <div class="background">
          <button class="button-2">
            <div class="background-2" />

            <div class="background-3" />

            <div class="text-wrapper-4">FRANQUEADO, Clique aqui!</div>

            <img
              class="SVG-2"
              alt="Svg"
              src="https://c.animaapp.com/Hg13enmV/img/svg-3.svg"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainSubsection",
});
</script>

<style>
.main-subsection {
  background-image: url(https://c.animaapp.com/Hg13enmV/img/main.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex: 1;
  max-height: 695px;
}

.main-subsection .section {
  flex: 1;
  height: 695px;
  margin-left: 320px;
  margin-right: 320px;
  position: relative;
}

.main-subsection .article {
  border-color: #ffebd3;
  border-left-style: solid;
  border-left-width: 2px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  height: 131px;
  left: 90px;
  position: absolute;
  top: 80px;
  width: calc(100% - 934px);
}

.main-subsection .heading-bem-vindo {
  align-items: center;
  color: #ffebd3;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 600;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-left: 14px;
  white-space: nowrap;
  width: 192.41px;
}

.main-subsection .heading-regulariza {
  align-items: center;
  color: #ffebd3;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 32px;
  font-weight: 600;
  height: 90px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 48px;
  margin-left: 14px;
  width: 256.56px;
}

.main-subsection .beauty-week {
  background-image: url(https://c.animaapp.com/Hg13enmV/img/beauty-week@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 134px;
  left: 90px;
  position: absolute;
  top: 481px;
  width: calc(100% - 1025px);
}

.main-subsection .link {
  display: flex;
  gap: 12px;
  height: 32px;
  left: 799px;
  position: absolute;
  top: 540px;
  width: 363px;
}

.main-subsection .SVG {
  align-self: center;
  height: 32px;
  width: 32px;
}

.main-subsection .text-wrapper {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 2.5px;
  white-space: nowrap;
  width: 319.26px;
}

.main-subsection .form {
  display: flex;
  flex-direction: column;
  height: 414px;
  left: calc(50.00% + 130px);
  position: absolute;
  top: 96px;
  width: 420px;
}

.main-subsection .fieldset {
  background-color: #ffffff;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 310px;
}

.main-subsection .heading-informe {
  align-items: center;
  align-self: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 20px;
  font-weight: 600;
  height: 30px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 30px;
  margin-left: 0.3px;
  margin-top: 24px;
  text-align: center;
  white-space: nowrap;
  width: 184.26px;
}

.main-subsection .div {
  align-items: center;
  border: 2px solid;
  border-color: #b4bbc5;
  border-radius: 9999px;
  display: flex;
  flex: 1;
  gap: 12px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 16px;
  max-height: 56px;
  overflow: hidden;
}

.main-subsection .img {
  height: 24px;
  margin-left: 18px;
  width: 24px;
}

.main-subsection .input {
  display: flex;
  flex: 1;
  height: 48px;
  margin-right: 2px;
  width: 316px;
}

.main-subsection .container {
  display: flex;
  flex: 1;
  margin-top: 14px;
}

.main-subsection .text-wrapper-2 {
  align-items: center;
  color: #d7dbe0;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 500;
  height: 20px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  width: 29.68px;
}

.main-subsection .text-wrapper-3 {
  align-items: center;
  color: #d7dbe0;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 500;
  height: 20px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  width: 169.8px;
}

.main-subsection .button {
  all: unset;
  border: 2px solid;
  border-color: #8b97a5;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  height: 56px;
  justify-content: center;
  margin-left: 24px;
  margin-top: 32px;
  overflow: hidden;
  width: 372px;
}

.main-subsection .continuar {
  align-items: center;
  color: #8b97a5;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 0.3px;
  margin-top: 16px;
  text-align: center;
  white-space: nowrap;
  width: 92.86px;
}

.main-subsection .background {
  background-color: #011e38;
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex: 1;
  max-height: 104px;
}

.main-subsection .button-2 {
  all: unset;
  background-color: #ffffff;
  border: 2px solid;
  border-radius: 9999px;
  box-sizing: border-box;
  flex: 1;
  height: 56px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
  overflow: hidden;
  position: relative;
}

.main-subsection .background-2 {
  background-color: #264fec;
  height: 92.86%;
  left: -48.92%;
  position: absolute;
  top: 3.57%;
  width: 49.46%;
}

.main-subsection .background-3 {
  background-color: #264fec;
  height: 92.86%;
  left: 99.46%;
  position: absolute;
  top: 3.57%;
  width: 49.46%;
}

.main-subsection .text-wrapper-4 {
  align-items: center;
  color: #011e38;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  left: calc(50.00% - 108px);
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 16px;
  white-space: nowrap;
  width: 204px;
}

.main-subsection .SVG-2 {
  height: 21px;
  left: calc(50.00% + 156px);
  position: absolute;
  top: calc(50.00% - 10px);
  width: 12px;
}
</style>
