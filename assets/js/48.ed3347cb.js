(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{601:function(e,t,r){e.exports=r.p+"assets/img/gh-import-repo.b6ee9bfa.png"},602:function(e,t,r){e.exports=r.p+"assets/img/gh-import-repo-view.e2650849.png"},603:function(e,t,r){e.exports=r.p+"assets/img/gh-branch-protection-rules.dc1f160d.png"},771:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"💎-challenge-04-import-the-azure-developer-college-s-repository-and-set-branch-rules-💎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💎-challenge-04-import-the-azure-developer-college-s-repository-and-set-branch-rules-💎"}},[e._v("#")]),e._v(" 💎 Challenge 04: Import the Azure Developer College's repository and set branch rules 💎")]),e._v(" "),t("p",[e._v("⏲️ "),t("em",[e._v("Est. time to complete: 15 min.")]),e._v(" ⏲️")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("p",[e._v("In this challenge you will learn how to:")]),e._v(" "),t("ul",[t("li",[e._v("Import the Azure Developer College's repository into your organization")]),e._v(" "),t("li",[e._v("Set branch rules to require reviewers and status checks")])]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#import-the-azure-developer-colleges-repository-into-your-organization"}},[e._v("Import the Azure Developer College's repository into your organization")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#set-branch-rules"}},[e._v("Set branch rules")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#manage-access"}},[e._v("Manage access")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#summary"}},[e._v("Summary")])])]),e._v(" "),t("h2",{attrs:{id:"import-the-azure-developer-college-s-repository-into-your-organization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-the-azure-developer-college-s-repository-into-your-organization"}},[e._v("#")]),e._v(" Import the Azure Developer College's repository into your organization")]),e._v(" "),t("p",[e._v("In the last challenges we have learned a lot about GitHub features and Azure\nbicep. Now it's time to come back to the Azure Developer College's sample\napplication and connect the dots. In the next challenges and breakout sessions\nwe want to show you how to use a CI/CD workflow to deploy the sample application\nto Azure using GitHub Actions workflows. All Azure bicep and GitHub Actions\nworkflows are already available in the Azure Developer College's repository.\nDon't worry you don't have to implement all parts to create a professional CI/CD\nworkflow. We just need to import the repository into your GitHub organization.")]),e._v(" "),t("p",[e._v("So, let's get started!")]),e._v(" "),t("p",[e._v("Navigate to your GitHub organization and go to the section "),t("em",[e._v("Repositories")]),e._v(" and\ncreate a new repository. In the "),t("em",[e._v("New repository")]),e._v(" form click the "),t("em",[e._v("Import a\nrepository")]),e._v(" link.")]),e._v(" "),t("p",[t("img",{attrs:{src:r(601),alt:"GitHub import repository"}})]),e._v(" "),t("p",[e._v("In the "),t("em",[e._v("Import your project to GitHub")]),e._v(" view, we need to specify the URL of the\nrepository we want to import. Use the URL of the Azure Developer College\ntraningdays repository\n"),t("a",{attrs:{href:"https://github.com/azuredevcollege/trainingdays",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/azuredevcollege/trainingdays"),t("OutboundLink")],1),e._v(".\nUse the name "),t("code",[e._v("trainingdays")]),e._v(" as repository name.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),t("p",[e._v("🛑 Be careful and use the right owner for the repository you want to import!")])]),e._v(" "),t("p",[e._v("We need to make the repository public, as we want to set "),t("em",[e._v("Branch rules")]),e._v(" later in\nthis challenge. Branch rules are only available for public repositories on the\nfree tier. After all values are set, we can start the import.")]),e._v(" "),t("p",[t("img",{attrs:{src:r(602),alt:"GitHub import repository view"}})]),e._v(" "),t("p",[e._v("It may take some time (several minutes) until the repository is imported.")]),e._v(" "),t("p",[e._v("After the import was successful, we can get started and take a look at the\nrepository. Don't worry if there are still some branches that not yet merged\ninto the master. When importing a repository, all branches are imported. The\ncollege is continuously being developed in branches, but we can ignore these for\nnow.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📝 You can also clone the original repository, change the url of the "),t("em",[e._v("origin")]),e._v(" remote, and push into a new empty repository.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:azuredevcollege/trainingdays.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" trainingdays\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote set-url origin git@github.com:"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_org"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/trainingdays.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push\n")])])])]),e._v(" "),t("h2",{attrs:{id:"set-branch-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-branch-rules"}},[e._v("#")]),e._v(" Set branch rules")]),e._v(" "),t("p",[e._v("With branch rules you can protect your branches and enforce certain workflows,\nsuch as requiring an approving review or passing status checks for all pull\nrequests.")]),e._v(" "),t("p",[e._v("We want to establish the following workflow for all our pull requests before\nchanges can be merged into the master branch:")]),e._v(" "),t("ul",[t("li",[e._v("A pull request needs at minimum one approving review")]),e._v(" "),t("li",[e._v("All status checks must pass")])]),e._v(" "),t("p",[e._v("To set a branch rule for the master branch, navigate to the imported\n"),t("code",[e._v("trainingdays")]),e._v(" repository and go to the "),t("em",[e._v("Settings")]),e._v(" section. On the left\nnavigation bar choose "),t("em",[e._v("Branches")]),e._v(". Under "),t("em",[e._v("Branch protection rules")]),e._v(" we can add a\nnew protection rule.")]),e._v(" "),t("p",[e._v("In the view "),t("em",[e._v("Branch protection rule")]),e._v(" we use "),t("code",[e._v("master")]),e._v(" as "),t("em",[e._v("Branch name pattern")]),e._v(" as\nwe want to apply the rule to the master branch only. Now we specify in "),t("em",[e._v("Protect\nmatching branches")]),e._v(" which rules we want to apply.")]),e._v(" "),t("ul",[t("li",[e._v("Set "),t("em",[e._v("Require pull request review before merging")]),e._v(" and require one approving reviewer")]),e._v(" "),t("li",[e._v("Set "),t("em",[e._v("Require status checks to pass before merging")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📝 If you want to enforce all configured restrictions even for administrators.\nSet "),t("em",[e._v("Include administrators")]),e._v(".")])]),e._v(" "),t("p",[t("img",{attrs:{src:r(603),alt:"GitHub branch protection rules"}})]),e._v(" "),t("p",[e._v("Take your time and have a look at the other protection rules. You can find more\nabout them in the GitHub Documentation\n"),t("a",{attrs:{href:"https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"manage-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-access"}},[e._v("#")]),e._v(" Manage access")]),e._v(" "),t("p",[e._v("At the moment you, as the repository's owner, are the only one who can\ncontribute to the repository and manage issues and pull requests. As we have\napplied branch rules, we need to give access to other people to allow them to\nmanage issues and pull requests. We have already seen how to manage access and\ngrant write permissions to a repository in\n"),t("RouterLink",{attrs:{to:"/day4/challenges/00-challenge-org.html#create-a-team-and-assign-permission"}},[e._v("00-challenge-org")]),e._v(".")],1),e._v(" "),t("p",[e._v("Now, grant write permissions to the "),t("em",[e._v("AzDC-Team")]),e._v(" we created in\n"),t("RouterLink",{attrs:{to:"/day4/challenges/00-challenge-org.html"}},[e._v("00-challenge-org")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("With branch protection rules we can protect branches and enforce certain\nworkflows. In our case we have applied rules which enforce the following\nworkflow:")]),e._v(" "),t("ul",[t("li",[e._v("whenever we want to make changes in the master branch, we have to create a new\nbranch from the master first, as a direct push to the master branch is prevented")]),e._v(" "),t("li",[e._v("once the work in the new branch is completed, we have to integrate it into the\nmaster branch via a pull request")]),e._v(" "),t("li",[e._v("the pull request must be verified by at least one reviewer")]),e._v(" "),t("li",[e._v("status checks must pass (we will create them in the next challenge)")])]),e._v(" "),t("p",[e._v("In the next challenge we will see how we can request reviewers to approve a pull\nrequest and how we can add GitHub Actions workflows as status checks.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day4/challenges/03-challenge-bicep.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day4/"}},[e._v("🔼 Day 4")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day4/challenges/05-challenge-common-cicd.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);