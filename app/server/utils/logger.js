export function log(message, data = {}) {
  console.log(`${new Date().toISOString()} ${message} ${JSON.stringify(data)}`);
}

export function error(message, data = {}) {
  console.error(`${new Date().toISOString()} ERROR ${message} ${JSON.stringify(data)}`);
}
