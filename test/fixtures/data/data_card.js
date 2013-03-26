Conductor.card({
  activate: function(data) {
    ok(data.red === 'light', "red came through");
    ok(data.green === 'light', "green came through");
    ok(data.one === 23, "one came through");
  },

  updateData: function(data) {
    ok(data.marco === 'polo', "marco polo came through");
    start();
  }
});