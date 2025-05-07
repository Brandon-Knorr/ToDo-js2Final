<template>
    <div class="home">
        <h1 class="text-h5 font-weight-light">Home</h1>

        <v-container class="my-5">
            <v-card v-ripple tile density="compact" hover ripple class="pa-3 pb-0" v-for="quest in quests"
                :key="quest.title">
                <v-row class="d-flex flex-wrap justify-space-around" :class="`pa-3 quest ${ quest.status }`">
                    <v-col class="d-flex flex-column" sm="12">
                        <v-text class="text-caption">Active Quest:</v-text>
                        <v-text>{{ quest.title }}</v-text>
                    </v-col>

                    <v-col class="d-flex flex-column" cols="">
                        <v-text class="text-caption">Due By:</v-text>
                        <v-text>{{ quest.due }}</v-text>
                    </v-col>

                    <v-col class="d-flex flex-column" cols="">
                        <v-text class="text-caption">Status:</v-text>
                        <v-text>{{ quest.status }}</v-text>
                    </v-col>

                    <v-col class="d-flex flex-column" cols="">
                        <v-text class="text-caption">Priority:</v-text>
                        <v-text>{{ quest.priority }}</v-text>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quests: [
                    { title: 'JavaScript Final', due: '05/14/25', status: 'Ongoing', priority: 'High!' },
                    { title: 'Clean Room', due: '05/16/25', status: 'Ongoing', priority: 'Low' },
                    { title: 'Oil Change', due: '06/23/25', status: 'Complete', priority: 'Low' },
                    { title: 'Feed Cat', due: 'N/A', status: 'Ongoing', priority: 'High!' },
                    { title: 'Study Code', due: '05/05/25', status: 'Overdue', priority: 'Medium' },
                ]
            }
        },
    };
</script>

<style>
    .quest.Complete {
        border-left: 4px solid #73954b;
    }

    .quest.Ongoing {
        border-left: 4px solid #62a2e2;
    }

    .quest.Overdue {
        border-left: 4px solid #f64740;
    }
</style>