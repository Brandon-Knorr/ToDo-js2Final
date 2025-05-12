<template>
    <nav>
        <v-app-bar tile :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon elevation="2" @click="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>
                <span class="font-weight-light">MAIN</span>
                <span>QUEST</span>
                <v-icon>mdi-feather</v-icon>
            </v-app-bar-title>

            <v-btn elevation="2" append-icon="mdi-logout"> Sign Out </v-btn>
        </v-app-bar>
    </nav>

    <v-navigation-drawer v-model="drawer" app>
        <v-list nav bg-color="#bd86ea">
            <v-list bg-color="#bd86ea" tile v-for="link in links" :key="link.text">
                <v-list-item-action>
                    <v-btn active-color="#73954b" color="#afc893" block :prepend-icon="link.icon" :to="link.route">
                        {{ link.text }}
                    </v-btn>
                </v-list-item-action>
            </v-list>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [
                    { icon: "mdi-castle", text: "Home", route: "/" },
                    { icon: "mdi-shield-account", text: "Profile", route: "/profile" },
                    { icon: "mdi-script-text-outline", text: "Quests", route: "/quests" },
                    { icon: "mdi-trophy", text: "Rank", route: "/rank" },
                ],
            };
        },
    };
</script>