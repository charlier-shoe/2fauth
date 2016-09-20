/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojrouter',
   'ojs/ojbutton', 'ojs/ojmodel', 'ojs/ojdatacollection-common',
   'ojs/ojinputtext', 'ojs/ojtable', 'ojs/ojnavigationlist'],
   function(oj, ko, $) {

   var DeptDataTable,
       EmpDataTable;

   /**
    * DataTable object for static content.
    * The contract is to provide 2 methods: getColumns and getDataSource.
    */
   function DataTable(columnsArray, dataArray, idAttribute) {
      // Private variable part of the closure
      var dataSource = new oj.ArrayTableDataSource(dataArray, {idAttribute: idAttribute}),
          recordStates = {};

      return {
         initialize: function() {
            dataSource.fetch({'silent' : true}).then(function(result) {
               for (var i = 0; i < result.data.length; i++) {
                  var row = result.data[i];
                  recordStates[row.id.toString()] = new oj.RouterState(row.id.toString(),
                                                                      { value: row } );
               }
            });
         },

         getColumns: function() {
            return columnsArray;
         },

         getDataSource: function() {
            return dataSource;
         },

         getRecordStates: function() {
            return recordStates;
         }
      };
   };

   function createDataTables() {
      DeptDataTable = new DataTable([
         {headerText: 'Department Id', field: 'id'},
         {headerText: 'Department Name', field: 'name'},
         {headerText: 'Location', field: 'loc'}
      ], [
         {id: 10, name: 'Accounting', loc: 'New York'},
         {id: 20, name: 'Research', loc: 'Dallas'},
         {id: 30, name: 'Sales', loc: 'Chicago'},
         {id: 40, name: 'Operations', loc: 'Boston'}
      ], 'id');

      EmpDataTable =  new DataTable([
         {headerText: 'Employee Id', field: 'id'},
         {headerText: 'Employee Name', field: 'name'},
         {headerText: 'Job', field: 'job'},
         {headerText: 'Salary', field: 'sal'},
         {headerText: 'Dept', field: 'deptno'}
      ], [
         {id:7369, name: 'Smith', job: 'Clerk', sal: 800, deptno: 20},
         {id:7499, name: 'Allen', job: 'Salesman', sal: 1600, deptno: 30},
         {id:7521, name: 'Ward', job: 'Salesman', sal: 1250, deptno: 30},
         {id:7566, name: 'Jones', job: 'Manager', sal: 2975, deptno: 20},
         {id:7654, name: 'Martin', job: 'Salesman', sal: 1250, deptno: 30},
         {id:7698, name: 'Blake', job: 'Manager', sal: 2850, deptno: 30},
         {id:7782, name: 'Clark', job: 'Manager', sal: 2450, deptno: 10},
         {id:7788, name: 'Scott', job: 'Analyst', sal: 3000, deptno: 20},
         {id:7839, name: 'King', job: 'President', sal: 5000, deptno: 10}
      ], 'id');

      DeptDataTable.initialize();
      EmpDataTable.initialize();
   };

   /**
    * The view model for the tables page.
    */
   var viewModel = {
      router: undefined,

      initialize: function(params) {
         // Only creates the table child router the first time this module is initialized
         if (this.router) {
            return;
         }

         // Retrieve parentRouter from ojModule parameter
         var parentRouter = params.valueAccessor().params['ojRouter']['parentRouter'];

         /**
          * Create a new nested router.
          */
         this.router = parentRouter.createChildRouter('table')
            .configure({
               'dept': { label: 'Department Table', value: DeptDataTable },
               'emp':  { label: 'Employee Table',   value: EmpDataTable }
            });

         // The observable used to display the current table.
         this.table = this.router.currentValue;

         /**
          * Create a new router nested in the router to manage the state of
          * the record.
          */
         var table = this.table;
         this.recordRouter = this.router.createChildRouter('id').
            // Uses a callback to get State from id instead of a dictionary of states
            configure(function(stateId) {
               var state;

               if (stateId && table()) {
                  var data = table().getRecordStates();
                  if (data) {
                     state = data[stateId];
                  }
               }
               return state;
            });

         oj.Router.sync();
      },

      selectHandler: function(event, ui) {
         if ('menu' === event.target.id && event.originalEvent) {
            // Invoke go() with the selected item.
            viewModel.router.go(ui.key);
         }
      },

      // The observable used to display the current record. Computes the record data
      // from the state of the recordRouter.
      record: ko.pureComputed(function() {
         var newRecordValue = null;
         if (viewModel) {
            newRecordValue = viewModel.recordRouter.currentValue();
         }
         // The object returned is an oj.Row
         return newRecordValue;
      }),

      // The observable used to change the template between table and record view.
      // Uses the recordRouter state.
      displayMode: ko.pureComputed(function() {
         return viewModel.recordRouter.currentState() ? 'record-template' : 'table-template';
      }),

      // Callback used by the template to enable the active row listener on
      // the new table. See afterRender def in template in tablesContent.html
      afterTemplate: function() {
         if (viewModel.displayMode() === 'table-template') {
            $('#dataGrid').on('ojbeforecurrentrow', viewModel.currentRowListener);
         }
      },

      // Listener for table click on row
      currentRowListener: function (event, ui) {
         viewModel.recordRouter.go(ui.currentRow.rowKey.toString());
      }
   };

   createDataTables();

   return viewModel;
});


