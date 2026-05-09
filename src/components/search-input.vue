<template>
    <div
        class="search-input"
        ref="searchInputRef"
    >
        <div class="input-wrapper">
            <svg
                class="search-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 612 612"
                style="enable-background: new 0 0 612.08 612.08"
                xml:space="preserve"
            >
                <g>
                    <path
                        d="M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
		c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
		c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
		 M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
		S338.402,419.811,237.927,419.811z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
            <input
                v-model="searchValue"
                :placeholder="placeholder"
                type="text"
            />
            <svg
                v-if="searchValue.length"
                class="remove-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 40 40"
                @click="searchValue = ''"
            >
                <path
                    d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.06 1.06 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"
                />
            </svg>
        </div>
        <ul
            v-show="isCanShowSearchItems && searchItems.length"
            class="search-items-list"
        >
            <li
                v-for="item in searchItems"
                :key="item.id"
                class="search-items-list__item"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// const emits = defineEmits(["update:modelValue"])
//

import type { SearchItem } from "@/App.vue"
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue"

const props = defineProps<{
    searchItems: SearchItem[]
    placeholder: string
}>()

const searchValue = defineModel<string>({ required: true })

const isCanShowSearchItems = ref(false)

const searchInputRef = useTemplateRef("searchInputRef")

function handleClickOutside(event: MouseEvent) {
    console.log(searchInputRef.value, event.target)
    isCanShowSearchItems.value = !!searchInputRef.value?.contains(event.target as Node)
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside)
})

// function onInput(event: InputEvent) {
//     const target = event.target as HTMLInputElement
//     emits("update:modelValue", target.value)
//     // console.log("onInput")
//     // const target = event.target as HTMLInputElement
//     // city.value = target.value
//     // console.log(city.value)
// }
//
// function onChange(event: Event) {
//     console.log("onChange", event)
// }
</script>

<style scoped lang="scss">
.search-input {
    max-width: 700px;
    margin: 0 auto;

    .input-wrapper {
        position: relative;
        margin-bottom: 4px;

        $darkgray: darkgray;

        input {
            width: 100%;
            font-size: 16px;
            padding: 8px 8px 8px 48px;
            border-radius: 8px;
            border: 2px solid $darkgray;
            outline: none;

            &:focus {
                border: 2px solid dimgray;
            }
        }

        svg {
            position: absolute;
            fill: $darkgray;
            transform: translateY(-50%);
            top: 50%;

            &.search-icon {
                left: 12px;
            }

            &.remove-icon {
                right: 12px;
                cursor: pointer;

                &:hover {
                    fill: red;
                }
            }
        }
    }

    .search-items-list {
        border: 2px solid dimgray;
        border-radius: 8px;
        overflow: hidden;

        &__item {
            padding: 16px;

            &:hover {
                background-color: aliceblue;
                cursor: pointer;
            }
        }
    }
}
</style>
