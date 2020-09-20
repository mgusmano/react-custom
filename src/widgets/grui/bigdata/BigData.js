import React, { useEffect } from 'react';
import axios from "axios";
//import { useGlobalState } from '../globalstate/GlobalStateProvider'
import { SenchaGrid } from "@sencha/sencha-grid";
import './BigData.css'
import './BigDataData'
import './BigDataModel';
import './BigDataStore';

const BigData = (props) => {
  //title:Big Data Grid//title:
  //width:1200//width:
  //height:800//height:

  // useEffect(() => {
  //   console.log('useEffect')
  // }, []);

  const rowBodyTpl = data => (
    <div>
      <img src={data.avatar} height="100px" style={{float:'left', margin:'0 10px 5px 0'}}/>
      <p>{formatDate( data.dob)}</p>
    </div>
  )

  const formatDate = (date) => {
    return Ext.util.Format.date(date, "d/m/Y")
  }

  const onVerify = (btn) => {
    var cell = btn.up(),
        rec = cell.getRecord();

    rec.set('verified', true);
    alert('Verify ' + rec.get('forename') + ' ' + rec.get('surname'));
  }

  // const onVerify = (button) => {
  //   console.log('here')
  //   console.log(button)
  //   //e.stopPropagation();
  //   let cell = button.up('widgetcell'),
  //       record = cell.getRecord();
  //   record.set('verified', !record.get('verified'));
  // }

  const onVerifyAll = (cell) => {
    let row = cell.up('gridrow'),
        group = row.getGroup(),
        grid = cell.up('grid'),
        store = grid.store,
        count;

    if (group) {
      count = group.length;
    } else {
      count = store.getCount();
    }


    //var txt;
    var r = confirm('Are you sure you want to verify all ' + count + ' items?');
    if (r == true) {
      // Don't want to grid to update on each change:
      store.suspendEvent('update');

      (group || store).each(function (rec) {
        rec.set('verified', true);
      });

      store.resumeEvent('update');

      // Now update all the things
      grid.refresh();
    } else {
      //txt = "You pressed Cancel!";
    }


    // Ext.Msg.confirm('Verify All',
    //   'Are you sure you want to verify all ' + count + ' items?',
    //   answer => {
    //     if (answer === 'yes') {
    //         // Don't want to grid to update on each change:
    //         store.suspendEvent('update');

    //         (group || store).each(function (rec) {
    //           rec.set('verified', true);
    //         });

    //         store.resumeEvent('update');

    //         // Now update all the things
    //         grid.refresh();
    //     }
    //   }
    // );
  }

  return (
    <div style={{display:'flex',height:'100%',overflow:'auto',flexDirection:'column'}}>
      <div className='ticker' style={{flex:'1',border:'1px solid lightgray' }}>
        <SenchaGrid
          className='bigdata'
          height='100%'

          title="Big Data Grid"
          grouped
          rowNumbers={true}
          plugins={{
            grideditable: true,
            gridviewoptions: true,
            summaryrow: true,
            rowexpander: true,
            //gridexporter: true,
            rowoperations: true
          }}
          groupFooter={{
            xtype: 'gridsummaryrow'
          }}
          store={{type: 'bigdata'}}
          viewModel = {Ext.create('Ext.app.ViewModel',{
            formulas: {
              ratingGroup: function(get) {
                var age = get('record.averageRating');
                if (age < 4) {
                  return 0;
                }
                if (age < 5) {
                  return 1;
                }
                if (age < 6) {
                  return 2;
                }
                return 3;
              }
            }
          })}
          // controller = {
          //   Ext.create('Ext.app.ViewController', {
          //     init: function(view) {
          //       // var store = view.getStore();
          //       // if (store.isLoaded() && store.getCount()) {
          //       //     this.startTicker(store);
          //       // }
          //       // view.getStore().on('load', 'onStoreLoad', this);
          //     },
          //   })
          // }
          itemConfig={{
            // ViewModel is required to use bind property
            viewModel: {

            },
              body: {
                tpl: rowBodyTpl
              }
          }}
          columns= {[
            {
              xtype: 'textcolumn',
              text: 'Id',
              flex: 1,
              dataIndex: 'employeeNo',
              minWidth: '100',
              exportStyle: {
                format: 'General Number',
                alignment: {
                  horizontal: 'Right'
                }
              }
            },
            {
              text: 'Name',
              dataIndex: 'fullName',
              minWidth: 150,
              sorter: {
                sorterFn: 'nameSorter' // set controller
              }
            },
            {
              xtype: 'checkcolumn',
              headerCheckbox: true,
              dataIndex: 'verified',
              text: 'Verified'
            },

            {
              text: 'Ratings',
              columns: [{
                  text: 'Avg',
                  xtype: 'numbercolumn',
                  dataIndex: 'averageRating',
                  // We can average even calculated fields here:
                  summary: 'average',
                  width: 75,
                  cell: {
                      cls: 'big-data-ratings-cell',
                      bind: {
                          bodyCls: '{ratingGroup:pick("under4","under5","under6","over6")}'
                      }
                  },
                  exportStyle: {
                      format: 'Standard',
                      alignment: {
                          horizontal: 'Right'
                      }
                  }
              }, {
                  text: 'All',
                  dataIndex: 'rating',
                  ignoreExport: true,
                  cell: {
                      xtype: 'widgetcell',
                      forceWidth: true,
                      widget: {
                          xtype: 'sparklineline'
                      }
                  }
              }]
            },

            // {
            //   text: 'Date of Birth',
            //   dataIndex: 'dob',
            //   width: 115,
            //   align: 'right'
            // },

            {
              text: 'Date of Birth',
              dataIndex: 'dob',
              editable: true,
              align: 'right',
              //xtype: 'datecolumn',
              width: 115,
              // you can define an export style for a column
              // you can set alignment, format etc
              exportStyle: [{
                  // no type key is defined here which means that this is the default style
                  // that will be used by all exporters
                  format: 'Medium Date',
                  alignment: {
                      horizontal: 'Right'
                  }
              }, {
                  // the type key means that this style will only be used by the csv exporter
                  // and for all others the default one, defined above, will be used
                  type: 'csv',
                  format: 'Short Date'
              }]
            },

            {
              text: '',
              width: 100,
              ignoreExport: true,
              align: 'center',
              cell: {
                  xtype: 'widgetcell',
                  widget: {
                      xtype: 'button',
                      ui: 'action',
                      text: 'Verify',
                      bind: {
                          tooltip: 'Verify {record.fullName}'
                      },
                      // listeners: {
                      //   'click': 'onVerify'
                      // }
                      //onClick: {onVerify}
                      handler: onVerify
                      // handler: function() {
                      //   console.log('click')
                      // }
                  }
              },
              // Summary rows do not create widgetcells unless set as
              // the summaryCell
              summaryCell: {
                  xtype: 'widgetcell',
                  widget: {
                      xtype: 'button',
                      ui: 'action',
                      text: 'All',
                      handler: onVerifyAll
                  }
              }
            },

            {
              text: 'Join Date',
              dataIndex: 'joinDate',
              editable: true,
              xtype: 'datecolumn',
              width: 115,
              exportStyle: {
                  format: 'Medium Date',
                  alignment: {
                      horizontal: 'Right'
                  }
              }
          }, {
              text: 'Notice Period',
              dataIndex: 'noticePeriod',
              editable: true
          }, {
              text: 'Email',
              dataIndex: 'email',
              editable: true,
              editor: {
                  xtype: 'emailfield'
              },
              width: 250
          },



            {
              text:'Absences',
              columns: [
                {
                  text: "Illness",
                  dataIndex: "sickDays",
                  align: 'center',
                  summary: 'sum',

                },
                {
                  text: "Holidays",
                  dataIndex: "holidayDays",
                  align: 'center',
                  summary: 'sum',

                },
                {
                  text: "Holiday Allowance",
                  dataIndex: "holidayAllowance",
                  align: 'center',
                  summary: 'sum',
                  summaryFormatter: 'number("0.00")',
                  formatter: 'number("0.00")',
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  )
}

export default BigData