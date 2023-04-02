// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // ESLint 옵션을 구성합니다.
  eslint: {
    fix: true, // 자동으로 코드 스타일을 고치도록 설정합니다.
  },
  typescript: {
    strict: true,
  },
});
