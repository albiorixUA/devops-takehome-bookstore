<script setup>
const cart = useState("cart", () => []);
const email = ref("reader@example.com");
const status = ref("");
const orderId = ref("");

onMounted(() => {
  const raw = localStorage.getItem("bookstore_cart");
  if (raw) {
    cart.value = JSON.parse(raw);
  }
});

async function placeOrder() {
  status.value = "Submitting order...";
  const response = await $fetch("/api/orders", {
    method: "POST",
    body: {
      email: email.value,
      items: cart.value
    }
  });
  orderId.value = response.order_id;
  status.value = "Order created.";
  cart.value = [];
  localStorage.removeItem("bookstore_cart");
}
</script>

<template>
  <section class="card">
    <h1>Checkout</h1>
    <label>
      Email
      <input v-model="email" type="email" />
    </label>
    <p class="muted">{{ cart.length }} cart item(s)</p>
    <button class="button" type="button" :disabled="cart.length === 0" @click="placeOrder">
      Place order
    </button>
    <p>{{ status }}</p>
    <p v-if="orderId">Order id: {{ orderId }}</p>
  </section>
</template>
