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
        <section class="search">
            <div class="container">
                <div class="search__inner card">
                    <label
                        class="search__label"
                        for="search"
                    >
                        Поиск города
                    </label>
                    <input
                        class="search__input"
                        type="text"
                        id="search"
                    />
                </div>
            </div>
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
}
</style>
