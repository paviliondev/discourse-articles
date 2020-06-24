import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: 'articles-init',
  initialize(){
    withPluginApi('0.8.33', articlesInit);
  }
}

const articlesInit = (api) => {
  api.addNavigationBarItem({
       name: "articles",
       displayName: "Articles",
       href: "/articles",
       before: "categories",
     })
}