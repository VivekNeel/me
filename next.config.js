module.exports = {
  headers: () => [
    {
      source: "/.well-known/assetlinks.json",
      headers: [{ key: "content-type", value: "application/json" }],
    },
  ],
};
