<template>
    <div class="flex rounded justify-center items-center">
        <div class="flex-none w-24">
            <div class="card h-14 my-1 flex justify-center items-center">
                <div class="card bg-breadcrumb-color w-20 h-14 rounded">
                    <i :class="['mdi', icon]" style="font-size: 2.4rem"></i>
                </div>
            </div>
        </div>
        <div class="flex-auto w-14 h-10 text-start">
            <!-- Title -->
            <span class="text-2xl ml-2">{{ title }}</span>
            <!-- <div class="card bg-red-500 h-16 rounded">
               
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    icon: String,
    title: String
})

</script>

<style lang="scss" scoped></style>