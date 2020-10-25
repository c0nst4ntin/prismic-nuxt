<template>
  <section
    class="textslice"
    v-html="$prismic.asHtml(slice.primary.text)"
  ></section>
</template>

<script>
export default {
  name: "textmodule",
  props: ["slice"],
};
</script>

<style></style>
