<template>
  <div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
          @click="openDialog"
      >
        create post
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
    <post-list
        v-if="!isPostsLoading"
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
    />
    <div v-else>Loading</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  mounted() {
    this.loadMorePosts();
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openDialog() {
      this.dialogVisible = true;
    },
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
    }),
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPage: state => state.post.totalPage,
      searchQuery: state => state.post.searchQuery,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    })
  },
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.observer {
  height: 30px;
}
</style>