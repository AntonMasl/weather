<template>
    <div class="weather">
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <div class="logo">LOGO</div>
                    <div class="location">Местоположение</div>
                    <div class="temperature">Температура</div>
                    <div class="theme">Dark/Light</div>
                </div>
            </div>
        </header>
        <section class="search">
            <label class="search__label" for="search">Поиск города</label>
            <input class="search__input" type="text" id="search" />
        </section>
    </div>
</template>

<script setup lang="ts"></script>

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
    }
}
</style>
