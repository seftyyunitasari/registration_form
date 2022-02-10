app.component('registration-form', {
    template:
    /*html*/
    `
    <form class="registration-form" @submit.prevent="onSubmit">
        <h3>Please fill the form</h3>
        <label for="name">Name: </label>
        <input id="name" v-model="name">

        <label for="course">Course: </label>
        <input id="course" v-model="course">

        <label for="studyTerm">Term of study: </label>
        <input id="studyTerm" v-model="studyTerm">

        <input class="button" type="submit" value="Submit">
    </form>
    `,
    data() {
        return {
            name: '',
            course: '',
            studyTerm: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.name == '' || this.course == '' || this.studyTerm == '') {
                alert('Please fill out all field')
                return
            }
            
            let student = {
                name: this.name,
                course: this.course,
                studyTerm: this.studyTerm
            }

            this.$emit('student-submitted', student)

            this.name = '',
            this.course = '',
            this.studyTerm = ''
        }
    }
})