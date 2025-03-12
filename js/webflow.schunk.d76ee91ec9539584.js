
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["729"], {
"6524": (function (__unused_webpack_module, exports) {
var __webpack_unused_export__;
/**
 * Webflow: Forms (Hosted)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return hostedSubmitWebflow;
    }
}));
function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
    return function(data) {
        reset(data);
        var form = data.form;
        var payload = {
            name: form.attr('data-name') || form.attr('name') || 'Untitled Form',
            pageId: form.attr('data-wf-page-id') || '',
            elementId: form.attr('data-wf-element-id') || '',
            domain: $('html').attr('data-wf-domain') || null,
            source: loc.href,
            test: Webflow.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
            trackingCookies: collectEnterpriseTrackingCookies()
        };
        const wfFlow = form.attr('data-wf-flow');
        if (wfFlow) {
            payload.wfFlow = wfFlow;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload.fields);
        if (status) {
            return alert(status);
        }
        payload.fileUploads = findFileUploads(form);
        // Disable submit button
        disableBtn(data);
        // Read site ID
        // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work
        if (!siteId) {
            afterSubmit(data);
            return;
        }
        $.ajax({
            url: formUrl,
            type: 'POST',
            data: payload,
            dataType: 'json',
            crossDomain: true
        }).done(function(response) {
            if (response && response.code === 200) {
                data.success = true;
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9ybXMtaG9zdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViZmxvdzogRm9ybXMgKEhvc3RlZClcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob3N0ZWRTdWJtaXRXZWJmbG93KFxuICByZXNldCxcbiAgbG9jLFxuICBXZWJmbG93LFxuICBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyxcbiAgcHJldmVudERlZmF1bHQsXG4gIGZpbmRGaWVsZHMsXG4gIGFsZXJ0LFxuICBmaW5kRmlsZVVwbG9hZHMsXG4gIGRpc2FibGVCdG4sXG4gIHNpdGVJZCxcbiAgYWZ0ZXJTdWJtaXQsXG4gICQsXG4gIGZvcm1Vcmxcbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXNldChkYXRhKTtcblxuICAgIHZhciBmb3JtID0gZGF0YS5mb3JtO1xuICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgbmFtZTogZm9ybS5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmb3JtLmF0dHIoJ25hbWUnKSB8fCAnVW50aXRsZWQgRm9ybScsXG4gICAgICBwYWdlSWQ6IGZvcm0uYXR0cignZGF0YS13Zi1wYWdlLWlkJykgfHwgJycsXG4gICAgICBlbGVtZW50SWQ6IGZvcm0uYXR0cignZGF0YS13Zi1lbGVtZW50LWlkJykgfHwgJycsXG5cbiAgICAgIGRvbWFpbjogJCgnaHRtbCcpLmF0dHIoJ2RhdGEtd2YtZG9tYWluJykgfHwgbnVsbCxcbiAgICAgIHNvdXJjZTogbG9jLmhyZWYsXG4gICAgICB0ZXN0OiBXZWJmbG93LmVudigpLFxuICAgICAgZmllbGRzOiB7fSxcbiAgICAgIGZpbGVVcGxvYWRzOiB7fSxcbiAgICAgIGRvbHBoaW46IC9wYXNzW1xccy1fXT8od29yZHxjb2RlKXxzZWNyZXR8bG9naW58Y3JlZGVudGlhbHMvaS50ZXN0KFxuICAgICAgICBmb3JtLmh0bWwoKVxuICAgICAgKSxcbiAgICAgIHRyYWNraW5nQ29va2llczogY29sbGVjdEVudGVycHJpc2VUcmFja2luZ0Nvb2tpZXMoKSxcbiAgICB9O1xuXG4gICAgY29uc3Qgd2ZGbG93ID0gZm9ybS5hdHRyKCdkYXRhLXdmLWZsb3cnKTtcblxuICAgIGlmICh3ZkZsb3cpIHtcbiAgICAgIHBheWxvYWQud2ZGbG93ID0gd2ZGbG93O1xuICAgIH1cblxuICAgIHByZXZlbnREZWZhdWx0KGRhdGEpO1xuXG4gICAgLy8gRmluZCAmIHBvcHVsYXRlIGFsbCBmaWVsZHNcbiAgICB2YXIgc3RhdHVzID0gZmluZEZpZWxkcyhmb3JtLCBwYXlsb2FkLmZpZWxkcyk7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgcmV0dXJuIGFsZXJ0KHN0YXR1cyk7XG4gICAgfVxuXG4gICAgcGF5bG9hZC5maWxlVXBsb2FkcyA9IGZpbmRGaWxlVXBsb2Fkcyhmb3JtKTtcblxuICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgIGRpc2FibGVCdG4oZGF0YSk7XG5cbiAgICAvLyBSZWFkIHNpdGUgSURcbiAgICAvLyBOT1RFOiBJZiB0aGlzIHNpdGUgaXMgZXhwb3J0ZWQsIHRoZSBIVE1MIHRhZyBtdXN0IHJldGFpbiB0aGUgZGF0YS13Zi1zaXRlIGF0dHJpYnV0ZSBmb3IgZm9ybXMgdG8gd29ya1xuICAgIGlmICghc2l0ZUlkKSB7XG4gICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBmb3JtVXJsLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICB9KVxuICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBkYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgIH0pO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImhvc3RlZFN1Ym1pdFdlYmZsb3ciLCJyZXNldCIsImxvYyIsIldlYmZsb3ciLCJjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyIsInByZXZlbnREZWZhdWx0IiwiZmluZEZpZWxkcyIsImFsZXJ0IiwiZmluZEZpbGVVcGxvYWRzIiwiZGlzYWJsZUJ0biIsInNpdGVJZCIsImFmdGVyU3VibWl0IiwiJCIsImZvcm1VcmwiLCJkYXRhIiwiZm9ybSIsInBheWxvYWQiLCJuYW1lIiwiYXR0ciIsInBhZ2VJZCIsImVsZW1lbnRJZCIsImRvbWFpbiIsInNvdXJjZSIsImhyZWYiLCJ0ZXN0IiwiZW52IiwiZmllbGRzIiwiZmlsZVVwbG9hZHMiLCJkb2xwaGluIiwiaHRtbCIsInRyYWNraW5nQ29va2llcyIsIndmRmxvdyIsInN0YXR1cyIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJjcm9zc0RvbWFpbiIsImRvbmUiLCJyZXNwb25zZSIsImNvZGUiLCJzdWNjZXNzIiwiZmFpbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7Ozs7K0JBRUQ7OztlQUF3QkE7OztBQUFULFNBQVNBLG9CQUN0QkMsS0FBSyxFQUNMQyxHQUFHLEVBQ0hDLE9BQU8sRUFDUEMsZ0NBQWdDLEVBQ2hDQyxjQUFjLEVBQ2RDLFVBQVUsRUFDVkMsS0FBSyxFQUNMQyxlQUFlLEVBQ2ZDLFVBQVUsRUFDVkMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLENBQUMsRUFDREMsT0FBTztJQUVQLE9BQU8sU0FBVUMsSUFBSTtRQUNuQmIsTUFBTWE7UUFFTixJQUFJQyxPQUFPRCxLQUFLQyxJQUFJO1FBQ3BCLElBQUlDLFVBQVU7WUFDWkMsTUFBTUYsS0FBS0csSUFBSSxDQUFDLGdCQUFnQkgsS0FBS0csSUFBSSxDQUFDLFdBQVc7WUFDckRDLFFBQVFKLEtBQUtHLElBQUksQ0FBQyxzQkFBc0I7WUFDeENFLFdBQVdMLEtBQUtHLElBQUksQ0FBQyx5QkFBeUI7WUFFOUNHLFFBQVFULEVBQUUsUUFBUU0sSUFBSSxDQUFDLHFCQUFxQjtZQUM1Q0ksUUFBUXBCLElBQUlxQixJQUFJO1lBQ2hCQyxNQUFNckIsUUFBUXNCLEdBQUc7WUFDakJDLFFBQVEsQ0FBQztZQUNUQyxhQUFhLENBQUM7WUFDZEMsU0FBUyxtREFBbURKLElBQUksQ0FDOURULEtBQUtjLElBQUk7WUFFWEMsaUJBQWlCMUI7UUFDbkI7UUFFQSxNQUFNMkIsU0FBU2hCLEtBQUtHLElBQUksQ0FBQztRQUV6QixJQUFJYSxRQUFRO1lBQ1ZmLFFBQVFlLE1BQU0sR0FBR0E7UUFDbkI7UUFFQTFCLGVBQWVTO1FBRWYsNkJBQTZCO1FBQzdCLElBQUlrQixTQUFTMUIsV0FBV1MsTUFBTUMsUUFBUVUsTUFBTTtRQUM1QyxJQUFJTSxRQUFRO1lBQ1YsT0FBT3pCLE1BQU15QjtRQUNmO1FBRUFoQixRQUFRVyxXQUFXLEdBQUduQixnQkFBZ0JPO1FBRXRDLHdCQUF3QjtRQUN4Qk4sV0FBV0s7UUFFWCxlQUFlO1FBQ2Ysd0dBQXdHO1FBQ3hHLElBQUksQ0FBQ0osUUFBUTtZQUNYQyxZQUFZRztZQUNaO1FBQ0Y7UUFFQUYsRUFBRXFCLElBQUksQ0FBQztZQUNMQyxLQUFLckI7WUFDTHNCLE1BQU07WUFDTnJCLE1BQU1FO1lBQ05vQixVQUFVO1lBQ1ZDLGFBQWE7UUFDZixHQUNHQyxJQUFJLENBQUMsU0FBVUMsUUFBUTtZQUN0QixJQUFJQSxZQUFZQSxTQUFTQyxJQUFJLEtBQUssS0FBSztnQkFDckMxQixLQUFLMkIsT0FBTyxHQUFHO1lBQ2pCO1lBRUE5QixZQUFZRztRQUNkLEdBQ0M0QixJQUFJLENBQUM7WUFDSi9CLFlBQVlHO1FBQ2Q7SUFDSjtBQUNGIn0=

}),
"7527": (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals
  window,
  document,
  WEBFLOW_FORM_API_HOST,
  WEBFLOW_FORM_OLDIE_HOST,
  WEBFLOW_EXPORT_MODE,
  turnstile
*/ /**
 * Webflow: Forms
 */ 
var Webflow = __webpack_require__(3949);
const renderTurnstileCaptcha = (siteKey, formElement, cb, errorCallback // () => void | boolean
)=>{
    const captchaContainer = document.createElement('div');
    formElement.appendChild(captchaContainer);
    // Render the captcha
    turnstile.render(captchaContainer, {
        sitekey: siteKey,
        callback: function(token) {
            cb(token);
        },
        'error-callback': function() {
            errorCallback();
        }
    });
};
Webflow.define('forms', module.exports = function($, _) {
    const TURNSTILE_LOADED_EVENT = 'TURNSTILE_LOADED';
    var api = {};
    var $doc = $(document);
    var $forms;
    var loc = window.location;
    var retro = window.XDomainRequest && !window.atob;
    var namespace = '.w-form';
    var siteId;
    var emailField = /e(-)?mail/i;
    var emailValue = /^\S+@\S+$/;
    var alert = window.alert;
    var inApp = Webflow.env();
    var listening;
    var formUrl;
    var signFileUrl;
    const turnstileSiteKey = $doc.find('[data-turnstile-sitekey]').data('turnstile-sitekey');
    let turnstileScript;
    // MailChimp domains: list-manage.com + mirrors
    var chimpRegex = /list-manage[1-9]?.com/i;
    var disconnected = _.debounce(function() {
        alert('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
    }, 100);
    api.ready = api.design = api.preview = function() {
        // start by loading the turnstile script (if the user has the feature enabled)
        loadTurnstileScript();
        // Init forms
        init();
        // Wire document events on published site only once
        if (!inApp && !listening) {
            addListeners();
        }
    };
    function init() {
        siteId = $('html').attr('data-wf-site');
        formUrl = "https://webflow.com" + '/api/v1/form/' + siteId;
        // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
        if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
        }
        signFileUrl = `${formUrl}/signFile`;
        $forms = $(namespace + ' form');
        if (!$forms.length) {
            return;
        }
        $forms.each(build);
    }
    function loadTurnstileScript() {
        if (turnstileSiteKey) {
            // Create script tag for turnstile
            turnstileScript = document.createElement('script');
            turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            document.head.appendChild(turnstileScript);
            turnstileScript.onload = ()=>{
                // after the script loads, emit an event that we listen to below.
                // this enables us to listen for the event on each form on the page and render the turnstile token for each of them.
                $doc.trigger(TURNSTILE_LOADED_EVENT);
            };
        }
    }
    function build(i, el) {
        // Store form state using namespace
        var $el = $(el);
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                form: $el
            });
        } // data.form
        reset(data);
        var wrap = $el.closest('div.w-form');
        data.done = wrap.find('> .w-form-done');
        data.fail = wrap.find('> .w-form-fail');
        data.fileUploads = wrap.find('.w-file-upload');
        data.fileUploads.each(function(j) {
            initFileUpload(j, data);
        });
        if (turnstileSiteKey) {
            // while we load the script, disable the submit button
            // but do not show the "Please wait" text
            data.wait = false;
            disableBtn(data);
            // this is probably overkill, but if the turnstile script has already loaded and we reached this point then
            // we'll fire the callback below immediately. Otherwise we'll wait for the TURNSTILE_LOADED_EVENT to fire.
            $doc.on(typeof turnstile !== 'undefined' ? 'ready' : TURNSTILE_LOADED_EVENT, function() {
                // render the hidden input with the turnstile token for each form on the page
                renderTurnstileCaptcha(turnstileSiteKey, el, (token)=>{
                    // The turnstile token gets automatically attached to the form as a hidden input field & sent on submission to the server.
                    // Here we are using this `data.turnstileToken` value to decide whether or not the submit button should be enabled.
                    data.turnstileToken = token;
                    // enable the submit button once turnstile is done rendering
                    reset(data);
                }, ()=>{
                    disableBtn(data);
                });
            });
        }
        // Accessibility fixes
        var formName = data.form.attr('aria-label') || data.form.attr('data-name') || 'Form';
        if (!data.done.attr('aria-label')) {
            data.form.attr('aria-label', formName);
        }
        data.done.attr('tabindex', '-1');
        data.done.attr('role', 'region');
        if (!data.done.attr('aria-label')) {
            data.done.attr('aria-label', formName + ' success');
        }
        data.fail.attr('tabindex', '-1');
        data.fail.attr('role', 'region');
        if (!data.fail.attr('aria-label')) {
            data.fail.attr('aria-label', formName + ' failure');
        }
        var action = data.action = $el.attr('action');
        data.handler = null;
        data.redirect = $el.attr('data-redirect');
        // MailChimp form
        if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
        }
        // Custom form action
        if (action) {
            return;
        }
        // Webflow forms for hosting accounts
        if (siteId) {
            data.handler =  false ? 0 : (()=>{
                const hostedSubmitHandler = (__webpack_require__(6524)/* ["default"] */["default"]);
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
            })();
            return;
        }
        // Alert for disconnected Webflow forms
        disconnected();
    }
    function addListeners() {
        listening = true;
        $doc.on('submit', namespace + ' form', function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
                data.evt = evt;
                data.handler(data);
            }
        });
        // handle checked ui for custom checkbox and radio button
        const CHECKBOX_CLASS_NAME = '.w-checkbox-input';
        const RADIO_INPUT_CLASS_NAME = '.w-radio-input';
        const CHECKED_CLASS = 'w--redirected-checked';
        const FOCUSED_CLASS = 'w--redirected-focus';
        const FOCUSED_VISIBLE_CLASS = 'w--redirected-focus-visible';
        const focusVisibleSelectors = ':focus-visible, [data-wf-focus-visible]';
        const CUSTOM_CONTROLS = [
            [
                'checkbox',
                CHECKBOX_CLASS_NAME
            ],
            [
                'radio',
                RADIO_INPUT_CLASS_NAME
            ]
        ];
        $doc.on('change', namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ')', (evt)=>{
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
        });
        $doc.on('change', namespace + ` form input[type="radio"]`, (evt)=>{
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el)=>$(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass('w-radio-input')) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
        });
        CUSTOM_CONTROLS.forEach(([controlType, customControlClassName])=>{
            $doc.on('focus', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on('blur', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
        });
    }
    // Reset data common to all submit handlers
    function reset(data) {
        var btn = data.btn = data.form.find(':input[type="submit"]');
        data.wait = data.btn.attr('data-wait') || null;
        data.success = false;
        // only enable the button if the turnstileToken has finished minting (and if the feature itself is enabled)
        btn.prop('disabled', Boolean(turnstileSiteKey && !data.turnstileToken));
        data.label && btn.val(data.label);
    }
    // Disable submit button
    function disableBtn(data) {
        var btn = data.btn;
        var wait = data.wait;
        btn.prop('disabled', true);
        // Show wait text and store previous label
        if (wait) {
            data.label = btn.val();
            btn.val(wait);
        }
    }
    // Find form fields, validate, and set value pairs
    function findFields(form, result) {
        var status = null;
        result = result || {};
        // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
        form.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr('type');
            var name = field.attr('data-name') || field.attr('name') || 'Field ' + (i + 1);
            // Encoding the field name will prevent fields that have brackets
            // in their name from being parsed by `bodyParser.urlencoded` as
            // objects which would have unintended consequences like not saving
            // the content of the field.
            // https://webflow.atlassian.net/browse/CMSAUTH-2495
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === 'checkbox') {
                value = field.is(':checked');
            } else if (type === 'radio') {
                // Radio group value already processed
                if (result[name] === null || typeof result[name] === 'string') {
                    return;
                }
                value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
            }
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
        });
        return status;
    }
    function findFileUploads(form) {
        var result = {};
        form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr('data-name') || field.attr('name') || 'File ' + (i + 1);
            var value = field.attr('data-value');
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
        });
        return result;
    }
    const trackingCookieNameMap = {
        _mkto_trk: 'marketo'
    };
    function collectEnterpriseTrackingCookies() {
        const cookies = document.cookie.split('; ').reduce(function(acc, cookie) {
            const splitCookie = cookie.split('=');
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join('=');
                acc[mappedName] = value;
            }
            return acc;
        }, {});
        return cookies;
    }
    function getStatus(field, type, name, value) {
        var status = null;
        if (type === 'password') {
            status = 'Passwords cannot be submitted.';
        } else if (field.attr('required')) {
            if (!value) {
                status = 'Please fill out the required field: ' + name;
            } else if (emailField.test(field.attr('type'))) {
                if (!emailValue.test(value)) {
                    status = 'Please enter a valid email address for: ' + name;
                }
            }
        } else if (name === 'g-recaptcha-response' && !value) {
            status = 'Please confirm you’re not a robot.';
        }
        return status;
    }
    function exportedSubmitWebflow(data) {
        preventDefault(data);
        afterSubmit(data);
    }
    // Submit form to MailChimp
    function submitMailChimp(data) {
        reset(data);
        var form = data.form;
        var payload = {};
        // Skip Ajax submission if http/s mismatch, fallback to POST instead
        if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr('method', 'post');
            return;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload);
        if (status) {
            return alert(status);
        }
        // Disable submit button
        disableBtn(data);
        // Use special format for MailChimp params
        var fullName;
        _.each(payload, function(value, key) {
            if (emailField.test(key)) {
                payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
            }
        });
        if (fullName && !payload.FNAME) {
            fullName = fullName.split(' ');
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
        }
        // Use the (undocumented) MailChimp jsonp api
        var url = data.action.replace('/post?', '/post-json?') + '&c=?';
        // Add special param to prevent bot signups
        var userId = url.indexOf('u=') + 2;
        userId = url.substring(userId, url.indexOf('&', userId));
        var listId = url.indexOf('id=') + 3;
        listId = url.substring(listId, url.indexOf('&', listId));
        payload['b_' + userId + '_' + listId] = '';
        $.ajax({
            url,
            data: payload,
            dataType: 'jsonp'
        }).done(function(resp) {
            data.success = resp.result === 'success' || /already/.test(resp.msg);
            if (!data.success) {
                console.info('MailChimp error: ' + resp.msg);
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    }
    // Common callback which runs after all Ajax submissions
    function afterSubmit(data) {
        var form = data.form;
        var redirect = data.redirect;
        var success = data.success;
        // Redirect to a success url if defined
        if (success && redirect) {
            Webflow.location(redirect);
            return;
        }
        // Show or hide status divs
        data.done.toggle(success);
        data.fail.toggle(!success);
        if (success) {
            data.done.focus();
        } else {
            data.fail.focus();
        }
        // Hide form on success
        form.toggle(!success);
        // Reset data and enable submit button
        reset(data);
    }
    function preventDefault(data) {
        data.evt && data.evt.preventDefault();
        data.evt = null;
    }
    function initFileUpload(i, form) {
        if (!form.fileUploads || !form.fileUploads[i]) {
            return;
        }
        var file;
        var $el = $(form.fileUploads[i]);
        var $defaultWrap = $el.find('> .w-file-upload-default');
        var $uploadingWrap = $el.find('> .w-file-upload-uploading');
        var $successWrap = $el.find('> .w-file-upload-success');
        var $errorWrap = $el.find('> .w-file-upload-error');
        var $input = $defaultWrap.find('.w-file-upload-input');
        var $label = $defaultWrap.find('.w-file-upload-label');
        var $labelChildren = $label.children();
        var $errorMsgEl = $errorWrap.find('.w-file-upload-error-msg');
        var $fileEl = $successWrap.find('.w-file-upload-file');
        var $removeEl = $successWrap.find('.w-file-remove-link');
        var $fileNameEl = $fileEl.find('.w-file-upload-file-name');
        var sizeErrMsg = $errorMsgEl.attr('data-w-size-error');
        var typeErrMsg = $errorMsgEl.attr('data-w-type-error');
        var genericErrMsg = $errorMsgEl.attr('data-w-generic-error');
        // Accessiblity fixes
        // The file upload Input is not stylable by the designer, so we are
        // going to pretend the Label is the input. ¯\_(ツ)_/¯
        if (!inApp) {
            $label.on('click keydown', function(e) {
                if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
                    return;
                }
                e.preventDefault();
                $input.click();
            });
        }
        // Both of these are added through CSS
        $label.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true');
        $removeEl.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true');
        if (!inApp) {
            $removeEl.on('click keydown', function(e) {
                if (e.type === 'keydown') {
                    if (e.which !== 13 && e.which !== 32) {
                        return;
                    }
                    e.preventDefault();
                }
                $input.removeAttr('data-value');
                $input.val('');
                $fileNameEl.html('');
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
            });
            $input.on('change', function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                    return;
                }
                // Show uploading
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                // Set filename
                $fileNameEl.text(file.name);
                // Disable submit button
                if (!isUploading()) {
                    disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
            });
            // Setting input width 1px and height equal label
            // This is so the browser required error will show up
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
        } else {
            $input.on('click', function(e) {
                e.preventDefault();
            });
            $label.on('click', function(e) {
                e.preventDefault();
            });
            $labelChildren.on('click', function(e) {
                e.preventDefault();
            });
        }
        function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === 'string' && errorMsg.indexOf('InvalidFileTypeError') === 0) {
                userError = typeErrMsg;
            } else if (typeof errorMsg === 'string' && errorMsg.indexOf('MaxFileSizeError') === 0) {
                userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr('data-value');
            $input.val('');
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function afterSign(err, data) {
            if (err) {
                return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr('data-value', fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
        }
        function afterUpload(err) {
            if (err) {
                return parseError(err);
            }
            // Show success
            $uploadingWrap.toggle(false);
            $successWrap.css('display', 'inline-block');
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
                return value.uploading;
            });
        }
    }
    function signFile(file, cb) {
        var payload = new URLSearchParams({
            name: file.name,
            size: file.size
        });
        $.ajax({
            type: 'GET',
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
        }).done(function(data) {
            cb(null, data);
        }).fail(function(err) {
            cb(err);
        });
    }
    function uploadS3(url, data, file, fileName, cb) {
        var formData = new FormData();
        for(var k in data){
            formData.append(k, data[k]);
        }
        formData.append('file', file, fileName);
        $.ajax({
            type: 'POST',
            url,
            data: formData,
            processData: false,
            contentType: false
        }).done(function() {
            cb(null);
        }).fail(function(err) {
            cb(err);
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9ybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsc1xuICB3aW5kb3csXG4gIGRvY3VtZW50LFxuICBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QsXG4gIFdFQkZMT1dfRk9STV9PTERJRV9IT1NULFxuICBXRUJGTE9XX0VYUE9SVF9NT0RFLFxuICB0dXJuc3RpbGVcbiovXG5cbi8qKlxuICogV2ViZmxvdzogRm9ybXNcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWxpYicpO1xuXG5jb25zdCByZW5kZXJUdXJuc3RpbGVDYXB0Y2hhID0gKFxuICBzaXRlS2V5LCAvLyBzdHJpbmdcbiAgZm9ybUVsZW1lbnQsIC8vIEhUTUxGb3JtRWxlbWVudFxuICBjYiwgLy8gKHRva2VuOiBzdHJpbmcpID0+IHZvaWRcbiAgZXJyb3JDYWxsYmFjayAvLyAoKSA9PiB2b2lkIHwgYm9vbGVhblxuKSA9PiB7XG4gIGNvbnN0IGNhcHRjaGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FwdGNoYUNvbnRhaW5lcik7XG5cbiAgLy8gUmVuZGVyIHRoZSBjYXB0Y2hhXG4gIHR1cm5zdGlsZS5yZW5kZXIoY2FwdGNoYUNvbnRhaW5lciwge1xuICAgIHNpdGVrZXk6IHNpdGVLZXksXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgY2IodG9rZW4pO1xuICAgIH0sXG4gICAgJ2Vycm9yLWNhbGxiYWNrJzogZnVuY3Rpb24gKCkge1xuICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdmb3JtcycsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfKSB7XG4gICAgY29uc3QgVFVSTlNUSUxFX0xPQURFRF9FVkVOVCA9ICdUVVJOU1RJTEVfTE9BREVEJztcbiAgICB2YXIgYXBpID0ge307XG5cbiAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkZm9ybXM7XG4gICAgdmFyIGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgcmV0cm8gPSB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgIXdpbmRvdy5hdG9iO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctZm9ybSc7XG4gICAgdmFyIHNpdGVJZDtcbiAgICB2YXIgZW1haWxGaWVsZCA9IC9lKC0pP21haWwvaTtcbiAgICB2YXIgZW1haWxWYWx1ZSA9IC9eXFxTK0BcXFMrJC87XG4gICAgdmFyIGFsZXJ0ID0gd2luZG93LmFsZXJ0O1xuICAgIHZhciBpbkFwcCA9IFdlYmZsb3cuZW52KCk7XG4gICAgdmFyIGxpc3RlbmluZztcblxuICAgIHZhciBmb3JtVXJsO1xuICAgIHZhciBzaWduRmlsZVVybDtcblxuICAgIGNvbnN0IHR1cm5zdGlsZVNpdGVLZXkgPSAkZG9jXG4gICAgICAuZmluZCgnW2RhdGEtdHVybnN0aWxlLXNpdGVrZXldJylcbiAgICAgIC5kYXRhKCd0dXJuc3RpbGUtc2l0ZWtleScpO1xuICAgIGxldCB0dXJuc3RpbGVTY3JpcHQ7XG5cbiAgICAvLyBNYWlsQ2hpbXAgZG9tYWluczogbGlzdC1tYW5hZ2UuY29tICsgbWlycm9yc1xuICAgIHZhciBjaGltcFJlZ2V4ID0gL2xpc3QtbWFuYWdlWzEtOV0/LmNvbS9pO1xuXG4gICAgdmFyIGRpc2Nvbm5lY3RlZCA9IF8uZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQoXG4gICAgICAgICdPb3BzISBUaGlzIHBhZ2UgaGFzIGltcHJvcGVybHkgY29uZmlndXJlZCBmb3Jtcy4gUGxlYXNlIGNvbnRhY3QgeW91ciB3ZWJzaXRlIGFkbWluaXN0cmF0b3IgdG8gZml4IHRoaXMgaXNzdWUuJ1xuICAgICAgKTtcbiAgICB9LCAxMDApO1xuXG4gICAgYXBpLnJlYWR5ID1cbiAgICAgIGFwaS5kZXNpZ24gPVxuICAgICAgYXBpLnByZXZpZXcgPVxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gc3RhcnQgYnkgbG9hZGluZyB0aGUgdHVybnN0aWxlIHNjcmlwdCAoaWYgdGhlIHVzZXIgaGFzIHRoZSBmZWF0dXJlIGVuYWJsZWQpXG4gICAgICAgICAgbG9hZFR1cm5zdGlsZVNjcmlwdCgpO1xuXG4gICAgICAgICAgLy8gSW5pdCBmb3Jtc1xuICAgICAgICAgIGluaXQoKTtcblxuICAgICAgICAgIC8vIFdpcmUgZG9jdW1lbnQgZXZlbnRzIG9uIHB1Ymxpc2hlZCBzaXRlIG9ubHkgb25jZVxuICAgICAgICAgIGlmICghaW5BcHAgJiYgIWxpc3RlbmluZykge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHNpdGVJZCA9ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLXNpdGUnKTtcblxuICAgICAgZm9ybVVybCA9IFdFQkZMT1dfRk9STV9BUElfSE9TVCArICcvYXBpL3YxL2Zvcm0vJyArIHNpdGVJZDtcblxuICAgICAgLy8gV29yayBhcm91bmQgc2FtZS1wcm90b2NvbCBJRSBYRFIgbGltaXRhdGlvbiAtIHdpdGhvdXQgdGhpcyBJRTkgYW5kIGJlbG93IGZvcm1zIHdvbid0IHN1Ym1pdFxuICAgICAgaWYgKHJldHJvICYmIGZvcm1VcmwuaW5kZXhPZihXRUJGTE9XX0ZPUk1fQVBJX0hPU1QpID49IDApIHtcbiAgICAgICAgZm9ybVVybCA9IGZvcm1VcmwucmVwbGFjZShcbiAgICAgICAgICBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QsXG4gICAgICAgICAgV0VCRkxPV19GT1JNX09MRElFX0hPU1RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc2lnbkZpbGVVcmwgPSBgJHtmb3JtVXJsfS9zaWduRmlsZWA7XG5cbiAgICAgICRmb3JtcyA9ICQobmFtZXNwYWNlICsgJyBmb3JtJyk7XG4gICAgICBpZiAoISRmb3Jtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJGZvcm1zLmVhY2goYnVpbGQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUdXJuc3RpbGVTY3JpcHQoKSB7XG4gICAgICBpZiAodHVybnN0aWxlU2l0ZUtleSkge1xuICAgICAgICAvLyBDcmVhdGUgc2NyaXB0IHRhZyBmb3IgdHVybnN0aWxlXG4gICAgICAgIHR1cm5zdGlsZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB0dXJuc3RpbGVTY3JpcHQuc3JjID1cbiAgICAgICAgICAnaHR0cHM6Ly9jaGFsbGVuZ2VzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS92MC9hcGkuanMnO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHR1cm5zdGlsZVNjcmlwdCk7XG4gICAgICAgIHR1cm5zdGlsZVNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNjcmlwdCBsb2FkcywgZW1pdCBhbiBldmVudCB0aGF0IHdlIGxpc3RlbiB0byBiZWxvdy5cbiAgICAgICAgICAvLyB0aGlzIGVuYWJsZXMgdXMgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnQgb24gZWFjaCBmb3JtIG9uIHRoZSBwYWdlIGFuZCByZW5kZXIgdGhlIHR1cm5zdGlsZSB0b2tlbiBmb3IgZWFjaCBvZiB0aGVtLlxuICAgICAgICAgICRkb2MudHJpZ2dlcihUVVJOU1RJTEVfTE9BREVEX0VWRU5UKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZChpLCBlbCkge1xuICAgICAgLy8gU3RvcmUgZm9ybSBzdGF0ZSB1c2luZyBuYW1lc3BhY2VcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKGVsLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSwge2Zvcm06ICRlbH0pO1xuICAgICAgfSAvLyBkYXRhLmZvcm1cblxuICAgICAgcmVzZXQoZGF0YSk7XG4gICAgICB2YXIgd3JhcCA9ICRlbC5jbG9zZXN0KCdkaXYudy1mb3JtJyk7XG4gICAgICBkYXRhLmRvbmUgPSB3cmFwLmZpbmQoJz4gLnctZm9ybS1kb25lJyk7XG4gICAgICBkYXRhLmZhaWwgPSB3cmFwLmZpbmQoJz4gLnctZm9ybS1mYWlsJyk7XG4gICAgICBkYXRhLmZpbGVVcGxvYWRzID0gd3JhcC5maW5kKCcudy1maWxlLXVwbG9hZCcpO1xuXG4gICAgICBkYXRhLmZpbGVVcGxvYWRzLmVhY2goZnVuY3Rpb24gKGopIHtcbiAgICAgICAgaW5pdEZpbGVVcGxvYWQoaiwgZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR1cm5zdGlsZVNpdGVLZXkpIHtcbiAgICAgICAgLy8gd2hpbGUgd2UgbG9hZCB0aGUgc2NyaXB0LCBkaXNhYmxlIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIC8vIGJ1dCBkbyBub3Qgc2hvdyB0aGUgXCJQbGVhc2Ugd2FpdFwiIHRleHRcbiAgICAgICAgZGF0YS53YWl0ID0gZmFsc2U7XG4gICAgICAgIGRpc2FibGVCdG4oZGF0YSk7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBwcm9iYWJseSBvdmVya2lsbCwgYnV0IGlmIHRoZSB0dXJuc3RpbGUgc2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZCBhbmQgd2UgcmVhY2hlZCB0aGlzIHBvaW50IHRoZW5cbiAgICAgICAgLy8gd2UnbGwgZmlyZSB0aGUgY2FsbGJhY2sgYmVsb3cgaW1tZWRpYXRlbHkuIE90aGVyd2lzZSB3ZSdsbCB3YWl0IGZvciB0aGUgVFVSTlNUSUxFX0xPQURFRF9FVkVOVCB0byBmaXJlLlxuICAgICAgICAkZG9jLm9uKFxuICAgICAgICAgIHR5cGVvZiB0dXJuc3RpbGUgIT09ICd1bmRlZmluZWQnID8gJ3JlYWR5JyA6IFRVUk5TVElMRV9MT0FERURfRVZFTlQsXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBoaWRkZW4gaW5wdXQgd2l0aCB0aGUgdHVybnN0aWxlIHRva2VuIGZvciBlYWNoIGZvcm0gb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIHJlbmRlclR1cm5zdGlsZUNhcHRjaGEoXG4gICAgICAgICAgICAgIHR1cm5zdGlsZVNpdGVLZXksXG4gICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdHVybnN0aWxlIHRva2VuIGdldHMgYXV0b21hdGljYWxseSBhdHRhY2hlZCB0byB0aGUgZm9ybSBhcyBhIGhpZGRlbiBpbnB1dCBmaWVsZCAmIHNlbnQgb24gc3VibWlzc2lvbiB0byB0aGUgc2VydmVyLlxuICAgICAgICAgICAgICAgIC8vIEhlcmUgd2UgYXJlIHVzaW5nIHRoaXMgYGRhdGEudHVybnN0aWxlVG9rZW5gIHZhbHVlIHRvIGRlY2lkZSB3aGV0aGVyIG9yIG5vdCB0aGUgc3VibWl0IGJ1dHRvbiBzaG91bGQgYmUgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBkYXRhLnR1cm5zdGlsZVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgLy8gZW5hYmxlIHRoZSBzdWJtaXQgYnV0dG9uIG9uY2UgdHVybnN0aWxlIGlzIGRvbmUgcmVuZGVyaW5nXG4gICAgICAgICAgICAgICAgcmVzZXQoZGF0YSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQnRuKGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBmaXhlc1xuICAgICAgdmFyIGZvcm1OYW1lID1cbiAgICAgICAgZGF0YS5mb3JtLmF0dHIoJ2FyaWEtbGFiZWwnKSB8fCBkYXRhLmZvcm0uYXR0cignZGF0YS1uYW1lJykgfHwgJ0Zvcm0nO1xuICAgICAgaWYgKCFkYXRhLmRvbmUuYXR0cignYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIGRhdGEuZm9ybS5hdHRyKCdhcmlhLWxhYmVsJywgZm9ybU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmRvbmUuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIGRhdGEuZG9uZS5hdHRyKCdyb2xlJywgJ3JlZ2lvbicpO1xuICAgICAgaWYgKCFkYXRhLmRvbmUuYXR0cignYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIGRhdGEuZG9uZS5hdHRyKCdhcmlhLWxhYmVsJywgZm9ybU5hbWUgKyAnIHN1Y2Nlc3MnKTtcbiAgICAgIH1cbiAgICAgIGRhdGEuZmFpbC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgZGF0YS5mYWlsLmF0dHIoJ3JvbGUnLCAncmVnaW9uJyk7XG4gICAgICBpZiAoIWRhdGEuZmFpbC5hdHRyKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgZGF0YS5mYWlsLmF0dHIoJ2FyaWEtbGFiZWwnLCBmb3JtTmFtZSArICcgZmFpbHVyZScpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aW9uID0gKGRhdGEuYWN0aW9uID0gJGVsLmF0dHIoJ2FjdGlvbicpKTtcbiAgICAgIGRhdGEuaGFuZGxlciA9IG51bGw7XG4gICAgICBkYXRhLnJlZGlyZWN0ID0gJGVsLmF0dHIoJ2RhdGEtcmVkaXJlY3QnKTtcblxuICAgICAgLy8gTWFpbENoaW1wIGZvcm1cbiAgICAgIGlmIChjaGltcFJlZ2V4LnRlc3QoYWN0aW9uKSkge1xuICAgICAgICBkYXRhLmhhbmRsZXIgPSBzdWJtaXRNYWlsQ2hpbXA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3VzdG9tIGZvcm0gYWN0aW9uXG4gICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gV2ViZmxvdyBmb3JtcyBmb3IgaG9zdGluZyBhY2NvdW50c1xuICAgICAgaWYgKHNpdGVJZCkge1xuICAgICAgICBkYXRhLmhhbmRsZXIgPSBXRUJGTE9XX0VYUE9SVF9NT0RFXG4gICAgICAgICAgPyBleHBvcnRlZFN1Ym1pdFdlYmZsb3dcbiAgICAgICAgICA6ICgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGhvc3RlZFN1Ym1pdEhhbmRsZXIgPVxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vd2ViZmxvdy1mb3Jtcy1ob3N0ZWQnKS5kZWZhdWx0O1xuICAgICAgICAgICAgICByZXR1cm4gaG9zdGVkU3VibWl0SGFuZGxlcihcbiAgICAgICAgICAgICAgICByZXNldCxcbiAgICAgICAgICAgICAgICBsb2MsXG4gICAgICAgICAgICAgICAgV2ViZmxvdyxcbiAgICAgICAgICAgICAgICBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyxcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgICAgICAgICBmaW5kRmllbGRzLFxuICAgICAgICAgICAgICAgIGFsZXJ0LFxuICAgICAgICAgICAgICAgIGZpbmRGaWxlVXBsb2FkcyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQnRuLFxuICAgICAgICAgICAgICAgIHNpdGVJZCxcbiAgICAgICAgICAgICAgICBhZnRlclN1Ym1pdCxcbiAgICAgICAgICAgICAgICAkLFxuICAgICAgICAgICAgICAgIGZvcm1VcmxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQWxlcnQgZm9yIGRpc2Nvbm5lY3RlZCBXZWJmbG93IGZvcm1zXG4gICAgICBkaXNjb25uZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICBsaXN0ZW5pbmcgPSB0cnVlO1xuXG4gICAgICAkZG9jLm9uKCdzdWJtaXQnLCBuYW1lc3BhY2UgKyAnIGZvcm0nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBkYXRhID0gJC5kYXRhKHRoaXMsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmIChkYXRhLmhhbmRsZXIpIHtcbiAgICAgICAgICBkYXRhLmV2dCA9IGV2dDtcbiAgICAgICAgICBkYXRhLmhhbmRsZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBoYW5kbGUgY2hlY2tlZCB1aSBmb3IgY3VzdG9tIGNoZWNrYm94IGFuZCByYWRpbyBidXR0b25cbiAgICAgIGNvbnN0IENIRUNLQk9YX0NMQVNTX05BTUUgPSAnLnctY2hlY2tib3gtaW5wdXQnO1xuICAgICAgY29uc3QgUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSA9ICcudy1yYWRpby1pbnB1dCc7XG4gICAgICBjb25zdCBDSEVDS0VEX0NMQVNTID0gJ3ctLXJlZGlyZWN0ZWQtY2hlY2tlZCc7XG4gICAgICBjb25zdCBGT0NVU0VEX0NMQVNTID0gJ3ctLXJlZGlyZWN0ZWQtZm9jdXMnO1xuICAgICAgY29uc3QgRk9DVVNFRF9WSVNJQkxFX0NMQVNTID0gJ3ctLXJlZGlyZWN0ZWQtZm9jdXMtdmlzaWJsZSc7XG4gICAgICBjb25zdCBmb2N1c1Zpc2libGVTZWxlY3RvcnMgPSAnOmZvY3VzLXZpc2libGUsIFtkYXRhLXdmLWZvY3VzLXZpc2libGVdJztcblxuICAgICAgY29uc3QgQ1VTVE9NX0NPTlRST0xTID0gW1xuICAgICAgICBbJ2NoZWNrYm94JywgQ0hFQ0tCT1hfQ0xBU1NfTkFNRV0sXG4gICAgICAgIFsncmFkaW8nLCBSQURJT19JTlBVVF9DTEFTU19OQU1FXSxcbiAgICAgIF07XG5cbiAgICAgICRkb2Mub24oXG4gICAgICAgICdjaGFuZ2UnLFxuICAgICAgICBuYW1lc3BhY2UgK1xuICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KGAgK1xuICAgICAgICAgIENIRUNLQk9YX0NMQVNTX05BTUUgK1xuICAgICAgICAgICcpJyxcbiAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICQoZXZ0LnRhcmdldClcbiAgICAgICAgICAgIC5zaWJsaW5ncyhDSEVDS0JPWF9DTEFTU19OQU1FKVxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKENIRUNLRURfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAkZG9jLm9uKCdjaGFuZ2UnLCBuYW1lc3BhY2UgKyBgIGZvcm0gaW5wdXRbdHlwZT1cInJhZGlvXCJdYCwgKGV2dCkgPT4ge1xuICAgICAgICAkKGBpbnB1dFtuYW1lPVwiJHtldnQudGFyZ2V0Lm5hbWV9XCJdOm5vdCgke0NIRUNLQk9YX0NMQVNTX05BTUV9KWApLm1hcChcbiAgICAgICAgICAoaSwgZWwpID0+XG4gICAgICAgICAgICAkKGVsKS5zaWJsaW5ncyhSQURJT19JTlBVVF9DTEFTU19OQU1FKS5yZW1vdmVDbGFzcyhDSEVDS0VEX0NMQVNTKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2dC50YXJnZXQpO1xuXG4gICAgICAgIGlmICghJHRhcmdldC5oYXNDbGFzcygndy1yYWRpby1pbnB1dCcpKSB7XG4gICAgICAgICAgJHRhcmdldC5zaWJsaW5ncyhSQURJT19JTlBVVF9DTEFTU19OQU1FKS5hZGRDbGFzcyhDSEVDS0VEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIENVU1RPTV9DT05UUk9MUy5mb3JFYWNoKChbY29udHJvbFR5cGUsIGN1c3RvbUNvbnRyb2xDbGFzc05hbWVdKSA9PiB7XG4gICAgICAgICRkb2Mub24oXG4gICAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgICBuYW1lc3BhY2UgK1xuICAgICAgICAgICAgYCBmb3JtIGlucHV0W3R5cGU9XCIke2NvbnRyb2xUeXBlfVwiXTpub3QoYCArXG4gICAgICAgICAgICBjdXN0b21Db250cm9sQ2xhc3NOYW1lICtcbiAgICAgICAgICAgICcpJyxcbiAgICAgICAgICAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAkKGV2dC50YXJnZXQpXG4gICAgICAgICAgICAgIC5zaWJsaW5ncyhjdXN0b21Db250cm9sQ2xhc3NOYW1lKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoRk9DVVNFRF9DTEFTUyk7XG4gICAgICAgICAgICAkKGV2dC50YXJnZXQpXG4gICAgICAgICAgICAgIC5maWx0ZXIoZm9jdXNWaXNpYmxlU2VsZWN0b3JzKVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLmFkZENsYXNzKEZPQ1VTRURfVklTSUJMRV9DTEFTUyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAkZG9jLm9uKFxuICAgICAgICAgICdibHVyJyxcbiAgICAgICAgICBuYW1lc3BhY2UgK1xuICAgICAgICAgICAgYCBmb3JtIGlucHV0W3R5cGU9XCIke2NvbnRyb2xUeXBlfVwiXTpub3QoYCArXG4gICAgICAgICAgICBjdXN0b21Db250cm9sQ2xhc3NOYW1lICtcbiAgICAgICAgICAgICcpJyxcbiAgICAgICAgICAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAkKGV2dC50YXJnZXQpXG4gICAgICAgICAgICAgIC5zaWJsaW5ncyhjdXN0b21Db250cm9sQ2xhc3NOYW1lKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYCR7Rk9DVVNFRF9DTEFTU30gJHtGT0NVU0VEX1ZJU0lCTEVfQ0xBU1N9YCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgZGF0YSBjb21tb24gdG8gYWxsIHN1Ym1pdCBoYW5kbGVyc1xuICAgIGZ1bmN0aW9uIHJlc2V0KGRhdGEpIHtcbiAgICAgIHZhciBidG4gPSAoZGF0YS5idG4gPSBkYXRhLmZvcm0uZmluZCgnOmlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSk7XG4gICAgICBkYXRhLndhaXQgPSBkYXRhLmJ0bi5hdHRyKCdkYXRhLXdhaXQnKSB8fCBudWxsO1xuICAgICAgZGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAvLyBvbmx5IGVuYWJsZSB0aGUgYnV0dG9uIGlmIHRoZSB0dXJuc3RpbGVUb2tlbiBoYXMgZmluaXNoZWQgbWludGluZyAoYW5kIGlmIHRoZSBmZWF0dXJlIGl0c2VsZiBpcyBlbmFibGVkKVxuICAgICAgYnRuLnByb3AoJ2Rpc2FibGVkJywgQm9vbGVhbih0dXJuc3RpbGVTaXRlS2V5ICYmICFkYXRhLnR1cm5zdGlsZVRva2VuKSk7XG4gICAgICBkYXRhLmxhYmVsICYmIGJ0bi52YWwoZGF0YS5sYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgZnVuY3Rpb24gZGlzYWJsZUJ0bihkYXRhKSB7XG4gICAgICB2YXIgYnRuID0gZGF0YS5idG47XG4gICAgICB2YXIgd2FpdCA9IGRhdGEud2FpdDtcbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgLy8gU2hvdyB3YWl0IHRleHQgYW5kIHN0b3JlIHByZXZpb3VzIGxhYmVsXG4gICAgICBpZiAod2FpdCkge1xuICAgICAgICBkYXRhLmxhYmVsID0gYnRuLnZhbCgpO1xuICAgICAgICBidG4udmFsKHdhaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbmQgZm9ybSBmaWVsZHMsIHZhbGlkYXRlLCBhbmQgc2V0IHZhbHVlIHBhaXJzXG4gICAgZnVuY3Rpb24gZmluZEZpZWxkcyhmb3JtLCByZXN1bHQpIHtcbiAgICAgIHZhciBzdGF0dXMgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xuXG4gICAgICAvLyBUaGUgXCI6aW5wdXRcIiBzZWxlY3RvciBpcyBhIGpRdWVyeSBzaG9ydGN1dCB0byBzZWxlY3QgYWxsIGlucHV0cywgc2VsZWN0cywgdGV4dGFyZWFzXG4gICAgICBmb3JtXG4gICAgICAgIC5maW5kKFxuICAgICAgICAgICc6aW5wdXQ6bm90KFt0eXBlPVwic3VibWl0XCJdKTpub3QoW3R5cGU9XCJmaWxlXCJdKTpub3QoW3R5cGU9XCJidXR0b25cIl0pJ1xuICAgICAgICApXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgIHZhciBmaWVsZCA9ICQoZWwpO1xuICAgICAgICAgIHZhciB0eXBlID0gZmllbGQuYXR0cigndHlwZScpO1xuICAgICAgICAgIHZhciBuYW1lID1cbiAgICAgICAgICAgIGZpZWxkLmF0dHIoJ2RhdGEtbmFtZScpIHx8IGZpZWxkLmF0dHIoJ25hbWUnKSB8fCAnRmllbGQgJyArIChpICsgMSk7XG4gICAgICAgICAgLy8gRW5jb2RpbmcgdGhlIGZpZWxkIG5hbWUgd2lsbCBwcmV2ZW50IGZpZWxkcyB0aGF0IGhhdmUgYnJhY2tldHNcbiAgICAgICAgICAvLyBpbiB0aGVpciBuYW1lIGZyb20gYmVpbmcgcGFyc2VkIGJ5IGBib2R5UGFyc2VyLnVybGVuY29kZWRgIGFzXG4gICAgICAgICAgLy8gb2JqZWN0cyB3aGljaCB3b3VsZCBoYXZlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzIGxpa2Ugbm90IHNhdmluZ1xuICAgICAgICAgIC8vIHRoZSBjb250ZW50IG9mIHRoZSBmaWVsZC5cbiAgICAgICAgICAvLyBodHRwczovL3dlYmZsb3cuYXRsYXNzaWFuLm5ldC9icm93c2UvQ01TQVVUSC0yNDk1XG4gICAgICAgICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBmaWVsZC52YWwoKTtcblxuICAgICAgICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgLy8gUmFkaW8gZ3JvdXAgdmFsdWUgYWxyZWFkeSBwcm9jZXNzZWRcbiAgICAgICAgICAgIGlmIChyZXN1bHRbbmFtZV0gPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdFtuYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgIGZvcm1cbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXRbbmFtZT1cIicgKyBmaWVsZC5hdHRyKCduYW1lJykgKyAnXCJdOmNoZWNrZWQnKVxuICAgICAgICAgICAgICAgIC52YWwoKSB8fCBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICQudHJpbSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIHN0YXR1cyA9IHN0YXR1cyB8fCBnZXRTdGF0dXMoZmllbGQsIHR5cGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEZpbGVVcGxvYWRzKGZvcm0pIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgZm9ybS5maW5kKCc6aW5wdXRbdHlwZT1cImZpbGVcIl0nKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICB2YXIgZmllbGQgPSAkKGVsKTtcbiAgICAgICAgdmFyIG5hbWUgPVxuICAgICAgICAgIGZpZWxkLmF0dHIoJ2RhdGEtbmFtZScpIHx8IGZpZWxkLmF0dHIoJ25hbWUnKSB8fCAnRmlsZSAnICsgKGkgKyAxKTtcbiAgICAgICAgdmFyIHZhbHVlID0gZmllbGQuYXR0cignZGF0YS12YWx1ZScpO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHZhbHVlID0gJC50cmltKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYWNraW5nQ29va2llTmFtZU1hcCA9IHtcbiAgICAgIF9ta3RvX3RyazogJ21hcmtldG8nLFxuICAgICAgLy8gX19oc3RjOiAnaHVic3BvdCcsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbGxlY3RFbnRlcnByaXNlVHJhY2tpbmdDb29raWVzKCkge1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5yZWR1Y2UoZnVuY3Rpb24gKFxuICAgICAgICBhY2MsXG4gICAgICAgIGNvb2tpZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0Q29va2llID0gY29va2llLnNwbGl0KCc9Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBzcGxpdENvb2tpZVswXTtcbiAgICAgICAgaWYgKG5hbWUgaW4gdHJhY2tpbmdDb29raWVOYW1lTWFwKSB7XG4gICAgICAgICAgY29uc3QgbWFwcGVkTmFtZSA9IHRyYWNraW5nQ29va2llTmFtZU1hcFtuYW1lXTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNwbGl0Q29va2llLnNsaWNlKDEpLmpvaW4oJz0nKTtcbiAgICAgICAgICBhY2NbbWFwcGVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICByZXR1cm4gY29va2llcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoZmllbGQsIHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICB2YXIgc3RhdHVzID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgc3RhdHVzID0gJ1Bhc3N3b3JkcyBjYW5ub3QgYmUgc3VibWl0dGVkLic7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkLmF0dHIoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHN0YXR1cyA9ICdQbGVhc2UgZmlsbCBvdXQgdGhlIHJlcXVpcmVkIGZpZWxkOiAnICsgbmFtZTtcbiAgICAgICAgfSBlbHNlIGlmIChlbWFpbEZpZWxkLnRlc3QoZmllbGQuYXR0cigndHlwZScpKSkge1xuICAgICAgICAgIGlmICghZW1haWxWYWx1ZS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgc3RhdHVzID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MgZm9yOiAnICsgbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2ctcmVjYXB0Y2hhLXJlc3BvbnNlJyAmJiAhdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzID0gJ1BsZWFzZSBjb25maXJtIHlvdeKAmXJlIG5vdCBhIHJvYm90Lic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwb3J0ZWRTdWJtaXRXZWJmbG93KGRhdGEpIHtcbiAgICAgIHByZXZlbnREZWZhdWx0KGRhdGEpO1xuICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gU3VibWl0IGZvcm0gdG8gTWFpbENoaW1wXG4gICAgZnVuY3Rpb24gc3VibWl0TWFpbENoaW1wKGRhdGEpIHtcbiAgICAgIHJlc2V0KGRhdGEpO1xuXG4gICAgICB2YXIgZm9ybSA9IGRhdGEuZm9ybTtcbiAgICAgIHZhciBwYXlsb2FkID0ge307XG5cbiAgICAgIC8vIFNraXAgQWpheCBzdWJtaXNzaW9uIGlmIGh0dHAvcyBtaXNtYXRjaCwgZmFsbGJhY2sgdG8gUE9TVCBpbnN0ZWFkXG4gICAgICBpZiAoL15odHRwcy8udGVzdChsb2MuaHJlZikgJiYgIS9eaHR0cHMvLnRlc3QoZGF0YS5hY3Rpb24pKSB7XG4gICAgICAgIGZvcm0uYXR0cignbWV0aG9kJywgJ3Bvc3QnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcmV2ZW50RGVmYXVsdChkYXRhKTtcblxuICAgICAgLy8gRmluZCAmIHBvcHVsYXRlIGFsbCBmaWVsZHNcbiAgICAgIHZhciBzdGF0dXMgPSBmaW5kRmllbGRzKGZvcm0sIHBheWxvYWQpO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gYWxlcnQoc3RhdHVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgICBkaXNhYmxlQnRuKGRhdGEpO1xuXG4gICAgICAvLyBVc2Ugc3BlY2lhbCBmb3JtYXQgZm9yIE1haWxDaGltcCBwYXJhbXNcbiAgICAgIHZhciBmdWxsTmFtZTtcbiAgICAgIF8uZWFjaChwYXlsb2FkLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoZW1haWxGaWVsZC50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkVNQUlMID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eKChmdWxsWyBfLV0/KT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBmdWxsTmFtZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXihmaXJzdFsgXy1dP25hbWUpJC9pLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIHBheWxvYWQuRk5BTUUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL14obGFzdFsgXy1dP25hbWUpJC9pLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIHBheWxvYWQuTE5BTUUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmdWxsTmFtZSAmJiAhcGF5bG9hZC5GTkFNRSkge1xuICAgICAgICBmdWxsTmFtZSA9IGZ1bGxOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIHBheWxvYWQuRk5BTUUgPSBmdWxsTmFtZVswXTtcbiAgICAgICAgcGF5bG9hZC5MTkFNRSA9IHBheWxvYWQuTE5BTUUgfHwgZnVsbE5hbWVbMV07XG4gICAgICB9XG5cbiAgICAgIC8vIFVzZSB0aGUgKHVuZG9jdW1lbnRlZCkgTWFpbENoaW1wIGpzb25wIGFwaVxuICAgICAgdmFyIHVybCA9IGRhdGEuYWN0aW9uLnJlcGxhY2UoJy9wb3N0PycsICcvcG9zdC1qc29uPycpICsgJyZjPT8nO1xuICAgICAgLy8gQWRkIHNwZWNpYWwgcGFyYW0gdG8gcHJldmVudCBib3Qgc2lnbnVwc1xuICAgICAgdmFyIHVzZXJJZCA9IHVybC5pbmRleE9mKCd1PScpICsgMjtcbiAgICAgIHVzZXJJZCA9IHVybC5zdWJzdHJpbmcodXNlcklkLCB1cmwuaW5kZXhPZignJicsIHVzZXJJZCkpO1xuICAgICAgdmFyIGxpc3RJZCA9IHVybC5pbmRleE9mKCdpZD0nKSArIDM7XG4gICAgICBsaXN0SWQgPSB1cmwuc3Vic3RyaW5nKGxpc3RJZCwgdXJsLmluZGV4T2YoJyYnLCBsaXN0SWQpKTtcbiAgICAgIHBheWxvYWRbJ2JfJyArIHVzZXJJZCArICdfJyArIGxpc3RJZF0gPSAnJztcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbiAgICAgIH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgZGF0YS5zdWNjZXNzID0gcmVzcC5yZXN1bHQgPT09ICdzdWNjZXNzJyB8fCAvYWxyZWFkeS8udGVzdChyZXNwLm1zZyk7XG4gICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnTWFpbENoaW1wIGVycm9yOiAnICsgcmVzcC5tc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFmdGVyU3VibWl0KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDb21tb24gY2FsbGJhY2sgd2hpY2ggcnVucyBhZnRlciBhbGwgQWpheCBzdWJtaXNzaW9uc1xuICAgIGZ1bmN0aW9uIGFmdGVyU3VibWl0KGRhdGEpIHtcbiAgICAgIHZhciBmb3JtID0gZGF0YS5mb3JtO1xuICAgICAgdmFyIHJlZGlyZWN0ID0gZGF0YS5yZWRpcmVjdDtcbiAgICAgIHZhciBzdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuXG4gICAgICAvLyBSZWRpcmVjdCB0byBhIHN1Y2Nlc3MgdXJsIGlmIGRlZmluZWRcbiAgICAgIGlmIChzdWNjZXNzICYmIHJlZGlyZWN0KSB7XG4gICAgICAgIFdlYmZsb3cubG9jYXRpb24ocmVkaXJlY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cgb3IgaGlkZSBzdGF0dXMgZGl2c1xuICAgICAgZGF0YS5kb25lLnRvZ2dsZShzdWNjZXNzKTtcbiAgICAgIGRhdGEuZmFpbC50b2dnbGUoIXN1Y2Nlc3MpO1xuXG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICBkYXRhLmRvbmUuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuZmFpbC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICAvLyBIaWRlIGZvcm0gb24gc3VjY2Vzc1xuICAgICAgZm9ybS50b2dnbGUoIXN1Y2Nlc3MpO1xuXG4gICAgICAvLyBSZXNldCBkYXRhIGFuZCBlbmFibGUgc3VibWl0IGJ1dHRvblxuICAgICAgcmVzZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZGF0YSkge1xuICAgICAgZGF0YS5ldnQgJiYgZGF0YS5ldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRhdGEuZXZ0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0RmlsZVVwbG9hZChpLCBmb3JtKSB7XG4gICAgICBpZiAoIWZvcm0uZmlsZVVwbG9hZHMgfHwgIWZvcm0uZmlsZVVwbG9hZHNbaV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsZTtcbiAgICAgIHZhciAkZWwgPSAkKGZvcm0uZmlsZVVwbG9hZHNbaV0pO1xuICAgICAgdmFyICRkZWZhdWx0V3JhcCA9ICRlbC5maW5kKCc+IC53LWZpbGUtdXBsb2FkLWRlZmF1bHQnKTtcbiAgICAgIHZhciAkdXBsb2FkaW5nV3JhcCA9ICRlbC5maW5kKCc+IC53LWZpbGUtdXBsb2FkLXVwbG9hZGluZycpO1xuICAgICAgdmFyICRzdWNjZXNzV3JhcCA9ICRlbC5maW5kKCc+IC53LWZpbGUtdXBsb2FkLXN1Y2Nlc3MnKTtcbiAgICAgIHZhciAkZXJyb3JXcmFwID0gJGVsLmZpbmQoJz4gLnctZmlsZS11cGxvYWQtZXJyb3InKTtcbiAgICAgIHZhciAkaW5wdXQgPSAkZGVmYXVsdFdyYXAuZmluZCgnLnctZmlsZS11cGxvYWQtaW5wdXQnKTtcbiAgICAgIHZhciAkbGFiZWwgPSAkZGVmYXVsdFdyYXAuZmluZCgnLnctZmlsZS11cGxvYWQtbGFiZWwnKTtcbiAgICAgIHZhciAkbGFiZWxDaGlsZHJlbiA9ICRsYWJlbC5jaGlsZHJlbigpO1xuICAgICAgdmFyICRlcnJvck1zZ0VsID0gJGVycm9yV3JhcC5maW5kKCcudy1maWxlLXVwbG9hZC1lcnJvci1tc2cnKTtcbiAgICAgIHZhciAkZmlsZUVsID0gJHN1Y2Nlc3NXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWZpbGUnKTtcbiAgICAgIHZhciAkcmVtb3ZlRWwgPSAkc3VjY2Vzc1dyYXAuZmluZCgnLnctZmlsZS1yZW1vdmUtbGluaycpO1xuICAgICAgdmFyICRmaWxlTmFtZUVsID0gJGZpbGVFbC5maW5kKCcudy1maWxlLXVwbG9hZC1maWxlLW5hbWUnKTtcblxuICAgICAgdmFyIHNpemVFcnJNc2cgPSAkZXJyb3JNc2dFbC5hdHRyKCdkYXRhLXctc2l6ZS1lcnJvcicpO1xuICAgICAgdmFyIHR5cGVFcnJNc2cgPSAkZXJyb3JNc2dFbC5hdHRyKCdkYXRhLXctdHlwZS1lcnJvcicpO1xuICAgICAgdmFyIGdlbmVyaWNFcnJNc2cgPSAkZXJyb3JNc2dFbC5hdHRyKCdkYXRhLXctZ2VuZXJpYy1lcnJvcicpO1xuXG4gICAgICAvLyBBY2Nlc3NpYmxpdHkgZml4ZXNcbiAgICAgIC8vIFRoZSBmaWxlIHVwbG9hZCBJbnB1dCBpcyBub3Qgc3R5bGFibGUgYnkgdGhlIGRlc2lnbmVyLCBzbyB3ZSBhcmVcbiAgICAgIC8vIGdvaW5nIHRvIHByZXRlbmQgdGhlIExhYmVsIGlzIHRoZSBpbnB1dC4gwq9cXF8o44OEKV8vwq9cbiAgICAgIGlmICghaW5BcHApIHtcbiAgICAgICAgJGxhYmVsLm9uKCdjbGljayBrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicgJiYgZS53aGljaCAhPT0gMTMgJiYgZS53aGljaCAhPT0gMzIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJGlucHV0LmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCb3RoIG9mIHRoZXNlIGFyZSBhZGRlZCB0aHJvdWdoIENTU1xuICAgICAgJGxhYmVsLmZpbmQoJy53LWljb24tZmlsZS11cGxvYWQtaWNvbicpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICRyZW1vdmVFbC5maW5kKCcudy1pY29uLWZpbGUtdXBsb2FkLXJlbW92ZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgaWYgKCFpbkFwcCkge1xuICAgICAgICAkcmVtb3ZlRWwub24oJ2NsaWNrIGtleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgaWYgKGUud2hpY2ggIT09IDEzICYmIGUud2hpY2ggIT09IDMyKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRpbnB1dC5yZW1vdmVBdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgJGZpbGVOYW1lRWwuaHRtbCgnJyk7XG4gICAgICAgICAgJGRlZmF1bHRXcmFwLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICAkc3VjY2Vzc1dyYXAudG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgICAkbGFiZWwuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGZpbGUgPSBlLnRhcmdldCAmJiBlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTaG93IHVwbG9hZGluZ1xuICAgICAgICAgICRkZWZhdWx0V3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICRlcnJvcldyYXAudG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgICAkdXBsb2FkaW5nV3JhcC50b2dnbGUodHJ1ZSk7XG4gICAgICAgICAgJHVwbG9hZGluZ1dyYXAuZm9jdXMoKTtcblxuICAgICAgICAgIC8vIFNldCBmaWxlbmFtZVxuICAgICAgICAgICRmaWxlTmFtZUVsLnRleHQoZmlsZS5uYW1lKTtcblxuICAgICAgICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgICAgICAgIGlmICghaXNVcGxvYWRpbmcoKSkge1xuICAgICAgICAgICAgZGlzYWJsZUJ0bihmb3JtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybS5maWxlVXBsb2Fkc1tpXS51cGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgc2lnbkZpbGUoZmlsZSwgYWZ0ZXJTaWduKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0dGluZyBpbnB1dCB3aWR0aCAxcHggYW5kIGhlaWdodCBlcXVhbCBsYWJlbFxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoZSBicm93c2VyIHJlcXVpcmVkIGVycm9yIHdpbGwgc2hvdyB1cFxuICAgICAgICB2YXIgaGVpZ2h0ID0gJGxhYmVsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICRpbnB1dC5oZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgJGlucHV0LndpZHRoKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGlucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxhYmVsLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxhYmVsQ2hpbGRyZW4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwYXJzZUVycm9yKGVycikge1xuICAgICAgICB2YXIgZXJyb3JNc2cgPSBlcnIucmVzcG9uc2VKU09OICYmIGVyci5yZXNwb25zZUpTT04ubXNnO1xuICAgICAgICB2YXIgdXNlckVycm9yID0gZ2VuZXJpY0Vyck1zZztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiBlcnJvck1zZyA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICBlcnJvck1zZy5pbmRleE9mKCdJbnZhbGlkRmlsZVR5cGVFcnJvcicpID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHVzZXJFcnJvciA9IHR5cGVFcnJNc2c7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZW9mIGVycm9yTXNnID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIGVycm9yTXNnLmluZGV4T2YoJ01heEZpbGVTaXplRXJyb3InKSA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICB1c2VyRXJyb3IgPSBzaXplRXJyTXNnO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVycm9yTXNnRWwudGV4dCh1c2VyRXJyb3IpO1xuXG4gICAgICAgICRpbnB1dC5yZW1vdmVBdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICRpbnB1dC52YWwoJycpO1xuICAgICAgICAkdXBsb2FkaW5nV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAkZGVmYXVsdFdyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAkZXJyb3JXcmFwLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgJGVycm9yV3JhcC5mb2N1cygpO1xuXG4gICAgICAgIGZvcm0uZmlsZVVwbG9hZHNbaV0udXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNVcGxvYWRpbmcoKSkge1xuICAgICAgICAgIHJlc2V0KGZvcm0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFmdGVyU2lnbihlcnIsIGRhdGEpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBwYXJzZUVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsZU5hbWUgPSBkYXRhLmZpbGVOYW1lO1xuICAgICAgICB2YXIgcG9zdERhdGEgPSBkYXRhLnBvc3REYXRhO1xuICAgICAgICB2YXIgZmlsZUlkID0gZGF0YS5maWxlSWQ7XG4gICAgICAgIHZhciBzM1VybCA9IGRhdGEuczNVcmw7XG4gICAgICAgICRpbnB1dC5hdHRyKCdkYXRhLXZhbHVlJywgZmlsZUlkKTtcblxuICAgICAgICB1cGxvYWRTMyhzM1VybCwgcG9zdERhdGEsIGZpbGUsIGZpbGVOYW1lLCBhZnRlclVwbG9hZCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFmdGVyVXBsb2FkKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgc3VjY2Vzc1xuICAgICAgICAkdXBsb2FkaW5nV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAkc3VjY2Vzc1dyYXAuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgICAkc3VjY2Vzc1dyYXAuZm9jdXMoKTtcblxuICAgICAgICBmb3JtLmZpbGVVcGxvYWRzW2ldLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoIWlzVXBsb2FkaW5nKCkpIHtcbiAgICAgICAgICByZXNldChmb3JtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc1VwbG9hZGluZygpIHtcbiAgICAgICAgdmFyIHVwbG9hZHMgPSAoZm9ybS5maWxlVXBsb2FkcyAmJiBmb3JtLmZpbGVVcGxvYWRzLnRvQXJyYXkoKSkgfHwgW107XG4gICAgICAgIHJldHVybiB1cGxvYWRzLnNvbWUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnVwbG9hZGluZztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2lnbkZpbGUoZmlsZSwgY2IpIHtcbiAgICAgIHZhciBwYXlsb2FkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgfSk7XG5cbiAgICAgICQuYWpheCh7dHlwZTogJ0dFVCcsIHVybDogYCR7c2lnbkZpbGVVcmx9PyR7cGF5bG9hZH1gLCBjcm9zc0RvbWFpbjogdHJ1ZX0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGxvYWRTMyh1cmwsIGRhdGEsIGZpbGUsIGZpbGVOYW1lLCBjYikge1xuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3IgKHZhciBrIGluIGRhdGEpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGssIGRhdGFba10pO1xuICAgICAgfVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZU5hbWUpO1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNiKG51bGwpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiBhcGk7XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwicmVuZGVyVHVybnN0aWxlQ2FwdGNoYSIsInNpdGVLZXkiLCJmb3JtRWxlbWVudCIsImNiIiwiZXJyb3JDYWxsYmFjayIsImNhcHRjaGFDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInR1cm5zdGlsZSIsInJlbmRlciIsInNpdGVrZXkiLCJjYWxsYmFjayIsInRva2VuIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJfIiwiVFVSTlNUSUxFX0xPQURFRF9FVkVOVCIsImFwaSIsIiRkb2MiLCIkZm9ybXMiLCJsb2MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJldHJvIiwiWERvbWFpblJlcXVlc3QiLCJhdG9iIiwibmFtZXNwYWNlIiwic2l0ZUlkIiwiZW1haWxGaWVsZCIsImVtYWlsVmFsdWUiLCJhbGVydCIsImluQXBwIiwiZW52IiwibGlzdGVuaW5nIiwiZm9ybVVybCIsInNpZ25GaWxlVXJsIiwidHVybnN0aWxlU2l0ZUtleSIsImZpbmQiLCJkYXRhIiwidHVybnN0aWxlU2NyaXB0IiwiY2hpbXBSZWdleCIsImRpc2Nvbm5lY3RlZCIsImRlYm91bmNlIiwicmVhZHkiLCJkZXNpZ24iLCJwcmV2aWV3IiwibG9hZFR1cm5zdGlsZVNjcmlwdCIsImluaXQiLCJhZGRMaXN0ZW5lcnMiLCJhdHRyIiwiV0VCRkxPV19GT1JNX0FQSV9IT1NUIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJXRUJGTE9XX0ZPUk1fT0xESUVfSE9TVCIsImxlbmd0aCIsImVhY2giLCJidWlsZCIsInNyYyIsImhlYWQiLCJvbmxvYWQiLCJ0cmlnZ2VyIiwiaSIsImVsIiwiJGVsIiwiZm9ybSIsInJlc2V0Iiwid3JhcCIsImNsb3Nlc3QiLCJkb25lIiwiZmFpbCIsImZpbGVVcGxvYWRzIiwiaiIsImluaXRGaWxlVXBsb2FkIiwid2FpdCIsImRpc2FibGVCdG4iLCJvbiIsInR1cm5zdGlsZVRva2VuIiwiZm9ybU5hbWUiLCJhY3Rpb24iLCJoYW5kbGVyIiwicmVkaXJlY3QiLCJ0ZXN0Iiwic3VibWl0TWFpbENoaW1wIiwiV0VCRkxPV19FWFBPUlRfTU9ERSIsImV4cG9ydGVkU3VibWl0V2ViZmxvdyIsImhvc3RlZFN1Ym1pdEhhbmRsZXIiLCJkZWZhdWx0IiwiY29sbGVjdEVudGVycHJpc2VUcmFja2luZ0Nvb2tpZXMiLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRGaWVsZHMiLCJmaW5kRmlsZVVwbG9hZHMiLCJhZnRlclN1Ym1pdCIsImV2dCIsIkNIRUNLQk9YX0NMQVNTX05BTUUiLCJSQURJT19JTlBVVF9DTEFTU19OQU1FIiwiQ0hFQ0tFRF9DTEFTUyIsIkZPQ1VTRURfQ0xBU1MiLCJGT0NVU0VEX1ZJU0lCTEVfQ0xBU1MiLCJmb2N1c1Zpc2libGVTZWxlY3RvcnMiLCJDVVNUT01fQ09OVFJPTFMiLCJ0YXJnZXQiLCJzaWJsaW5ncyIsInRvZ2dsZUNsYXNzIiwibmFtZSIsIm1hcCIsInJlbW92ZUNsYXNzIiwiJHRhcmdldCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwiY29udHJvbFR5cGUiLCJjdXN0b21Db250cm9sQ2xhc3NOYW1lIiwiZmlsdGVyIiwiYnRuIiwic3VjY2VzcyIsInByb3AiLCJCb29sZWFuIiwibGFiZWwiLCJ2YWwiLCJyZXN1bHQiLCJzdGF0dXMiLCJmaWVsZCIsInR5cGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsImlzIiwidHJpbSIsImdldFN0YXR1cyIsInRyYWNraW5nQ29va2llTmFtZU1hcCIsIl9ta3RvX3RyayIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsInJlZHVjZSIsImFjYyIsInNwbGl0Q29va2llIiwibWFwcGVkTmFtZSIsInNsaWNlIiwiam9pbiIsInBheWxvYWQiLCJocmVmIiwiZnVsbE5hbWUiLCJrZXkiLCJFTUFJTCIsIkZOQU1FIiwiTE5BTUUiLCJ1cmwiLCJ1c2VySWQiLCJzdWJzdHJpbmciLCJsaXN0SWQiLCJhamF4IiwiZGF0YVR5cGUiLCJyZXNwIiwibXNnIiwiY29uc29sZSIsImluZm8iLCJ0b2dnbGUiLCJmb2N1cyIsImZpbGUiLCIkZGVmYXVsdFdyYXAiLCIkdXBsb2FkaW5nV3JhcCIsIiRzdWNjZXNzV3JhcCIsIiRlcnJvcldyYXAiLCIkaW5wdXQiLCIkbGFiZWwiLCIkbGFiZWxDaGlsZHJlbiIsImNoaWxkcmVuIiwiJGVycm9yTXNnRWwiLCIkZmlsZUVsIiwiJHJlbW92ZUVsIiwiJGZpbGVOYW1lRWwiLCJzaXplRXJyTXNnIiwidHlwZUVyck1zZyIsImdlbmVyaWNFcnJNc2ciLCJlIiwid2hpY2giLCJjbGljayIsInJlbW92ZUF0dHIiLCJodG1sIiwiZmlsZXMiLCJ0ZXh0IiwiaXNVcGxvYWRpbmciLCJ1cGxvYWRpbmciLCJzaWduRmlsZSIsImFmdGVyU2lnbiIsImhlaWdodCIsIm91dGVySGVpZ2h0Iiwid2lkdGgiLCJwYXJzZUVycm9yIiwiZXJyIiwiZXJyb3JNc2ciLCJyZXNwb25zZUpTT04iLCJ1c2VyRXJyb3IiLCJmaWxlTmFtZSIsInBvc3REYXRhIiwiZmlsZUlkIiwiczNVcmwiLCJ1cGxvYWRTMyIsImFmdGVyVXBsb2FkIiwiY3NzIiwidXBsb2FkcyIsInRvQXJyYXkiLCJzb21lIiwiVVJMU2VhcmNoUGFyYW1zIiwic2l6ZSIsImNyb3NzRG9tYWluIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImsiLCJhcHBlbmQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU9BLEdBRUE7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCLE1BQU1DLHlCQUF5QixDQUM3QkMsU0FDQUMsYUFDQUMsSUFDQUMsY0FBYyx1QkFBdUI7O0lBRXJDLE1BQU1DLG1CQUFtQkMsU0FBU0MsYUFBYSxDQUFDO0lBQ2hETCxZQUFZTSxXQUFXLENBQUNIO0lBRXhCLHFCQUFxQjtJQUNyQkksVUFBVUMsTUFBTSxDQUFDTCxrQkFBa0I7UUFDakNNLFNBQVNWO1FBQ1RXLFVBQVUsU0FBVUMsS0FBSztZQUN2QlYsR0FBR1U7UUFDTDtRQUNBLGtCQUFrQjtZQUNoQlQ7UUFDRjtJQUNGO0FBQ0Y7QUFFQU4sUUFBUWdCLE1BQU0sQ0FDWixTQUNDQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsQ0FBQyxFQUFFQyxDQUFDO0lBQzlCLE1BQU1DLHlCQUF5QjtJQUMvQixJQUFJQyxNQUFNLENBQUM7SUFFWCxJQUFJQyxPQUFPSixFQUFFWDtJQUNiLElBQUlnQjtJQUNKLElBQUlDLE1BQU1DLE9BQU9DLFFBQVE7SUFDekIsSUFBSUMs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

}),

}]);