<template>
  <main class="index">
    <component
      v-for="(slice, index) in slices"
      :key="index"
      :is="slice.slice_type + 'slice'"
      :slice="slice"
    ></component>
  </main>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getByUID("page", "home")).data;
      return {
        slices: document.body,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
