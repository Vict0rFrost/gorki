import styles from '../Map/map.module.css';
import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl, Clusterer, RoutePanel } from "react-yandex-maps";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from '../../redux/actionCreators/cardsCreator';

import FloatingActionButtons from '../AddButton/AddButton';

function YaMap() {
  const [formActive, setFormActive] = useState(false)
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.info.allCards);
  const [coordinates, setCoordinates] = useState([])

  useEffect(() => {
    dispatch(getAllCards())
    setCoordinates(cards)
  }, [dispatch])

  const mapData = {
    center: [55.75205778864498,37.62277964550782],
    zoom: 11,
  };

  return (
    
    <div className={styles.content}>
      <YMaps >
        <Map 
          defaultState={mapData} 
          className={styles.map}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {/* <RoutePanel options={{ float: 'right' }} /> */}
          {/* <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: true,
              balloonPanelMaxMapArea: Infinity
            }}
          > */}

            {coordinates?.map((el) => 
              <Placemark
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]} 
                geometry={[el.adress.latitude, el.adress.longitude]} 
                key={el.index}
                properties={{
                  item: el.index,
                  balloonContentHeader: `Горка на ${el.adress.latitude}, ${el.adress.longitude}`,
                  balloonContentBody: `<img src="http://localhost:3001/images/${el.image}" className={styles.img}>`,
                  balloonContentFooter: `Оценило людей: ${el.likes.length}`
                }}
                options={{
                  balloonPanelMaxMapArea: Infinity
                }}
              />
            )}

          {/* </Clusterer> */}
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />

        </Map>
      </YMaps>
      <FloatingActionButtons active={formActive} setActive={setFormActive}/>
    </div>

  );
}

export default YaMap;
