import axios from "axios";

export default {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        page: 0,
        limit: 10,
        totalPage: 0,
        searchQuery: '',
        sortOptions: [
            {value: 'title', name: 'by title'},
            {value: 'body', name: 'by body'},
        ],
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostsLoading(state, isLoading) {
            state.isPostsLoading = isLoading;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPage(state, totalPage) {
            state.totalPage = totalPage;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async loadMorePosts({state, commit}) {
            try {
                commit('setIsPostsLoading', true)
                state.page += 1;

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                })

                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch {
                alert('Error')
            } finally {
                commit('setIsPostsLoading', false)
            }
        }
    },
    namespaced: true,
}