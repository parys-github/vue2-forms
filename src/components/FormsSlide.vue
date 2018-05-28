<template>
<div class="slide slide-forms" :class="conf.class ? conf.class : ''" ref="container">
    <div class="forms-block bounceInUp">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="Title" prop="title">
                            <el-select v-model="ruleForm.title" placeholder="Title">
                                <el-option label="Mr" value="mister"></el-option>
                                <el-option label="Mrs" value="missus"></el-option>
                                <el-option label="Dr" value="doctor"></el-option>
                                <el-option label="Miss" value="miss"></el-option>
                                <el-option label="Master" value="master"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="First name" prop="firstname">
                            <el-input v-model="ruleForm.firstname"></el-input>
                        </el-form-item>
                        <el-form-item label="Last name" prop="lastname">
                            <el-input v-model="ruleForm.lastname"></el-input>
                        </el-form-item>
                        <!-- Email valid -->
                        <el-form-item prop="email" label="Email" :rules="[
                              { required: true, message: 'Please input email address', trigger: 'blur' },
                              { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                            ]">
                            <el-input v-model="ruleForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="Address" prop="street" class="address-block">
                            <el-input v-model="ruleForm.street" placeholder="Street"></el-input>
                        </el-form-item>
                        <el-form-item prop="city" class="city-block">
                             <el-input v-model="ruleForm.city" placeholder="City"></el-input>
                        </el-form-item>
                         <el-form-item prop="zip"  class="zip-block">
                            <el-input v-model="ruleForm.zip" placeholder="ZIP"></el-input>
                        </el-form-item>
                         <el-form-item prop="state" class="state-block">
                            <el-select v-model="ruleForm.state" placeholder="State">
                                <el-option value="Alabama">Alabama</el-option>
                                    <el-option value="Alaska">Alaska</el-option> <el-option value="Arizona">Arizona</el-option><el-option value="Arkansas">Arkansas</el-option> <el-option value="California">California</el-option><el-option value="Colorado">Colorado</el-option> <el-option value="Connecticut">Connecticut</el-option> <el-option value="Delaware">Delaware</el-option> <el-option value="District of Columbia">District of Columbia</el-option> <el-option value="Florida">Florida</el-option> <el-option value="Georgia">Georgia</el-option> <el-option value="Guam">Guam</el-option> <el-option value="Hawaii">Hawaii</el-option> <el-option value="Idaho">Idaho</el-option> <el-option value="Illinois">Illinois</el-option> <el-option value="Indiana">Indiana</el-option> <el-option value="Iowa">Iowa</el-option> <el-option value="Kansas">Kansas</el-option> <el-option value="Kentucky">Kentucky</el-option> <el-option value="Louisiana">Louisiana</el-option> <el-option value="Maine">Maine</el-option> <el-option value="Maryland">Maryland</el-option> <el-option value="Massachusetts">Massachusetts</el-option> <el-option value="Michigan">Michigan</el-option> <el-option value="Minnesota">Minnesota</el-option> <el-option value="Mississippi">Mississippi</el-option> <el-option value="Missouri">Missouri</el-option> <el-option value="Montana">Montana</el-option> <el-option value="Nebraska">Nebraska</el-option> <el-option value="Nevada">Nevada</el-option> <el-option value="New Hampshire">New Hampshire</el-option> <el-option value="New Jersey">New Jersey</el-option> <el-option value="New Mexico">New Mexico</el-option> <el-option value="New York">New York</el-option> <el-option value="North Carolina">North Carolina</el-option> <el-option value="North Dakota">North Dakota</el-option> <el-option value="Northern Marianas Islands">Northern Marianas Islands</el-option> <el-option value="Ohio">Ohio</el-option> <el-option value="Oklahoma">Oklahoma</el-option> <el-option value="Oregon">Oregon</el-option> <el-option value="Pennsylvania">Pennsylvania</el-option> <el-option value="Puerto Rico">Puerto Rico</el-option> <el-option value="Rhode Island">Rhode Island</el-option> <el-option value="South Carolina">South Carolina</el-option> <el-option value="South Dakota">South Dakota</el-option> <el-option value="Tennessee">Tennessee</el-option> <el-option value="Texas">Texas</el-option> <el-option value="Utah">Utah</el-option> <el-option value="Vermont">Vermont</el-option> <el-option value="Virginia">Virginia</el-option> <el-option value="Virgin Islands">Virgin Islands</el-option> <el-option value="Washington">Washington</el-option> <el-option value="West Virginia">West Virginia</el-option> <el-option value="Wisconsin">Wisconsin</el-option> <el-option value="Wyoming">Wyoming</el-option>
                            </el-select>
                        </el-form-item>
                        <!-- Marketing -->
                        <el-form-item label="Marketing Opt" prop="marketing">
                            <el-radio-group v-model="ruleForm.marketing">
                                <el-radio label="Company"></el-radio>
                                <el-radio label="Company + Third Parties"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <!-- Charity to Donate  -->
                        <el-form-item label="Charity to Donate" prop="charity">
                            <el-switch v-model="ruleForm.charity" id="activeDonate"></el-switch>
                        </el-form-item>
                        <el-form-item v-model="ruleFormDonate" label="Donation" class="donate fadeInDown" v-if="ruleForm.charity">
                            <input type="range" min="10" max="1000" step="1" id="slider" class="range" v-model="ruleForm.radius">
                            <input type="number" min="10" max="1000" step="1" id="range" class="text-input" v-model="ruleForm.radius">
                        </el-form-item>
                        <el-form-item label="Gender" prop="gender">
                            <el-radio-group v-model="ruleForm.gender">
                                <el-radio label="Male"></el-radio>
                                <el-radio label="Female"></el-radio>
                                <el-radio label="I'd rather not disclose"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="Terms & Conditions" prop="terms" class="terms-block">
                            <el-checkbox-group v-model="ruleForm.terms">
                                <el-checkbox label="I agree" name="type"></el-checkbox>
                            </el-checkbox-group>
                              <el-button class="readmore" type="text" @click="readTerms">( read more )</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
                            <el-button @click="resetForm('ruleForm')" type="danger">Reset</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
    props: ['conf'],
    data() {
        let checkZip = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('Please input postcode'));
            } else {
                const patt = new RegExp(/[0-9]{5}(-[0-9]{4})?/);
                const res = patt.test(value);

                if (res) {
                    callback();
                } else {
                    callback(new Error('Enter correct ZIP code'));
                }
            }
        };
    return {
        ruleForm: {
            title: '',
            firstname: '',
            lastname: '',
            street: '',
            city: '',
            zip: '',
            state: '',
            marketing: '',
            charity: false,
            gender: '',
            terms: '',
            radius: 10
        },
        dynamicValidateForm: {
            domains: [{
                key: 1,
                value: ''
              }],
              email: ''
            },
        rules: {
            firstname: [
                {required: true, message: 'Please input first name', trigger: 'blur'},
                {min: 2, max: 99, message: 'Length should be at least 2 chars', trigger: 'blur'}
            ],
            lastname: [
                {required: true, message: 'Please input last name', trigger: 'blur'},
                {min: 2, max: 99, message: 'Length should be at least 2 chars', trigger: 'blur'}
            ],
            gender: [
                {required: true, message: 'Please select your gender', trigger: 'change'}
            ],
            terms: [
                {required: true, message: 'Accepting terms and conditions is required   ', trigger: 'change'}
            ],
            zip: [
                {validator: checkZip, trigger: 'blur'}
            ]
        },
    };
},
 methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
            alert('Form validated successfully!');
        } else {
            console.log('error submit!!');
            return false;
        }
    });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
     readTerms() { // Terma and conditions MODAL content
        this.$alert('<p>Terms and Conditions are a set of rules and guidelines that a user must agree to in order to use your website or mobile app. It acts as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app. </p><p> It’s up to you to set the rules and guidelines that the user must agree to.</p>' + '<p>&nbsp;</p>' +
          '<p>You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, and where you maintain your legal rights against potential app abusers, and so on. </p>' + '<p>&nbsp;</p>' +
          '<p>Terms and Conditions are also known as Terms of Service or Terms of Use. This type of legal agreement can be used for both your website and your mobile app. It’s not required (it’s not recommended actually) to have separate Terms and Conditions agreements: one for your website and one for your mobile app.</p>' +
          '<p>You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, and where you maintain your legal rights against potential app abusers, and so on. </p>' + '<p>&nbsp;</p>' +
          '<p>Terms and Conditions are also known as Terms of Service or Terms of Use. This type of legal agreement can be used for both your website and your mobile app. It’s not required (it’s not recommended actually) to have separate Terms and Conditions agreements: one for your website and one for your mobile app.</p>' + '<p>&nbsp;</p>' +
          '<p>You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, and where you maintain your legal rights against potential app abusers, and so on. </p>' + '<p>&nbsp;</p>' +
          '<p>Terms and Conditions are also known as Terms of Service or Terms of Use. This type of legal agreement can be used for both your website and your mobile app. It’s not required (it’s not recommended actually) to have separate Terms and Conditions agreements: one for your website and one for your mobile app.</p>', 'Terms and Conditions', {
          dangerouslyUseHTMLString: true
        });
     },
     successModal() {
        this.$alert('<p>Congratulation </p>' + '<p>&nbsp;</p>', 'Form validated successfully!', {
          dangerouslyUseHTMLString: true
        });
     }
}
};

</script>

<style lang="scss" scoped>
.slide-forms{
    .forms-block{
        background-color: rgba(255, 255, 255, 0.71);
        max-width: 600px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
        border: solid 1px rgba(0, 0, 0, 0.18);
        margin: 30px auto;
        padding: 10px;
        border-radius: 3px;
        #slider {
            position: absolute;
            top: 10px;
            left: 75px;
            width: 70%;
        }
        #range {
            position: absolute;
            top: 7px;
            left: 26px;
            width: 44px;
            height: 23px;
            background-color: transparent;
            font-size: 18px;
            border: none;
            text-align: left;
        }
        .donate{
            display: block;
            position: relative;
            max-height: 42px;

            &:after {
                display: block;
                content: "$";
                width: 30px;
                height: 30px;
                background-color: transparent;
                position: relative;
                left: 26%;
                font-size: 22px;
                color: #3eb780;
                top: -36px;
             }
             input:focus{
                 box-shadow: none!important;
                 outline: none;
             }
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
    }
}
</style>


