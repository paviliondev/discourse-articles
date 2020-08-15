import { withPluginApi } from "discourse/lib/plugin-api";
import { helperContext } from "discourse-common/lib/helpers";

export default {
  name: 'articles-init',
  initialize(){
    withPluginApi('0.8.33', articlesInit);
  }
}

const articlesInit = (api) => {
  let siteSettings = helperContext().siteSettings;

  if(siteSettings.articles_enable_nav_item) {
    api.addNavigationBarItem({
      name: "articles",
      displayName: "Articles",
      href: siteSettings.articles_nav_item_link,
      before: "categories",
    });
  }
}
