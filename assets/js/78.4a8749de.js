(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{783:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"💎-breakout-deploy-the-backend-services-of-the-sample-application-💎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-deploy-the-backend-services-of-the-sample-application-💎"}},[e._v("#")]),e._v(" 💎 Breakout: Deploy the backend services of the sample application 💎")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("p",[e._v("⏲️ "),t("em",[e._v("Est. time to complete: 30 min.")]),e._v(" ⏲️")]),e._v(" "),t("p",[e._v("In "),t("RouterLink",{attrs:{to:"/day5/challenges/03-challenge.html"}},[e._v("Challenge 3")]),e._v(" we already created the needed Azure AD\napplications to integrate the sample application into Azure AD. The frontend is\nalready deployed to a "),t("code",[e._v("dev")]),e._v(" and "),t("code",[e._v("test")]),e._v(" environment on Azure. In this breakout\nsession we will deploy the backend services in the "),t("code",[e._v("dev")]),e._v(" and "),t("code",[e._v("test")]),e._v(" environment.")],1),e._v(" "),t("h2",{attrs:{id:"table-of-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[e._v("#")]),e._v(" Table of content")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#pull-latest-changes-and-create-a-new-branch"}},[e._v("Pull latest changes and create a new branch")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#prepare-the-workflows"}},[e._v("Prepare the workflows")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#start-the-deployments"}},[e._v("Start the deployments")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])]),e._v(" "),t("h2",{attrs:{id:"pull-latest-changes-and-create-a-new-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-latest-changes-and-create-a-new-branch"}},[e._v("#")]),e._v(" Pull latest changes and create a new branch")]),e._v(" "),t("p",[e._v("Since we made changes in the master branch, we first need to pull these changes:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),t("p",[e._v("Next, we create a new feature branch to prepare the needed changes in the\nworkflows for the backend services:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" cicd/backend-day5\n")])])]),t("h2",{attrs:{id:"prepare-the-workflows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-workflows"}},[e._v("#")]),e._v(" Prepare the workflows")]),e._v(" "),t("p",[e._v("Open the VS Code workspace "),t("code",[e._v("day5.code-workspace")]),e._v(" for day5.")]),e._v(" "),t("p",[e._v("Open the following workflows and replace the organization name in each job\ncondition with your organization's name:")]),e._v(" "),t("ul",[t("li",[e._v("day5-scm-contactsapi.yml")]),e._v(" "),t("li",[e._v("day5-scm-resourcesapi.yml")]),e._v(" "),t("li",[e._v("day5-scm-searchapi.yml")]),e._v(" "),t("li",[e._v("day5-scm-visitreports.yml")])]),e._v(" "),t("p",[e._v("Commit and push your changes:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deploy backend services"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin cicd/backend-day5\n")])])]),t("h2",{attrs:{id:"start-the-deployments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-the-deployments"}},[e._v("#")]),e._v(" Start the deployments")]),e._v(" "),t("p",[e._v("Next, do the following:")]),e._v(" "),t("ol",[t("li",[e._v("Create a Pull request to merge the changes into the master branch")]),e._v(" "),t("li",[e._v("Wait until all status checks are successful")]),e._v(" "),t("li",[e._v("Merge the Pull request")]),e._v(" "),t("li",[e._v("Wait until all services are deployed to the "),t("code",[e._v("dev")]),e._v(" environment")]),e._v(" "),t("li",[e._v("Test the application in the "),t("code",[e._v("dev")]),e._v(" environment")]),e._v(" "),t("li",[e._v("Approve all deployments to the "),t("code",[e._v("test")]),e._v(" environment")]),e._v(" "),t("li",[e._v("Test the application in the "),t("code",[e._v("test")]),e._v(" environment")])]),e._v(" "),t("h2",{attrs:{id:"wrap-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),t("p",[e._v("🎉 "),t("strong",[t("em",[e._v("Congratulations")])]),e._v(" 🎉")]),e._v(" "),t("p",[e._v("You've done it. There is nothing more to add, just test the application and enjoy your success 🥳")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day5/challenges/03-challenge.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day5/"}},[e._v("🔼 Day 5")]),e._v(" |")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);