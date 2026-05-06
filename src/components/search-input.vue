<template>
    <div class="search-input">
        <label
            class="search-input__label"
            for="search"
        >
            Поиск города
        </label>
        <input
            type="text"
            id="search"
        />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.search {
    &__label {
        font-size: 24px;
        font-weight: 700;
        display: block;
        margin-bottom: 8px;
    }

    &__input {
    }
}
</style>
