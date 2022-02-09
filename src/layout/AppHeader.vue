<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/logo/white.png" alt="Hưng Trí">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/logo/gold.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item">
                    <a class="nav-link" href="#about">{{ text.about }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#service">{{ text.service }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#recruitment-process">{{ text.process }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#gallery">{{ text.gallery }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#review">{{ text.review }}</a>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/hungtrihr" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li> -->
                <li class="nav-item d-lg-block ml-lg-4">
                    <select class="btn btn-primary btn-sm" v-model="language">
                        <option value="vi">Tiếng Việt</option>
                        <option value="ja">日本語</option>
                    </select>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { AppHeaderText } from "@/db/AppHeader.js";
import { setCookie, getCookie, loadText } from "@/common/utils.js";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
      return {
          language: '',
          text: {},
      };
  },
  watch: {
      language(newVal, oldVal) {
          if (!oldVal) return;
          setCookie('language', newVal);
          location.reload();
      },
  },
  created() {
      this.language = getCookie('language') || 'vi';
      this.text = loadText(AppHeaderText);
  },
};
</script>
<style>
</style>
