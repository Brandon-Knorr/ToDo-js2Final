<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12" md="6">
                <v-dialog max-width="340">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" prepend-icon="mdi-sword-cross" width="204">
                            Add New Quest
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card prepend-icon="mdi-sword-cross" title="Embark on a new Quest">

                            <v-card-text>
                                <v-form class="px-3">
                                    <v-text-field label="Title" v-model="title"></v-text-field>
                                    <v-textarea label="Information" v-model="content"></v-textarea>
                                    <v-btn flat class="success mx-0 mt-3" @click="submit">Add Quest</v-btn>
                                </v-form>
                            </v-card-text>

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
                title: '',
                content: '',
            }
        },
        methods: {
            submit() {
                console.log(this.title, this.content)
            }
        },
    };
</script>