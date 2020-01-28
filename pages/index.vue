<template>
  <main class="index">
    <component
      v-for="(slice, index) in slices"
      :key="index"
      :is="slice.slice_type + 'module'"
      :slice="slice"
    ></component>
  </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  async asyncData ({ context, error, req }) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

    const document = await api.getByUID("page", "home");
    if (document) {
      return {
        slices: document.data.body
      };
    } else {
      error({ statusCode: 4040, message: "Page not found" });
    }
  }
};
</script>
