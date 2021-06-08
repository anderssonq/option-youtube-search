<template>
  <div class="home_container d-flex justify-center align-center">
    <search-form />
    
  </div>
</template>

<script>
import SearchForm from "../components/SearchForm";
export default {
  name: "Home",
  components: {
    SearchForm,
  },
};
</script>

<style>
.home_container {
  width: 100%;
  height: 100%;
}
</style>
