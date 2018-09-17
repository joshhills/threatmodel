let formSchema = {
    "display": "form",
    "components": [
        {
            "label": "Title",
            "allowMultipleMasks": false,
            "showWordCount": false,
            "showCharCount": false,
            "tableView": true,
            "type": "textfield",
            "input": true,
            "key": "title",
            "validate": {
                "required": true,
                "unique": false,
                "customMessage": "",
                "json": ""
            },
            "widget": {
                "type": ""
            }
        },
        {
            "columns": [
                {
                    "components": [
                        {
                            "label": "Panel",
                            "title": "Meta",
                            "mask": false,
                            "tableView": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel",
                            "components": [
                                {
                                    "label": "Reporter Email",
                                    "tableView": true,
                                    "type": "email",
                                    "input": true,
                                    "key": "reporterEmail",
                                    "validate": {
                                        "required": true,
                                        "unique": false,
                                        "customMessage": "",
                                        "json": ""
                                    }
                                },
                                {
                                    "label": "First Reported",
                                    "format": "yyyy-MM-dd",
                                    "mask": false,
                                    "tableView": true,
                                    "type": "datetime",
                                    "input": true,
                                    "key": "firstReported",
                                    "suffix": true,
                                    "widget": {
                                        "type": "calendar",
                                        "displayInTimezone": "viewer",
                                        "language": "en",
                                        "useLocaleSettings": false,
                                        "allowInput": true,
                                        "mode": "single",
                                        "enableTime": false,
                                        "noCalendar": false,
                                        "format": "yyyy-MM-dd",
                                        "defaultDate": "",
                                        "hourIncrement": 1,
                                        "minuteIncrement": 1,
                                        "time_24hr": false,
                                        "minDate": null,
                                        "maxDate": null
                                    },
                                    "validate": {
                                        "required": true,
                                        "unique": false,
                                        "customMessage": "",
                                        "json": ""
                                    }
                                }
                            ]
                        },
                        {
                            "label": "Panel",
                            "title": "Summary",
                            "mask": false,
                            "tableView": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel",
                            "components": [
                                {
                                    "label": "Priority",
                                    "mask": false,
                                    "tableView": true,
                                    "type": "select",
                                    "input": true,
                                    "key": "priority",
                                    "defaultValue": "",
                                    "data": {
                                        "values": [
                                            {
                                                "label": "None",
                                                "value": "none"
                                            },
                                            {
                                                "label": "Low",
                                                "value": "low"
                                            },
                                            {
                                                "label": "Medium",
                                                "value": "medium"
                                            },
                                            {
                                                "label": "High",
                                                "value": "high"
                                            },
                                            {
                                                "label": "Critical",
                                                "value": "critical"
                                            }
                                        ]
                                    },
                                    "validate": {
                                        "required": true,
                                        "unique": false,
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "valueProperty": "value"
                                },
                                {
                                    "label": "Attack Description",
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "type": "textarea",
                                    "input": true,
                                    "key": "attackDescription",
                                    "widget": {
                                        "type": ""
                                    },
                                    "validate": {
                                        "required": true,
                                        "unique": false,
                                        "customMessage": "",
                                        "json": ""
                                    }
                                },
                                {
                                    "label": "Risk Type",
                                    "mask": false,
                                    "tableView": true,
                                    "type": "select",
                                    "input": true,
                                    "key": "riskType",
                                    "defaultValue": "",
                                    "data": {
                                        "values": [
                                            {
                                                "label": "White",
                                                "value": "white"
                                            },
                                            {
                                                "label": "Grey",
                                                "value": "grey"
                                            },
                                            {
                                                "label": "Black",
                                                "value": "black"
                                            }
                                        ]
                                    },
                                    "valueProperty": "value"
                                },
                                {
                                    "label": "Entrypoint",
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "type": "textfield",
                                    "input": true,
                                    "key": "entrypoint",
                                    "widget": {
                                        "type": ""
                                    }
                                }
                            ]
                        }
                    ],
                    "width": 4,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "type": "column",
                    "input": true,
                    "key": "",
                    "tableView": true,
                    "label": ""
                },
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "label": "Impact",
                                    "key": "impact",
                                    "components": [
                                        {
                                            "label": "Resources",
                                            "tooltip": "What are you trying to protect?",
                                            "multiple": true,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "resources",
                                            "tab": 0,
                                            "widget": {
                                                "type": ""
                                            }
                                        },
                                        {
                                            "addAnotherPosition": "bottom",
                                            "label": "Threats",
                                            "disableAddingRemovingRows": false,
                                            "defaultOpen": false,
                                            "addAnother": "",
                                            "mask": false,
                                            "tableView": true,
                                            "type": "datagrid",
                                            "input": true,
                                            "key": "threats",
                                            "components": [
                                                {
                                                    "label": "STRIDE Category",
                                                    "mask": false,
                                                    "tableView": true,
                                                    "type": "select",
                                                    "input": true,
                                                    "key": "stride",
                                                    "defaultValue": "",
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Spoofing",
                                                                "value": "spoofing"
                                                            },
                                                            {
                                                                "label": "Tampering",
                                                                "value": "tampering"
                                                            },
                                                            {
                                                                "label": "Repudiation",
                                                                "value": "repudiation"
                                                            },
                                                            {
                                                                "label": "Information Disclosure",
                                                                "value": "informationDisclosure"
                                                            },
                                                            {
                                                                "label": "Denial Of Service",
                                                                "value": "denialOfService"
                                                            },
                                                            {
                                                                "label": "Elevation Of Privelege",
                                                                "value": "elevationOfPrivelege"
                                                            }
                                                        ]
                                                    },
                                                    "row": "0-0",
                                                    "valueProperty": "value"
                                                },
                                                {
                                                    "label": "Description",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "description",
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "row": "0-1"
                                                }
                                            ],
                                            "tab": 0
                                        },
                                        {
                                            "questions": [
                                                {
                                                    "label": "How likely is the attacker to be able to carry out the attack?",
                                                    "value": "howLikelyIsTheAttackerToBeAbleToCarryOutTheAttack"
                                                }
                                            ],
                                            "values": [
                                                {
                                                    "label": "Very Unlikely",
                                                    "value": "veryUnlikely"
                                                },
                                                {
                                                    "label": "Unlikely",
                                                    "value": "unlikely"
                                                },
                                                {
                                                    "label": "Neither",
                                                    "value": "neither"
                                                },
                                                {
                                                    "label": "Likely",
                                                    "value": "likely"
                                                },
                                                {
                                                    "label": "Very Likely",
                                                    "value": "veryLikely"
                                                },
                                                {
                                                    "label": "Unsure",
                                                    "value": "unsure"
                                                }
                                            ],
                                            "label": "Capability",
                                            "mask": false,
                                            "tableView": true,
                                            "type": "survey",
                                            "input": true,
                                            "key": "capability",
                                            "customClass": "table-responsive"
                                        },
                                        {
                                            "questions": [
                                                {
                                                    "label": "How frequently is the attacker able to carry out the attack?",
                                                    "value": "howFrequentlyIsTheAttackerAbleToCarryOutTheAttack"
                                                }
                                            ],
                                            "values": [
                                            {
                                                    "label": "Never",
                                                    "value": "never"
                                                },
                                                {
                                                    "label": "Rarely",
                                                    "value": "rarely"
                                                },
                                                {
                                                    "label": "Sometimes",
                                                    "value": "sometimes"
                                                },
                                                {
                                                    "label": "Often",
                                                    "value": "often"
                                                },
                                                {
                                                    "label": "Always",
                                                    "value": "always"
                                                },
                                                {
                                                    "label": "Unsure",
                                                    "value": "unsure"
                                                }
                                            ],
                                            "label": "Frequency",
                                            "mask": false,
                                            "tableView": true,
                                            "type": "survey",
                                            "input": true,
                                            "key": "frequency",
                                            "properties": {},
                                            "tags": [],
                                            "customClass": "table-responsive"
                                        },
                                        {
                                            "addAnotherPosition": "bottom",
                                            "label": "Loss Magnitude",
                                            "disableAddingRemovingRows": false,
                                            "defaultOpen": false,
                                            "addAnother": "",
                                            "mask": false,
                                            "tableView": true,
                                            "type": "datagrid",
                                            "input": true,
                                            "key": "lossMagnitude",
                                            "components": [
                                                {
                                                    "label": "Form",
                                                    "mask": false,
                                                    "tableView": true,
                                                    "type": "select",
                                                    "input": true,
                                                    "key": "form",
                                                    "defaultValue": "",
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Productivity",
                                                                "value": "productivity"
                                                            },
                                                            {
                                                                "label": "Response",
                                                                "value": "response"
                                                            },
                                                            {
                                                                "label": "Replacement",
                                                                "value": "replacement"
                                                            },
                                                            {
                                                                "label": "Fines",
                                                                "value": "fines"
                                                            },
                                                            {
                                                                "label": "Competitive Advantage",
                                                                "value": "competitiveAdvantage"
                                                            },
                                                            {
                                                                "label": "Reputation",
                                                                "value": "reputation"
                                                            },
                                                            {
                                                                "label": "Other",
                                                                "value": "other"
                                                            }
                                                        ]
                                                    },
                                                    "row": "0-0",
                                                    "valueProperty": "value"
                                                },
                                                {
                                                    "label": "Extent",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "extent",
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "row": "0-1"
                                                }
                                            ],
                                            "tab": 0
                                        }
                                    ]
                                },
                                {
                                    "label": "Probability",
                                    "key": "probability",
                                    "components": [
                                        {
                                            "label": "Vulnerabilities",
                                            "tooltip": "What problems exist currently?",
                                            "multiple": true,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "vulnerabilities",
                                            "tab": 1,
                                            "widget": {
                                                "type": ""
                                            }
                                        },
                                        {
                                            "label": "Mitigations",
                                            "tooltip": "What already exists to help prevent the problems?",
                                            "multiple": true,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "mitigations",
                                            "tab": 1,
                                            "widget": {
                                                "type": ""
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "Control Strategy",
                                    "key": "controlStrategy",
                                    "components": [
                                        {
                                            "addAnotherPosition": "bottom",
                                            "label": "Strategies",
                                            "disableAddingRemovingRows": false,
                                            "defaultOpen": false,
                                            "addAnother": "",
                                            "mask": false,
                                            "tableView": true,
                                            "type": "datagrid",
                                            "input": true,
                                            "key": "strategies",
                                            "components": [
                                                {
                                                    "label": "Control",
                                                    "mask": false,
                                                    "tableView": true,
                                                    "type": "select",
                                                    "input": true,
                                                    "key": "control",
                                                    "defaultValue": "",
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Avoid",
                                                                "value": "avoid"
                                                            },
                                                            {
                                                                "label": "Transfer",
                                                                "value": "transfer"
                                                            },
                                                            {
                                                                "label": "Mitigate",
                                                                "value": "mitigate"
                                                            },
                                                            {
                                                                "label": "Accept",
                                                                "value": "accept"
                                                            }
                                                        ]
                                                    },
                                                    "row": "0-0",
                                                    "valueProperty": "value"
                                                },
                                                {
                                                    "label": "Description",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "description2",
                                                    "widget": {
                                                        "type": ""
                                                    }
                                                }
                                            ],
                                            "tab": 2
                                        }
                                    ]
                                },
                                {
                                    "label": "Examples",
                                    "key": "examples",
                                    "components": [
                                    {
                                                    "label": "Hypothetical Example",
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "type": "textarea",
                                                    "input": true,
                                                    "key": "hypotheticalExample",
                                                    "widget": {
                                                        "type": ""
                                                    }
                                                },
                                                {
                                                    "addAnotherPosition": "bottom",
                                                    "label": "Real-World Examples",
                                                    "disableAddingRemovingRows": false,
                                                    "defaultOpen": false,
                                                    "addAnother": "",
                                                    "multiple": true,
                                                    "mask": false,
                                                    "tableView": true,
                                                    "type": "datagrid",
                                                    "input": true,
                                                    "key": "realWorldExamples",
                                                    "components": [
                                                        {
                                                            "label": "Reference URL",
                                                            "allowMultipleMasks": false,
                                                            "showWordCount": false,
                                                            "showCharCount": false,
                                                            "tableView": true,
                                                            "type": "url",
                                                            "input": true,
                                                            "key": "referenceUrl",
                                                            "widget": {
                                                                "type": ""
                                                            },
                                                            "row": "0-0"
                                                        },
                                                        {
                                                            "label": "Description",
                                                            "allowMultipleMasks": false,
                                                            "showWordCount": false,
                                                            "showCharCount": false,
                                                            "tableView": true,
                                                            "type": "textfield",
                                                            "input": true,
                                                            "key": "description3",
                                                            "defaultValue": "",
                                                            "validate": {
                                                                "unique": false,
                                                                "customMessage": "",
                                                                "json": ""
                                                            },
                                                            "inputFormat": "plain",
                                                            "properties": {},
                                                            "tags": [],
                                                            "widget": {
                                                                "type": ""
                                                            },
                                                            "row": "0-1"
                                                        }
                                                    ]
                                                }
                                    ]
                                }
                            ],
                            "label": "Groups",
                            "hideLabel": true,
                            "mask": false,
                            "tableView": true,
                            "type": "tabs",
                            "input": false,
                            "key": "groups"
                        }
                    ],
                    "width": 8,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "type": "column",
                    "input": true,
                    "key": "",
                    "tableView": true,
                    "label": ""
                }
            ],
            "label": "Columns",
            "hideLabel": true,
            "mask": false,
            "tableView": false,
            "type": "columns",
            "input": false,
            "key": "columns"
        },
        {
            "type": "button",
            "label": "Generate",
            "key": "submit",
            "customClass": "btn-block",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }
    ]
};

window.onload = function() {
    Formio.icons = 'fontawesome';
    Formio.createForm(document.getElementById('formio'), formSchema).then(function(form) {
        form.on('submit', function(submission) {
            console.log(submission);
            outputForm(renderForm(submission['data']));
        });
        return true;
    });
};

function renderForm(submission) {
    var rendered = "";

    // For each field, convert it markdown and add it to the string.
    rendered += formatTitle(1, submission['title']);

    rendered += formatTitle(2, 'Meta');

    if(submission['reporterEmail']) {
        rendered += formatTitle(3, 'Reporter');
        rendered += '[' + submission['reporterEmail'] + '](' + submission['reporterEmail'] + ')\n\n';
    }

    if(submission['firstReported']) {
        rendered += formatTitle(3, 'First Reported');
        rendered += new Date(submission['firstReported']).toDateString() + '\n\n';
    }

    rendered += formatTitle(2, 'Summary');

    if(submission['priority']) {
        rendered += formatTitle(3, 'Priority');
        rendered += upperCaseFirstLetter(submission['priority']) + '\n\n';
    }

    if(submission['attackDescription']) {
        rendered += formatTitle(3, 'Attack Description');
        rendered += submission['attackDescription'] + '\n\n';
    }

    if(submission['riskType']) {
        rendered += formatTitle(3, 'Risk Type');
        rendered += upperCaseFirstLetter(submission['riskType']) + '\n\n';
    }

    if(submission['entrypoint']) {
        rendered += formatTitle(3, 'Entry Point');
        rendered += submission['entrypoint'] + '\n\n';
    }

    rendered += formatTitle(2, 'Impact');

    if(submission['resources'] && submission['resources'].length > 0 && submission['resources'][0].length > 0) {
        rendered += formatTitle(3, 'Resources');
        for(let resource of submission['resources']) {
            rendered += "- " + resource + '\n';
        }
        rendered += '\n\n';
    }

    if(submission['threats'] && submission['threats'].length > 0 && submission['threats'][0]['stride'].length > 0) {
        rendered += formatTitle(3, 'Threats');
        for(let threat of submission['threats']) {
            rendered += formatTitle(4, camelCaseToNormalSentence(threat['stride']));
            rendered += threat['description'] + '\n\n';
        }
        rendered += '\n\n';
    }

    if(submission['capability']['howLikelyIsTheAttackerToBeAbleToCarryOutTheAttack']) {
        rendered += formatTitle(3, 'Capability');
        rendered += camelCaseToNormalSentence(submission['capability']['howLikelyIsTheAttackerToBeAbleToCarryOutTheAttack']) + '\n\n';
    }

    if(submission['frequency']['howFrequentlyIsTheAttackerAbleToCarryOutTheAttack']) {
        rendered += formatTitle(3, 'Frequency');
        rendered += camelCaseToNormalSentence(submission['frequency']['howFrequentlyIsTheAttackerAbleToCarryOutTheAttack']) + '\n\n';
    }

    if(submission['lossMagnitude'] && submission['lossMagnitude'].length > 0 && submission['lossMagnitude'][0]['form'].length > 0) {
        rendered += formatTitle(3, 'Loss Magnitude');
        for(let form of submission['lossMagnitude']) {
            rendered += formatTitle(4, upperCaseFirstLetter(form['form']));
            rendered += form['extent'] + '\n\n';
        }
        rendered += '\n\n';
    }

    if((submission['vulnerabilities'] && submission['vulnerabilities'].length) || (submission['mitigations'] && submission['mitigations'].length > 0)) {
        rendered += formatTitle(2, 'Probability');
    }

    if(submission['vulnerabilities'] && submission['vulnerabilities'].length > 0 && submission['vulnerabilities'][0].length > 0) {
        rendered += formatTitle(3, 'Vulnerabilities');
        for(let vulnerability of submission['vulnerabilities']) {
            rendered += "- " + vulnerability + '\n';
        }
        rendered += '\n\n';
    }

    if(submission['mitigations'] && submission['mitigations'].length > 0 && submission['mitigations'][0].length > 0) {
        rendered += formatTitle(3, 'Mitigations');
        for(let mitigation of submission['mitigations']) {
            rendered += "- " + mitigation + '\n';
        }
        rendered += '\n\n';
    }

    if(submission['strategies'] && submission['strategies'].length > 0) {
        rendered += formatTitle(2, 'Control Strategy');
    }

    if(submission['strategies'] && submission['strategies'].length > 0 && submission['strategies'][0]['control'].length > 0) {
        rendered += formatTitle(3, 'Strategies');
        for(let control of submission['strategies']) {
            rendered += formatTitle(4, upperCaseFirstLetter(control['control']));
            rendered += control['description2'] + '\n\n';
        }
        rendered += '\n\n';
    }

    if(submission['hypotheticalExample'] || (submission['realWorldExamples'] && submission['realWorldExamples'].length)) {
        rendered += formatTitle(2, 'Examples');
    }

    if(submission['hypotheticalExample']) {
        rendered += formatTitle(3, 'Hypothetical Example');
        rendered += submission['hypotheticalExample'] + '\n\n';
    }

    if(submission['realWorldExamples'] && submission['realWorldExamples'].length > 0 && (submission['realWorldExamples'][0]['description3'].length > 0 || submission['realWorldExamples'][0]['referenceUrl'].length > 0)) {
        rendered += formatTitle(3, 'Real-World Examples');
        for(let realWorldExample of submission['realWorldExamples']) {
            rendered += '- [' + realWorldExample['description3'] + '](' + realWorldExample['referenceUrl'] + ')\n\n';
        }
        rendered += '\n\n';
    }

    return rendered;
}

function outputForm(rendered) {
    document.getElementById("output").value = rendered;
}

function formatTitle(level, text) {
    if(text == null || text == undefined) {
        return "";
    }
    var titleString = "";
    for(var i = 0; i < level; i++) {
        titleString += "#";
    }
    return titleString += " " + text + "\n\n";
}

function upperCaseFirstLetter(text) {
    return text.replace(/^\w/, c => c.toUpperCase());
}

function camelCaseToNormalSentence(text) {
    return upperCaseFirstLetter(text.replace(/([A-Z])/g, ' $1'));
}