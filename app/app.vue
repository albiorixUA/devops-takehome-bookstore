<template>
  <main class="shell">
    <header class="topbar">
      <NuxtLink class="brand" to="/">Book Harbor</NuxtLink>
      <nav class="nav">
        <NuxtLink to="/">Catalog</NuxtLink>
        <NuxtLink to="/cart">Cart</NuxtLink>
        <NuxtLink to="/checkout">Checkout</NuxtLink>
      </nav>
    </header>
    <NuxtPage />
  </main>
</template>

<style>
body {
  margin: 0;
  background: #f7f4ef;
  color: #202124;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

a {
  color: inherit;
}

.shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}

.brand {
  font-size: 24px;
  font-weight: 800;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 16px;
}

.nav a {
  text-decoration: none;
  font-weight: 600;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}

.card {
  background: white;
  border: 1px solid #e1ddd4;
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 2px 12px rgba(30, 30, 30, 0.06);
}

.button {
  border: 0;
  border-radius: 6px;
  background: #245c4f;
  color: white;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
}

.muted {
  color: #666;
}
</style>
