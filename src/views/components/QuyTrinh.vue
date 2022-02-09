<template>
    <section class="section section-lg section-shaped overflow-hidden my-0" id="recruitment-process">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container shape-container py-0 pb-5">
            <div class="row justify-content-center align-items-center mb-3">
                <h3 class="display-3 mb-0 text-uppercase text-white font-weight-bold">{{ text.quyTrinh }}</h3>
            </div>
            <div class="row">
                <div class="col-lg">
                    <div class="step-wrap1 text-white">
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.soTuyen }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.soTuyenDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.khamSK }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.khamSKDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.daoTaoTruocPV }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.daoTaoTruocPVDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.phongVan }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.phongVanDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.daoTaoSauPV }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.daoTaoSauPVDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.xinVisa }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.xinVisaDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.xuatCanh }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.xuatCanhDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.nhapCanh }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.nhapCanhDetail"></div>
                        </div>
                        <div class="step-content1">
                            <div class="step-label1">STEP</div>
                            <div class="step-title1">{{ text.ketThucHD }}</div>
                            <div class="step-body1" style="border-bottom: dotted 2px #ddd;" v-html="text.ketThucHDDetail"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { QuyTrinhText } from "@/db/QuyTrinh.js";
import { loadText } from "@/common/utils.js";
export default {
    name: "quy-trinh",
    components: {},
    data() {
        return {
            text: {},
        };
    },
    created() {
        this.text = loadText(QuyTrinhText);
    },
};
</script>
<style scoped>
/***ステップバーデザイン１***/
.step-wrap1 {
    counter-reset:count;
    margin: 2em 0;
    position: relative;
}
.step-content1 {
    padding: 0 0 1.3em 2em;
    margin: 0;
    position: relative;
}
.step-content1::before {
    content: "";
    display: block;
    width: 13px;
    height: 13px;
    background: #6ab5a5;
    border: solid 3px #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    box-shadow: 0 0 0 2px #6ab5a5;
}
.step-content1::after {
    content: "";
    display: block;
    height: calc(100% - 35px);
    border-left: dotted 5px #ffffff;
    position: absolute;
    top: 30px;
    left: 10px;
}
.step-title1 {
    font-weight: bold;
    font-size: 120%;
}
.step-label1 {
    color: #ffffff;
    font-weight: bold;
}
.step-label1::after {
    counter-increment:count;
    content:counter(count);
    position: relative;
    left: .3em;
}
.step-body1 {
    margin-top: .5em;
    padding: 0 0 1em;
    border-bottom: dotted 2px #ddd;
}
.step-wrap1 > :last-of-type::after {
    display: none;
}
/***ステップバーデザイン１***/
</style>
