import './Timespan.styles.scss';

import { observer } from 'mobx-react-lite';
import useMobx from '@stores/root-store';
import TimelineSwiper from '@streetcode/TimelineBlock/TimelineSwiper/TimelineSwiper.component';

const TimelineTimespan = () => {
    const { timelineItemStore } = useMobx();
    const { getYearsArray, setActiveYear } = timelineItemStore;

    const middleIdx = Math.round((getYearsArray.length - 1) / 2);

    return (
        <div className="timeSpanContainer">
            <div className="timelineYearTicksContainer">
                <TimelineSwiper
                    slidesPerView={7}
                    initialSlide={middleIdx}
                    spaceBetween={240}
                    slideToClickedSlide
                >
                    {getYearsArray.map((year, idx) => (
                        <div
                            key={idx}
                            className="timelineYearTick"
                            onClick={() => setActiveYear(year)}
                        >
                            <span>{year}</span>
                        </div>
                    ))}
                </TimelineSwiper>
            </div>
        </div>
    );
};

export default observer(TimelineTimespan);
