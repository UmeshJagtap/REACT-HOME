import React from 'react';
// import test_image from './0ae56.jpeg';
import location_logo from './icons8-location-48.png';

export default function tjCards(props) {
  // console.log(props);
  // console.log(props.title);
  return (
    // <>
    //   <section className="event-title">
    //     <p>
    //       {props.id}. Experience @ {props.title}
    //     </p>
    //   </section>
    //   <section className="event">
    //     <div>
    //       {/* <img src={test_image} alt="Test Image" /> */}
    //       {/* <img
    //         src="https://th.bing.com/th/id/R.a6b535ccf5ba0a12de48bfc1edd75f8e?rik=s%2b7eEOiiIHmy0Q&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f343202-landscape-nature.jpg&ehk=Qo5%2bvQJS33LvXkoVX%2fjxqNjgO0eY2dQg3HVk8otjvnc%3d&risl=1&pid=ImgRaw&r=0"
    //         alt="URL"
    //       /> */}
    //       <img src={props.imageURL} alt="Prop Pic" />
    //     </div>

    //     <div>
    //       <div>
    //         <p>{props.description}</p>
    //       </div>

    //       <div className="event-dates">
    //         <p>Start Date : {props.startDate} </p>
    //         <p>End Date : {props.endDate} </p>
    //       </div>

    //       <div>
    //         <p>Location : {props.location}</p>
    //         <p>
    //           <a href={props.googleMapsUrl}> Reach here </a>
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //   <br></br>
    // </>
    <>
      <div className="event">
        <div>
          <img src={props.imageURL} alt="view"></img>
        </div>

        <div>
          <div className="location">
            <img
              Style="height: 1.2rem; width: 1.2rem;"
              src={location_logo}
              alt="location-logo"
            />
            <p Style="font-size: 0.75rem;">{props.location}</p>
            <a Style="font-size: 0.75rem;" href={props.googleMapsUrl}>
              <p Style="margin-left: 1rem;">View on Google Maps</p>
            </a>
          </div>
          <div>
            <p Style="font-size: 1.1rem; font-weight: bold;">{props.title}</p>
            <p Style="font-size: 0.8rem; font-weight: bold;">
              {props.startDate} - {props.endDate}
            </p>
            <p Style="font-size: 0.75rem;">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
