<template>
  <footer class="footer-subsection">
    <div class="container-8">
      <img
        class="article-SVG"
        alt="Article SVG"
        src="https://c.animaapp.com/Hg13enmV/img/article---svg.svg"
      />
      <div class="separator-2" />
      <div class="background-5">
        <div class="site-protegido" />
        <div class="text-wrapper-42">Site protegido</div>
        <div class="text-wrapper-43">Certificado SSL</div>
      </div>
      <div class="separator-3" />
      <p class="text-wrapper-44">
        Em caso de dúvidas entre em contato conosco através do número 0800 745
        0000
      </p>
      <img
        class="SVG-5"
        alt="Svg"
        src="https://c.animaapp.com/Hg13enmV/img/svg-12.svg"
      />
      <p class="copyright-CNPJ">
        Copyright © 2025.
        <br />
        CNPJ: 00.584.567/0001-52. Todos direitos reservados a Concentrix.
      </p>
      <div class="link-2">
        <img
          class="SVG-6"
          alt="Svg"
          src="https://c.animaapp.com/Hg13enmV/img/svg-13.svg"
        />
        <div class="text-wrapper-45">Perguntas frequentes</div>
      </div>
      <div class="link-3">
        <img
          class="SVG-6"
          alt="Svg"
          src="https://c.animaapp.com/Hg13enmV/img/svg-14.svg"
        />
        <div class="text-wrapper-46">Política de privacidade</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSubsection",
});
</script>

<style>
.footer-subsection {
  background-color: #011e38;
  display: flex;
  flex: 1;
  max-height: 321px;
}

.footer-subsection .container-8 {
  flex: 1;
  height: 321px;
  margin-left: 320px;
  margin-right: 320px;
  position: relative;
}

.footer-subsection .article-SVG {
  height: 56px;
  left: 90px;
  position: absolute;
  top: calc(50.00% - 128px);
  width: 242px;
}

.footer-subsection .separator-2 {
  border-color: #d7dbe0;
  border-top-style: solid;
  border-top-width: 1px;
  height: 1px;
  left: 90px;
  position: absolute;
  top: 112px;
  width: calc(100% - 180px);
}

.footer-subsection .background-5 {
  background-color: #f5f1eb;
  border-radius: 8px;
  height: 52px;
  left: 1050px;
  position: absolute;
  top: calc(50.00% - 36px);
  width: calc(100% - 1140px);
}

.footer-subsection .site-protegido {
  background-image: url(https://c.animaapp.com/Hg13enmV/img/site-protegido@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 36px;
  left: 12px;
  position: absolute;
  top: calc(50.00% - 18px);
  width: 30px;
}

.footer-subsection .text-wrapper-42 {
  align-items: center;
  color: #3e444e;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 18px;
  justify-content: center;
  left: 46px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 8px;
  white-space: nowrap;
  width: 78px;
}

.footer-subsection .text-wrapper-43 {
  align-items: center;
  color: #3e444e;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 10px;
  font-weight: 400;
  height: 18px;
  justify-content: center;
  left: 46px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 26px;
  white-space: nowrap;
  width: 68px;
}

.footer-subsection .separator-3 {
  border-color: #d7dbe0;
  border-top-style: solid;
  border-top-width: 1px;
  height: 1px;
  left: 90px;
  position: absolute;
  top: 201px;
  width: calc(100% - 180px);
}

.footer-subsection .text-wrapper-44 {
  align-items: center;
  color: #f5f1eb;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 18px;
  justify-content: center;
  left: calc(50.00% - 257px);
  letter-spacing: 0;
  line-height: 21px;
  position: absolute;
  text-align: center;
  top: 227px;
  white-space: nowrap;
  width: 514px;
}

.footer-subsection .SVG-5 {
  height: 25px;
  left: 90px;
  position: absolute;
  top: calc(50.00% + 95px);
  width: 150px;
}

.footer-subsection .copyright-CNPJ {
  align-items: center;
  color: #f5f1eb;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 39px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 21px;
  position: absolute;
  right: 90px;
  text-align: right;
  top: 248px;
  width: 431px;
}

.footer-subsection .link-2 {
  display: flex;
  gap: 8px;
  height: calc(100% - 269px);
  left: 90px;
  position: absolute;
  top: 125px;
  width: 190px;
}

.footer-subsection .SVG-6 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.footer-subsection .text-wrapper-45 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 14px;
  white-space: nowrap;
  width: 160.27px;
}

.footer-subsection .link-3 {
  display: flex;
  gap: 8px;
  height: calc(100% - 269px);
  left: 304px;
  position: absolute;
  top: 125px;
  width: 199px;
}

.footer-subsection .text-wrapper-46 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: "IBM Plex Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 14px;
  white-space: nowrap;
  width: 169.22px;
}
</style>
