<template>
  <div>
    <h1>{{ $prismic.richTextAsPlain(text) }}</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque numquam rerum tenetur minus totam voluptas! Exercitationem amet illo alias autem doloremque architecto sequi, ipsam voluptate. Quam totam mollitia possimus!
    
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import PrismicConfig from "~/prismic.config.js"

export default {
  async asyncData({ context, error, req }) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

    const document = await api.getByUID("page", "homepage")
    if (document) {
        return {
          text: document.data.text,
        }
    } else {
        console.log("ERROR")
    };
  },
};
</script>

<style>
</style>
