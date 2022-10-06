(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{642:function(e,t,a){e.exports=a.p+"assets/img/oidc-id-token-flow.bb7a4207.png"},643:function(e,t,a){e.exports=a.p+"assets/img/aad_app_registration.602f9d9f.png"},779:function(e,t,a){"use strict";a.r(t);var r=a(10),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"challenge-0-request-an-id-token-from-azure-ad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenge-0-request-an-id-token-from-azure-ad"}},[e._v("#")]),e._v(" Challenge 0: Request an ID Token from Azure AD")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("ul",[t("li",[e._v("How to register an application in Azure AD")]),e._v(" "),t("li",[e._v("How to use the OpenIDConnect protocol to authenticate users")]),e._v(" "),t("li",[e._v("How to receive an "),t("strong",[e._v("id_token")]),e._v(" with basic profile information of the authenticated user")])]),e._v(" "),t("p",[e._v("Here is an high-level overview of the authentication process:\n"),t("img",{attrs:{src:a(642),alt:"Flow"}})]),e._v(" "),t("p",[e._v("In short:")]),e._v(" "),t("ol",[t("li",[e._v("We show the user a sign-in button")]),e._v(" "),t("li",[e._v("The sign-in button forwards to the "),t("code",[e._v(".../oauth2/v2.0/authorize")]),e._v(" URL, including the ID of our application and the ID of our AAD tenant")]),e._v(" "),t("li",[e._v("The user logs in and consents to letting us access his or her profile")]),e._v(" "),t("li",[e._v("Our AAD tenants forwards us to the callback URL and includes an "),t("code",[e._v("id_token")]),e._v(", which contains basic profile information of the user in form of a JWT (JSON Web Token)")]),e._v(" "),t("li",[e._v("Lastly, we could validate the returned "),t("code",[e._v("id_token")]),e._v(" using its signature (not shown here, most libraries do this for us)")])]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#create-an-azure-ad-application"}},[e._v("Create an Azure AD Application")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#run-the-token-echo-server"}},[e._v("Run the Token Echo Server")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-an-authentication-request"}},[e._v("Create an Authentication Request")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#cleanup"}},[e._v("Cleanup")])])]),e._v(" "),t("h2",{attrs:{id:"create-an-azure-ad-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-ad-application"}},[e._v("#")]),e._v(" Create an Azure AD Application")]),e._v(" "),t("p",[e._v("Before we can authenticate a user we have to register an application in our Azure AD tenant.")]),e._v(" "),t("h3",{attrs:{id:"azure-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az ad app create --display-name challengeidtokencli --reply-urls http://localhost:5001/api/tokenecho --identifier-uris https://TENANT_DOMAIN.onmicrosoft.com/challengeidtoken\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📝 The "),t("code",[e._v("IdentifierUri")]),e._v(" needs to be unique within an instance of AAD. Replace "),t("code",[e._v("TENANT_DOMAIN")]),e._v(" with the name of your Azure AD instance.")])]),e._v(" "),t("p",[e._v("Retrieve the ID of your current Azure AD tenant via:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az account show \n")])])]),t("h3",{attrs:{id:"viewing-your-applicationid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewing-your-applicationid"}},[e._v("#")]),e._v(" Viewing your ApplicationId")]),e._v(" "),t("p",[e._v("Note down the "),t("code",[e._v("appId")]),e._v(" value in the response - this is the id under which your AAD application has been registered. In the Azure Portal, we can see your new app registration under "),t("code",[e._v("AAD --\x3e App Registrations --\x3e Owned applications")]),e._v(":")]),e._v(" "),t("p",[t("img",{attrs:{src:a(643),alt:"alt-text"}})]),e._v(" "),t("h2",{attrs:{id:"run-the-token-echo-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-token-echo-server"}},[e._v("#")]),e._v(" Run the Token Echo Server")]),e._v(" "),t("p",[e._v("Open another shell and run the Token Echo Server from "),t("a",{attrs:{href:"../apps/token-echo-server"}},[t("code",[e._v("day5/apps/token-echo-server")])]),e._v(' in this repository. This helper ASP.NET Core tool is used to echo the token issued by your AAD and "simulates" our website or server backend that would receive the '),t("code",[e._v("id_token")]),e._v(".")]),e._v(" "),t("p",[e._v("The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),t("code",[e._v("http://localhost:5001/api/tokenecho")]),e._v(". This is why we initially registered an AAD application with a reply url pointing to "),t("code",[e._v("http://localhost:5001/api/tokenecho")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("dotnet run\n")])])]),t("h2",{attrs:{id:"create-an-authentication-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-authentication-request"}},[e._v("#")]),e._v(" Create an Authentication Request")]),e._v(" "),t("p",[e._v("Replace "),t("code",[e._v("TENANT_ID")]),e._v(" with your AAD Tenant Id and "),t("code",[e._v("APPLICATION_ID")]),e._v(" with your Application Id. Open a browser and paste the modified request.")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("//login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?")])]),e._v("\nclient_id=APPLICATION_ID\n&response_type=id_token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenecho\n&response_mode=form_post\n&scope=openid%20profile\n&nonce=1234\n")])])]),t("p",[e._v("For explanation:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("openid")]),e._v(" scope allows the user to "),t("em",[e._v("sign in")])]),e._v(" "),t("li",[t("code",[e._v("profile")]),e._v(" scope allows us to "),t("em",[e._v("read")]),e._v(" the "),t("em",[e._v("basic profile information")]),e._v(" of the user.")])]),e._v(" "),t("p",[e._v("Copy the "),t("code",[e._v("id_token")]),e._v(" value from your browser output, go to "),t("a",{attrs:{href:"https://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),t("OutboundLink")],1),e._v(" and paste the token. Take a minute and have a look at the decoded token.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📝 If you need further information about the issued claims take a look "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/develop/id-tokens#header-claims",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"wrap-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),t("p",[e._v("This challenge showed how to create a new application in AAD and how user can be authenticated using the Open ID Connect protocol. The full process is described "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/develop/v2-protocols-oidc",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"cleanup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),t("p",[e._v("Remove the created resources via the Azure CLI:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az ad app delete "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--id")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("applicationid"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("| "),t("RouterLink",{attrs:{to:"/day5/"}},[e._v("🔼 Day 5")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day5/challenges/01-challenge.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);