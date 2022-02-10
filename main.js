const app = Vue.createApp({
    data() {
        return {
            students: []
        }
    },
    methods: {
        updateStudent(student) {
            this.students.push(student)
        }
    }
})