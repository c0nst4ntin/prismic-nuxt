<template>
  <main class="about">
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

export default {
  async asyncData({ context, error, req }) {
    const api = await Prismic.getApi(process.env.PRISMIC_API, { req });
    const document = await api.getByUID("page", "about");
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
