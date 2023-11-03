<template>
  <div>
    <h2>{{ $store.state.likes }}</h2>
    <h2>{{ $store.getters.doubleLikes }}</h2>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <my-input
        v-model="searchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
          @click="openDialog"
      >
        create post
      </my-button>
      <my-select
          v-model="selectedSort"
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
    <!--<div class="page__wrapper">
      <div
          class="page"
          v-for="pageNumber in totalPage"
          :key="pageNumber"
          :class="{
            'current-page': pageNumber === page
          }"
          @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>-->
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
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
    /* changePage(pageNumber) {
      this.page = pageNumber;
    }, */
    async loadMorePosts() {
      try {
        this.page += 1;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = [...this.posts, ...response.data];
        }, 1000)
      } catch {
        alert('Error')
      }
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
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