<template>
    <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
        <template #extra>
            <router-link to="/item">
                <a-button type="primary">Turn Back</a-button>
            </router-link>
        </template>
    </a-result>
</template>