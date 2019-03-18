/**
 * Build a fitness tracker app using two React components.
 * You will need to loop through the data from *./FitnessTrackerActivities.json*.
 * I suggest you open this file and take a look at it.
 * You cannot have any errors or warmings in the console when you render the app
 *
 * Here is the static HTML that you will work with inside React components.
 * You will need to convert this to JSX.
 * ```html
 * <main class="FitnessTracker">
 *   <!-- This part is repeated for each fitness activity (each run, hike or cycling trip tracked) -->
 *   <div class="FitnessActivity">
 *     <div class="FitnessActivity-startDate">2018-09-15 07:10:05</div>
 *     <div class="FitnessActivity-activity">Running</div>
 *     <div class="FitnessActivity-miles">3.1 miles</div>
 *     <div class="FitnessActivity-time">29:35</div>
 *   </div>
 * </main>
 * ```
 */

import React from "react";
import "./FitnessTracker.css";
// You will need to loop through "activities" data in your React components below
import activities from "./FitnessTrackerActivities.json";

function FitnessActivity(props) {
  return <div>
        {props.items.map((obj,idx) => {
        console.log(obj)
        return (
          <div key={idx+""+(Math.random() * 1)} className="FitnessActivity">
            <div key={idx+""+obj.id+""+(Math.random() * 1)} className="FitnessActivity-starDate">{obj.startDate}</div>
            <div key={idx+""+obj.id+""+(Math.random() * 1)} className="FitnessActivity-activity">{obj.activity}</div>
            <div key={idx+""+obj.id+""+(Math.random() * 1)} className="FitnessActivity-miles">{obj.miles +" miles"}</div>
            <div key={idx+""+obj.id+""+(Math.random() * 1)} className="FitnessActivity-time">{obj.time}</div>
          </div>
        )
    })}
  </div>
}

function FitnessTracker(){
  return <FitnessActivity items={activities}/>;
}



export default FitnessTracker;

