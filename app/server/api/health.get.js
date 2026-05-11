export default defineEventHandler(() => {
  return {
    ok: true,
    service: "bookstore",
    timestamp: new Date().toISOString()
  };
});
