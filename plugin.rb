# name: discourse-articles
# about: A Discourse plugin that lets you create article style topics
# version: 0.1
# authors: Faizaan Gagan
# url: https://github.com/paviliondev/discourse-articles

enabled_site_setting :articles_enabled
Discourse.top_menu_items.push(:articles)
Discourse.anonymous_top_menu_items.push(:articles)
Discourse.filters.push(:articles)
Discourse.anonymous_filters.push(:articles)

after_initialize do

  Discourse::Application.routes.append do
    get '/:slug', to: redirect('/t/%{slug}')
  end

  add_to_class(:topic_query, :list_articles) do
    create_list(:articles) do |topics|
      topics.where("category_id IN (SELECT category_id  FROM category_custom_fields WHERE name='articles_enabled' AND value='true')")
    end
  end
end
