/**
 * @author Uriana
 */

google.load("gdata", "2.x");

function init() {
    // init the Google data JS client library with an error handler
    google.gdata.client.init(handleGDError);
    // load the code.google.com developer calendar
    loadCalendarByAddress('v8eub1k9jpjub6k0g536srd3ao%40group.calendar.google.com');
}

/**
 * Loads the Google Developers Event Calendar
 */
function loadDeveloperCalendar() {
    loadCalendarByAddress('developer-calendar@google.com');
}

/**
 * Adds a leading zero to a single-digit number.  Used for displaying dates.
 */
function padNumber(num) {
    if (num <= 9) {
        return "0" + num;
    }
    return num;
}

/**
 * Determines the full calendarUrl based upon the calendarAddress
 * argument and calls loadCalendar with the calendarUrl value.
 *
 * @param {string} calendarAddress is the email-style address for the calendar
 */
function loadCalendarByAddress(calendarAddress) {
    var calendarUrl = 'https://www.google.com/calendar/feeds/' + calendarAddress + '/public/full';
    loadCalendar(calendarUrl);
}

/**
 * Uses Google data JS client library to retrieve a calendar feed from the specified
 * URL.  The feed is controlled by several query parameters and a callback
 * function is called to process the feed results.
 *
 * @param {string} calendarUrl is the URL for a public calendar feed
 */
function loadCalendar(calendarUrl) {
    var service = new google.gdata.calendar.CalendarService('gdata-js-client-samples-simple');
    var query = new google.gdata.calendar.CalendarEventQuery(calendarUrl);
    query.setOrderBy('starttime');
    query.setSortOrder('ascending');
    // Create and set the minimum and maximum start time for the date query
    var tomorrow = new Date();
    var today = new Date();
    today.setTime(today.getTime() - today.getHours() * 3600 * 1000 - today.getMinutes() * 60 * 1000 - today.getMilliseconds() - 5 * 3600 * 1000);
    tomorrow.setTime(today.getTime() + 1 * (1000 * 3600 * 24));
    var startMin = google.gdata.DateTime.fromIso8601(today.toISOString().substring(0, today.toISOString().length - 1));
    var startMax = google.gdata.DateTime.fromIso8601(tomorrow.toISOString().substring(0, tomorrow.toISOString().length - 1));
    query.setMinimumStartTime(startMin);
    query.setMaximumStartTime(startMax);

    query.setSingleEvents(true);
    query.setMaxResults(3);
    console.log(query);
    service.getEventsFeed(query, listEvents, handleGDError);
}

/**
 * Callback function for the Google data JS client library to call when an error
 * occurs during the retrieval of the feed.  Details available depend partly
 * on the web browser, but this shows a few basic examples. In the case of
 * a privileged environment using ClientLogin authentication, there may also
 * be an e.type attribute in some cases.
 *
 * @param {Error} e is an instance of an Error
 */
function handleGDError(e) {
    document.getElementById('jsSourceFinal').setAttribute('style', 'display:none');
    if ( e instanceof Error) {
        /* alert with the error line number, file and message */
        alert('Error at line ' + e.lineNumber + ' in ' + e.fileName + '\n' + 'Message: ' + e.message);
        /* if available, output HTTP error code and status text */
        if (e.cause) {
            var status = e.cause.status;
            var statusText = e.cause.statusText;
            alert('Root cause: HTTP error ' + status + ' with status text of: ' + statusText);
        }
    } else {
        alert(e.toString());
    }
}

/**
 * Callback function for the Google data JS client library to call with a feed
 * of events retrieved.
 *
 * Creates an unordered list of events in a human-readable form.  This list of
 * events is added into a div called 'events'.  The title for the calendar is
 * placed in a div called 'calendarTitle'
 *
 * @param {json} feedRoot is the root of the feed, containing all entries
 */
function listEvents(feedRoot) {
    var entries = feedRoot.feed.getEntries();
    var eventDiv = document.getElementById('events');
    if (eventDiv.childNodes.length > 0) {
        eventDiv.removeChild(eventDiv.childNodes[0]);
    }
    /* create a new unordered list */
    var ul = document.createElement('ul');
    /* set the calendarTitle div with the name of the calendar */
    /* loop through each event in the feed */
    var len = entries.length;
    for (var i = 0; i < len; i++) {
        var entry = entries[i];
        var title = entry.getTitle().getText();
        var location = entry.getLocations()[0].valueString;
        var startDateTime = null;
        var endDateTime = null;
        var startJSDate = null;
        var endJSDate = null;
        var times = entry.getTimes();
        if (times.length > 0) {
            startDateTime = times[0].getStartTime();
            endDateTime = times[0].getEndTime();
            startJSDate = startDateTime.getDate();
            endJSDate = endDateTime.getDate();
        }
        var entryLinkHref = null;
        if (entry.getHtmlLink() != null) {
            entryLinkHref = entry.getHtmlLink().getHref();
        }
        var date = (startJSDate.getMonth() + 1) + "/" + startJSDate.getDate();
        document.getElementById('date').innerHTML = "Today is " + date + "<BR>You have following events";
        var dateString = null;
        if (!startDateTime.isDateOnly()) {
            dateString = " " + startJSDate.getHours() + ":" + padNumber(startJSDate.getMinutes()) + ' - ' 
            + endJSDate.getHours() + ":" + padNumber(endJSDate.getMinutes());
        }
        var li = document.createElement('li');

        /* if we have a link to the event, create an 'a' element */
        if (entryLinkHref != null) {
                    var locationDate = document.createElement('div');
            entryLink = document.createElement('a');
            entryLink.setAttribute('href', entryLinkHref);
            entryLink.appendChild(document.createTextNode(title));
            locationDate.appendChild(entryLink);
            locationDate.innerHTML += ' - ' + location +'<br>'+ dateString;
        } else {
        	locationDate.innerHTML = title + ' - ' + location +'<br>'+ dateString;
        }
            li.appendChild(locationDate);

        
            li.onclick = function() { 
              selectEvent(li.firstChild.firstChild.innerHTML) ;
            };
                    /* append the list item onto the unordered list */
        ul.appendChild(li);
    }
    eventDiv.appendChild(ul);
}

google.setOnLoadCallback(init);
//-->
