import React from "react";
import cx from "classnames";

import commonCss from "@/styles/common.scss";
import Jumbotron from "@/molecules/jumbotron";
import CenteredMouse from "@/molecules/centered-mouse";

import styles from "./location.scss";

export default () => {
  return (
    <>
      <Jumbotron
        title="오시는 길"
        subTitle="LOCATION"
        bgClassName={styles.jumbotronBg}
        description={
          <>
            행사에 지원한 참여자라면 <br />
            누구든 자유로이 행사장을 방문할 수 있습니다.
          </>
        }
      />
      <CenteredMouse />
      <div className={cx(commonCss.section)}>
        <div className={cx(commonCss.sectionBox)}>
          <table className={commonCss.table}>
            <tbody>
              <tr>
                <th>일시</th>
                <td>2019-02-15 오후 2:30</td>
              </tr>
              <tr>
                <th>장소</th>
                <td>
                  서울특별시 강남구 역삼동 662-14 에이비티타워( 상세 정보
                  추가예정 )
                </td>
              </tr>
              <tr>
                <th>문의</th>
                <td>pgconferencereserve@gmail.com</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.map}>
            <img src={require("@/assets/images/map.jpg")} />
            <div className={styles.mapDescription}>
              위 이미지는 구글 API가 준비되기 전까지 임시로 지정한 이미지입니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
