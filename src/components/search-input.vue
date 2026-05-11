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
                <div class="search-items-list__item-content">
                    <span>{{ item.name }}</span>
                    <div
                        v-if="item.underNameText"
                        class="under-name-text"
                    >
                        {{ item.underNameText }}
                    </div>
                </div>
                <svg
                    class="favorite-icon"
                    width="36"
                    height="36"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_1_118)">
                        <circle
                            cx="256"
                            cy="256"
                            r="240"
                            stroke="#212529"
                            stroke-width="32"
                        />
                        <path
                            d="M246.156 114.27C249.15 105.057 262.184 105.057 265.177 114.27L291.739 196.017C293.077 200.137 296.917 202.927 301.249 202.927H387.203C396.89 202.927 400.918 215.323 393.081 221.017L323.543 271.539C320.038 274.085 318.571 278.599 319.91 282.719L346.471 364.466C349.465 373.679 338.92 381.34 331.083 375.646L261.544 325.124C258.04 322.577 253.294 322.577 249.789 325.124L180.25 375.646C172.413 381.34 161.868 373.679 164.862 364.465L191.423 282.719C192.762 278.599 191.295 274.085 187.79 271.539L118.252 221.017C110.415 215.323 114.443 202.927 124.13 202.927H210.084C214.416 202.927 218.256 200.137 219.595 196.017L246.156 114.27Z"
                            fill="#212529"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_118">
                            <rect
                                width="512"
                                height="512"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>
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
    position: relative;

    .input-wrapper {
        position: relative;
        margin-bottom: 4px;

        $darkgray: darkgray;

        input {
            width: 100%;
            font-size: 16px;
            padding: 8px 48px;
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
        position: absolute;
        left: 0;
        right: 0;
        background: white;

        &__item {
            padding: 16px;

            &:hover {
                background-color: aliceblue;
                cursor: pointer;
            }

            display: flex;
            justify-content: space-between;

            .favorite-icon {
                margin-left: 16px;
                align-self: center;
                flex-shrink: 0;
                transition: 200ms;
                fill: white;

                &:hover {
                    color: orange;
                }
            }
        }
    }
}
</style>
