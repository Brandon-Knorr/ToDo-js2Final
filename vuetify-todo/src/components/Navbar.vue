<template>
    <nav>
        <v-app-bar :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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

    <v-navigation-drawer v-model="drawer" app>
        <v-list nav>
            <v-list tile v-for="link in links" :key="link.text">

                <v-list-item-action>

                    <v-btn flat :prepend-icon="link.icon" :to="link.route">
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
                    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                    { icon: 'mdi-script-text-outline', text: 'Quests', route: '/quests' },
                    { icon: 'mdi-trophy', text: 'Rank', route: '/rank' },
                ]
            }
        }
    };
</script>