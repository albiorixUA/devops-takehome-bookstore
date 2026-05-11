<script setup>
const cart = useState("cart", () => []);

onMounted(() => {
  const raw = localStorage.getItem("bookstore_cart");
  if (raw) {
    cart.value = JSON.parse(raw);
  }
});

function clearCart() {
  cart.value = [];
  localStorage.removeItem("bookstore_cart");
}

const total = computed(() => cart.value.reduce((sum, item) => sum + item.price_cents * item.quantity, 0));
</script>

<template>
  <section>
    <h1>Cart</h1>
    <p v-if="cart.length === 0" class="muted">Your cart is empty.</p>
    <div v-else class="card">
      <div v-for="item in cart" :key="item.slug">
        <strong>{{ item.title }}</strong>
        <span> x {{ item.quantity }} - ${{ (item.price_cents / 100).toFixed(2) }}</span>
      </div>
      <p>Total: <strong>${{ (total / 100).toFixed(2) }}</strong></p>
      <button class="button" type="button" @click="clearCart">Clear cart</button>
      <NuxtLink to="/checkout">Checkout</NuxtLink>
    </div>
  </section>
</template>
