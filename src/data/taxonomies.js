import { Route } from "../routers/types";
import __taxonomies from "./jsons/__taxonomies.json";
import { TaxonomyType } from "./types";

const DEMO_CATEGORIES= __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  href: item.href,
}));

const DEMO_TAGS = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
  href: item.href,
}));

// export { DEMO_CATEGORIES, DEMO_TAGS };
