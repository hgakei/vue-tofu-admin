export default {
  state: {
    Lang: 'zh',
    Collapse: false,
    BreadcrumbList: [],
    TagList: []
  },
  getters: {
    Lang: state => state.Lang,
    Collapse: state => state.Collapse,
    BreadcrumbList: state => state.BreadcrumbList,
    TagList: state => state.TagList
  },
  mutations: {
    SET_LANG (state, Lang) {
      state.Lang = Lang
    },
    SET_COLLAPSE (state, Collapse) {
      state.Collapse = Collapse
    },
    SET_BREAD_CRUMB_LIST (state, BreadcrumbList) {
      state.BreadcrumbList = BreadcrumbList
    }
  }
}
