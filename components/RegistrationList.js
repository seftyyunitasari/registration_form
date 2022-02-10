app.component('registration-list', {
    props: {
        students: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <ul>
        <li v-for="(student, index) in students" :key="index">
        ID: {{ index + 1 }} / Name: {{ student.name}} / Course: {{ student.course }} / Term of Study: {{ student.studyTerm}}
        </li>
    </ul>
    `
})