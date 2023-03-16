<template>
  <vue-markdown :source="article"></vue-markdown>
</template>
  

<script setup>


</script>

<script>


export default {
  name: 'ArticleComp',
  props: {
      title: String,
      article: String
  }
}
</script>