<template>
  <div class="app">
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
    <div class="page__wrapper">
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
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from "axios";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {
    MyInput,
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        {value: 'title', name: 'by title'},
        {value: 'body', name: 'by body'},
      ],
      searchQuery: '',
    }
  },
  mounted() {
    this.fetchPosts();
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000)
      } catch {
        alert('Error')
      } finally {

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
  watch: {
    page() {
      this.fetchPosts();
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  gap: 10px;
}

.page {
  box-shadow: inset 0 0 0 1px #c3bcf8;
  color: #c3bcf8;
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.current-page {
  color: #5b4ae1;
  box-shadow: inset 0 0 0 1px #5b4ae1;
}

</style>