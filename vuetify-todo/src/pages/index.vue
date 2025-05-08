<template>
    <div class="home">
        <h1 class="text-h5 font-weight-light">Home</h1>

        <v-container class="my-5">


            <v-card v-ripple tile density="compact" color="#ecdcf9" hover ripple class="pa-3 pb-0"
                v-for="quest in quests" :key="quest.title">
                <v-row class="d-flex flex-wrap justify-space-around" :class="`pa-3 quest ${ quest.status }`">
                    <v-col class="d-flex flex-column" sm="12">
                        <v-text class="text-caption">Quest:</v-text>
                        <v-text>{{ quest.title }}</v-text>
                    </v-col>

                    <v-col class="d-flex flex-column" cols="">
                        <v-text class="text-start text-caption">Due By:</v-text>
                        <v-text class="text-start">{{ quest.due }}</v-text>
                    </v-col>

                    <v-col class="d-flex flex-column" cols="">
                        <v-text class="text-center text-caption">Difficulty:</v-text>
                        <v-text class="text-center">{{ quest.difficulty }}</v-text>
                    </v-col>

                    <v-col class="d-flex flex-column" cols="">
                        <div class="text-end">
                            <v-chip size="small" :class="`${ quest.status } my-2`">
                                <v-text class="text-caption">{{ quest.status }}</v-text>
                            </v-chip>
                        </div>
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
                    { title: 'JavaScript Final', due: '05/14/25', status: 'Ongoing', difficulty: 'Hard' },
                    { title: 'Clean Room', due: '05/16/25', status: 'Ongoing', difficulty: 'Medium' },
                    { title: 'Oil Change', due: '06/23/25', status: 'Complete', difficulty: 'Medium' },
                    { title: 'Feed Cat', due: 'N/A', status: 'Ongoing', difficulty: 'Easy' },
                    { title: 'Study Code', due: '05/05/25', status: 'Overdue', difficulty: 'Hard' },
                ]
            }
        },
    };
</script>

<style>
    .quest.Complete {
        border-left: 4px solid #62a2e2;
    }

    .quest.Ongoing {
        border-left: 4px solid #f4b067;
    }

    .quest.Overdue {
        border-left: 4px solid #f64740;
    }

    .v-chip.Complete {
        background: #62a2e2;
        color: white;
        font-weight: 600;
    }

    .v-chip.Ongoing {
        background: #f4b067;
        color: white;
        font-weight: 600;
    }

    .v-chip.Overdue {
        background: #f64740;
        color: white;
        font-weight: 600;
    }
</style>