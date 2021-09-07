import MyNavBar from "./Nav";
import "../App.css";
function Admission(){
    return(
        <div>
            <MyNavBar/>
            <p>Admission to certain RUAS programs are contingent on candidates qualifying for various standardised common entrance tests.
            M S Ramaiah University of Applied Sciences offers admissions to the candidates based on their academic records,
            national level entrance tests, or University level entrance test, counselling, etc.
            The University offers many programmes for the students such as undergraduate (B.Tech, BDS, B.Pharm, Pharm.D, B.Des, BHM, B.Sc, B.Com, BBA, B.Sc (Hons)), postgraduate (M.Tech, MDS, M.Pharm, MBA,M.Des, MHA, M.Com, M.Sc, MPH) and doctoral (Ph.D, M.Phil, M.S) courses in various areas. Admission procedure to various courses are given below:
            </p>
            
            <h3>For Undergraduate Courses (B.Tech/BDS/B.Pharm/Pharm.D/B.Des/BHM/B.Sc/B.Com/BBA/B.Sc (Hons)):</h3>
            <p>For B.Tech, candidates have to appear and qualify the Common Entrance Test (CET) conducted by the Karnataka Examination Authority (KEA)/RUAS Admission Test (RUAS AT)/COMED-K/Uni-GAUGE examination conducted on all India basis.
Eligible candidates have to fill an application form for the state level counselling process and choose MSRUAS as their preference.
Final admissions will be offered on the basis of the performance in counselling process, seat allotment, document verification, and fee payment.
For BDS, candidates have to qualify National Eligibility and Entrance Test (NEET UG) conducted on all India basis.
Eligible candidates have to fill an application form for the centralised common counselling process conducted by Karnataka Examination Authority (KEA) and fill out their choice of colleges and courses for admission.
Final admissions will be offered on the basis of the performance in counselling process, seat allotment, document verification, and fee payment.
For B.Pharma, Pharma.D, candidates have to appear and qualify the Common Entrance Test (CET) conducted by the Karnataka Examination Authority (KEA)/RUAS AT.
Candidates have to fill an application form on the website of M. S. Ramaiah University of Applied Sciences.
Admissions will be done after seat allotment, document verification and fee payment.</p>

<h3>For Postgraduate Courses (M.Tech/MDS/M.Pharm/MBA/M.Des/MHA/M.Com/M.Sc/MPH):</h3>
           <p>For M.Tech, M.Pharm, MBA, candidates should qualify Postgraduate Common Entrance Test (PGCET) Conducted by Karnataka Examination Authority (KEA).
           Candidates have to fill an application form on the website of M. S. Ramaiah University of Applied Sciences.
Admissions will be done after seat allotment, document verification and fee payment.
For MDS, candidates have to qualify National Eligibility and Entrance Test (NEET MDS) conducted on all India basis.
Eligible candidates have to fill an application form for the centralised common counselling process conducted by Karnataka Examination Authority (KEA) and choose MSRUAS as their preference.
Final admissions will be offered on the basis of the performance in counselling process, seat allotment, document verification, and fee payment.</p>
<button type="button" class="mt-4 poppins btn btn-dark">Get Admission Details</button>
<button type="button" class="mt-4 poppins btn btn-dark">Download fee structure</button>
        </div>
    )
}
export default Admission;