import React, { useEffect } from 'react';
import axios from "axios";
//import { useGlobalState } from '../globalstate/GlobalStateProvider'
import { SenchaGrid } from "@sencha/sencha-grid";
import './Ticker.css'
import './CompaniesData'
import './CompaniesModel'
import './CompaniesStore'

const Ticker = (props) => {

  useEffect(() => {
    console.log('useEffect')
  }, []);

  return (
    <div style={{display:'flex',height:'100%',overflow:'auto',flexDirection:'column'}}>
      <div className='ticker' style={{flex:'1',border:'1px solid lightgray' }}>
        <SenchaGrid
          height='100%'
          store={{type: 'companies'}}
          viewModel = {Ext.create('Ext.app.ViewModel',{
            data: {}
          })}
          controller = {
            Ext.create('Ext.app.ViewController', {
              init: function(view) {
                var store = view.getStore();
                if (store.isLoaded() && store.getCount()) {
                    this.startTicker(store);
                }
                view.getStore().on('load', 'onStoreLoad', this);
              },
              onStoreLoad: function(store) {
                  this.startTicker(store);
              },
              startTicker: function(store) {
                var count, i, j, rec;
                if (this.timer) {
                  return;
                }
                store.removeAt(15, 70);
                count = store.getCount();
                for (i = 0; i < count; i++) {
                  //console.log('tick')
                    rec = store.getAt(i);
                    rec.beginEdit();
                    for (j = 0; j < 10; j++) {
                        rec.addPriceTick();
                    }
                    rec.endEdit(true);
                }
                this.timer = Ext.interval(function() {
                  //console.log('tick')
                  //console.log(store)
                    rec = store.getAt(Ext.Number.randomInt(0, store.getCount() - 1));
                    rec.addPriceTick();
                }, 1000);
              }
            })
          }
          itemConfig= {{
            viewModel: {
                formulas: {
                    cellCls: {
                        get: function(get) {
                            return get('flashBackground') ? Ext.util.Format.sign(get('record.change'), 'ticker-cell-loss', 'ticker-cell-gain') : '';
                        }
                    }
                }
            }
          }}
          columns= {[
            {
              xtype: 'textcolumn',
              text: 'Company',
              flex: 1,
              sortable: true,
              dataIndex: 'name'
            },
            {
              xtype: 'textcolumn',
              text: 'Price',
              width: 95,
              align: 'right',
              cell: {
                  bind: '{record.price:usMoney}'
              },
              sortable: false
            },
            {
              text: 'Trend',
              width: 200,
              cell: {
                  bind: '{record.trend}',
                  xtype: 'widgetcell',
                  forceWidth: true,
                  widget: {
                      xtype: 'sparklineline',
                      tipTpl: 'Price: {y:number("0.00")}'
                  }
              },
              sortable: false
            },
            {
              xtype: 'textcolumn',
              text: 'Change',
              width: 90,
              align: 'right',
              cell: {
                  bind: {
                      value: '{record.change:number(".00")}',
                      cls: '{cellCls}',
                      bodyCls: '{record.change:sign("ticker-body-loss", "ticker-body-gain")}'
                  }
              },
              sortable: false
            },
            {
              xtype: 'textcolumn',
              text: '% Change',
              width: 100,
              align: 'right',
              cell: {
                  bind: {
                      value: '{record.pctChange:number(".00")}',
                      cls: '{cellCls}',
                      bodyCls: '{record.pctChange:sign("ticker-body-loss", "ticker-body-gain")}'
                  }
              },
              sortable: false
            },
            {
              xtype: 'textcolumn',
              text: 'Last Updated',
              hidden: true,
              width: 115,
              cell: {
                  bind: '{record.lastChange:date("m/d/Y H:i:s")}'
              },
              sortable: false
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Ticker