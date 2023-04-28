<template>
    <ImportHeader/>
    <div class="container">
        <div class="col-md-6 mt-5">
            <QuizList/>
        </div>
    </div>
</template>
<script>
import ImportHeader from "@/components/partials/ImportHeader.vue";
import QuizList from "@/components/QuizList.vue";

export default {
    components:{
        QuizList,
        ImportHeader,
    }
}
</script>