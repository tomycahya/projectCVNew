sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("projectcv.controller.cv", {
    onInit: function () {
      this.getData();
    },
    getData: function () {
      var oData = 
          {
            name: "John Doe",
            email: "johndoe@gmail.com",
            phone: "081212345678",
            address: "Indonesia",
            summary: "As an experienced SAP-ABAP developer, I bring a wealth of technical expertise and a proven track record of designing and implementing efficient solutions. I am committed to driving innovation and delivering highquality results, making me a valuable asset to your team.",
            education: [
              {
                degree: "Bachelor of Science in Computer Science",
                institution: "University of Technology",
                year: "2015",
              },
            ],
            experience: [
              {
                jobTitle: "Software Engineer",
                company: "Tech Solutions Inc.",
                duration: "2016 - Present",
                responsibilities: [
                  "Developing web applications",
                  "Collaborating with cross-functional teams",
                ],
              },
            ],
            skills: ["JavaScript", "SAPUI5", "HTML", "CSS"],
            projects: [
              {
                title: "Project Management System",
                description:
                  "A web application for managing projects and tasks.",
                technologies: ["SAPUI5", "JavaScript", "HTML", "CSS"],
              },
            ],
          }
        
        var oModel = new sap.ui.model.json.JSONModel(oData);
        console.log(oModel);
        this.getView().setModel(oModel, "cvModel");
    },
  });
});
