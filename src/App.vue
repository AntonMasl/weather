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
import { computed, onMounted, ref } from "vue"
import SearchInput from "@/components/search-input.vue"
import { API_KEY, API_URL } from "@/config.ts"

export interface Location {
    id: string
    name: string
}

export interface SearchItem {
    id: string
    name: string
}

const locationSearchValue = ref("")

const locations = ref<Location[]>([
    {
        id: "1",
        name: "Тула",
    },
    {
        id: "2",
        name: "Москва",
    },
    {
        id: "3",
        name: "Лондон",
    },
])

const locationsSearchItems = computed<SearchItem[]>(() => {
    return locations.value
        .filter((location) => location.name.startsWith(locationSearchValue.value))
        .map((location) => ({
            id: location.id,
            name: location.name,
        }))
})

async function onLocationSearch(searchValue: string) {
    locationSearchValue.value = searchValue
    console.log("onLocationSearch", locationSearchValue.value)
    const weatherData = await getWeatherData(locationSearchValue.value)
    console.log("weatherData", weatherData)
}

async function getWeatherData(location: string) {
    // const response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}`)
    const response = await fetch(`${API_URL}?q=${location}&limit=5&appid=${API_KEY}`)
    if (!response.ok) {
        console.log("Ошибка HTTP: " + response.status)
        return
    }
    return await response.json()
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
