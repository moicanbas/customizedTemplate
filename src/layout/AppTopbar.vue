<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { generalStore } from '@/stores/generalStore';
import { ref, onMounted } from 'vue';

const store = generalStore();

const toggleSideBar = () => {
    store.toggleSideBar();
};

const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value;
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    updateTheme();
}

const updateTheme = () => {
    if (isDark.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

const menu = ref();
const langs = ref([
    {
        items: [
            { code: 'en', text: 'English' },
            { code: 'es', text: 'Español' }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

onMounted(() => {
    isDark.value = localStorage.getItem('theme') === 'dark';
    updateTheme();
})
</script>
<template>
    <div class="h-[40px] bg-gray-100 dark:bg-gray-500 shadow-sm shadow-slate-400 flex flex-row ml-0.5 rounded">
        <div class="flex-none w-14 h-14">
            <Button class="mx-2" icon="pi pi-bars" text rounded severity="secondary" @click="toggleSideBar" />
        </div>
        <div class="grow"></div>
        <div class="flex h-10 justify-center items-center">
            <div class="locale-changer" v-tooltip.left="$t('chooseLanguage')">
                <Dropdown v-model="$i18n.locale" :options="langs" optionLabel="text" class="w-18 dropdown-custom mr-1"
                    optionValue="code" :optionGroupLabel="$t('lang')" optionGroupChildren="items">
                    <template #optiongroup>
                        <div class="flex align-items-center">
                            <i class="mdi mdi-translate mr-2"></i>
                            <div>{{ $t('lang') }}</div>
                        </div>
                    </template>
                    <template #value="slotProps">
                        <div v-if="slotProps.value.code" class="flex align-items-center">
                            <span :class="`fi fi-${slotProps.value.code == 'en' ? 'us' : 'es'}`"
                                style="width: 18px"></span>
                        </div>
                        <div v-else class="flex align-items-center">
                            <span :class="`fi fi-${slotProps.value === 'en' ? 'us' : 'es'}`" style="width: 18px"></span>
                        </div>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <span :class="`fi fi-${slotProps.option.code === 'en' ? 'us' : 'es'}`"
                                style="width: 18px"></span>
                            <div class="ml-2">{{ slotProps.option.text }}</div>
                        </div>
                    </template>
                </Dropdown>

            </div>
            <button type="button"
                class="inline-flex w-6 h-6 p-4 items-center justify-center surface-0 dark:surface-800 rounded"
                v-tooltip.left="`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`" @click="toggleTheme">
                <i :class="`pi pi-${isDark ? 'sun' : 'moon'} ${isDark ? 'text-yellow-500' : 'text-black'}`" />
            </button>
            <Avatar icon="pi pi-user" class="mx-2 cursor-pointer text-white" v-tooltip.left="$t('seeOptions')"
                @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
            <!-- <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
            <Popover ref="menu">
                <div class="rounded flex flex-col">
                    <div class="flex justify-center rounded">
                        <div class="relative mx-auto">
                            <ul class="list-none">
                                <!-- Elemento para ver perfil -->
                                <li class="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    <i class="pi pi-user mr-2"></i> Ver Perfil
                                </li>
                                <!-- Elemento para configuración -->
                                <li class="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    <i class="pi pi-cog mr-2"></i> Configuración
                                </li>
                                <!-- Elemento para cerrar sesión -->
                                <li class="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    <i class="pi pi-sign-out mr-2"></i> Cerrar Sesión
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Popover>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>