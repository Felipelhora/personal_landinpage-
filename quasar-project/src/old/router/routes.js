const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPageen.vue") },
      { path: "portfolio", component: () => import("pages/PortfolioTec.vue") },
      { path: "enq", component: () => import("pages/PortfolioTec.vue") },
      { path: "contato", component: () => import("src/pages/Contato.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
