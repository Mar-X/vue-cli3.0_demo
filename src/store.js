import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstNav: {},
    secondNav: {},
    carouselPopupType: false,
    list: [{
        title: '1111'
      },
      {
        title: '2222'
      },
      {
        title: '3333',
        children: [{
            title: '3333-1'
          },
          {
            title: '3333-2',
            children: [{
                title: '3333-2-1'
              },
              {
                title: '3333-2-2'
              },
              {
                title: '3333-2-3',
                children: [{
                    title: '3333-2-3-1'
                  },
                  {
                    title: '3333-2-3-2'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    newFirstNav(state, msg) {
      // console.log(msg)
      window.localStorage.setItem('firstNavStorage', JSON.stringify(msg));
      state.firstNav = msg
    },
    newsecondNav(state, msg) {
      window.localStorage.setItem('secondNavStorage', JSON.stringify(msg));
      state.secondNav = msg
    },
    newcarouselPopupType(state, msg) {
      state.carouselPopupType = msg
    }
  },
  actions: {

  }
})