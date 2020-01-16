<template>
  <main class="index">
    <div v-for="post in posts" :key="post.uid">
      <nuxt-link :to="getPostUrl(post.uid)">
        {{ post.uid }}
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  async asyncData({ context, error, req }) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

    const response = await api.query(
      Prismic.Predicates.at("document.type", "post")
    );
    if (response) {
      return {
        posts: response.results
      };
    } else {
      error({ statusCode: 4040, message: "Page not found" });
    }
  },
  methods: {
    getPostUrl(uid) {
      return `/blog/${uid}`;
    }
  }
};
</script>
