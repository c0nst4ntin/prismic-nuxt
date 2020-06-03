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
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post")
      );
      return {
        posts: document.results,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  methods: {
    getPostUrl(uid) {
      return `/blog/${uid}`;
    },
  },
};
</script>
