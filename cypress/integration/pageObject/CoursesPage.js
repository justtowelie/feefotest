class CoursesPage{
    constructor(){
        this.FREE_COURSES = '.swiper-slide-active > a';
        this.FREE_COURSES_TITLE = '.search-title';
    }

    selectFreeCourses(){
        cy.get(this.FREE_COURSES).click();
    }

    verifyFreeCourses(value){
        cy.get(this.FREE_COURSES_TITLE).should('contain', value)
    }

}

export default CoursesPage