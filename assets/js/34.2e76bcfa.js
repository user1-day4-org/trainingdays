(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{325:function(e,t,r){e.exports=r.p+"assets/img/vnetpeeringarchitecture.9cfb28ed.png"},326:function(e,t,r){e.exports=r.p+"assets/img/deploytoazure.e0e5d477.png"},327:function(e,t,r){e.exports=r.p+"assets/img/armdeploymentresult.9be38aa5.png"},328:function(e,t,r){e.exports=r.p+"assets/img/vnetpeeringsettings.7e68a907.png"},329:function(e,t,r){e.exports=r.p+"assets/img/vnetpeeringtest.ed5c5417.png"},730:function(e,t,r){"use strict";r.r(t);var a=r(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"challenge-5-networking-connect-two-virtual-networks-using-azure-vnet-peering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenge-5-networking-connect-two-virtual-networks-using-azure-vnet-peering"}},[e._v("#")]),e._v(" Challenge 5: Networking - Connect Two Virtual Networks Using Azure VNET Peering")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("p",[e._v("How to connect 2 virtual networks with Azure VNET Peering. Our final architecture should look like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:r(325),alt:"Final architecture"}})]),e._v(" "),t("p",[e._v("At first you will deploy the "),t("em",[e._v("start environment")]),e._v(" and then you will implement the "),t("em",[e._v("peering")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#deploy-the-starting-point"}},[e._v("Deploy the Starting Point")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#implement-the-vnet-peering"}},[e._v("Implement the VNET peering")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#check-if-the-peering-works"}},[e._v("Check if the peering works")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#cleanup"}},[e._v("Cleanup")])])]),e._v(" "),t("h2",{attrs:{id:"deploy-the-starting-point"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-starting-point"}},[e._v("#")]),e._v(" Deploy the Starting Point")]),e._v(" "),t("p",[e._v("In this directory there is an ARM-template which 2 virtual networks and 2 VMs and its requirements (networking, disks,...):")]),e._v(" "),t("p",[e._v("Deploy this scenario into your subscription by "),t("strong",[e._v("clicking")]),e._v(" on the"),t("br"),e._v(" "),t("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-05%2Fchallengestart%2Fchallengestart.json"}},[t("img",{attrs:{src:r(326)}})]),e._v(" button.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("em",[e._v("Resource group")])]),e._v(" "),t("td",[t("strong",[e._v("(new)")]),e._v(" rg-VNETPeering")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Location")])]),e._v(" "),t("td",[e._v("West Europe")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Admin user")])]),e._v(" "),t("td",[e._v("demouser")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Admin password")])]),e._v(" "),t("td",[e._v("%some complex value%")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Vm Size")])]),e._v(" "),t("td",[e._v("Standard_B2s  or try e.g. Standard_F2s_v2")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Disk Sku")])]),e._v(" "),t("td",[e._v("StandardSSD_LRS")])])])]),e._v(" "),t("p",[e._v("The result should look similar to this:")]),e._v(" "),t("p",[t("img",{attrs:{src:r(327),alt:"Deployment result"}})]),e._v(" "),t("h2",{attrs:{id:"implement-the-vnet-peering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implement-the-vnet-peering"}},[e._v("#")]),e._v(" Implement the VNET peering")]),e._v(" "),t("p",[e._v("You need to create the peerings on each virtual network:")]),e._v(" "),t("ul",[t("li",[e._v("VNET1 ---\x3e VNET2")]),e._v(" "),t("li",[e._v("VNET2 ---\x3e VNET1")])]),e._v(" "),t("p",[e._v("The wizard in the portal is smart enough to let create 2 peerings in a single step. Select e.g. VNET1 as starting point:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Azure Portal] \n-> Resource Groups \n-> "rg-VNETPeering" \n-> "VNET1" \n-> Peerings -> Add\n')])])]),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("em",[e._v("This virtual network")]),e._v(" (Peering link name)")]),e._v(" "),t("td",[e._v("VNET1-to-VNET2")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Virtual Network")]),e._v(" (to peer with)")]),e._v(" "),t("td",[e._v("VNET2")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Remote virtual network")]),e._v("  (Peering link name)")]),e._v(" "),t("td",[e._v("VNET2-to-VNET1")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:r(328),alt:"VNET Peering settings"}})]),e._v(" "),t("h2",{attrs:{id:"check-if-the-peering-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-if-the-peering-works"}},[e._v("#")]),e._v(" Check if the peering works")]),e._v(" "),t("ol",[t("li",[e._v("Connect to one VM through RDP using its public ip address: e.g. VMonVNET1 through")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Azure Portal] \n-> Virtual Machines \n-> "VMonVNET1" \n-> Connect\n')])])]),t("table",[t("thead",[t("tr",[t("th",[e._v("User")]),e._v(" "),t("th",[e._v("Password")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("demouser")]),e._v(" "),t("td",[e._v("%your deployment password%")])])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Open a command prompt and ping the other VM using its internal IP: In our case VMonVNET2 - should be 192.168.100.4:")])]),e._v(" "),t("p",[t("img",{attrs:{src:r(329),alt:"VNET Peering ping test"}})]),e._v(" "),t("h2",{attrs:{id:"cleanup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),t("p",[e._v("Delete the resource group "),t("code",[e._v("rg-VNETPeering")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day1/challenge-04/"}},[e._v("◀ Previous challenge")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day1/"}},[e._v("🔼 Day 1")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day1/challenge-06/"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);