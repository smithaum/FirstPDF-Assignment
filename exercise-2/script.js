/* =========================================================
   EXERCISE 2
   MEDICAL & TRAVEL EXPENSE REQUEST
   Dynamic PDF-style report
========================================================= */

const reportData = {

    workerName: "Madeleine Willson",

    claimNumber: "20042047",

    workerAppId: "712041",

    submittedDate: "March 28, 2024 20:43",


    /* -----------------------------------------------------
       PRESCRIPTION DRUGS
    ----------------------------------------------------- */

    prescriptionDrugs: [
        {
            drugName: "Naproxen",
            prescriptionDate: "February 28, 2024",
            datePurchased: "February 29, 2024",
            healthcareProvider: "Dr. Best",
            paidAmount: "$20.00"
        }
    ],


    /* -----------------------------------------------------
       OVER THE COUNTER DRUGS
    ----------------------------------------------------- */

    overTheCounterDrugs: [
        {
            drugName: "Advil",
            datePurchased: "March 28, 2024",
            paidAmount: "$8.00",
            sellerName: "Shoppers Drug Mart",
            reason: "Pain"
        }
    ],


    /* -----------------------------------------------------
       MEDICAL SUPPLIES
    ----------------------------------------------------- */

    medicalSupplies: [
        {
            itemPurchased: "Tensor",
            datePurchased: "February 28, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Best",
            paidAmount: "$10.00",
            sellerName: "Shoppers DrugMart"
        }
    ],


    /* -----------------------------------------------------
       PARKING
    ----------------------------------------------------- */

    parking: [
        {
            address:
                "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",

            date:
                "March 28, 2024",

            paidAmount:
                "$10.00",

            meterUsed:
                "yes",

            meterNumber:
                "12245"
        }
    ],


    /* -----------------------------------------------------
       MILEAGE
    ----------------------------------------------------- */

    mileage: [
        {
            appointmentDate:
                "March 28, 2024",

            healthcareFacility:
                "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",

            workplace:
                "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",

            kilometres:
                "20 km"
        }
    ],


    /* -----------------------------------------------------
       BUS / TAXI
    ----------------------------------------------------- */

    busTaxi: [
        {
            appointmentDate:
                "March 28, 2024",

            startingPoint:
                "",

            healthcareFacility:
                "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",

            transportation:
                "Bus",

            totalFare:
                "$3.00"
        },

        {
            appointmentDate:
                "March 27, 2024",

            startingPoint:
                "25 Furby St, Winnipeg MB R3C2A2, Canada",

            healthcareFacility:
                "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",

            transportation:
                "Taxi",

            totalFare:
                "$15.00"
        }
    ]

};


/* =========================================================
   MAIN APP
========================================================= */

const app = document.getElementById("app");


app.innerHTML = `

<!-- =====================================================
     PAGE 1
===================================================== -->

<section class="page page-1">


    <!-- HEADER -->

    ${createHeader()}


    <!-- INTRO -->

    <p class="intro">

        <span class="worker-name">
            ${reportData.workerName}
        </span>

        requested reimbursement for the following
        medical and/or travel expenses:

    </p>


    <!-- PRESCRIPTION DRUGS -->

    <section class="report-section">

        <h2>
            Prescription Drugs
        </h2>

        ${createPrescriptionTable(
            reportData.prescriptionDrugs
        )}

    </section>


    <!-- OTC DRUGS -->

    <section class="report-section">

        <h2>
            Over-the-Counter Drugs
        </h2>

        ${createOTCTable(
            reportData.overTheCounterDrugs
        )}

    </section>


    <!-- MEDICAL SUPPLIES -->

    <section class="report-section">

        <h2>
            Bandages, Braces or Other Medical Supplies
        </h2>

        ${createMedicalSuppliesTable(
            reportData.medicalSupplies
        )}

    </section>


    <!-- PARKING -->

    <section class="report-section">

        <h2>
            Parking for Medical Appointments
        </h2>

        ${createParkingTable(
            reportData.parking
        )}

    </section>


    <!-- MILEAGE -->

    <section class="report-section mileage-section">

        <h2>
            Mileage to Medical Appointments
        </h2>

        <p class="note">

            The WCB will generally reimburse only those
            transportation costs which are in excess of costs
            that would be incurred by the worker while travelling
            to and from work.

        </p>

        ${createMileageTable(
            reportData.mileage
        )}

    </section>


    <!-- FOOTER -->

    ${createFooter(1, 2)}

</section>



<!-- =====================================================
     PAGE 2
===================================================== -->

<section class="page page-2">


    <!-- HEADER -->

    ${createHeader()}


    <!-- BUS / TAXI -->

    <section class="report-section bus-taxi-section">

        <h2>
            Bus or Taxi Fare for Medical Appointments*
        </h2>

        <p class="note">

            *Note: Pre-approval is required from your WCB
            representative to claim taxi fare(s).

        </p>


        ${createBusTaxiTable(
            reportData.busTaxi
        )}

    </section>


    <!-- PRIVACY -->

    <div class="privacy-section">

        <input
            type="checkbox"
            checked
        >

        <span>

            I understand that the

            <span class="privacy-link">
                Privacy Notice
            </span>

            applies to the personal information collected
            in this document.

        </span>

    </div>


    <!-- FOOTER -->

    ${createFooter(2, 2)}

</section>

`;



/* =========================================================
   HEADER
========================================================= */

function createHeader() {

    return `

        <header class="report-header">


            <!-- LOGO -->

            <div class="logo-area">

                <img
                    src="assets/wcb-logo.png"
                    alt="Workers Compensation Board of Manitoba"
                >

            </div>


            <!-- CONTACT -->

            <div class="contact-info">

                333 Broadway<br>

                Winnipeg, MB R3C 4W3<br>

                Phone: (204) 954-4321<br>

                Toll Free: 1-855-954-4321<br>

                wcb.mb.ca

            </div>


            <!-- TITLE -->

            <div class="report-title">

                <h1>
                    Medical &amp; Travel Expense
                    <br>
                    Request
                </h1>


                <div class="claim-box">

                    Claim No. ${reportData.claimNumber}

                </div>

            </div>


        </header>

    `;

}



/* =========================================================
   PRESCRIPTION TABLE
========================================================= */

function createPrescriptionTable(data) {

    return `

        <table class="expense-table prescription-table">

            <thead>

                <tr>

                    <th>
                        Drug Name
                    </th>

                    <th>
                        Prescription Date
                    </th>

                    <th>
                        Date Purchased
                    </th>

                    <th>
                        Healthcare Provider Name
                    </th>

                    <th>
                        Paid Amount
                    </th>

                </tr>

            </thead>


            <tbody>

                ${data.map(item => `

                    <tr>

                        <td>
                            ${item.drugName}
                        </td>

                        <td>
                            ${item.prescriptionDate}
                        </td>

                        <td>
                            ${item.datePurchased}
                        </td>

                        <td>
                            ${item.healthcareProvider}
                        </td>

                        <td>
                            ${item.paidAmount}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}



/* =========================================================
   OTC TABLE
========================================================= */

function createOTCTable(data) {

    return `

        <table class="expense-table otc-table">

            <thead>

                <tr>

                    <th>
                        Drug Name
                    </th>

                    <th>
                        Date Purchased
                    </th>

                    <th>
                        Paid Amount
                    </th>

                    <th>
                        Seller's Name
                    </th>

                    <th>
                        Reason for Purchasing
                    </th>

                </tr>

            </thead>


            <tbody>

                ${data.map(item => `

                    <tr>

                        <td>
                            ${item.drugName}
                        </td>

                        <td>
                            ${item.datePurchased}
                        </td>

                        <td>
                            ${item.paidAmount}
                        </td>

                        <td>
                            ${item.sellerName}
                        </td>

                        <td>
                            ${item.reason}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}



/* =========================================================
   MEDICAL SUPPLIES TABLE
========================================================= */

function createMedicalSuppliesTable(data) {

    return `

        <table class="expense-table supplies-table">

            <thead>

                <tr>

                    <th>
                        Item Purchased
                    </th>

                    <th>
                        Date Purchased
                    </th>

                    <th>
                        Was this Prescribed?
                    </th>

                    <th>
                        Healthcare Provider Name
                    </th>

                    <th>
                        Paid Amount
                    </th>

                    <th>
                        Seller's Name
                    </th>

                </tr>

            </thead>


            <tbody>

                ${data.map(item => `

                    <tr>

                        <td>
                            ${item.itemPurchased}
                        </td>

                        <td>
                            ${item.datePurchased}
                        </td>

                        <td>
                            ${item.prescribed}
                        </td>

                        <td>
                            ${item.healthcareProvider}
                        </td>

                        <td>
                            ${item.paidAmount}
                        </td>

                        <td>
                            ${item.sellerName}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}



/* =========================================================
   PARKING TABLE
========================================================= */

function createParkingTable(data) {

    return `

        <table class="expense-table parking-table">

            <thead>

                <tr>

                    <th>
                        Address of Healthcare
                        Provider/Medical Facility
                    </th>

                    <th>
                        Date
                    </th>

                    <th>
                        Paid Amount
                    </th>

                    <th>
                        Meter Used?
                    </th>

                    <th>
                        Meter Number
                    </th>

                </tr>

            </thead>


            <tbody>

                ${data.map(item => `

                    <tr>

                        <td>
                            ${item.address}
                        </td>

                        <td>
                            ${item.date}
                        </td>

                        <td>
                            ${item.paidAmount}
                        </td>

                        <td>
                            ${item.meterUsed}
                        </td>

                        <td>
                            ${item.meterNumber}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}



/* =========================================================
   MILEAGE TABLE
========================================================= */

function createMileageTable(data) {

    return `

        <table class="expense-table mileage-table">

            <thead>

                <tr>

                    <th>
                        Appointment Date
                    </th>

                    <th>
                        Address of Healthcare
                        Provider/Medical Facility
                    </th>

                    <th>
                        Address of Workplace
                    </th>

                    <th>
                        Number of km (Round Trip)
                    </th>

                </tr>

            </thead>


            <tbody>

                ${data.map(item => `

                    <tr>

                        <td>
                            ${item.appointmentDate}
                        </td>

                        <td>
                            ${item.healthcareFacility}
                        </td>

                        <td>
                            ${item.workplace}
                        </td>

                        <td>
                            ${item.kilometres}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}



/* =========================================================
   BUS / TAXI TABLE
========================================================= */

function createBusTaxiTable(data) {

    return `

        <table class="expense-table bus-taxi-table">

            <thead>

                <tr>

                    <th>
                        Appointment Date
                    </th>

                    <th>
                        Address of Starting Point
                    </th>

                    <th>
                        Address of Healthcare
                        Provider/Medical Facility
                    </th>

                    <th>
                        Bus or Taxi
                        <br>
                        (indicate one)
                    </th>

                    <th>
                        Total Fare Paid
                    </th>

                </tr>

            </thead>


            <tbody>

                ${data.map(item => `

                    <tr>

                        <td>
                            ${item.appointmentDate}
                        </td>

                        <td>
                            ${item.startingPoint}
                        </td>

                        <td>
                            ${item.healthcareFacility}
                        </td>

                        <td>
                            ${item.transportation}
                        </td>

                        <td>
                            ${item.totalFare}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}



/* =========================================================
   FOOTER
========================================================= */

function createFooter(currentPage, totalPages) {

    return `

        <footer class="report-footer">

            <span>
                Worker App ID: ${reportData.workerAppId}
            </span>


            <span>
                Submitted: ${reportData.submittedDate}
            </span>


            <span>
                Page ${currentPage} of ${totalPages}
            </span>

        </footer>

    `;

}