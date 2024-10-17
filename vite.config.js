export default {
  build: {
    rollupOptions: {
      external: [
        "/opt/build/repo/plugins/useBootstrap.client.ts",
        "/opt/build/repo/plugins/showToast.client.js",
      ],
    },
  },
};
