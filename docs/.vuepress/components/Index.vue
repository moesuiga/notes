<template>
  <div class="posts" v-if="posts.length">
    <div class="post-card" v-for="post in posts">
      <h2 class="post-title">
        <router-link :to="post.path">{{post.frontmatter.title}}</router-link>
      </h2>
      <time v-if="post.frontmatter.date" :datetime="post.frontmatter.date">{{post.frontmatter.date.split('T')[0]}}</time>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        const { pages } = this.$site;
        const posts = pages.sort((a, b) => {
          return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
        });
        return posts;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.post-card
  margin-bottom: 30px;

.post-excerpt,
.post-desc
  margin-left: 20px;
</style>
