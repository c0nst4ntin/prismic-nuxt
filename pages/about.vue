<template>
  <div id="main">
    <component
      v-for="(slice,index) in slices"
      :key="index"
      :is="slice.slice_type + 'module'"
      :slice="slice"
    ></component>
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import PrismicConfig from "~/prismic.config.js";

export default {
  async asyncData({ context, error, req }) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

    const document = await api.getByUID("page", "about");
    if (document) {
      return {
        slices: document.data.body
      };
    } else {
      console.log("ERROR");
    }
  }
};
</script>

<style>
</style>
