<template>
    <h1>Liste des quiz</h1>
    <div v-for="(quiz, index) in quizList" :key="index">
        <div class="card">
            <h5 class="card-header">{{ quiz.title }}</h5>
            <div class="card-body">
                <p class="card-text">{{ quiz.description }}</p>
                <a href="#" class="btn btn-primary">{{ quiz._id }}</a>
            </div>
        </div>
    </div>
</template>

<script>

import QuizModel from "@/models/quizModel";

export default {
    data() {
        return {
            quizList: null,
        }
    },
    mounted() {
        this.queryQuiz()
    },
    methods: {
        async queryQuiz() {
            try {
                this.quizList = await QuizModel.getAllQuiz();
                console.log(this.quizList)
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>