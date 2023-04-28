import {reactive} from 'vue';

class QuizModel {

    constructor() {
        this.state = reactive({
            quiz: [],
        })
    }

    addQuiz(quiz) {
        this.state.quiz.push(quiz);
    }

    getAllQuiz() {
        return new Promise((resolve, reject) => {
            fetch("http://localhost:3000/quiz")
                .then(async (response) => {
                    let quizData = await response.json();
                    this.state.quiz = quizData;
                    resolve(quizData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default new QuizModel()