/* =========================================================
   WORKER PROGRESS REPORT
   EXERCISE 1
   Dynamic PDF Generation
========================================================= */


/* =========================================================
   DYNAMIC DATA
========================================================= */

const reportData = {

    workerName: "Madeleine Willson",

    claimNumber: "20042047",

    workerAppId: "712041",

    submittedDate: "March 19, 2024 19:21",

    returnToWork: {

        status: "returned",

        returnDate: "March 15, 2024",

        duties: "modified-reduced",

        progress: "Terrible. Testing Testing",

        expectedReturnDate: "",

        concerns: ""

    },

    employerContact: {

        name: "",

        date: ""

    },

    recovery: {

        fullyRecovered: true,

        comments: ""

    },

    medical: {

        painLevel: 5,

        continuingTreatment: true,

        providerType: "",

        lastTreatmentDate: "",

        lastProvider: "",

        nextTreatmentDate: "",

        nextProvider: "",

        physiotherapistFrequency: ""

    },

    medication: {

        takingMedication: true,

        medicationName: ""

    },

    exercises: {

        doingExercises: false,

        details: ""

    },

    additionalInformation: "No info Testing Testing"

};


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function checkbox(condition) {

    return `
        <input
            type="checkbox"
            ${condition ? "checked" : ""}
        >
    `;

}


function field(value = "", label = "") {

    return `
        <div class="field">

            <div class="field-line">
                ${value}
            </div>

            ${
                label
                    ? `<div class="field-label">${label}</div>`
                    : ""
            }

        </div>
    `;

}


function footer(pageNumber) {

    return `
        <div class="footer">

            <div>
                Worker App ID: ${reportData.workerAppId}
            </div>

            <div>
                Submitted: ${reportData.submittedDate}
            </div>

            <div>
                Page ${pageNumber} of 3
            </div>

        </div>
    `;

}


/* =========================================================
   PAGE GENERATION
========================================================= */

const app = document.getElementById("app");


app.innerHTML = `


<!-- =====================================================
     PAGE 1
====================================================== -->

<div class="page page-1">


    <!-- HEADER -->

    <div class="header">

        <div class="logo-area">

            <img
                src="assets/wcb-logo.png"
                class="logo"
                alt="Workers Compensation Board of Manitoba"
            >

        </div>


        <div class="address">

            <div>333 Broadway</div>
            <div>Winnipeg, MB R3C 4W3</div>
            <div>Phone: (204) 954-4321</div>
            <div>Toll Free: 1-855-954-4321</div>
            <div>wcb.mb.ca</div>

        </div>


        <div class="title-area">

            <div class="report-title">
                Worker Progress Report
            </div>

            <div class="claim-row">

                <div class="claim-box">
                    Claim No. ${reportData.claimNumber}
                </div>

                <div class="wp-box">
                    WP
                </div>

            </div>

        </div>

    </div>


    <!-- INTRO -->

    <div class="intro">

        <span>
            ${reportData.workerName}
        </span>

        provided the following updates in relation to their claim:

    </div>


    <!-- RETURN TO WORK -->

    <div class="section-title">
        Return to Work
    </div>


    <div class="border-box return-box">

        <div class="small-label">
            Select one:
        </div>


        <div class="return-options">


            <label>

                ${checkbox(
                    reportData.returnToWork.status === "not-missed"
                )}

                <span>
                    I have not missed<br>
                    time from work
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.returnToWork.status === "not-returned"
                )}

                <span>
                    I have not returned<br>
                    to work
                </span>

            </label>


            <label class="returned-option">

                ${checkbox(
                    reportData.returnToWork.status === "returned"
                )}

                <span>
                    I returned to work on:
                </span>

                ${field(
                    reportData.returnToWork.returnDate,
                    "Date"
                )}

            </label>


        </div>

    </div>


    <!-- WORKING -->

    <div class="border-box working-box">

        <div class="small-label">
            I am working:
        </div>


        <div class="working-options">


            <label>

                ${checkbox(
                    reportData.returnToWork.duties === "full-regular"
                )}

                <span>
                    Full duties, regular<br>
                    hours
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.returnToWork.duties === "full-reduced"
                )}

                <span>
                    Full duties, reduced<br>
                    hours
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.returnToWork.duties === "modified-regular"
                )}

                <span>
                    Modified duties,<br>
                    regular hours
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.returnToWork.duties === "modified-reduced"
                )}

                <span>
                    Modified duties,<br>
                    reduced hours
                </span>

            </label>

        </div>


        <div class="other-line">

            ${checkbox(false)}

            <span>Other:</span>

            <span class="line"></span>

        </div>

    </div>


    <!-- RETURN PROGRESS -->

    <div class="border-box progress-box">

        <div>
            My return to work is going:
        </div>

        <div class="blue-text">
            ${reportData.returnToWork.progress}
        </div>

    </div>


    <!-- EXPECTED RETURN -->

    <div class="expected-return">

        <span>
            I expect to return to work on:
        </span>

        ${field(
            reportData.returnToWork.expectedReturnDate,
            "Date"
        )}

    </div>


    <!-- CONCERNS -->

    <div class="border-box concerns-box">

        <div>
            I have the following concerns about returning to work:
        </div>

        <div class="blue-text">
            ${reportData.returnToWork.concerns}
        </div>

    </div>


    <!-- EMPLOYER CONTACT -->

    <div class="employer-contact">

        <span>
            I was most recently in contact with:
        </span>

        ${field(
            reportData.employerContact.name,
            "(Name of employer contact)"
        )}

        <span class="contact-on">
            on
        </span>

        ${field(
            reportData.employerContact.date,
            "Date"
        )}

    </div>


    <!-- RECOVERY -->

    <div class="section-title recovery-title">
        Recovery
    </div>


    <div class="border-box recovery-box">

        <div class="small-label">
            Select one:
        </div>


        <div class="recovery-options">


            <label>

                ${checkbox(
                    !reportData.recovery.fullyRecovered
                )}

                <span>
                    I have not fully recovered from my workplace<br>
                    injury.
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.recovery.fullyRecovered
                )}

                <span>
                    I have fully recovered from my workplace<br>
                    injury.
                </span>

            </label>


        </div>

    </div>


    <!-- RECOVERY COMMENTS -->

    <div class="border-box recovery-comments">

        <div>
            I have provided the following comments about my recovery:
        </div>

        <div class="blue-text">
            ${reportData.recovery.comments}
        </div>

    </div>


    ${footer(1)}

</div>



<!-- =====================================================
     PAGE 2
====================================================== -->

<div class="page page-2">


    <!-- PAIN -->

    <div class="pain-row">

        <div class="pain-text">

            I rate my current pain/discomfort on a scale of 1-10,<br>
            where 1 is no pain and 10 is severe pain out of 10.

        </div>


        <div class="pain-grid">

            ${Array.from(
                { length: 10 },
                (_, index) => {

                    const number = index + 1;

                    return `
                        <label>

                            ${checkbox(
                                reportData.medical.painLevel === number
                            )}

                            <span>
                                ${number}
                            </span>

                        </label>
                    `;

                }
            ).join("")}

        </div>

    </div>


    <!-- MEDICAL TREATMENT -->

    <div class="border-box treatment-box">

        <div class="small-label">
            Select one:
        </div>


        <div class="treatment-options">


            <label>

                ${checkbox(
                    !reportData.medical.continuingTreatment
                )}

                <span>
                    I am not continuing to<br>
                    receive medical treatment for<br>
                    my workplace injury.
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.medical.continuingTreatment
                )}

                <span>
                    I am continuing to receive<br>
                    medical treatment for my<br>
                    workplace injury from:
                </span>

            </label>


            ${field(
                reportData.medical.providerType,
                "(Medical Provider Type)"
            )}

        </div>

    </div>


    <!-- LAST MEDICAL TREATMENT -->

    <div class="medical-row medical-last">

        <span>
            My last medical treatment was
        </span>

        ${field(
            reportData.medical.lastTreatmentDate,
            "Date"
        )}

        <span class="from">
            from
        </span>

        ${field(
            reportData.medical.lastProvider,
            "(Medical Provider Name)"
        )}

    </div>


    <!-- NEXT MEDICAL TREATMENT -->

    <div class="medical-row medical-next">

        <span>
            My next medical treatment is
        </span>

        ${field(
            reportData.medical.nextTreatmentDate,
            "Date"
        )}

        <span class="from">
            from
        </span>

        ${field(
            reportData.medical.nextProvider,
            "(Medical Provider Name)"
        )}

    </div>


    <!-- PHYSIOTHERAPIST -->

    <div class="physio-row">

        <span>
            I am attending a Chiropractor or Physiotherapist
        </span>

        ${field(
            reportData.medical.physiotherapistFrequency,
            "(Frequency)"
        )}

    </div>


    <!-- MEDICATION -->

    <div class="border-box medication-box">

        <div class="small-label">
            Select one:
        </div>


        <div class="medication-options">


            <label>

                ${checkbox(
                    !reportData.medication.takingMedication
                )}

                <span>
                    I am not taking medication<br>
                    for my workplace injury.
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.medication.takingMedication
                )}

                <span>
                    I am taking medication for my<br>
                    workplace injury:
                </span>

            </label>


            ${field(
                reportData.medication.medicationName,
                "(Name of prescribed medication)"
            )}

        </div>

    </div>


    <!-- HOME EXERCISES -->

    <div class="border-box home-box">

        <div class="small-label">
            Select one:
        </div>


        <div class="home-options">


            <label>

                ${checkbox(
                    !reportData.exercises.doingExercises
                )}

                <span>
                    I am not doing home exercises for my workplace<br>
                    injury.
                </span>

            </label>


            <label>

                ${checkbox(
                    reportData.exercises.doingExercises
                )}

                <span>
                    I am doing home exercises for my workplace<br>
                    injury.
                </span>

            </label>


        </div>

    </div>


    <!-- EXERCISES -->

    <div class="border-box exercises-box">

        <div>
            List the exercises you are doing:
        </div>

        <div class="blue-text">
            ${reportData.exercises.details}
        </div>

    </div>


    <!-- OTHER INFORMATION -->

    <div class="other-information-title">
        Other Information
    </div>


    <div class="border-box other-information-box">

        <div>
            I would like to provide the following additional
            information about my claim/injury:
        </div>

        <div class="blue-text">
            ${reportData.additionalInformation}
        </div>

    </div>


    ${footer(2)}

</div>



<!-- =====================================================
     PAGE 3
====================================================== -->

<div class="page page-3">


    <div class="certification">


        <div class="certification-row">

            ${checkbox(true)}

            <div>

                I certify that the information given on this form is
                true, correct and complete to the best of my
                knowledge. I agree to notify the Workers Compensation
                Board of Manitoba (WCB) immediately once I return to
                any form of work and/or employment. I understand that
                it is an offence to knowingly make a false statement
                to the WCB. I also understand that it is an offence
                to withhold information from WCB which affects my
                entitlement to compensation (e.g., full or partial
                recovery from injury, ability to return to work,
                sources of additional income, etc.). I understand
                that refusing to co-operate with, or follow my
                treatment, may result in the WCB reducing or
                suspending my benefits.

            </div>

        </div>


        <div class="certification-row">

            ${checkbox(true)}

            <div>

                I understand that the

                <a href="#">
                    Privacy Notice
                </a>

                applies to the personal information collected in this
                document.

            </div>

        </div>


    </div>


    ${footer(3)}

</div>

`;