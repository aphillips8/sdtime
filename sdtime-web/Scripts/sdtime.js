﻿/// <reference path="knockout-2.1.0.debug.js" />


function Ticket(summary, time, active) {
    var self = this;
    self.summary = summary;
    self.time = ko.observable(time);
    self.active = ko.observable(active);

    this.record = function () {
        self.active(true);
        self.timerreference = setInterval(self.tick, 1000);
    }

    this.stop = function () {
        self.active(false);
        clearInterval(self.timerreference);
        
    }

    this.showRecord = ko.computed(function () {
        return !self.active();
    });

    this.showStop = ko.computed(function () {
        return self.active();
    });


    this.tick = function () {
        
        self.time(self.time() + 1);
    }
}

function TicketsViewModel() {
    tickets = ko.observableArray([
        new Ticket("Resolve Deadlock Issue", 0, false),
        new Ticket("Change the spelling of Owner Name", 0, false)
    ]);
}

ko.applyBindings(new TicketsViewModel());