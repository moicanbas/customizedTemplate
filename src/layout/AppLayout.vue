<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterView } from 'vue-router'
import AppSidebar from './AppSidebar.vue';
import AppTopbar from './AppTopbar.vue';
import { generalStore } from '@/stores/generalStore';

const store = generalStore()

</script>
<template>
    <div class="w-screen h-screen flex text-center">
        <AppSidebar v-show="store.showSide" />
        <!-- start Main -->
        <div class="w-full h-full bg-custom-gray">
            <AppTopbar />
            <div class="h-[calc(96vh-30px)] mx-0.5 mt-2">
                <div
                    class="card h-full bg-secondary-gray dark:bg-primary-color mx-2 my-1 shadow-md shadow-slate-400 rounded">
                    <div class="mx-1 rounded">
                        <RouterView />
                    </div>
                </div>
            </div>
        </div>
        <!-- end Main -->
    </div>
</template>


<style lang="scss" scoped></style>