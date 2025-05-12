<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12" md="6">
                <v-dialog max-width="340">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" prepend-icon="mdi-swords" width="204">
                            Add New Quest
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card prepend-icon="mdi-swords"
                            text="When using the activator slot, you must bind the slot props to the activator element."
                            title="Embark on a new Quest">
                            <template v-slot:actions>
                                <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
                            </template>
                        </v-card>
                    </template>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    };
</script>