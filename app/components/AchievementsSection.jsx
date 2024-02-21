import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "40+",
  },
  {
    metric: "Users",
    value: "10K+",
  },
  {
    metric: "Clients",
    value: "5+",
  },
  {
    metric: "Years",
    value: "2+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h1 className="text-white text-4xl font-bold">
              {achievement.value}
            </h1>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;