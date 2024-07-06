import __authors from "./jsons/__users.json";


let as = ["/shilpa.jpg"];

const DEMO_AUTHORS= __authors.map((item, index) => ({
  ...item,
  avatar: as[index],
  href: item.href,
}));

export { DEMO_AUTHORS };
