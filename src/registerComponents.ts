import ArImage from "@/components/ar-image/ArImage.vue";

export const registerComponents = {
  install(app) {
    app.component("ar-image", ArImage);
  },
};
