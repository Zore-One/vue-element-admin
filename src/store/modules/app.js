//菜单的子树
const app = {
    //菜单状态的初始值
    state: {
        sidebar: {
            opened: true //false  菜单 是关闭的  ，true  菜单时 打开的
        }
    },
    //mutations 修改 store中的状态值
    mutations: {
        TOGGLE_SIDEBAR: (state) => {
            state.sidebar.opened = !state.sidebar.opened;
        }
    },
    //actions 可以将状态值提交给mutations ，一般的大数据量或 异步操作
    actions: {
        TOGGLE_SIDEBAR_AC: ({ commit }) => {
            commit('TOGGLE_SIDEBAR');
        }
    }
}

//导出
export default app;
