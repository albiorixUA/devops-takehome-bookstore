<script setup>
const route = useRoute();
const { data, pending, error } = await useFetch("/api/books");
const book = computed(() => data.value?.items?.find((item) => item.slug === route.params.slug));
</script>

<template>
  <section class="card">
    <p v-if="pending">Loading...</p>
    <p v-else-if="error || !book">Book not found.</p>
    <template v-else>
      <p class="muted">{{ book.author }}</p>
      <h1>{{ book.title }}</h1>
      <p>{{ book.description }}</p>
      <p><strong>${{ (book.price_cents / 100).toFixed(2) }}</strong></p>
      <NuxtLink to="/">Back to catalog</NuxtLink>
    </template>
  </section>
</template>
