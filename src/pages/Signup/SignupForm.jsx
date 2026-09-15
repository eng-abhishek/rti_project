import React, { useState } from "react";
import { Link } from "react-router-dom";
import RefreshCaptchaImg from '../../assets/images/refresh.png';
import ValumeCaptchaImg from '../../assets/images/volume-high-solid.png';

function SignupForm() {


    const [formData, setFormData] = useState({
        citizen: "Y",
        name: "",
        fathername: "",
        gender: "M",
        address: "",
        state: "",
        district: "",
        pincode: "",
        bpl: "Y",
        bpl_cardno: "",
        securityquestion: "",
        securityanswer: "",
        emailID: "",
        mobileno: "",
    })


    const states = [
        { value: "AN", label: "Andman & Nicobar Islands" },
        { value: "AR", label: "Arunanchal Pradesh" },
        { value: "AS", label: "Assam" },
        { value: "BR", label: "Bihar" },
        { value: "CH", label: "Chandigarh" },
        { value: "CG", label: "Chattisgarh" },
        { value: "DN", label: "Dadra & Nagar Haveli" },
        { value: "DD", label: "Daman & Diu" },
        { value: "DL", label: "Delhi" },
        { value: "GA", label: "GOA" },
        { value: "GJ", label: "Gujrat" },
        { value: "HR", label: "Haryana" },
        { value: "HP", label: "Himachal Pradesh" },
        { value: "JK", label: "Jammu & Kashmir" },
        { value: "JH", label: "Jharkhand" },
        { value: "KA", label: "Karnataka" },
        { value: "KL", label: "Kerala" },
        { value: "LK", label: "Ladakh" },
        { value: "LD", label: "Lakshdeep" },
        { value: "MP", label: "Madhya Pradesh" },
        { value: "MH", label: "Maharashtra" },
        { value: "MN", label: "Manipur" },
        { value: "ML", label: "Meghalaya" },
        { value: "MZ", label: "Mizoram" },
        { value: "NL", label: "Nagaland" },
        { value: "OR", label: "Orissa" },
        { value: "PY", label: "Pondicherry" },
        { value: "PB", label: "Punjab" },
        { value: "RJ", label: "Rajasthan" },
        { value: "SM", label: "Seemandhra" },
        { value: "SK", label: "Sikkim" },
        { value: "TN", label: "Tamilnadu" },
        { value: "TL", label: "Telangana" },
        { value: "TR", label: "Tripura" },
        { value: "UP", label: "Uttar Pradesh" },
        { value: "UK", label: "Uttrakhand" },
        { value: "WB", label: "West Bengal" }
    ];

    const districts = {
        AN: [
            { value: "NI", label: "Nicobar" },
            { value: "SA", label: "South Andaman" },
            { value: "NA", label: "North & Middle Andaman" },
        ],

        AR: [
            { value: "ANJAW", label: "Anjaw" },
            { value: "CHANG_LANG", label: "Changlang" },
            { value: "EAST_KAMENG", label: "East Kameng" },
            { value: "EAST_SIANG", label: "East Siang" },
            { value: "TAWANG", label: "Tawang" },
        ],

        AS: [
            { value: "BAKSA", label: "Baksa" },
            { value: "BARPETA", label: "Barpeta" },
            { value: "CACHAR", label: "Cachar" },
            { value: "DARRANG", label: "Darrang" },
            { value: "DIBRUGARH", label: "Dibrugarh" },
        ],

        BR: [
            { value: "ARARIA", label: "Araria" },
            { value: "ARWAL", label: "Arwal" },
            { value: "AURANGABAD", label: "Aurangabad" },
            { value: "BANKA", label: "Banka" },
            { value: "BEGUSARAI", label: "Begusarai" },
        ],

        CH: [
            { value: "CHANDIGARH", label: "Chandigarh" },
        ],

        CG: [
            { value: "BALOD", label: "Balod" },
            { value: "BASTAR", label: "Bastar" },
            { value: "BILASPUR", label: "Bilaspur" },
            { value: "DURG", label: "Durg" },
            { value: "RAIPUR", label: "Raipur" },
        ],

        DN: [
            { value: "DADRA_NAGAR_HAVELI", label: "Dadra & Nagar Haveli" },
        ],

        DD: [
            { value: "DAMAN", label: "Daman" },
            { value: "DIU", label: "Diu" },
        ],

        DL: [
            { value: "CENTRAL_DELHI", label: "Central Delhi" },
            { value: "EAST_DELHI", label: "East Delhi" },
            { value: "NEW_DELHI", label: "New Delhi" },
            { value: "NORTH_DELHI", label: "North Delhi" },
            { value: "SOUTH_DELHI", label: "South Delhi" },
        ],

        GA: [
            { value: "NORTH_GOА", label: "North Goa" },
            { value: "SOUTH_GOА", label: "South Goa" },
        ],

        GJ: [
            { value: "AHMEDABAD", label: "Ahmedabad" },
            { value: "AMRELI", label: "Amreli" },
            { value: "ANAND", label: "Anand" },
            { value: "BHARUCH", label: "Bharuch" },
            { value: "BHAVNAGAR", label: "Bhavnagar" },
        ],

        HR: [
            { value: "AMBALA", label: "Ambala" },
            { value: "BHIWANI", label: "Bhiwani" },
            { value: "FARIDABAD", label: "Faridabad" },
            { value: "GURUGRAM", label: "Gurugram" },
            { value: "HISAR", label: "Hisar" },
        ],

        HP: [
            { value: "BILASPUR", label: "Bilaspur" },
            { value: "CHAMBA", label: "Chamba" },
            { value: "HAMIRPUR", label: "Hamirpur" },
            { value: "KANGRA", label: "Kangra" },
            { value: "KULLU", label: "Kullu" },
        ],

        JK: [
            { value: "ANANTNAG", label: "Anantnag" },
            { value: "BANDIPORA", label: "Bandipora" },
            { value: "BARAMULLA", label: "Baramulla" },
            { value: "BUDGAM", label: "Budgam" },
            { value: "JAMMU", label: "Jammu" },
        ],

        JH: [
            { value: "BOKARO", label: "Bokaro" },
            { value: "CHATRA", label: "Chatra" },
            { value: "DEOGHAR", label: "Deoghar" },
            { value: "DHANBAD", label: "Dhanbad" },
            { value: "DUMKA", label: "Dumka" },
        ],

        KA: [
            { value: "BAGALKOT", label: "Bagalkot" },
            { value: "BALLARI", label: "Ballari" },
            { value: "BELAGAVI", label: "Belagavi" },
            { value: "BENGALURU_RURAL", label: "Bengaluru Rural" },
            { value: "BENGALURU_URBAN", label: "Bengaluru Urban" },
        ],

        KL: [
            { value: "ALAPPUZHA", label: "Alappuzha" },
            { value: "ERNAKULAM", label: "Ernakulam" },
            { value: "IDUKKI", label: "Idukki" },
            { value: "KANNUR", label: "Kannur" },
            { value: "KASARAGOD", label: "Kasaragod" },
        ],

        LK: [
            { value: "LEH", label: "Leh" },
            { value: "KARGIL", label: "Kargil" },
        ],

        LD: [
            { value: "LAKSHADWEEP", label: "Lakshadweep" },
        ],

        MP: [
            { value: "AGAR_MALWA", label: "Agar Malwa" },
            { value: "ALIRAJPUR", label: "Alirajpur" },
            { value: "ANUPPUR", label: "Anuppur" },
            { value: "ASHOKNAGAR", label: "Ashoknagar" },
            { value: "BALAGHAT", label: "Balaghat" },
        ],

        MH: [
            { value: "AHMEDNAGAR", label: "Ahmednagar" },
            { value: "AKOLA", label: "Akola" },
            { value: "AMRAVATI", label: "Amravati" },
            { value: "AURANGABAD", label: "Aurangabad" },
            { value: "BEED", label: "Beed" },
        ],

        MN: [
            { value: "BISHNUPUR", label: "Bishnupur" },
            { value: "CHANDEL", label: "Chandel" },
            { value: "CHURACHANDPUR", label: "Churachandpur" },
            { value: "IMPHAL_EAST", label: "Imphal East" },
            { value: "IMPHAL_WEST", label: "Imphal West" },
        ],

        ML: [
            { value: "EAST_GARO_HILLS", label: "East Garo Hills" },
            { value: "EAST_JAINTIA_HILLS", label: "East Jaintia Hills" },
            { value: "EAST_KHASI_HILLS", label: "East Khasi Hills" },
            { value: "RI_BHOI", label: "Ri Bhoi" },
            { value: "WEST_GARO_HILLS", label: "West Garo Hills" },
        ],

        MZ: [
            { value: "AIZAWL", label: "Aizawl" },
            { value: "CHAMPHAI", label: "Champhai" },
            { value: "KOLASIB", label: "Kolasib" },
            { value: "LAWNGTLAI", label: "Lawngtlai" },
            { value: "LUNGLEI", label: "Lunglei" },
        ],

        NL: [
            { value: "CHUMOUKEDIMA", label: "Chumoukedima" },
            { value: "DIMAPUR", label: "Dimapur" },
            { value: "KIPHIRE", label: "Kiphire" },
            { value: "KOHIMA", label: "Kohima" },
            { value: "MOKOKCHUNG", label: "Mokokchung" },
        ],

        OR: [
            { value: "ANGUL", label: "Angul" },
            { value: "BALANGIR", label: "Balangir" },
            { value: "BALASORE", label: "Balasore" },
            { value: "BARGARH", label: "Bargarh" },
            { value: "BHADRAK", label: "Bhadrak" },
        ],

        PY: [
            { value: "PUDUCHERRY", label: "Puducherry" },
            { value: "KARAIKAL", label: "Karaikal" },
            { value: "MAHE", label: "Mahe" },
            { value: "YANAM", label: "Yanam" },
        ],

        PB: [
            { value: "AMRITSAR", label: "Amritsar" },
            { value: "BATHINDA", label: "Bathinda" },
            { value: "FARIDKOT", label: "Faridkot" },
            { value: "GURDASPUR", label: "Gurdaspur" },
            { value: "LUDHIANA", label: "Ludhiana" },
        ],

        RJ: [
            { value: "AJMER", label: "Ajmer" },
            { value: "ALWAR", label: "Alwar" },
            { value: "BANSWARA", label: "Banswara" },
            { value: "BARAN", label: "Baran" },
            { value: "BARMER", label: "Barmer" },
        ],

        SM: [
            { value: "ANANTAPUR", label: "Anantapur" },
            { value: "CHITTOOR", label: "Chittoor" },
            { value: "EAST_GODAVARI", label: "East Godavari" },
            { value: "GUNTUR", label: "Guntur" },
            { value: "KRISHNA", label: "Krishna" },
        ],

        SK: [
            { value: "EAST_SIKKIM", label: "East Sikkim" },
            { value: "NORTH_SIKKIM", label: "North Sikkim" },
            { value: "PAKYONG", label: "Pakyong" },
            { value: "SOUTH_SIKKIM", label: "South Sikkim" },
            { value: "WEST_SIKKIM", label: "West Sikkim" },
        ],

        TN: [
            { value: "ARIYALUR", label: "Ariyalur" },
            { value: "CHENGALPATTU", label: "Chengalpattu" },
            { value: "CHENNAI", label: "Chennai" },
            { value: "COIMBATORE", label: "Coimbatore" },
            { value: "CUDDALORE", label: "Cuddalore" },
        ],

        TL: [
            { value: "ADILABAD", label: "Adilabad" },
            { value: "BHADRADRI_KOTHAGUDEM", label: "Bhadradri Kothagudem" },
            { value: "HYDERABAD", label: "Hyderabad" },
            { value: "JAGTIAL", label: "Jagtial" },
            { value: "JANGAON", label: "Jangaon" },
        ],

        TR: [
            { value: "DHALAI", label: "Dhalai" },
            { value: "GOMATI", label: "Gomati" },
            { value: "KHOWAI", label: "Khowai" },
            { value: "NORTH_TRIPURA", label: "North Tripura" },
            { value: "WEST_TRIPURA", label: "West Tripura" },
        ],

        UP: [
            { value: "AGRA", label: "Agra" },
            { value: "ALIGARH", label: "Aligarh" },
            { value: "AMBEDKAR_NAGAR", label: "Ambedkar Nagar" },
            { value: "AMETHI", label: "Amethi" },
            { value: "BASTI", label: "Basti" },
        ],

        UK: [
            { value: "ALMORA", label: "Almora" },
            { value: "BAGESHWAR", label: "Bageshwar" },
            { value: "CHAMOLI", label: "Chamoli" },
            { value: "CHAMPAWAT", label: "Champawat" },
            { value: "DEHRADUN", label: "Dehradun" },
        ],

        WB: [
            { value: "ALIPURDUAR", label: "Alipurduar" },
            { value: "BANKURA", label: "Bankura" },
            { value: "BIRBHUM", label: "Birbhum" },
            { value: "COOCH_BEHAR", label: "Cooch Behar" },
            { value: "DARJEELING", label: "Darjeeling" },
        ]
    };

    const [state, setState] = useState([]);
    const [district, setDistrict] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        //    console.log(name,value);
    }

    const handleStateChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            state: e.target.value,
            district: ""
        }))
    }

    const handleDistrictChange = (e) => {
        console.log(e.target.value);

        setFormData((prev) => ({
            ...prev,
            district: ""
        }))

    }

    const submitHandler = (e) => {
        console.log('Hello');
        e.preventDefault();
    }

    return (<>
        <form className="reg-section"
            onSubmit={submitHandler}
            id="validateForm" enctype="multipart/form-data" autocomplete="off">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Are you a Citizen of India?
                    <span className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <select name="citizen" className="form-select select-box-w" value={formData.citizen} id="displaycitizen" onChange={handleChange}>
                        <option value="Y">Yes</option>
                        <option value="N">No</option>
                    </select>
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Name<span
                    className="error">*</span>
                </div>
                <div className="ccol-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="text" name="name" id="displayname"
                        placeholder="Please enter your name" value={formData.name} onChange={handleChange} />
                    <span className="text-danger" id="result">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Father's Name<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="text" name="fathername" value={formData.fathername} onChange={handleChange} />
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Gender</div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <select name="gender" id="displaygender" className="form-select select-box-w" onChange={handleChange}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>
                    <span className="text-danger">
                    </span>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Address<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <textarea rows="3" placeholder="Please enter correct address..."
                        name="address" id="displayaddress" value={formData.address} className="form-control" onChange={handleChange}></textarea>
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">State<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <select name="state" id="displaystate" className="form-select select-box-w" onChange={handleStateChange}>
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state.value} value={state.value}>{state.label}</option>
                        ))}
                    </select>
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">District<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <select className="form-select select-box-w" id="displaydistrict"
                        name="district" onChange={handleDistrictChange}>
                        <option value="">Select District</option>
                        {(districts[formData.state] || []).map((district) => (
                            <option value={district.value} key={district.value}>{district.label}</option>
                        ))}
                    </select>
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Pin code<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" value={formData.values} type="text" name="pincode"
                        id="displaypincode" minlength="6" maxlength="6" autocomplete="nope" onChange={handleChange} />
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Is the Applicant Below Poverty
                    Line ?<span className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <select name="bpl" className="form-select select-box-w" id="displaybpl" onChange={handleChange}>
                        <option value="Y">Yes</option>
                        <option value="N" selected="">No</option>
                    </select>
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">BPL Card No.<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="text" value={formData.values} name="bpl_cardno"
                        maxlength="50" id="displaybpl_cardno" onChange={handleChange} />
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Scanned copy of BPL Card <span
                    className="error">(only pdf,jpg & jpeg files having size up to 2 MB)</span>
                </div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="file" name="upload" id="upload" />
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Security Question<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <select name="securityquestion" className="form-select" id="securityquestion" onChange={handleChange}>
                        <option value="">-- Select Question --</option>

                        <option value="What is your Mother's maiden name?">What is your Mother's
                            maiden name?</option>
                        <option value="What is the name of your first School?">What is the name
                            of your first School?</option>
                        <option value="What is the name of your favourite book?">What is the
                            name of your favourite book?</option>
                        <option value="Which city were you born in?">Which city were you born
                            in?</option>
                    </select>
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Security Answer<span
                    className="error">*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="text" name="securityanswer"
                        id="securityanswer" value={formData.values} maxlength="100" onChange={handleChange} />
                    <span className="text-danger" id="result2">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Email ID <span
                    className="error">(to be used as USERNAME)*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="email" name="emailID" id="displayemailID"
                        style={{ textTransform: "uppercase" }} value={formData.emailID} onChange={handleChange} />
                    <span className="text-danger">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Mobile No. <span
                    className="error">(For receiving SMS alerts & for receiving activation
                    key)*</span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="text" value={formData.mobileno} name="mobileno" id="displaymobileno"
                        minlength="10" maxlength="10" autocomplete="nope" onChange={handleChange} />
                    <span className="text-danger">
                    </span>
                    <div id="mobileno-error"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Enter the Validation code :
                    <span className="error">*</span>
                    <div id="cap" className="cpc-div">
                        <span className="captcha-code"
                            id="captcha_preview_register_mobile_verify_captcha">181119</span>
                        <Link to='/'
                            id="reload-captcha">
                            <img src={RefreshCaptchaImg} alt="" />
                        </Link>

                        <Link to="/">
                            <img src={ValumeCaptchaImg} alt="Play CAPTCHA Audio" style={{ border: "0px" }} />
                        </Link>
                    </div>

                    <audio id="myAudio_register_mobile_verify_captcha">
                        <source src="" type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                    <input type="hidden" name="captcha_code_register_mobile_verify_captcha"
                        id="captcha_code_register_mobile_verify_captcha" value="181119" />
                </div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input type="text" name="captcha"
                        id="input_captcha_register_mobile_verify_captcha"
                        className="form-control select-box-w"/>
                    <span className="" id="captcha_msg_register_mobile_verify_captcha">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">
                </div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <p style={{ margin: "10px 0", fontSize: "14px" }}>
                        Didn't receive the OTP? You can resend it after 2 minutes:
                        <span id="counterDown2Min">02:00 minuts</span>
                    </p>
                    <input type="button" className="quick-btn" value="Generate OTP" id="otpsend"
                        data-action="fresh-otp" style={{ width: "auto", height: "45px" }} onChange={handleChange} />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Please Enter OTP sent on your
                    mobile no for requestId <span id="requestID"></span></div>
                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input className="form-control" type="text" name="otp" onChange={handleChange} id="optEnter"
                        maxlength="6" onkeyup="onKeyUpOTPHandler(event,'_register_otp_verify')"
                        onkeypress="return isNumber(event)" />
                    <span className="text-" id="otp_msg_register_otp_verify">
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 brd-right">Enter the Validation code :
                    <span className="error">*</span>
                    <div id="cap" className="cpc-div">
                        <span className="captcha-code"
                            id="captcha_preview_register_form_captcha">249829</span>

                        <Link to='/'
                            id="reload-captcha">
                            <img src={RefreshCaptchaImg} alt="" />
                        </Link>

                        <Link to='/'>
                            <img src={ValumeCaptchaImg} alt="Play CAPTCHA Audio" style={{ border: "0px" }} />
                        </Link>
                    </div>
                </div>

                <audio id="myAudio_register_form_captcha">
                    <source src="" type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
                <input type="hidden" name="captcha_code_register_form_captcha"
                    id="captcha_code_register_form_captcha" value="249829" />

                <div className="col-12 col-sm-12 col-md-8 brd-right2">
                    <input type="text" name="final_captcha"
                        id="input_captcha_register_form_captcha"
                        onkeyup="onKeyUpHandler(event,'_register_form_captcha')"
                        className="form-control select-box-w" onChange={handleChange} />
                    <span className="text-" id="captcha_msg_register_form_captcha" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="submit_dis_line">
                        <button type="submit" value="Register"
                            className="btn_submit quick-btn reg-btn" id="btnSubmit">Register</button>
                        <p>if you have account <Link to="/login">Go to Login ?</Link></p>
                    </div>
                </div>
            </div>
        </form>
    </>);
}
export default SignupForm;