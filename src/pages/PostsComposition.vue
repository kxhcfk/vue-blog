<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск...."
        v-focus
    />
    <div class="app__btns">
      <my-button
      >
        Создать пользователя
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form/>
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup() {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }
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