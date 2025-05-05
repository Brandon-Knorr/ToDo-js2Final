<script>
    export default {};
</script>

<template>
    <nav>
        <v-app-bar :elevation="2">
            <template v-slot:prepend>
                <v-btn flat>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-app-bar-title>
                <span class="font-weight-light">MAIN</span>
                <span>QUEST</span>
                <v-icon>mdi-feather</v-icon>
            </v-app-bar-title>

            <v-btn flat>
                <span>Sign Out</span>
                <template v-slot:append>
                    <v-icon>mdi-logout</v-icon>
                </template>
            </v-btn>
        </v-app-bar>
    </nav>
</template>