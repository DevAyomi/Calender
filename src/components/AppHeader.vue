<template>
	<nav class="w-full bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2">
		<router-link v-for="list in lists" :key="list.to" class="mx-2" :to="list.to">{{ list.title }}</router-link>
	</nav>
</template>

<script>
	export default{
		data (){
			return {
				lists: [
					{title: "Calendar", to: "./calendar"},
					{title: "Test Router", to: "./test-router"},
					{title: "Markdown", to: "./markdown"}
				]
			}
		}
	}
</script>