import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/components',
    name: 'Component',
    components: {
      default: () => import('../views/components/ComponentMain.vue'),
    },
    children: [

      {
        path: 'Baisc',
        name: 'Baisc',
        components: {
          default: () => import('../views/components/componentRouter.vue'),
        },
        children: [

          {
            path: 'Button',
            name: 'Button',
            component: () => import('../views/components/Baisc/Button.vue'),
          },
          {
            path: 'Color',
            name: 'Color',
            component: () => import('../views/components/Baisc/Color.vue'),
          },
          {
            path: 'Icon',
            name: 'Icon',
            component: () => import('../views/components/Baisc/Icon.vue')
          },
          {
            path: 'Transition',
            name: 'Transition',
            component: () => import('../views/components/Baisc/Transition.vue')
          },
        ],
      },
      {
        path: 'Data',
        name: 'Data',
        components: {
          default: () => import('../views/components/componentRouter.vue'),
        },
        children: [

          {
            path: 'Avatar',
            name: 'Avatar',
            component: () => import('../views/components/Data/Avatar.vue'),
          },
          {
            path: 'Progress',
            name: 'Progress',
            component: () => import('../views/components/Data/Progress.vue'),
          },
          {
            path: 'Tag',
            name: 'Tag',
            component: () => import('../views/components/Data/Tag.vue'),
          },
        ],
      },
      {
        path: 'Form',
        name: 'Form',
        components: {
          default: () => import('../views/components/componentRouter.vue'),
        },
        children: [

          {
            path: 'Markdown',
            name: 'Markdown',
            component: () => import('../views/components/Form/Markdown.vue'),
          },
        ],
      },
      {
        path: 'Navigation',
        name: 'Navigation',
        components: {
          default: () => import('../views/components/componentRouter.vue'),
        },
        children: [

          {
            path: 'Breadcrumb',
            name: 'Breadcrumb',
            component: () => import('../views/components/Navigation/Breadcrumb.vue'),
          },
        ],
      },
      {
        path: 'Other',
        name: 'Other',
        components: {
          default: () => import('../views/components/componentRouter.vue'),
        },
        children: [

          {
            path: 'Card',
            name: 'Card',
            component: () => import('../views/components/Other/Card.vue'),
          },
          {
            path: 'Image',
            name: 'Image',
            component: () => import('../views/components/Other/Image.vue'),
          },
          {
            path: 'Tooltip',
            name: 'Tooltip',
            component: () => import('../views/components/Other/Tooltip.vue'),
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router