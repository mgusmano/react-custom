Ext.define('KitchenSink.store.BigData', {
  extend: 'Ext.data.Store',
  alias: 'store.bigdata',
  model: 'BigDataGridModel',
  autoLoad: true,
  pageSize: 0,
  groupField: 'department',
  proxy: {
    type: 'ajax',
    url: '/KitchenSink/BigData'
  }
});