/*global Playground*/

(function() {
  "use strict";

  Playground.VideoService = Conductor.Oasis.Service.extend({
    initialize: function (port) {
      this.sandbox.videoPort = port;
    }
  });

  Playground.SurveyService = Conductor.Oasis.Service.extend({
    initialize: function (port) {
      this.sandbox.surveyPort = port;
    }
  });

  Playground.SlotMachine = Conductor.Oasis.Service.extend({
    initialize: function (port) {
      this.sandbox.slotMachinePort = port;
    }
  });

  Playground.AdPlaylistService = Conductor.Oasis.Service.extend({
    initialize: function (port) {
      this.sandbox.adPlaylistPort = port;
    },

    events: {
      surveyTaken: function (data) {
        this.sandbox.slotMachinePort.send('addCoin');
      }
    }
  });


  $.extend(Playground, {
    initializeServices: function () {
      Conductor.services.video = Playground.VideoService;
      Conductor.services.survey = Playground.SurveyService;
      Conductor.services.slotMachine = Playground.SlotMachine;
    }
  });
})();
