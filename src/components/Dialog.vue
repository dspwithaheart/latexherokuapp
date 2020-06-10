<template>
  <v-app>
    <!-- <h1>Fuccka</h1> -->
    <v-card width="500">
      <v-card-title class="grey darken-2">
        Create contact
      </v-card-title>
      <v-container>
        <v-row class="mx-2">
          <v-col class="align-center justify-space-between" cols="12">
             <v-select
                outline
                item-text="name"
                v-model="type"
                :items="sOrE"
                placeholder="type"
              />
            <v-row align="center" class="mr-0">
              <!-- <v-avatar
                  size="40px"
                  class="mx-3"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar> -->
              <v-select
                outline
                item-text="name"
                v-model="sex"
                :items="gender"
                style="width: 20px"
                placeholder="Sex"
              />

              <v-text-field v-model="name" placeholder="Name" />
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-account-card-details-outline"
              placeholder="Company"
              v-model="company"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-account-card-details-outline"
              placeholder="Job title"
              v-model="jobTitle"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-account-card-details-outline"
              placeholder="Address"
              v-model="address"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-account-card-details-outline"
              placeholder="City"
              v-model="city"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-mail"
              placeholder="Email"
              v-model="email"
            />
            <v-text-field
              prepend-icon="mdi-mail"
              placeholder="Gehaltsvorstellung"
              v-model="gehalt"
            />
          </v-col>
          <!-- <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              />
            </v-col> -->
          <!-- <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-text"
                placeholder="Notes"
              />
            </v-col> -->
        </v-row>
      </v-container>
      <v-card-actions>
        <!-- <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer /> -->
        <v-btn text color="primary" @click="ps_SendMail">Send mail PS</v-btn>
        <v-btn text @click="sendMail">Send</v-btn>
        <v-btn text @click="compileLatex">Compile Latex</v-btn>
        <v-btn text @click="clearAll">Clear</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
// import * from '(https://data.jsdelivr.com/v1/package/npm/pdfjs-dist/badge)](https://www.jsdelivr.com/package/npm/pdfjs-dist)'
// import * as PDFJS from "pdfjs-dist";
import axios from 'axios'
export default {
  name: "Dialiog",
  props: {
    source: String
  },
  data: () => ({
    gender: [{ name: "M" }, { name: "F" }],
    sOrE: [{ name: "Software" }, { name: "Elektro" }, { name: "Werkstudent" }],
    dialog: false,
    drawer: null,
    name: "",
    email: "",
    jobTitle: "Softwareentwickler",
    city: "",
    address: "",
    company: "",
    sex: "",
    type: "",
    gehalt: ""
    // anrede: ""
  }),
  computed: {
    anrede: function () {
      if (this.name === ""){
        ret = "Sehr geehrte Ansprechparnter/in"
        return ret
      }
      else{
        var greeting = this.sex === "F" ? "geehrte Frau" : "geehrter Herr",
        ret = "Sehr " + greeting + " " + this.name
        // `this` points to the vm instance
        // return this.message.split('').reverse().join('')
        return ret
      }
    },
    gehaltsvorstellung: function () {
      if(this.gehalt === "") 
        return "."
      else
        return ` und meine Gehaltsvorstellungen liegen bei ${this.gehalt} Euro brutto im Jahr.`
    }
  },
  methods: {
    clearAll(){
      this.name = "",
      this.email = "",
      this.jobTitle = "Softwareentwickler",
      this.city = "",
      this.address = "",
      this.company = "",
      this.sex = "",
      this.type =  "",
      this.gehalt = ""
    },
    compileLatex(){
        // console.log('sup')
        // var url = 'http://localhost:8080/post'
        // this.makeCorsRequest(url)
      	// this.createCORSRequest('GET', url)
      axios.post('http://localhost:8080/compileLatex', {
        type: this.type,
        anrede: this.anrede,
        jobTitle: this.jobTitle,
        company: this.company,
        address: this.address,
        city: this.city,
        gehaltsvorstellung: this.gehaltsvorstellung
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    ps_SendMail(){
      var subject = "Bewerbung als " + this.jobTitle;

      axios.post('http://localhost:8080/ps_SendMail', {
        type: this.type,
        email: this.email,
        anrede: this.anrede,
        jobTitle: this.jobTitle,
        company: this.company,
        address: this.address,
        city: this.city,
        subject: subject
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    sendMail() {
      // var greeting = this.sex === "F" ? "geehrte Frau" : "geehrter Herr";
      // this.anrede = "Sehr " + greeting + " " + this.name
      var yourMessage = this.anrede +
        ",\n \n" +
        "hiermit bewerbe ich mich für die von Ihnen angebotene Stelle als " +
        this.jobTitle +
        ".\n \n " +
        "Im Anhang zu dieser E-Mail finden Sie mein Bewerbungsunterlagen.\n Für Rückfragen stehe ich Ihnen gerne zur Verfügung und freue mich über die Möglichkeit eines persönlichen Gesprächs. \n \n Mit freundlichen Grüßen,\n Aayush Yadav";

      var subject = "Bewerbung als " + this.jobTitle;
      var emailData =
        "mailto:" +
        encodeURIComponent(this.email) +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(yourMessage);
      if (confirm(emailData)) {
        // Save it!
        document.location.href = emailData;
      } else {
        // Do nothing!
        console.log("Thing was not saved to the database.");
      }
      // document.location.href = 'mailto:' + encodeURIComponent(this.email) + '?subject=' +
      //         encodeURIComponent(subject) +
      //         '&body=' + encodeURIComponent(yourMessage)
    }
  }
};
</script>
