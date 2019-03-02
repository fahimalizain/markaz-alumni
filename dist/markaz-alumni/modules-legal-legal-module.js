(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-legal-legal-module"],{

/***/ "./src/app/modules/legal/legal-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/legal/legal-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LegalRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalRoutingComponent", function() { return LegalRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacypolicy/privacypolicy.component */ "./src/app/modules/legal/privacypolicy/privacypolicy.component.ts");




var routes = [
    { path: '', redirectTo: 'privacy-policy' },
    { path: 'privacy-policy', component: _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacypolicyComponent"] }
];
var LegalRoutingComponent = /** @class */ (function () {
    function LegalRoutingComponent() {
    }
    LegalRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LegalRoutingComponent);
    return LegalRoutingComponent;
}());



/***/ }),

/***/ "./src/app/modules/legal/legal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/legal/legal.module.ts ***!
  \***********************************************/
/*! exports provided: LegalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalModule", function() { return LegalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacypolicy/privacypolicy.component */ "./src/app/modules/legal/privacypolicy/privacypolicy.component.ts");
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal-routing.module */ "./src/app/modules/legal/legal-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var LegalModule = /** @class */ (function () {
    function LegalModule() {
    }
    LegalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacypolicyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _legal_routing_module__WEBPACK_IMPORTED_MODULE_4__["LegalRoutingComponent"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], LegalModule);
    return LegalModule;
}());



/***/ }),

/***/ "./src/app/modules/legal/privacypolicy/privacypolicy.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/legal/privacypolicy/privacypolicy.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <mat-card>\n    <mat-card-title>\n      <h4>Markazul Uloom Alumni Association</h4>\n      <h6>PRIVACY POLICY</h6>\n    </mat-card-title>\n    <mat-card-content>\n        <div class=\"text-muted\">Last Revised: 29 January 2019</div>\n        \n        We care about your privacy.  For this reason, we collect and use personal data only as it might be needed for us to deliver to you our world-class products, services, websites and mobile applications (collectively, our “Services”). Your personal data includes information such as:\n        \n        Name\n        Address\n        Telephone number\n        Date of birth\n        Email address\n        Other data collected that could directly or indirectly identify you.\n        Our Privacy Policy is intended to describe to you how and what data we collect, and how and why we use your personal data. It also describes options we provide for you to access, update or otherwise take control of your personal data that we process.  \n        \n        If at any time you have questions about our practices or any of your rights described below, you may reach our Data Protection Officer (“DPO”) and our dedicated team that supports this office by contacting us at privacy@markazalumni.com.  This inbox is actively monitored and managed so that we can deliver an experience that you can confidently trust.  \n        \n        Likewise, we’ve also created a Privacy Center to provide answers to your most common questions, quick links to access your Account Settings, instructions on how to exercise certain rights that might be available to you, and definitions to key terms and concepts noted in this Privacy Policy. \n        \n        What information do we collect?\n        \n        We collect information so that we can provide the best possible experience when you utilize our Services.  Much of what you likely consider personal data is collected directly from you when you:\n        \n        (1)    create an account or purchase any of our Services (ex: billing information, including name, address, credit card number, government identification);\n        \n        (2)    request assistance from our award-winning customer support team (ex: phone number); \n        \n        (3)    complete contact forms or request newsletters or other information from us (ex: email); or\n        \n        (4)    participate in contests and surveys, apply for a job, or otherwise participate in activities we promote that might require information about you.   \n        \n        However, we also collect additional information when delivering our Services to you to ensure necessary and optimal performance.  These methods of collection may not be as obvious to you, so we wanted to highlight and explain below a bit more about what these might be (as they vary from time to time) and how they work:\n        \n        Account related information is collected in association with your use of our Services, such as account number, purchases, when products renew or expire, information requests, and customer service requests and notes or details explaining what you asked for and how we responded.\n        \n        Cookies and similar technologies on our websites and our mobile applications allow us to track your browsing behavior, links clicked, items purchased, your device type, and to collect various data, including analytics, about how you use and interact with our Services. This allows us to provide you with more relevant product offerings, a better experience on our sites and mobile applications, and to collect, analyze and improve the performance of our Services. We may also collect your location (IP address) so that we can personalize our Services. For additional information, and to learn how to manage the technologies we utilize, please visit our Cookie Policy.   \n        \n        Data about Usage of Services is automatically collected when you use and interact with our Services, including metadata, log files, cookie/device IDs, page load time, server response time, and approximatelocation information to measure website performance and improve our systems, including optimizing DNS resolution, network routing and server configurations. Specifically, interactions with the features, content and links (including those of third-parties, such as social media plugins) contained within the Services, Internet Protocol (IP) address, browser type and settings, the date and time the Services were used, information about browser configuration and plugins, language preferences and cookie data, information about devices accessing the Services, including type of device, what operating system is used, device settings, application IDs, unique device identifiers and error data is collected.\n        \n        Supplemented Data may be received about you from other sources, including publicly available databases or third parties from whom we have purchased data, in which case we may combine this data with information we already have about you so that we can update, expand and analyze the accuracy of our records, identify new customers, and provide products and services that may be of interest to you.  If you provide us personal information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us.\n        \n        How we utilize information.\n        \n        We strongly believe in both minimizing the data we collect and limiting its use and purpose to only that (1) for which we have been given permission, (2) as necessary to deliver the Services you purchase or interact with, or (3) as we might be required or permitted for legal compliance or other lawful purposes. These uses include:\n        \n        Delivering, improving, updating and enhancing the Services we provide to you.  We collect various information relating to your purchase, use and/or interactions with our Services. We utilize this information to:\n        \n        Improve and optimize the operation and performance of our Services (again, including our websites and mobile applications)\n        Diagnose problems with and identify any security risks, errors, or needed enhancements to the Services\n        Detect and prevent fraud and abuse of our Services and systems\n        Collecting aggregate statistics about use of the Services\n        Understand and analyze how you use our Services and what products and services are most relevant to you.\n        Often, much of the data collected is aggregated or statistical data about how individuals use our Services, and is not linked to any personal data, but to the extent it is itself personal data, or is linked or linkable to personal data, we treat it accordingly. \n        \n        Sharing with trusted third parties. We may share your personal data with affiliated companies within our corporate family, with third parties with which we have partnered to allow you to integrate their services into our own Services, and with trusted third party service providers as necessary for them to perform services on our behalf, such as:\n        \n        Processing credit card payments\n        Serving advertisements\n        Conducting contests or surveys\n        Performing analysis of our Services and customers demographics\n        Communicating with you, such as by way email or survey delivery\n        Customer relationship management.\n        We only share your personal data as necessary for any third party to provide the services as requested or as needed on our behalf. These third parties (and any subcontractors) are subject to strict data processing terms and conditions and are prohibited from utilizing, sharing or retaining your personal data for any purpose other than as they have been specifically contracted for (or without your consent).\n        \n        Communicating with you. We may contact you directly or through a third party service provider regarding products or services you have signed up or purchased from us, such as necessary to deliver transactional or service related communications. We may also contact you with offers for additional services we think you’ll find valuable if you give us consent, or where allowed based upon legitimate interests. You don’t need to provide consent as a condition to purchase our goods or services. These contacts may include:\n        \n        Email\n        Text (SMS) messages\n        Telephone calls\n        Automated phone calls or text messages.\n        You may also update your subscription preferences with respect to receiving communications from us and/or our partners by signing into your account and visiting “Account Settings” page. \n        \n        If we collect information from you in connection with a co-branded offer, it will be clear at the point of collection who is collecting the information and whose privacy policy applies. In addition, it will describe any choice options you have in regards to the use and/or sharing of your personal data with a co-branded partner, as well as how to exercise those options.\n        \n        If you make use of a service that allows you to import contacts (ex. using email marketing services to send emails on your behalf), we will only use the contacts and any other personal information for the requested service. If you believe that anyone has provided us with your personal information and you would like to request that it be removed from our database, please contact us at privacy@MarkazAlumni.com.\n        \n        Transfer of personal data abroad.  If you utilize our Services from a country other than the country where our servers are located, your communications with us may result in transferring your personal data across international borders. Also, when you call us or initiate a chat, we may provide you with support from one of our global locations outside your country of origin. In these cases, your personal data is handled according to this Privacy Policy.\n        \n        Compliance with legal, regulatory and law enforcement requests. We cooperate with government and law enforcement officials and private parties to enforce and comply with the law. We will disclose any information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (such as subpoena requests), to protect our property and rights or the property and rights of a third party, to protect the safety of the public or any person, or to prevent or stop activity we consider to be illegal or unethical.\n        \n        To the extent we are legally permitted to do so, we will take reasonable steps to notify you in the event that we are required to provide your personal information to third parties as part of legal process. We will also share your information to the extent necessary to comply with ICANN or any ccTLD rules, regulations and policies when you register a domain name with us. For reasons critical to maintaining the security, stability and resiliency of the Internet, this includes the transfer of domain name registration information to the underlying domain registry operator and escrow provider, and publication of that information as required by ICANN in the public WHOIS database.\n        \n        Website analytics.  We use multiple web analytics tools provided by service partners such as Google Analytics, MixPanel and Singular to collect information about how you interact with our website or mobile applications, including what pages you visit, what site you visited prior to visiting our website, how much time you spend on each page, what operating system and web browser you use and network and IP information. We use the information provided by these tools to improve our Services. These tools place persistent cookies in your browser to identify you as a unique user the next time you visit our website. Each cookie cannot be used by anyone other than the service provider (ex: Google for Google Analytics). The information collected from the cookie may be transmitted to and stored by these service partners on servers in a country other than the country in which you reside. Though information collected does not include personal data such as name, address, billing information, etc., the information collected is used and shared by these service providers in accordance with their individual privacy policies. You can control the technologies we use by managing your settings through our Cookie Policy or the ‘cookie banners” that may be presented (depending on URL of website visited) when you first visit our webpages, or by utilizing settings in your browser or third-party tools, such as Disconnect, Ghostery and others.\n        \n        Targeted advertisements. Targeted ads or interest-based offers may be presented to you based on your activities on our webpages, and other websites, and based on the products you currently own.  These offers will display as varying product banners presented to you while browsing. We also partner with third parties to manage our advertising on our webpages and other websites.  Our third party partners may use technologies such as cookies to gather information about such activities in order to provide you with advertising based upon your browsing activities and interests, and to measure advertising effectiveness.  If you wish to opt out of interest-based advertising click here [or if located in the European Union click here]. Please note you will continue to receive generic ads.\n        \n        Third-party websites.  Our website and our mobile applications contain links to third-party websites. We are not responsible for the privacy practices or the content of third-party sites.  Please read the privacy policy of any website you visit.\n        \n        The E.U-U.S and Swiss-U.S. Privacy Shield Frameworks.\n        \n        \n        Contact us.\n        \n        If you have any privacy-related questions, concerns or complaints about our Privacy Policy, our practices or our Services, you may contact our Office of the DPO by email at privacy@markazalumni.com.  In the alternative, you may contact us by either of the following means:\n        \n        By Mail: Attn: Office of the Data Protection Officer, 14455 North Hayden Road, Suite 219, Scottsdale, AZ 85260 USA, or for customers established in the EEA, Attn: Legal, Office of the DPO, 5th Floor, The Shipping Building, Old Vinyl Factory, 252-254 Blyth Road, Hayes, UB3 1HA. \n        By Phone: 040-49187600.\n        We will respond to all requests, inquiries or concerns within thirty (30) days.\n    </mat-card-content>\n    <mat-card-footer>\n\n    </mat-card-footer>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/modules/legal/privacypolicy/privacypolicy.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/legal/privacypolicy/privacypolicy.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGVnYWwvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/legal/privacypolicy/privacypolicy.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/legal/privacypolicy/privacypolicy.component.ts ***!
  \************************************************************************/
/*! exports provided: PrivacypolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyComponent", function() { return PrivacypolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacypolicyComponent = /** @class */ (function () {
    function PrivacypolicyComponent() {
    }
    PrivacypolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacypolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacypolicy',
            template: __webpack_require__(/*! ./privacypolicy.component.html */ "./src/app/modules/legal/privacypolicy/privacypolicy.component.html"),
            styles: [__webpack_require__(/*! ./privacypolicy.component.scss */ "./src/app/modules/legal/privacypolicy/privacypolicy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacypolicyComponent);
    return PrivacypolicyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-legal-legal-module.js.map