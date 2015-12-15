(function() {
    'use strict';
    // attach the factories and service to the [starter.services] module in angular
    angular.module('starter.services')
        .service('ReportBuilderSvc', reportBuilderService);
    
	function reportBuilderService() {
        var self = this;
        
        self.generateReport = _generateReport;            
        function _generateReport() {
            //create an array of progress for the (6) categories presented
            var completions = 
                [(Math.random() * 100).toFixed(1),
                (Math.random() * 100).toFixed(1),
                (Math.random() * 100).toFixed(1),
                (Math.random() * 100).toFixed(1),
                (Math.random() * 100).toFixed(1),
                (Math.random() * 100).toFixed(1)];
            //use this array for each row bar, and return the document declaration object
            // plz see the pdfMake.org site for examples of document definitions
			return { content: [
                { text: 'Categorical CoreCheck Analysis',
                    style: 'subheader',
                    margin: [ 0, 12, 0, 0]
                },
                {canvas: [{type: 'line',
                    x1: 0, y1: 0,
                    x2: 500, y2:0
                    }],
                    margin: [ 0, 4, 0, 12]
                },
                { table: {
                        headers: 1,
                        widths: [ 400, 75],
                        body: [
                            [{ text: 'Core Check Category', style:'tableHeader'}, 
                                { text: 'Completion', style:'tableHeader'}], 
                            [['English Requirement', { canvas: [{
                                type: 'rect',
                                x: -2,
                                y: -16,
                                w: 4 * completions[0],
                                h: 20,
                                color: '#09b'}]}
                                ], { text: completions[0] + '%', alignment: 'center' }],
                            [['Math Requirement', { canvas: [{
                                type: 'rect',
                                x: -2,
                                y: -16,
                                w: 4 * completions[1],
                                h: 20,
                                color: '#069'}]}
                                ], { text: completions[1] + '%', alignment: 'center' }],
                            [['Science Requirement', { canvas: [{
                                type: 'rect',
                                x: -2,
                                y: -16,
                                w: 4 * completions[2],
                                h: 20,
                                color: '#09b'}]}
                                ], { text: completions[2] + '%', alignment: 'center' }],
                            [['Additional Core Requirement', { canvas: [{
                                type: 'rect',
                                x: -2,
                                y: -16,
                                w: 4 * completions[3],
                                h: 20,
                                color: '#069'}]}
                                ], { text: completions[3] + '%', alignment: 'center' }],
                            [['Social Science Requirement', { canvas: [{
                                type: 'rect',
                                x: -2,
                                y: -16,
                                w: 4 * completions[4],
                                h: 20,
                                color: '#09b'}]}
                                ], { text: completions[4] + '%', alignment: 'center' }],
                            [['Elective Requirement', { canvas: [{
                                type: 'rect',
                                x: -2,
                                y: -16,
                                w: 4 * completions[5],
                                h: 20,
                                color: '#069'}]}
                                ], { text: completions[5] + '%', alignment: 'center' }]
                        ]
                    }, 
                        pageBreak: 'after'
                    } ] };
		};
    }
})();