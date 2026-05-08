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
        <section class="city-search">
            <div class="container">
                <div class="city-search__inner card">
                    <div class="city-search__label">Поиск города</div>
                    <search-input v-model="city" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import CitySearchInput from "@/components/city-search-input.vue"
import { ref } from "vue"
import SearchInput from "@/components/search-input.vue"

const city = ref("")
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

    .city-search {
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
