import classes from "./Main.module.css";

import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.css" ;
import moment from 'moment';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';

import {useState} from "react";

function Main(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    registerLocale('ko', ko)


    const CustomInput = ({ value, onClick }) => (
        <div className={classes.datePickerButton} onClick={onClick}>
            {value}
        </div>
    );

    return (
        <div className={classes.box}>
            <div className={classes.banner}>
                <div className={classes.bannerBox}>
                    <div className={classes.bbSpanBox}>
                        <span>백테스팅(BackTesting)</span>
                        <label>자산운용사에서는 늘 사용하는 프로그램이지만 저희와 같은 일반투자자는 프로그램이 없어서 하기힘든 작업중에 하나입니다. </label>
                        <label>바로 내 포트폴리오로 과거의 데이터를 가지고 실험을 했을경우 어떻게 될것인가 하는 내용을 데이터로 나타내주는 것을 말합니다. </label>
                    </div>
                    <div className={classes.bbClickBox}>
                        <span>지금 시도하기</span>
                    </div>
                    <img className={classes.imgOne} src={"images/test1.png"}/>
                    <img className={classes.imgTwo} src={"images/test1.png"}/>
                    <img className={classes.imgThree} src={"images/test1.png"}/>
                    <img className={classes.imgFour} src={"images/test1.png"}/>
                    <img className={classes.imgFive} src={"images/test1.png"}/>
                </div>
            </div>
            <div className={classes.format}>
                <div className={classes.left}>
                    <div className={classes.dateBox}>
                        <span>지정 날짜</span>
                        <div className={classes.dbBox}>
                            <div className={classes.dataPickerBox}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="yyyy년 MM월 dd일"
                                    locale="ko"
                                    maxDate={new Date()}
                                    customInput={<CustomInput />}
                                />
                            </div>
                            <div className={classes.dataPickerGap}>
                                <span> - </span>
                            </div>
                            <div className={classes.dataPickerBox}>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="yyyy년 MM월 dd일"
                                    maxDate={new Date()}
                                    locale="ko"
                                    customInput={<CustomInput />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.scoreBox}>
                        <span>테스트 원금</span>
                        <div className={classes.sbBox}>
                            <input type={"number"}/>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.addBox}>
                        <span>종목 추가</span>
                        <div className={classes.abBox}>
                            <div className={classes.abbContent}></div>
                            <div className={classes.plusDiv}>
                                <img />
                            </div>
                        </div>
                    </div>
                    <div className={classes.addedBox}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
