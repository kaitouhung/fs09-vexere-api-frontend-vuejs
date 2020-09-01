import Vue from "vue";
import VueRouter from "vue-router";
import jwtDecode from "jwt-decode";

Vue.use(VueRouter);

const routes = [
  //HomeTemplate
  {
    path: "/",
    component: () => import("../views/HomeTemplate"),
    children: [
      //Homepage
      {
        path: "/",
        component: () => import("../views/HomeTemplate/HomePage")
      },
      {
        path: "/about",
        component: () => import("../views/HomeTemplate/AboutPage")
      },
      {
        path: "/stations",
        component: () => import("../views/HomeTemplate/StationsPage")
      },
      {
        path: "/stations/:id",
        component: () => import("../views/HomeTemplate/DetailStationPage")
      }
    ]
  },

  { path: "/admin", redirect: "/admin/dashboard" },

  //AdminTemplate
  {
    path: "/admin",
    component: () => import("../views/AdminTemplate"),
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        try {
          const decode = jwtDecode(localStorage.getItem("token"));
          if (decode.userType === "admin") {
            next();
          }
        } catch {
          localStorage.removeItem("token");
          next("/auth");
        }
      } else {
        next("/auth");
      }
    },
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("../views/AdminTemplate/DashboardPage")
      },
      {
        path: "/admin/stations",
        component: () => import("../views/AdminTemplate/StationPage")
      },
      {
        path: "/admin/create-station",
        component: ()=> import("../views/AdminTemplate/CreateStation")
      },
      {
        path: "/admin/stations/:id/edit",
        component: ()=> import("../views/AdminTemplate/EditStation")
      }
    ]
  },

  {
    path: "/auth",
    component: () => import("../views/AdminTemplate/Auth")
    // beforeEnter(to, from, next) {
    //   if (localStorage.getItem("token")) next("/admin/dashboard");
    //   next();
    // }
  },

  {
    path: "*",
    component: () => import("../views/PageNotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
