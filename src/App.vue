<template>
    <div class="weather">
        <header class="header">
            <div class="header__inner">
                <div class="logo">LOGO</div>
                <div class="location">Местоположение</div>
                <div class="temperature">Температура</div>
                <div class="theme">Dark/Light</div>
            </div>
        </header>
        <section class="location-search">
            <div class="container">
                <div class="location-search__inner card">
                    <div class="location-search__label">Поиск локации</div>
                    <search-input
                        :model-value="locationSearchValue"
                        :search-items="locationsSearchItems"
                        placeholder="Введите город ..."
                        @update:model-value="onLocationSearch"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import SearchInput from "@/components/search-input.vue"
import * as API from "@/api"
import type { Location } from "@/definitions"

export interface SearchItem {
    id: string
    name: string
    underNameText?: string
}

const locationSearchValue = ref("")

const locations = ref<Location[]>([])

const locationsSearchItems = computed<SearchItem[]>(() => {
    return locations.value.map((location) => ({
        id: `${location.lat}_${location.lon}`,
        name: location.state ? `${location.name}, ${location.state}` : location.name,
        underNameText: `${location.lat.toFixed(2)}, ${location.lon.toFixed(2)}`,
    }))
})

let timeoutId: ReturnType<typeof setTimeout> | null = null

async function onLocationSearch(searchValue: string) {
    locationSearchValue.value = searchValue
    console.log("onLocationSearch", locationSearchValue.value)
    const search = locationSearchValue.value.trim()
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
    if (!search) {
        locations.value = []
        return
    }
    timeoutId = setTimeout(async () => {
        locations.value = await getLocations(search)
        timeoutId = null
    }, 400)
}

async function getLocations(search: string) {
    try {
        return await API.getLocations(search)
    } catch (error) {
        console.error(error)
        return []
    }
}
</script>

<style lang="scss" scoped>
.weather {
    .container {
        max-width: 1200px;
        padding: 0 15px;
        margin: 0 auto;
    }

    .header {
        &__inner {
            display: flex;
            justify-content: space-between;
        }

        margin-bottom: 24px;
    }

    .card {
        background-color: white;
        border-radius: 10px;
        box-shadow:
            0 4px 6px -1px rgb(0 0 0 / 10%),
            0 2px 4px -1px rgb(0 0 0 / 6%);
        padding: 16px;
    }

    .location-search {
        &__label {
            font-size: 24px;
            font-weight: 700;
            display: block;
            margin-bottom: 8px;
            text-align: center;
        }
    }
}
</style>
