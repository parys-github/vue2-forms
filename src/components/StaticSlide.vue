<template>
<div class="slide slide-static" :class="conf.class ? conf.class : ''" ref="container">
    <h1>{{ conf.header }}</h1>
    <div class="content" v-html="conf.content" />
</div>
</template>

<script>
export default {
    props: ['conf']
};
</script>
