<template>
    <footer class="footer bg-white">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h4 class="text-primary font-weight-light mb-2">{{ text.thankYou }}</h4>
                    <h5 class="mb-0 font-weight-light">{{ text.contactNow }}</h5>
                </div>
                <div class="col-lg-6">
                    <!-- <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a> -->
                    <!-- <a target="_blank" rel="noopener" href="https://www.facebook.com/hungtrihr"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a> -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.123041454144!2d105.88968291489006!3d18.34167028751337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31384e1312fae09d%3A0x2be226abfbe08f17!2zMDIgVsWpIFF1YW5nLCBC4bqvYyBIw6AsIEjDoCBUxKluaCwg44OZ44OI44OK44Og!5e0!3m2!1sja!2sjp!4v1643532332347!5m2!1sja!2sjp" width="100%" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        Hưng Trí HR
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://zebeel.github.io" class="nav-link" target="_blank" rel="noopener">@zebeel</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { AppFooterText } from "@/db/AppFooter.js";
import { loadText } from "@/common/utils.js";
export default {
  name: 'app-footer',
  data() {
    return {
        year: new Date().getFullYear(),
        language: '',
        text: {},
    }
  },
  created() {
      this.text = loadText(AppFooterText);
  },
};
</script>
<style>
</style>
