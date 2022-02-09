<template>
    <section class="section section-components" id="gallery">
        <div class="container">
            <!-- <div class="row justify-content-center align-items-center mb-3">
                <h3 class="display-3 mb-0 text-uppercase text-muted font-weight-bold">{{ text.gallery }}</h3>
            </div> -->
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="font-weight-light">{{ text.gallery }}</h1>
                    <p class="lead mt-4">{{ text.galleryDetail }}</p>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ThuVienAnhText } from "@/db/ThuVienAnh.js";
import { loadText } from "@/common/utils.js";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
export default {
    name: "thu-vien-anh",
    components: {
        BCarousel,
        BCarouselSlide
    },
    data() {
        return {
            text: {},
        };
    },
    created() {
        this.text = loadText(ThuVienAnhText);
    },
};
</script>
<style>
</style>
