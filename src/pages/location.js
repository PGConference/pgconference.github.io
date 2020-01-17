import React from "react";

import Jumbotron from "@/molecules/jumbotron";

export default () => {
  return (
    <>
      <Jumbotron
        title="오시는 길"
        subTitle="LOCATION"
        description={
          <>
            행사에 지원한 참여자라면 <br />
            누구든 자유로이 행사장을 방문할 수 있습니다.
          </>
        }
      />
    </>
  );
};
