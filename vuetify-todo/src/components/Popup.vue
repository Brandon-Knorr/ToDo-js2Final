<template>
    <v-container>
        <v-row class="text-center">
            <v-col>
                <v-dialog max-width="340">
                    <template v-slot:activator="{ props: activatorProps }" class="text-center">
                        <v-btn v-bind="activatorProps" prepend-icon="mdi-sword-cross">
                            Add New Quest
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card prepend-icon="mdi-sword-cross" title="Embark on a new Quest">

                            <v-card-text>
                                <v-form class="px-3" ref="questForm">

                                    <v-text-field variant="outlined" label="Title" v-model="title"
                                        :rules="inputRules"></v-text-field>

                                    <v-textarea variant="outlined" label="Information" v-model="content"
                                        :rules="inputRules"></v-textarea>

                                    <v-date-input clearable label="Date input" :rules="inputRules" variant="outlined"
                                        v-model="due"></v-date-input>

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
    import db from '../firebase/db.js'
    export default {
        data() {
            return {
                title: '',
                content: '',
                due: '',
                inputRules: [
                    v => v.length >= 3 || 'Must have at least 3 characters'
                ],
            }
        },
        methods: {
            submit() {
                if (this.$refs.questForm.validate()) {
                    const quest = {
                        title: this.title,
                        content: this.content,
                        due: this.due,
                        status: this.status,
                    }

                    db.collection('quests').add(quest).then(() => {
                        console.log('added to db')
                    })
                }
            }
        },
    };
</script>