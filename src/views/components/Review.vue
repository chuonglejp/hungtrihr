<template>
    <section class="section section-components bg-secondary" id="review">
        <div class="container">
            <div class="row justify-content-center align-items-center mb-3">
                <h3 class="display-3 mb-0 text-uppercase text-dark font-weight-bold">{{ text.review }}</h3>
            </div>
            <div class="row">
                <div class="col-lg-6 justify-content-center align-items-center">
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnguyenquoc.huy.1481%2Fposts%2F4544064235721068&show_text=true&width=500" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ReviewText } from "@/db/Review.js";
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
        this.text = loadText(ReviewText);
    },
};
</script>
<style>
</style>
