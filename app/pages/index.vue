<script setup>
const cart = useState("cart", () => []);
const { data, pending, error } = await useFetch("/api/books");

function addToCart(book) {
  cart.value.push({ slug: book.slug, title: book.title, price_cents: book.price_cents, quantity: 1 });
  if (process.client) {
    localStorage.setItem("bookstore_cart", JSON.stringify(cart.value));
  }
}
</script>

<template>
  <section>
    <h1>Book Catalog</h1>
    <p class="muted">Browse curated books and build a small order.</p>

    <p v-if="pending">Loading books...</p>
    <p v-else-if="error">Could not load books.</p>

    <div v-else class="grid">
      <article v-for="book in data.items" :key="book.slug" class="card">
        <p class="muted">{{ book.author }}</p>
        <h2>{{ book.title }}</h2>
        <p>{{ book.description }}</p>
        <p><strong>${{ (book.price_cents / 100).toFixed(2) }}</strong></p>
        <p class="muted">Stock: {{ book.stock }}</p>
        <NuxtLink :to="`/books/${book.slug}`">Details</NuxtLink>
        <button class="button" type="button" @click="addToCart(book)">Add to cart</button>
      </article>
    </div>
  </section>
</template>
