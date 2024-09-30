<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <AppBreadCrumb icon="mdi-alarm-light-off" title="Hola desde el home" />
    <div class="card bg-blue-200 rounded py-1">
        <Button @click="goToAbout">profile</Button>
    </div>
    <div class="card bg-red-300 h-96">
        {{ $t('welcome') }}
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppBreadCrumb from '@/layout/AppBreadCrumb.vue';

const router = useRouter();

const goToAbout = () => {
    router.push('/profile');
}
</script>

<style lang="scss" scoped></style>