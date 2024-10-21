import comp from "/data/work/bastyon/apps/documentation/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/bastyon-logo-256x256.png\",\"actions\":[{\"text\":\"Developer Documentation\",\"link\":\"/en/dev-docs/get-started-dev.md\",\"type\":\"primary\"},{\"text\":\"Monetize With Bastyon\",\"link\":\"/en/user-docs/get-started-user.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Freedom of Expression\",\"details\":\"The platform operates without a central authority, making it resistant to traditional censorship methods.\"},{\"title\":\"Diverse Content Sharing\",\"details\":\"Users can post a variety of content including text, videos, and long-form blogs with minimal restrictions.\"},{\"title\":\"Earn Cryptocurrency\",\"details\":\"Users can monetize their content and interactions using PKOIN, Bastyon's native cryptocurrency.\"},{\"title\":\"Enhanced Privacy\",\"details\":\"Users can interact on the platform without concerns about their personal data being collected or sold.\"},{\"title\":\"Trusted Content Storage\",\"details\":\"Users benefit from decentralized technology ensuring their content remains unaltered and accessible.\"},{\"title\":\"Flexible Access\",\"details\":\"Bastyon is available on iOS, Android, as a desktop app, and as a web app via web most web browsers.\"}],\"footer\":\"Apache License-2.0 | Copyright © 2019-present Bastyon\"},\"headers\":[],\"git\":{\"updatedTime\":1728440694000,\"contributors\":[{\"name\":\"gked\",\"email\":\"glyukshin@mailfence.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
