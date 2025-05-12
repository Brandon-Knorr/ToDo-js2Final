<template>
    <h1 class="text-h5 font-weight-light">Home</h1>

    <v-container class="my-5">
        <v-expansion-panels flat hover>
            <v-expansion-panel color="#ecdcf9" v-for="quest in myQuests" :key="quest.title">
                <v-expansion-panel-title disable-icon-rotate>
                    {{ quest.title }}
                    <template v-slot:actions>
                        <v-icon color="#f64740" icon="mdi-alert-circle">
                        </v-icon>
                    </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <div>due date:</div>
                    {{ quest.due }}
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                quests: [
                    { title: 'JavaScript Final', due: '05/14/25', status: 'Ongoing', difficulty: 'Hard' },
                    { title: 'Clean Room', due: '05/16/25', status: 'Ongoing', difficulty: 'Medium' },
                    { title: 'Oil Change', due: '06/23/25', status: 'Complete', difficulty: 'Medium' },
                    { title: 'Feed Cat', due: 'N/A', status: 'Ongoing', difficulty: 'Easy' },
                    { title: 'Study Code', due: '05/05/25', status: 'Overdue', difficulty: 'Hard' },
                ],
            }
        },
        computed: {
            myQuests() {
                return this.quests.filter(quest => {
                    return quest.status === 'Overdue' || 'Ongoing'
                })
            }
        }
    };
</script>