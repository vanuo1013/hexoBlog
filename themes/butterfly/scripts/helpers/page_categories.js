"use strict";

hexo.extend.helper.register("page_categories", function (categories, options) {
  if (
    !options &&
    (!categories || !Object.prototype.hasOwnProperty.call(categories, "length"))
  ) {
    options = categories;
    categories = this.site.categories;
  }

  if (!categories || !categories.length) return "";
  options = options || {};

  const showCount = Object.prototype.hasOwnProperty.call(options, "show_count")
    ? options.show_count
    : true;
  const depth = options.depth ? parseInt(options.depth, 10) : 0;
  const orderby = options.orderby || "name";
  const order = options.order || 1;
  const childrenIndicator = Object.prototype.hasOwnProperty.call(
    options,
    "children_indicator"
  )
    ? options.children_indicator
    : false;

  const prepareQuery = (parent) => {
    const query = {};

    if (parent) {
      query.parent = parent;
    } else {
      query.parent = { $exists: false };
    }

    return categories
      .find(query)
      .sort(orderby, order)
      .filter((cat) => cat.length);
  };

  const hierarchicalList = (level, parent) => {
    let result = "";

    prepareQuery(parent).forEach((cat, i) => {
      let child;
      if (!depth || level + 1 < depth) {
        child = hierarchicalList(level + 1, cat._id);
      }

      const additionalClassName =
        child && childrenIndicator ? ` ${childrenIndicator}` : "";
      const iconName = cat.name.split("|| ")[1];
      const catName = cat.name.split("|| ")[0];

      result += `<li class="category-list-item${additionalClassName}">`;

      result += `<a class="category-list-link" href="${this.url_for.call(this, cat.path)}">`;
      
      result += `<svg class="icon card-category-list-icon" aria-hidden="true"><use xlink:href="#${iconName}"></use></svg><span class="card-category-list-name">${catName}</span>`;

      if (showCount) {
        result += `<span class="category-list-count">${cat.length}篇</span>`;
      }
      result += "</a>";

      if (child) {
        result += `<ul class="category-list-child">${child}</ul>`;
      }

      result += "</li>";
    });

    return result;
  };

  return `<ul class="category-list">${hierarchicalList(0)}</ul>`;
});
