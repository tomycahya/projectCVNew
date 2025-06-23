sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("projectcv.controller.cv", {
    onInit: function () {
      this.getData();
    },
    getData: function () {
      var oData = 
          {
            name: "Tomi Cahya Anugrah",
            email: "tomycahya2@gmail.com",
            interests: ["SAP ABAP Developer", "Web Developer"],
            phone: "085648779594",
            address: "East Java, Indonesia",
            github: "https://github.com/tomycahya",
            summary: "As an experienced SAP-ABAP developer, I bring a wealth of technical expertise and a proven track record of designing and implementing efficient solutions. I am committed to driving innovation and delivering highquality results, making me a valuable asset to your team.",
            education: 
              [{
                degree: "Informatics Engineering",
                institution: "Muhammadiyah Gresik University",
                year: "2015 - 2019",
              }],
            
            experience: [
              {
                jobTitle: "SAP ABAP Developer & SAPUI5 Developer",
                company: "PT Astra Graphia Information Technology",
                duration: "Nov 2024 - Present",
                responsibilities: [
                  "Developing and maintaining SAP ABAP applications and SAPUI5 applications",
                ],
              },
              {
                jobTitle: "SAP ABAP Developer & Web Developer",
                company: "PT Semen Indonesia Logistics",
                duration: "May 2023 - Nov 2024",
                responsibilities: [
                  "Developing web applications",
                  "Collaborating with cross-functional teams to deliver high-quality software solutions",
                ],
              },
              {
                jobTitle: "SAP ABAP Developer",
                company: "PT Sinergi Informatika Semen Indonesia",
                duration: "Aug 2022 - May 2023",
                responsibilities: [
                  "Developing and maintaining SAP ABAP applications",
                ],
              },
              {
                jobTitle: "Frontend Developer",
                company: "PT Sinergi Informatika Semen Indonesia",
                duration: "Aug 2022 - Oct 2022",
                responsibilities: [
                  "Developing and maintaining web applications using Vue.js",
                ],
              },
              {
                jobTitle: "Fullstack Developer",
                company: "PT Sinergi Informatika Semen Indonesia",
                duration: "July 2019 - Aug 2022",
                responsibilities: [
                  "Developing and maintaining web applications using PHP, Laravel, Codeigniter",
                ],
              },

            ],
            skills: [
              {
                name : "JavaScript"
              }, 
              {
                name : "SAP ABAP"
              }, 
              {
                name : "SAPUI5"
              }, 
              {
                name : "HTML"
              }, 
              {
                name : "CSS"
              }, 
              {
                name : "PHP"
              }, 
              {
                name : "Laravel"
              }, 
              {
                name : "Codeigniter"
              },
            ],
            certificate: [
              {
                title: "SAP ABAP Development",
                description:
                  "Core Data Services ( CDS Views ) for S/4 HANA In UDEMY",
                year: "2023",
              },
              {
                title: "SAP ABAP Development",
                description:
                  "HANA Training for Beginners In UDEMY",
                year: "2023",
              },
              {
                title: "SAP ABAP Development",
                description:
                  "Training for Beginners In UDEMY",
                year: "2024",
              },
            ],
          }
        
        var oModel = new sap.ui.model.json.JSONModel(oData);
        // console.log(oModel);
        this.getView().setModel(oModel, "cvModel");
    },
  });
});
