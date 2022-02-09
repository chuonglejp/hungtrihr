<template>
    <section class="section section-components" id="service">
        <div class="container">
            <div class="row justify-content-center align-items-center mb-3">
                <h3 class="display-3 mb-0 text-uppercase text-muted font-weight-bold">{{ text.service }}</h3>
            </div>
            <div class="row">
                <div class="col-lg-4 justify-content-center align-items-center">
                    <h4 class="display-4 bg-primary text-white rounded shadow p-2 text-uppercase">{{ text.thucTapSinh }}</h4>
                    <img v-lazy="'img/homepage/thuctapsinh.jpg'" alt="Rounded image" class="img-fluid rounded shadow" style="width: 100%;">
                    <p class="lead mt-3">{{ text.thucTapSinhDetail }}</p>
                </div>
                <div class="col-lg-4 justify-content-center align-items-center">
                    <h4 class="display-4 bg-primary text-white rounded shadow p-2 text-uppercase">{{ text.duHocSinh }}</h4>
                    <img v-lazy="'img/homepage/duhocsinh.jpg'" alt="Rounded image" class="img-fluid rounded shadow" style="width: 100%;">
                    <p class="lead mt-3">{{ text.duHocSinhDetail }}</p>
                </div>
                <div class="col-lg-4 justify-content-center align-items-center">
                    <h4 class="display-4 bg-primary text-white rounded shadow p-2 text-uppercase">{{ text.kySu }}</h4>
                    <img v-lazy="'img/homepage/kysu.jpg'" alt="Rounded image" class="img-fluid rounded shadow" style="width: 100%;">
                    <p class="lead mt-3">{{ text.kySuDetail }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { DichVuText } from "@/db/DichVu.js";
import { loadText } from "@/common/utils.js";
export default {
    name: "dich-vu",
    components: {},
    data() {
        return {
            text: {},
        };
    },
    created() {
        this.text = loadText(DichVuText);
    },
};
</script>
<style>
</style>
