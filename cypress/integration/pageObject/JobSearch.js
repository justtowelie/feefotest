class JobSearch {
    constructor(){
        this.JOB_HEADER_VERIFICATION = 'h1';
    }


    verifyHeaderContainsRelevantInfo(value) {
        cy.get(this.JOB_HEADER_VERIFICATION).should('contain', value)
    }
}

export default JobSearch