import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Wimg from '../images/wimg.png';

const workouts = [
  { id: 1, title: "Arms Exercise", rating: 4.3 },
  { id: 2, title: "Arms Exercise", rating: 4.3 },
  { id: 3, title: "Arms Exercise", rating: 4.3 },
  { id: 4, title: "Arms Exercise", rating: 4.3 },
  { id: 5, title: "Arms Exercise", rating: 4.3 },
  { id: 6, title: "Arms Exercise", rating: 4.3 },
];

const WorkoutSection = () => {
  return (
    <div className="bg-[#F2E7F5] p-6 rounded-lg font-poppins mg">
        <style>
            {`
            @media (max-width: 1315px) and (min-width: 1050px){
            .gd{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            }
            }
            @media (max-width: 980px) and (min-width: 650px){
            .gd{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            }
            }
            @media (max-width: 650px) and (min-width: 450px){
            .gid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            }
            }
            @media (max-width: 450px){
            .gidd{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-items: center;
            }
            }
            @media (max-width: 420px){
            .ft{
            font-size: 20px;
            text-align: center;
            }
            }
            @media (max-width: 345px){
            .mg{
            margin-top: 20px
            }
            }
            `}
        </style>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-medium mb-6 ft ">
          <span className="text-yellow-500 mr-2 bg-[#F44336] rounded-full p-2 pt-1"><FontAwesomeIcon icon={faStar} /></span>
          Most Rated Workouts
        </h2>

        {/* Workout Cards */}
        <div className="flex justify-center items-center gap-5 gd gid gidd">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="rounded-lg shadow-lg bg-[#DC97EC] flex flex-col items-center"
              style={{ width: "170px", height: "180px" }} 
            >
              {/* Workout Image */}
              <img
                src={Wimg} 
                alt={workout.title}
                className="w-full h-[110px] object-cover rounded-t-lg"
              />

              {/* Workout Details */}
              <div className="mt-4 text-center">
                <h3 className="text-sm font-medium">{workout.title}</h3>
                <div className="mt-1 flex items-center justify-center">
                  {/* Stars */}
                  <div className="flex text-[#FFC960]">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-sm"><FontAwesomeIcon icon={faStar} /></span>
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-[#000000CC]">{workout.rating} ratings</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutSection;
