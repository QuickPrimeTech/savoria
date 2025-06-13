import { menuItems } from "@/lib/data";

export type MenuItem = (typeof menuItems)[0];

export function filterMenuItems({
  query = "",
  category = "All",
  filters = [],
}: {
  query?: string;
  category?: string;
  filters?: string[];
}) {
  return menuItems.filter((item) => {
    // Filter by search query
    const matchesSearch =
      query === "" ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase());

    // Filter by category
    const matchesCategory = category === "All" || item.category === category;

    // Filter by tags
    const matchesFilters =
      filters.length === 0 ||
      filters.some((filter) => item.tags.includes(filter));

    return matchesSearch && matchesCategory && matchesFilters;
  });
}

export function getUniqueCategories() {
  const categories = new Set(menuItems.map((item) => item.category));
  return ["All", ...Array.from(categories)];
}

export function getUniqueTags() {
  const tags = new Set<string>();
  menuItems.forEach((item) => {
    item.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}
