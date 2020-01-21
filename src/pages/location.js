import React from "react";
import cx from "classnames";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

import commonCss from "@/styles/common.scss";
import Jumbotron from "@/molecules/jumbotron";
import Diagonal from "@/atoms/Diagonal";
import CenteredMouse from "@/molecules/centered-mouse";

import styles from "./location.scss";

const PlaceMap = withScriptjs(
  withGoogleMap(() => {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 37.505904, lng: 127.040694 }}
      >
        <Marker position={{ lat: 37.505904, lng: 127.040694 }} />
      </GoogleMap>
    );
  })
);

PlaceMap.defaultProps = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoG06rKP4D5jeuQC50WM3VaSGi8YLx9fE&callback=initMap",
  loadingElement: <div />,
  containerElement: <div className={styles.placeMapContainer} />,
  mapElement: <div className={styles.placeMap} />
};

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
        <Diagonal className={styles.mainDiagonal}>
          <div className={styles.mainBg} />
        </Diagonal>
        <div className={cx(commonCss.sectionBox)}>
          <table className={commonCss.table}>
            <tbody>
              <tr>
                <th>일시</th>
                <td>2020-02-15 오후 1:00</td>
              </tr>
              <tr>
                <th>장소</th>
                <td>
                  서울특별시 강남구 역삼동 662-14 에이비티타워 2F{" "}
                  <strong>코스토리 스페이스 세미나실</strong>
                </td>
              </tr>
              <tr>
                <th>문의</th>
                <td>pgconferencereserve@gmail.com</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.map}>
            <PlaceMap />
          </div>
        </div>
      </div>
    </>
  );
};
