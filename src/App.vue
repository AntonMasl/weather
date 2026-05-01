<script setup lang="ts">
function onClick() {
  for (let i = 0; i < 10; i++) {
    if (i === 2) {
      return ""
    }
    return ""
    console.log(i)
    continue
    return i
  }
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit
    <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to
    read the documentation
  </p>
</template>

<style scoped>
.a {
}

.b {
}
</style>
