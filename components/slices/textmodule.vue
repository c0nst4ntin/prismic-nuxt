<template>
  <section class="textmodule" v-html="getText"></section>
</template>

<script>
import PrismicDOM from "prismic-dom";
import linkResolver from "~/app/prismic/link-resolver.js";

export default {
  name: "textmodule",
  props: ["slice"],
  computed: {
    getText: function() {
      return PrismicDOM.RichText.asHtml(this.slice.primary.text, linkResolver);
    }
  }
};
</script>

<style></style>
