<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        hola mundo x2
        <button @click="goToAbout">Home</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goToAbout = () => {
    router.push('/');
}
</script>

<style lang="scss" scoped></style>