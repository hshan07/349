'use strict';

var ACTIVITY_DATA_ADDED_EVENT = 'ACTIVITY_DATA_ADDED_EVENT';
var ACTIVITY_DATA_REMOVED_EVENT = 'ACTIVITY_DATA_REMOVED_EVENT';

var GRAPH_SELECTED_EVENT = 'GRAPH_SELECTED_EVENT';

var TAB_SELECTED_EVENT = 'TAB_SELECTED_EVENT';

/**
 * Represents a single activity data point.
 * @param activityType The type of activity. A string
 * @param healthMetricsDict A dictionary of different health metrics. The key is the
 * health data type (e.g., energy level, stress level, etc.), while the value is
 * the value the user gave to that activity.
 * @param activityDurationInMinutes A number
 * @constructor
 */
var ActivityData = function(activityType, healthMetricsDict, activityDurationInMinutes) {
    this.activityType = activityType;
    this.activityDataDict = healthMetricsDict;
    this.activityDurationInMinutes = activityDurationInMinutes
};

/**
 * An object which tracks all of the data
 * @constructor
 */
var ActivityCollectionModel = function() {
    // Maintains a list of listeners.
    this.listeners = [];
    this.datapoints = [];
    this.laststatus = false;
};

// _ is the Underscore library
// This extends the JavaScript prototype with additional methods
// This is a common idiom for defining JavaScript classes
_.extend(ActivityCollectionModel.prototype, {

    /**
     * Add a listener to the listeners we track
     * @param listener The listener is a callback function with the following signature:
     * (eventType, eventTime, activityData) where eventType is a string indicating
     * the event type (one of ACTIVITY_DATA_ADDED_EVENT or ACTIVITY_DATA_REMOVED_EVENT), and
     * activityData the ActivityData added or removed.
     */
    addListener: function(listener) {
        this.listeners.push(listener);
    },

    /**
     * Should remove the given listener.
     * @param listener
     */
    removeListener: function(listener) {
        var index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    },

    /**
     * Should add the given data point, and alert listeners that a new data point has
     * been added.
     * @param activityDataPoint
     */
    addActivityDataPoint: function(activityDataPoint) {
        var l2 = activityDataPoint.activityDataDict[0];
        var l3 = activityDataPoint.activityDataDict[1];
        var l4 = activityDataPoint.activityDataDict[2];
        var l5 = activityDataPoint.activityDurationInMinutes;
        if((l2==parseInt(l2))&&(l2>=1)&&(l3>=1)&&(l4>=1)&&(l5>=1)&&(l2<=5)&&(l3<=5)&&(l4<=5)&&(l3==parseInt(l3))&&(l4==parseInt(l4))&&(l5==parseInt(l5))) {
        this.datapoints.push(activityDataPoint);
        this.laststatus=true;
        _.each(
            this.listeners,
            function(listener_fn) {
                var date = Date(Date.now());
                listener_fn(ACTIVITY_DATA_ADDED_EVENT,date,activityDataPoint);
            }
        );
        } else {
            this.laststatus=false;
        }
    },

    /**
     * Should remove the given data point (if it exists), and alert listeners that
     * it was removed. It should NOT alert listeners if that data point did not
     * exist in the data store
     * @param activityDataPoint
     */
    removeActivityDataPoint: function(activityDataPoint) {
        var index = this.datapoints.indexOf(activityDataPoint);
        if (index !== -1) {
            _.each(
            this.listeners,
            function(listener_fn) {
                var date = Date.now()
                listener_fn(ACTIVITY_DATA_REMOVED_EVENT,date,activityDataPoint)
            }
        );
            this.datapoints.splice(index, 1);
        }
    },

    /**
     * Should return an array of all activity data points
     */
    getActivityDataPoints: function() {
        return this.datapoints;
    }
});

/**
 * The GraphModel tracks what the currently selected graph is.
 * You should structure your architecture so that when the user chooses
 * a new graph, the event handling code for choosing that graph merely
 * sets the new graph here, in the GraphModel. The graph handling code
 * should then update to show the selected graph, along with any components
 * necessary to configure that graph.
 * @constructor
 */
var GraphModel = function() {
    // Maintains a list of listeners.
    this.listeners = [];
    this.availablegraph = ['table','plot'];
    this.currentSelectedGraph = '';
};

_.extend(GraphModel.prototype, {

    /**
     * Add a listener to the listeners we track
     * @param listener The listener is a callback function with the following signature:
     * (eventType, eventTime, eventData) where eventType is a string indicating
     * the event type (specifically, GRAPH_SELECTED_EVENT),
     * and eventData indicates the name of the new graph.
     */
    addListener: function(listener) {
        this.listeners.push(listener);
    },

    /**
     * Should remove the given listener.
     * @param listener
     */
    removeListener: function(listener) {
        var index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    },

    /**
     * Returns a list of graphs (strings) that can be selected by the user
     */
    getAvailableGraphNames: function() {
        return this.availablegraph;
    },

    /**
     * Should return the name of the currently selected graph. There should
     * *always* be one graph that is currently available.
     */
    getNameOfCurrentlySelectedGraph: function() {
        return this.currentSelectedGraph;
    },

    /**
     * Changes the currently selected graph to the graph name given. Should
     * broadcast an event to all listeners that the graph changed.
     * @param graphName
     */
    selectGraph: function(graphName) {
        if(graphName!==this.currentSelectedGraph) {
            this.currentSelectedGraph = graphName;
            _.each(this.listeners, function(listener_fn) {
                listener_fn(GRAPH_SELECTED_EVENT,Date.now(),graphName);
            } )
        }
    }
});


/**
 * The TabModel maintains the current selected tab.
 */
var TabModel = function() {
    this.listeners = [];
    this.availableTabName = [
        'InputTab',
        'AnalysisTab'
    ]
    this.currentTab = this.availableTabName[0];
    this.notify = function(eventType, eventData) {
        if (eventData !== this.currentTab) {
            _.each(this.listeners, function(listener) {
               listener(eventType, Date.now(), eventData); 
            });
        }
    }
}

_.extend(TabModel.prototype, {
    addListener: function(listener) {
        this.listeners.push(listener);
    }, 
    removeListener: function(listener) {
        var index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    },
    getNameOfCurrentlySelectedTab: function() {
        return this.currentTab;
    },
    selectTab: function(tabName) {
        this.notify(TAB_SELECTED_EVENT, tabName);
        this.currentTab = tabName;
    }
});




/**
 * Will generate a number of random data points and add them to the model provided.
 * If numDataPointsToGenerate is not provided, will generate and add 100 data points.
 * @param activityModel The model to add data to
 * @param numDataPointsToGenerate The number of points to generate.
 *
 * Example:
 *
 * generateFakeData(new ActivityCollectionModel(), 10);
 */
function generateFakeData(activityModel, numDataPointsToGenerate) {
    var fakeActivities = [];
    _.times(
        5,
        function() {
            fakeActivities.push("Activity " + (fakeActivities.length + 1));
        }
    );
    numDataPointsToGenerate = (!_.isNumber(numDataPointsToGenerate) || numDataPointsToGenerate < 0) ? 100 : numDataPointsToGenerate;
    _.times(
        numDataPointsToGenerate,
        function() {
            var activityDataPoint = new ActivityData(
                fakeActivities[_.random(fakeActivities.length - 1)], {
                    energyLevel: _.random(10),
                    stressLevel: _.random(10),
                    happinessLevel: _.random(10)
                },
                _.random(60)
            );
            activityModel.addActivityDataPoint(activityDataPoint);
        }
    );
}